module.exports = function check(str, bracketsConfig) {
  let arr = new Array();
  let length = str.length;
  let one = length % 2;

  if (one == 1) return false;
  else {
    for (let i = 0; i <= str.length - 1; i++) {
      switch (str[i]) {
        case "{":
          arr.push("}");
          break;
        case "(":
          arr.push(")");
          break;
        case "[":
          arr.push("]");
          break;
        case "1":
          arr.push("2");
          break;
        case "3":
          arr.push("4");
          break;
        case "5":
          arr.push("6");
          break;
        case "|":
          if (arr[arr.length - 1] == "|") {
            arr.pop();
            break;
          }
          arr.push("|");
          break;
        case "7":
          if (arr[arr.length - 1] == "7") {
            arr.pop();
            break;
          }
          arr.push("7");
          break;
        case "8":
          if (arr[arr.length - 1] == "8") {
            arr.pop();
            break;
          }
          arr.push("8");
          break;
        default:
          if (arr.length == 0 || str[i] != arr[arr.length - 1]) {
            return false;
          }
          arr.pop();
      }
    }
    if (arr.length == 0) {
      return true;
    } else {
      return false;
    }
  }
};
