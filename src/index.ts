import { PrismaClient } from "./generated/prisma/index.js";

const database = new PrismaClient();

const userCount = await database.user.count();

console.log(`Finished counting users: ${userCount} users present`);

await database.user.create({
  data: {
    name: "John",
    email: `john-${new Date().toISOString()}@foo.baz`,
  },
});
