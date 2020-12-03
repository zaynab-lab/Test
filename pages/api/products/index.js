import dbConnection from "../../../util/dbConnection";
import Product from "../../../models/product";

dbConnection();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const products = await Product.find({});
        return res.status(200).json({ success: true, data: products });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
  }
};
