// Platform: CodeWars
// Difficulty: 8 kyu
// Problem: Fake Binary

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// My own solution
function fakeBin(x) {
  let result = "";

  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      result += "0";
    } else {
      result += "1";
    }
  }
  return result;
}

// Better solution
function fakeBin(x) {
  let result = "";

  for (const char in x) {
    result += char < 5 ? "0" : "1";
  }
  return result;
}
