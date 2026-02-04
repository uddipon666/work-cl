function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// ✅ Average (গড়) function
function average(a, b) {
  return (a + b) / 2;
}

module.exports = { 
  add, 
  subtract, 
  multiply, 
  divide, 
  average 
};
