import { redirect, type ServerLoadEvent } from '@sveltejs/kit';

export const load = async ({ cookies }: ServerLoadEvent) => {
  cookies.delete('authToken', { domain: 'localhost', path: '/' });
  return redirect(303, `/auth/sign-in`);
};
