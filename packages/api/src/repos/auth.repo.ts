import { Auth, PrismaClient } from "@prisma/client";


export interface AuthRepo {
  findByUserIdAndPassword(userId: string, password: string): Promise<string>;
}

export class AuthRepoLive implements AuthRepo {
  constructor(
    private readonly db: PrismaClient,
  ) {
  }

  findByUserIdAndPassword(userId: string, password: string): Promise<Auth | null> {
    return this.db.auth.findUnique({
      where: {
        userId,
        password,
      },
    });
  }
}
