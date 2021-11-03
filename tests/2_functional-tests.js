const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let { Translator, TRANS_DIR } = require("../components/translator.js");
const { characterize } = require("../components/american-to-british-spelling.js");

suite("Functional Tests", () => {
  test("Translation with text and locale fields", (done) => {
    const postData = { text: "Lunch is at 12:15 today.", locale: TRANS_DIR.US2UK };
    const expectedData = {
      text: "Lunch is at 12:15 today.",
      translation: 'Lunch is at <span class="highlight">12.15</span> today.',
    };
    chai
      .request(server)
      .post("/api/translate")
      .set("content-type", "application/x-www-form-urlencoded")
      .send(postData)
      .end((err, res) => {
        const resData = res.body;
        assert.deepEqual(resData, expectedData);
        done();
      });
  });
  test("Translation with text and invalid locale ", (done) => {
    const postData = { text: "Lunch is at 12:15 today.", locale: "someRandomLocale" };
    const expectedData = {
      error: "Invalid value for locale field",
    };
    chai
      .request(server)
      .post("/api/translate")
      .set("content-type", "application/x-www-form-urlencoded")
      .send(postData)
      .end((err, res) => {
        const resData = res.body;
        assert.deepEqual(resData, expectedData);
        done();
      });
  });
  test("Translation with missing text field", (done) => {
    const postData = { locale: TRANS_DIR.US2UK };
    const expectedData = {
      error: "Required field(s) missing",
    };
    chai
      .request(server)
      .post("/api/translate")
      .set("content-type", "application/x-www-form-urlencoded")
      .send(postData)
      .end((err, res) => {
        const resData = res.body;
        assert.deepEqual(resData, expectedData);
        done();
      });
  });
  test("Translation with missing locale field", (done) => {
    const postData = { text: "Lunch is at 12:15 today." };
    const expectedData = {
      error: "Required field(s) missing",
    };
    chai
      .request(server)
      .post("/api/translate")
      .set("content-type", "application/x-www-form-urlencoded")
      .send(postData)
      .end((err, res) => {
        const resData = res.body;
        assert.deepEqual(resData, expectedData);
        done();
      });
  });
  test("Translation with empty text text field", (done) => {
    const postData = { text: "", locale: TRANS_DIR.US2UK };
    const expectedData = {
      error: "No text to translate",
    };
    chai
      .request(server)
      .post("/api/translate")
      .set("content-type", "application/x-www-form-urlencoded")
      .send(postData)
      .end((err, res) => {
        const resData = res.body;
        assert.deepEqual(resData, expectedData);
        done();
      });
  });
  test("Translation with text that needs no translation", (done) => {
    const postData = { text: "Lunch is at 12:15 today.", locale: TRANS_DIR.UK2US };
    const expectedData = {
      translation: "Everything looks good to me!",
      text: "Lunch is at 12:15 today.",
    };
    chai
      .request(server)
      .post("/api/translate")
      .set("content-type", "application/x-www-form-urlencoded")
      .send(postData)
      .end((err, res) => {
        const resData = res.body;
        assert.deepEqual(resData, expectedData);
        done();
      });
  });
});
