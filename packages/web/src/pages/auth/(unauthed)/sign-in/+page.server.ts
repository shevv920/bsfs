import { type Actions, redirect } from '@sveltejs/kit';

export const actions: Actions = {
  default: async ( { request, cookies }) => {
    const body = await request.formData();
    const result = await fetch('http://localhost:3000/auth/sign-in', {
      method: 'POST',
      body,
    });

    const json = await result.json();

    if (json.token) {

      cookies.set('token', json.token, { domain: 'localhost', path: '/', secure: false, httpOnly: false });

      return redirect(303, body.get('redirectTo')?.toString() || '/app');
    }
  }
}
