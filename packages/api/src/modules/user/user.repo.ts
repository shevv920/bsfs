import { Injectable } from '@nestjs/common';
import { PrismaService } from '~/modules/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserRepo {
  constructor(
    private readonly prismaService: PrismaService,
  ) {
  }
  async findOneByEmail(email: string): Promise<User | null> {
    return this.prismaService.user.findUnique({ where: { email, isDeleted: false } });
  }
}
