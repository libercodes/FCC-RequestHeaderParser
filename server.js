const express = require("express");
const app = express();

app.use("/api/whoami", (req, res, next) => {
  let language = req.headers["accept-language"];
  let sys = req.headers["user-agent"];
  let ip = req.header("x-forwarded-for") || req.connection.remoteAddress;
  console.log(language);
  console.log(sys);
  console.log(ip);

  res.json({
    ipaddress: ip,
    language: language,
    software: sys
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
