import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import de from './enum/i18n/de';
import en from './enum/i18n/en';
import frCa from './enum/i18n/fr-ca';
import it from './enum/i18n/it';
import jpn from './enum/i18n/jpn';
import ko from './enum/i18n/ko';
import spa from './enum/i18n/spa';
import zhTw from './enum/i18n/zh-tw';
import zh from './enum/i18n/zh';

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translations: en
    },
    de: {
      translations: de
    },
    frCa: {
      translations: frCa
    },
    it: {
      translations: it
    },
    jpn: {
      translations: jpn
    },
    ko: {
      translations: ko
    },
    spa: {
      translations: spa
    },
    zhTw: {
      translations: zhTw
    },
    zh: {
      translations: zh
    }
  },
  fallbackLng: 'en',
  debug: true,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ','
  },

  react: {
    wait: true
  }
});

export default i18n;
