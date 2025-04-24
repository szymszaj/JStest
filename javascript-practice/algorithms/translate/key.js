const buildTranslationUrl = (text, sourceLang, targetLang) => {
  return `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
    text
  )}&langpair=${sourceLang}|${targetLang}`;
};

export default buildTranslationUrl;
