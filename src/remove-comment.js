const commentReg = /(\/\/.*\n|\/\*(.|\n)+?\*\/)/gm;

module.exports = function(souce) {
  return souce.replace(commentReg, "");
};
