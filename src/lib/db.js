import mysql from "serverless-mysql";

const db = mysql({
  config: {
    host: process.env.DB_HOST,
    database: "test",
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
});

console.log("user", process.env.DB_USERNAME);

export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}
