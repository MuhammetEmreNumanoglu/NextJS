import Category from "../../../models/Category";
import dbConnect from "../../../util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch {
      res.status(500).json({ message: "Server error" });
    }
  }

  if (method === "POST") {
    try {
      const newCategory = await Category.create(req.body);
      res.status(200).json(newCategory);
    } catch {
      res.status(500).json({ message: "Server error" });
    }
  }
};

export default handler;
