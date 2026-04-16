import jwt from "jsonwebtoken";

export const getToken = async (userId) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
    console.log("Generated JWT Token:", token); // ✅ Debug log
    return token;
  } catch (error) {
    console.error("Error generating JWT token:", error);
    throw error;
  }
}