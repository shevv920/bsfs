import { redirect, type ServerLoadEvent } from '@sveltejs/kit';

export const load = async ({ cookies, url, parent }: ServerLoadEvent) => {
  if (!cookies.get('token')) {
    return redirect(303, `/auth/sign-in?redirectTo=${url.pathname}`);
  }

  const { user } = await parent();

  if (!user) {
    return redirect(303, `/auth/sign-in?redirectTo=${url.pathname}`);
  }
}
