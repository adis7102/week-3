function balikString(string) {
  var temp = "";

  for (i = string.length - 1; i >= 0; i--) {
    temp += string[i];
  }
  return temp;
}
console.log(balikString("Hello World!"));
