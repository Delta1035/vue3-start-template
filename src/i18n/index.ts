import { getBrowserLang } from '@/utils';
import { createI18n } from 'vue-i18n';

import en from './messages/en';
import zh from './messages/zh';

const i18n = createI18n({
  // Use Composition API, Set to false
  allowComposition: true,
  legacy: false,
  locale: getBrowserLang(),
  messages: {
    zh,
    en
  }
});

export default i18n;
