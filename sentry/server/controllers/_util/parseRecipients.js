module.exports = string => {
  string = string.replace(/ /g, "");
  string = string.replace(/\n/g, "");
  if (string.charAt(string.length - 1) === ";") {
    string = string.slice(0, string.length - 1);
  }
  string = string.split(";");
  return ["broc@compliancemonitoringsystems.com"];
  return string;
};
