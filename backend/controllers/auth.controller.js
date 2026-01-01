const register = (req, res) => {
  const { email, password, name } = req.body;
  console.log("register attempt:", { email, name });
  res.status(201).json({ message: "register OK", usre: { email, name } });
};

const login = (req, res) => {
  const { email, password } = req.body;
  console.log("login attempt", { email });
  res.status(201).json({ massage: "logiin OK", token: "fake-jwt-token" });
};

module.exports = { register, login };
