import dbConnection from "../../../util/dbConnection";
import Category from "../../../models/category";

dbConnection();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const categories = await Category.find({});
        return res.status(200).json({ success: true, data: categories });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
  }
};
