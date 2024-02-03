import { Hono } from 'hono';
import { getCookie } from 'hono/cookie';


const users = new Hono();

users.get('/me', (c) => {
  const authToken = getCookie(c, 'authToken');
  return c.json({
    name: 'John Doe',
  });
});

export default users;
