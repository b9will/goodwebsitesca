import { onRequestPost, onRequestOptions } from './functions/api/chat.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/api/chat') {
      if (request.method === 'OPTIONS') return onRequestOptions();
      if (request.method === 'POST') return onRequestPost({ request, env, ctx });
    }

    return env.ASSETS.fetch(request);
  },
};
