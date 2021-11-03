const chai = require("chai");
const assert = chai.assert;

const { Translator, TRANS_DIR } = require("../components/translator.js");

suite("Unit Tests", () => {
  suite("American to British Translations", () => {
    test("American to British test one", () => {
      const translator = new Translator();
      const text = "Mangoes are my favorite fruit.";
      const expectedResult = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
      assert.equal(translator.translate(text, TRANS_DIR.US2UK), expectedResult);
    });
    test("American to British test two", () => {
      const translator = new Translator();
      const text = "I ate yogurt for breakfast.";
      const expectedResult = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
      assert.equal(translator.translate(text, TRANS_DIR.US2UK), expectedResult);
    });
    test("American to British test three", () => {
      const translator = new Translator();
      const text = "We had a party at my friend's condo.";
      const expectedResult = 'We had a party at my friend\'s <span class="highlight">flat</span>.';
      assert.equal(translator.translate(text, TRANS_DIR.US2UK), expectedResult);
    });
    test("American to British test four", () => {
      const translator = new Translator();
      const text = "Can you toss this in the trashcan for me?";
      const expectedResult = 'Can you toss this in the <span class="highlight">bin</span> for me?';
      assert.equal(translator.translate(text, TRANS_DIR.US2UK), expectedResult);
    });
    test("American to British test five", () => {
      const translator = new Translator();
      const text = "The parking lot was full.";
      const expectedResult = 'The <span class="highlight">car park</span> was full.';
      assert.equal(translator.translate(text, TRANS_DIR.US2UK), expectedResult);
    });
    test("American to British test six", () => {
      const translator = new Translator();
      const text = "Like a high tech Rube Goldberg machine.";
      const expectedResult =
        'Like a high tech <span class="highlight">Heath Robinson device</span>.';
      assert.equal(translator.translate(text, TRANS_DIR.US2UK), expectedResult);
    });
    test("American to British test seven", () => {
      const translator = new Translator();
      const text = "To play hooky means to skip class or work.";
      const expectedResult =
        'To <span class="highlight">bunk off</span> means to skip class or work.';
      assert.equal(translator.translate(text, TRANS_DIR.US2UK), expectedResult);
    });
    test("American to British test eight", () => {
      const translator = new Translator();
      const text = "No Mr. Bond, I expect you to die.";
      const expectedResult = 'No <span class="highlight">Mr</span> Bond, I expect you to die.';
      assert.equal(translator.translate(text, TRANS_DIR.US2UK), expectedResult);
    });
    test("American to British test nine", () => {
      const translator = new Translator();
      const text = "Dr. Grosh will see you now.";
      const expectedResult = '<span class="highlight">Dr</span> Grosh will see you now.';
      assert.equal(translator.translate(text, TRANS_DIR.US2UK), expectedResult);
    });
    test("American to British test ten", () => {
      const translator = new Translator();
      const text = "Lunch is at 12:15 today.";
      const expectedResult = 'Lunch is at <span class="highlight">12.15</span> today.';
      assert.equal(translator.translate(text, TRANS_DIR.US2UK), expectedResult);
    });
  });
  suite("British to American Translations", () => {
    test("British to American test one", () => {
      const translator = new Translator();
      const text = "We watched the footie match for a while.";
      const expectedResult =
        'We watched the <span class="highlight">soccer</span> match for a while.';
      assert.equal(translator.translate(text, TRANS_DIR.UK2US), expectedResult);
    });
    test("British to American test two", () => {
      const translator = new Translator();
      const text = "We watched the footie match for a while.";
      const expectedResult =
        'We watched the <span class="highlight">soccer</span> match for a while.';
      assert.equal(translator.translate(text, TRANS_DIR.UK2US), expectedResult);
    });
    test("American to British test three", () => {
      const translator = new Translator();
      const text = "Paracetamol takes up to an hour to work.";
      const expectedResult = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
      assert.equal(translator.translate(text, TRANS_DIR.UK2US), expectedResult);
    });
    test("American to British test four", () => {
      const translator = new Translator();
      const text = "First, caramelise the onions.";
      const expectedResult = 'First, <span class="highlight">caramelize</span> the onions.';
      assert.equal(translator.translate(text, TRANS_DIR.UK2US), expectedResult);
    });
    test("American to British test five", () => {
      const translator = new Translator();
      const text = "I spent the bank holiday at the funfair.";
      const expectedResult =
        'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
      assert.equal(translator.translate(text, TRANS_DIR.UK2US), expectedResult);
    });
    test("American to British test six", () => {
      const translator = new Translator();
      const text = "I had a bicky then went to the chippy.";
      const expectedResult =
        'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
      assert.equal(translator.translate(text, TRANS_DIR.UK2US), expectedResult);
    });
    test("American to British test seven", () => {
      const translator = new Translator();
      const text = "I've just got bits and bobs in my bum bag.";
      const expectedResult =
        'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.';
      assert.equal(translator.translate(text, TRANS_DIR.UK2US), expectedResult);
    });
    test("American to British test eight", () => {
      const translator = new Translator();
      const text = "Paracetamol takes up to an hour to work.";
      const expectedResult = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
      assert.equal(translator.translate(text, TRANS_DIR.UK2US), expectedResult);
    });
    test("American to British test nine", () => {
      const translator = new Translator();
      const text = "Prof Joyner of King's College, London.";
      const expectedResult =
        '<span class="highlight">Prof.</span> Joyner of King\'s College, London.';
      assert.equal(translator.translate(text, TRANS_DIR.UK2US), expectedResult);
    });
    test("American to British test ten", () => {
      const translator = new Translator();
      const text = "Tea time is usually around 4 or 4.30.";
      const expectedResult = 'Tea time is usually around 4 or <span class="highlight">4:30</span>.';
      assert.equal(translator.translate(text, TRANS_DIR.UK2US), expectedResult);
    });
  });
  suite("Highlighting translations", () => {
    test("Highlighting Translation test one", () => {
      const translator = new Translator();
      const text = "Mangoes are my favorite fruit.";
      const expectedResult = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
      assert.equal(translator.translate(text, TRANS_DIR.US2UK), expectedResult);
    });
    test("Highlighting Translation test two", () => {
      const translator = new Translator();
      const text = "I ate yogurt for breakfast.";
      const expectedResult = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
      assert.equal(translator.translate(text, TRANS_DIR.US2UK), expectedResult);
    });
    test("Highlighting Translation test three", () => {
      const translator = new Translator();
      const text = "We watched the footie match for a while.";
      const expectedResult =
        'We watched the <span class="highlight">soccer</span> match for a while.';
      assert.equal(translator.translate(text, TRANS_DIR.UK2US), expectedResult);
    });
    test("Highlighting Translation test four", () => {
      const translator = new Translator();
      const text = "Paracetamol takes up to an hour to work.";
      const expectedResult = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
      assert.equal(translator.translate(text, TRANS_DIR.UK2US), expectedResult);
    });
  });
});
