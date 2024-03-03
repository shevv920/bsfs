import type { ServerLoadEvent } from '@sveltejs/kit';
import { apiClient } from '$lib/shared/api-client';

export const load = async ({ cookies }: ServerLoadEvent) => {
  if (!cookies.get('token')) {
    return { user: null };
  }

  try {
    const { data: user } = await apiClient.get('/users/me');

    return {
      user,
    };
  } catch (e) {
    return { user: null };
  }
}
