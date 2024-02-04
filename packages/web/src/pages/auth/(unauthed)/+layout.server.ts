import { redirect, type ServerLoadEvent } from '@sveltejs/kit';

export const load = async ({ cookies }: ServerLoadEvent) => {
  if (!cookies.get('token')) {
    return;
  }

  try {
    await fetch('http://localhost:3000/users/me');
  } catch (e) {
    cookies.delete('token', { domain: 'localhost', path: '/' });
    return;
  }
  return redirect(303, `/`);
}
