const mariadb = require("mariadb");
const uuid = require("uuid");

const pool = mariadb.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

module.exports.loginUser = async userData => {
  try {
    const result = await pool.query(
      "SELECT 1 FROM registrierung WHERE email = ? AND password = ?;",
      [userData.email, userData.password]
    );

    if (result.length == 1) {
      const token = uuid.v4();
      await pool.query("INSERT INTO tokens (email, token) VALUES (?, ?)", [
        userData.email,
        token
      ]);
      return token;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return;
  }
};
module.exports.logoutUser = async token => {
  const result = await pool.query("DELETE FROM tokens WHERE token = ?", token);
  return result.affectedRows == 1;
};
