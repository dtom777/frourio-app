import fastifyCookie from '@fastify/cookie';
import fastifyCors from '@fastify/cors';
import fastifyCsrf from '@fastify/csrf-protection';
import fastifyJwt from '@fastify/jwt';
import fastify from 'fastify';

import server from './$server';

const PORT = parseInt(process.env.PORT || '8888', 10);
const HOST = process.env.HOST || '0.0.0.0';

const app = fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: true,
        ignore: 'pid,hostname,reqId,responseTime,req,res',
        messageFormat: '{msg} [id={reqId} {req.method} {req.url}]',
      },
    },
  },
});

app.register(fastifyCors, {
  origin: true,
  credentials: true,
});
app.register(fastifyJwt, {
  secret: 'mSSS9Zrd',
  cookie: {
    cookieName: 'access_token',
    signed: false,
  },
});
app.register(fastifyCookie);
app.register(fastifyCsrf, {
  cookieOpts: {
    httpOnly: true,
    sameSite: 'none',
    secure: true,
    path: '/',
  },
});

server(app, { basePath: '/api' });

app.listen({ port: PORT, host: HOST });
