import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();

  await prisma.product.createMany({
    data: sampleData.products,
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
