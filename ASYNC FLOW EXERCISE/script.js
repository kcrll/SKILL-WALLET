console.log("\n=== STEP 1: Synchronous Execution ===");
console.log("A");
console.log("B");
console.log("C");

console.log("\n=== STEP 2: Basic setTimeout ===");
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

console.log("\n=== STEP 3: Basic Promise ===");
console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

console.log("\n=== STEP 4: Promise vs setTimeout ===");
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

console.log("\n=== STEP 5: Async/Await ===");
async function test() {
  console.log("1");
  await Promise.resolve();
  console.log("2");
}

console.log("3");
test();
console.log("4");

console.log("\n=== STEP 6: Predict the Output ===");
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

console.log("\n=== BONUS: Complex Event Loop ===");

console.log("0");

setTimeout(() => {
  console.log("1");
  Promise.resolve().then(() => console.log("1.1"));
}, 0);

Promise.resolve().then(() => {
  console.log("2");
  setTimeout(() => console.log("2.1"), 0);
});

setTimeout(() => {
  console.log("3");
}, 0);

console.log("4");