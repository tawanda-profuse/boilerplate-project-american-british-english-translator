"use strict";

const { Translator, TRANS_DIR } = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    const text = req.body.text;
    const trans_dir = req.body.locale;
    if (text === undefined || trans_dir === undefined)
      return res.json({ error: "Required field(s) missing" });
    if (text === "") return res.json({ error: "No text to translate" });
    if (trans_dir !== TRANS_DIR.US2UK && trans_dir !== TRANS_DIR.UK2US)
      return res.json({ error: "Invalid value for locale field" });

    const translation = translator.translate(text, trans_dir);
    if (translation === text)
      return res.json({ text, translation: "Everything looks good to me!" });
    return res.json({ text, translation });
  });
};
