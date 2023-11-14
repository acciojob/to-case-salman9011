function toCase(text) {
  // Check if the input string is empty
  if (text === "") {
    return "-";
  }

  // Convert the string to lowercase and uppercase, then concatenate with "-"
  const result = `${text.toLowerCase()}-${text.toUpperCase()}`;

  return result;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
