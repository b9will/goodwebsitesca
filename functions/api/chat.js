const SYSTEM_PROMPT = `You are a friendly intake assistant for Good Websites — a web design subscription service built specifically for naturopathic doctors in Canada. You help potential clients figure out which plan is right for them.

GOOD WEBSITES PLANS:
- Launch ($149/mo): A single, high-converting landing page. Best for NDs just starting out or those who've been relying on word-of-mouth and want to test a web presence.
- Practice ($299/mo): 5–7 pages (home, services, about, blog, contact). Best for established solo practices that want to be found on Google and look professional.
- Authority ($499/mo): 50+ pages — condition landing pages, city SEO pages, ongoing blog. Best for clinics wanting to dominate local search and attract patients for specific conditions.

WHAT YOU NEED TO FIND OUT (one question at a time):
1. Their first name and practice name
2. Their current website situation (no site, outdated site, decent site not performing)
3. What's not working or what they want to achieve
4. Practice size and what kinds of patients they want to attract
5. Whether they use Jane App or other booking software
6. Their timeline and urgency

CONVERSATION RULES:
- Keep your responses to 2–3 sentences maximum
- Ask only ONE question per message
- Be warm, direct, and conversational — no corporate filler
- Never say "Great!", "Absolutely!", "Of course!" or similar hollow affirmations
- Do not summarize what they said back to them
- Move the conversation forward efficiently

ENDING THE CONVERSATION:
After 5–7 exchanges when you have enough information:
- Write 2–3 sentences summarizing what you've learned about their situation
- Name ONE specific plan and give a single sentence explaining why it fits them
- End your message with exactly this token on its own line: [SHOW_CTAS]

Example ending:
"You're running a solo practice in Toronto, you have no web presence, and you want patients coming in for hormonal health. The Practice plan is the right fit — it gives you the pages you need to rank locally and convert visitors into bookings.
[SHOW_CTAS]"

Start by greeting the visitor warmly and asking for their first name.`;

async function sendSummaryEmail(apiKey, summary, type) {
  const isHot = type === 'signup';
  const subject = isHot
    ? '🔥 Hot lead — ready to sign up now'
    : '📋 New intake — wants to schedule a call';

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Good Websites <onboarding@resend.dev>',
      to: ['hello@goodwebsites.ca'],
      subject,
      html: `
        <div style="font-family:sans-serif;max-width:640px;margin:0 auto;color:#1a1a1a">
          <h2 style="border-bottom:3px solid #f7dc41;padding-bottom:12px">${subject}</h2>
          <p style="color:#555;margin-bottom:20px">A naturopath just completed the intake chatbot on goodwebsites.ca.</p>
          <div style="background:#fffde8;border:2px solid #f7dc41;padding:14px 18px;border-radius:6px;margin-bottom:24px">
            <strong>Next step:</strong> ${isHot
              ? "They clicked <em>I'm ready to go</em> — heading to the signup page now. Strike while the iron is hot."
              : 'They want to talk first — reach out within one business day to book a call.'}
          </div>
          <h3 style="border-bottom:2px solid #e5e3dc;padding-bottom:8px">Conversation transcript</h3>
          <div style="background:#f8f7f2;padding:16px 20px;border-radius:6px;white-space:pre-wrap;font-size:14px;line-height:1.7;color:#333">${summary}</div>
        </div>
      `,
    }),
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response('Bad request', { status: 400 });
  }

  const { messages, isDone, type, summary } = body;

  // Completion path — send email only
  if (isDone) {
    try {
      await sendSummaryEmail(env.RESEND_API_KEY, summary, type);
      return new Response(JSON.stringify({ ok: true }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    } catch (e) {
      // Don't block the user if email fails
      return new Response(JSON.stringify({ ok: true, emailError: e.message }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }
  }

  // Chat path — stream from Claude
  if (!env.ANTHROPIC_API_KEY) {
    return new Response(JSON.stringify({ error: 'ANTHROPIC_API_KEY not set' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 400,
      stream: true,
      system: SYSTEM_PROMPT,
      messages: messages || [],
    }),
  });

  if (!claudeRes.ok) {
    const errText = await claudeRes.text();
    return new Response(JSON.stringify({ error: errText }), {
      status: claudeRes.status,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  return new Response(claudeRes.body, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
