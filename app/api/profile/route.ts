import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }
    const data = req.body;
  res.status(200).json(data);
}
