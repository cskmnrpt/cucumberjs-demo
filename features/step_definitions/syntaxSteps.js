const fs = require("fs");
const path = require("path");
const { Given, When, Then } = require("@cucumber/cucumber");

Given("I have a step", function () {
  console.log("Test passed");
});

Given("I have a step with attachment", async function () {
  const imagePath = path.join(__dirname, "../../tasktide.png");
  const imageBuffer = fs.readFileSync(imagePath);

  // ✅ Pass the raw buffer (not a base64 string)
  await this.attach(imageBuffer, { mediaType: "image/png" });

  // Optional: confirm attachment via text
  await this.attach("Attached PNG using Buffer", { mediaType: "text/plain" });
});

  // this.attach("I'm an attachment", "text/plain");


When("I do something", function () {
  console.log("Test passed");
});

Then("I expect something to happen", function () {
  console.log("Test passed");
});

Then("I fail", function () {
  throw new Error("Test fails");
});

When("I fail", function () {
  throw new Error("Test fails");
});

Given("I have a table with {int} rows", function (rows) {
  console.log(`Table with ${rows} rows`);
});

Then("the table should have {int} rows", function (rows) {
  console.log(`Table with ${rows} rows`);
  this.attach("image/png;base64", "image/png;base64", "image/png;base64");
});
