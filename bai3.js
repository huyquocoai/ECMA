function convertString() {
  var inputString = document.getElementById("inputString").value;

  // Remove special characters and spaces, then convert to camelCase
  var convertedString = inputString
    .replace(/[^a-zA-Z0-9]/g, " ")
    .split(" ")
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");

  document.getElementById("output").textContent = convertedString;
}
