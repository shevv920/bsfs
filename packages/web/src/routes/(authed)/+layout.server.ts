import { redirect, type ServerLoadEvent } from '@sveltejs/kit';

export const load = async ({ cookies, url }: ServerLoadEvent) => {
  if (!cookies.get('authToken')) {
    return redirect(303, `/auth/sign-in?redirectTo=${url.pathname}`);
  }

  try {
    const user = await fetch('http://localhost:3000/users/me');
    const json = await user.json();

    return {
      user: json,
    };
  } catch (e) {
    return redirect(303, `/auth/sign-in?redirectTo=${url.pathname}`);
  }
}
