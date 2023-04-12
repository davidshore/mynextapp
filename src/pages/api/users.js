// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import excuteQuery from "../../lib/db";

export default async function handler(req, res) {
  const sql = {
    query: "SELECT * from users",
  };

  const result = await excuteQuery(sql);
  res.status(200).json(result);
}
