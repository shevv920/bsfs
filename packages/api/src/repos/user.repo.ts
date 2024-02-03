import { PrismaClient, User } from '@prisma/client';
import { UserId } from '~/types';

export interface UserRepo {
  findById(id: UserId): Promise<User>;
}

export class UserRepoLive implements UserRepo {
  constructor(private readonly db: PrismaClient) {
  }

  async findById(id: UserId): Promise<User> {
    return this.db.user.findUnique({ where: { id } })
  }
}
