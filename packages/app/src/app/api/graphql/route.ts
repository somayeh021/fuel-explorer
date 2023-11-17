import { createExecutor, createSchema } from '@fuel-explorer/graphql';
import { createYoga } from 'graphql-yoga';

const url = process.env.FUEL_PROVIDER_URL!;
const executor = createExecutor(async ({ body }) => {
  return fetch(url, {
    body,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
});

const schema = createSchema(executor);
const { handleRequest } = createYoga({
  schema,
  batching: true,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: {
    Response,
    Request,
  },
  context: () => ({ url }),
});

export {
  handleRequest as GET,
  handleRequest as POST,
  handleRequest as OPTIONS,
};