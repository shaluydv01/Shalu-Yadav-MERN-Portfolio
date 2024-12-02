import { User } from "../Model/User.js";

export const contact = async (req, res) => {
  try {
    const response = req.body;
    await User.create(response);
    return res.status(200).json({ message: "message send successfully !" });
  } catch (error) {
    return res.status(500).json({ message: "message not delivered !" });
  }
};

