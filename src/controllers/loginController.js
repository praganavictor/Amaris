const LoginModel = require("../models/Login");

module.exports = {
  async register(req, res) {
    const { email } = req.body;
    console.log("req.body", req.body);

    try {
      if (await LoginModel.findOne({ email })) {
        return res.status(400).json({ error: "User already exists" });
      }

      console.log("req.body", req.body);
      const user = await LoginModel.create(req.body);

      return res.json({ user });
    } catch (err) {
      return res.status(400).json({ error: "User registration failed" });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await LoginModel.findOne({ email });

      if (!user) {
        return res.status(400).json({ error: "User not found" });
      }

      if (!(await user.compareHash(password))) {
        return res.status(400).json({ error: "Invalid password" });
      }

      return res.json({
        user,
        token: user.generateToken(),
      });
    } catch (err) {
      return res.status(400).json({ error: "User authentication failed" });
    }
  },
};
