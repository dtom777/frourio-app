import fastifyCors from '@fastify/cors';
import fastify from 'fastify';

import server from './$server';

const app = fastify();

app.register(fastifyCors, {});

server(app);

app.listen({ port: 8888, host: '0.0.0.0' });
