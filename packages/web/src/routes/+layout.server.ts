import type { ServerLoadEvent } from '@sveltejs/kit';


export const load = async ({ cookies }: ServerLoadEvent) => {
  if (!cookies.get('authToken')) {
    return { user: null };
  }

  try {
    const user = await fetch('http://localhost:3000/users/me');
    const json = await user.json();

    return {
      user: json,
    };
  } catch (e) {
    return { user: null };
  }
}
