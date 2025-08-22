const authMiddleware = (req, res, next) => {
  // Implement your authentication logic here
  if (req.method === "GET") {
    next();
    return;
  }

  let isLoggedIn = true; // Example condition, replace with actual logic
  if (!isLoggedIn) {
    res.status(403).send("Unauthorized");
    return;
  }
  next();
};

export default authMiddleware;
