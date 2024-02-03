import { redirect, type ServerLoadEvent } from '@sveltejs/kit';

export const load = async ({ cookies }: ServerLoadEvent) => {
  if (!cookies.get('authToken')) {
    return;
  }

  try {
    await fetch('http://localhost:3000/users/me');
  } catch (e) {
    cookies.delete('authToken', { domain: 'localhost', path: '/' });
    return;
  }
  return redirect(303, `/`);
}
