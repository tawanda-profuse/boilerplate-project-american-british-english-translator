const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

const TRANS_DIR = Object.freeze({ UK2US: "british-to-american", US2UK: "american-to-british" });
const britishToAmericanSpelling = Object.keys(americanToBritishSpelling).reduce((acc, el) => {
  acc[americanToBritishSpelling[el]] = el;
  return acc;
}, {});
const britishToAmericanTitles = Object.keys(americanToBritishTitles).reduce((acc, el) => {
  acc[americanToBritishTitles[el]] = el;
  return acc;
}, {});

class Translator {
  constructor() {
    this.translate = this.translate.bind(this);
    this.translateUK2US = this.translateUK2US.bind(this);
    this.translateUS2UK = this.translateUS2UK.bind(this);
  }

  translate(text, trans_dir) {
    switch (trans_dir) {
      case TRANS_DIR.US2UK:
        return this.translateUS2UK(text);
      case TRANS_DIR.UK2US:
        return this.translateUK2US(text);
      default:
        break;
    }
  }
  translateUS2UK(text) {
    for (const word in americanOnly) {
      const regexExpression = "(?<![\\w-])" + word + "(?![\\w-])";
      const regex = new RegExp(regexExpression, "gi");
      text = text.replace(regex, `<span class="highlight">${americanOnly[word]}</span>`);
    }
    for (const word in americanToBritishSpelling) {
      const regexExpression = "(?<![\\w-])" + word + "(?![\\w-])";
      const regex = new RegExp(regexExpression, "gi");
      text = text.replace(
        regex,
        `<span class="highlight">${americanToBritishSpelling[word]}</span>`
      );
    }
    for (const word in americanToBritishTitles) {
      const regexExpression = `${word}`;
      const regex = new RegExp(regexExpression, "gi");
      text = text.replace(regex, `<span class="highlight">${americanToBritishTitles[word]}</span>`);
    }
    if (/(\d{1,2}):(\d{1,2})/.test(text))
      text = text.replace(/(\d{1,2}):(\d{1,2})/g, '<span class="highlight">$1.$2</span>');
    return text;
  }

  translateUK2US(text) {
    for (const word in britishOnly) {
      const regexExpression = "(?<![\\w-])" + word + "(?![\\w-])";
      const regex = new RegExp(regexExpression, "gi");
      text = text.replace(regex, `<span class="highlight">${britishOnly[word]}</span>`);
    }
    for (const word in britishToAmericanSpelling) {
      const regexExpression = "(?<![\\w-])" + word + "(?![\\w-])";
      const regex = new RegExp(regexExpression, "gi");
      text = text.replace(
        regex,
        `<span class="highlight">${britishToAmericanSpelling[word]}</span>`
      );
    }
    for (const word in britishToAmericanTitles) {
      const regexExpression = `${word}`;
      const regex = new RegExp(regexExpression, "gi");
      text = text.replace(regex, `<span class="highlight">${britishToAmericanTitles[word]}</span>`);
    }
    if (/(\d{1,2})\.(\d{1,2})/.test(text))
      text = text.replace(/(\d{1,2})\.(\d{1,2})/g, '<span class="highlight">$1:$2</span>');
    return text;
  }
}

const reverseDictionary = (dictionary) => {
  return Object.keys(dictionary).reduce((acc, el) => {
    acc[americanToBritishSpelling[el]] = el;
    return acc;
  }, {});
};
module.exports = { Translator, TRANS_DIR };
