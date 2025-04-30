import { PrismaBetterSQLite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "./generated/prisma/index.js";

const adapter = new PrismaBetterSQLite3({
  url: process.env.ADAPTER_DATABASE_URL as string,
});

const database = new PrismaClient({ adapter });

const userCount = await database.user.count();

console.log(`Finished counting users: ${userCount} users present`);
console.log(`Finished counting users: ${userCount} users present`);

await database.user.create({
  data: {
    name: "John",
    email: `john-${new Date().toISOString()}@foo.baz`,
  },
});

await database.user.create({
  data: {
    name: "John",
    email: `john-${new Date().toISOString()}@foo.baz`,
  },
});
