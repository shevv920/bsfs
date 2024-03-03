import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
  await prisma.$transaction(async (tx) => {
    console.log(11)
    const user = await tx.user.create({
      data: {
        name: 'Test User',
        email: 'test+1@testemail.com',
        auth: {
          create: {
            password: await Bun.password.hash('password'),
          }
        }
      }
    });
  });
}

await main()
  .catch(e => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

