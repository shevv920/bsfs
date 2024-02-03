import { Hono } from 'hono';
import { logger } from 'hono/logger'
import { showRoutes } from 'hono/dev';
import health from '~/controllers/health';
import users from '~/controllers/users';

const app = new Hono();
app.use('*', logger());

app.route('/health', health);
app.route('/users', users);

showRoutes(app, { colorize: true });

export default app;
