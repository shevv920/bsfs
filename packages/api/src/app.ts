import { Hono } from 'hono';
import { logger } from 'hono/logger'
import health from './routes/health';
import { showRoutes } from 'hono/dev';

const app = new Hono();
app.use('*', logger());

app.route('/health', health);
showRoutes(app, { colorize: true })
export default app;
