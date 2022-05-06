const ejs = require("ejs");
const path = require("path");
const transporter = require("./transporter");

const sendMail = async ({ name, email }) => {
  const requiredPath = path.join(__dirname, "../views/content.ejs");

  const data = await ejs.renderFile(requiredPath, {
    name: name,
  });

  var mainOptions = {
    from: '"Your mail" abc@example.com',
    to: email,
    subject: "Related Topic",
    html: data,
  };

  await transporter.sendMail(mainOptions);
};

module.exports = sendMail;