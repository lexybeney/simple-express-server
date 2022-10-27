module.exports.random = (len) => {
  const random = Math.floor(Math.random() * len);
  return `${random}${Date.now()}`;
};

module.exports.getUniqueId = (len) => {
  let uniqueId = "";
  let chars = "ABCDEFGHIJUKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
  let charsLength = chars.length;

  for (let i = 0; i < len; i++) {
    uniqueId += chars.charAt(Math.floor(Math.random() * charsLength));
  }

  return (uniqueId += Date.now());
};
