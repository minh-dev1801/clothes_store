import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();

  await prisma.product.createMany({
    data: sampleData.products,
  });

  await prisma.user.createMany({
    data: sampleData.users,
  });

  console.log("Seed data inserted successfully!");
}

main()
  .catch((e) => {
    console.error("Error seeding data: ", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
