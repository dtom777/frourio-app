import { User } from '@prisma/client';

import { EditingProfile } from '$/types/profiles';

import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  post: {
    reqBody: { userId: User['id']; dto: EditingProfile };
  };
}>;
