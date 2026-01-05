// Platform: CodeWars
// Difficulty: 8 kyu
// Problem: Return to Sanity

// This function should return an object, but it's not doing what's intended. What's wrong?

/*
function mystery() {
  var results =
    {sanity: 'Hello'};
  return
    results;
}
*/

// My own solution
function mystery() {
  return { sanity: "Hello" };
}

// The real problem is that a semicolon is automatically inserted after the return, so the object is never returned
function mystery() {
  var results = { sanity: "Hello" };
  return results;
}
