import type { Load } from "@sveltejs/kit";

export const load: Load = (params) => {
  return { url: params.url.pathname };
};

export const prerender = true;
export const ssr = false;

