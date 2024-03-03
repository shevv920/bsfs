import { Injectable } from '@nestjs/common';
import { PrismaService } from '~/modules/prisma/prisma.service';

@Injectable()
export class AuthRepo {
  constructor(
    private readonly prismaService: PrismaService,
  ) {
  }
  async findOneByUserId(userId: string) {
    return this.prismaService.auth.findUnique({ where: { userId } });
  }
}



