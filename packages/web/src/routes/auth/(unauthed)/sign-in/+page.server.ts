import { type Actions, redirect } from '@sveltejs/kit';
import { apiClient } from '$lib/shared/api-client';
import { AxiosError } from 'axios';

export const actions: Actions = {
  default: async ( { request, cookies }) => {
    const body = await request.formData();
    try {
      const { data } = await apiClient.post('/account/sign-in', { email: body.get('email'), password: body.get('password') });

      if (data.token) {
        cookies.set('token', data.token, { domain: 'localhost', path: '/', secure: false, httpOnly: false });
        return redirect(303, body.get('redirectTo')?.toString() || '/app');
      }
      return {};
    } catch (e) {
      if (e instanceof AxiosError) {
        return { error: e.code };
      }
      return { error: 'Invalid email or password' };
    }
  }
}
