import { defineController } from './$relay';

import { getLike, toggleLike } from '$/features/likes/api';

export default defineController(() => ({
  get: ({ query: { userId, postId } }) => {
    const result = getLike(userId, postId);

    return result.match(
      () => ({ status: 200 }),
      (error) => {
        throw error;
      },
    );
  },
  post: ({ body: { userId, postId } }) => {
    const result = toggleLike(userId, postId);

    return result.match(
      () => ({ status: 200 }),
      (error) => {
        throw error;
      },
    );
  },
}));
