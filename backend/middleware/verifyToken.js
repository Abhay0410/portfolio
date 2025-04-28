const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ error: "Access Denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;

    // Ensure only ADMIN can perform certain actions
    if (req.user.username !== process.env.ADMIN_USERNAME) {
      return res.status(403).json({ error: "Unauthorized: Admin access required" });
    }

    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid Token" });
  }
};

module.exports = verifyToken;
