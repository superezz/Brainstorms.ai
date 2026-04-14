
import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
  try {
    let {token} = req.cookies
    if(!token) return res.status(400).json({message: "Token not found"})
      let verifyToken = jwt.verify(token, process.env.JWT_SECRET)
      if(!verifyToken) return res.status(400).json({message: "User doesn't have valid token"})
      req.userId = verifyToken.userId
      next()
  } catch (error) {
    return res.status(500).json({message: `is Auth Error ${error.message}`})
  }
}

export default isAuth;