import { upsertProfile } from '$/service/profiles';

import { defineController } from './$relay';

export default defineController(() => ({
  post: ({ body: { userId, dto } }) => {
    const result = upsertProfile(userId, dto);

    return result.match(
      () => ({ status: 200 }),
      (error) => {
        throw error;
      },
    );
  },
}));