const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const sequelize = require("./config/db");
require("dotenv").config();
const adminAuthRoutes = require("./routes/AdminAuthRoutes/AdminRoutes");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser()); // Cookie parser-க்கு
app.use(express.urlencoded({ extended: true }));

//Immediate call function

(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL connected successfully!");
    await sequelize.sync({
      alter: true,
    });
    console.log("✅ Tables synced successfully!");
  } catch (error) {
    console.error("❌ DB Errors:", error);
  }
})();

app.use("/api/auth", adminAuthRoutes);

const PORT = process.env.PORT || 5176;

app.listen(PORT, () => {
  console.log(`Server Connected ${PORT}`);
});
