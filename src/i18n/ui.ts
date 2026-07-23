import lo from './lo.json';
import en from './en.json';
import zh from './zh.json';

export const defaultLang = 'lo';
export const languagesList = ['lo', 'en', 'zh'] as const;
export type Lang = (typeof languagesList)[number];

export const languages: Record<Lang, string> = {
  lo: 'ລາວ',
  en: 'English',
  zh: '中文',
};

const messagesMap: Record<Lang, any> = { lo, en, zh };

export const htmlLang: Record<Lang, string> = {
  lo: 'lo',
  en: 'en',
  zh: 'zh-CN',
};

export function getI18n(lang?: string): { lang: Lang; messages: any } {
  const l = (lang && (languagesList as readonly string[]).includes(lang) ? lang : defaultLang) as Lang;
  return { lang: l, messages: messagesMap[l] };
}
