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

export function getI18n(langParam?: string | URL): { lang: Lang; messages: any } {
  let langStr = langParam as string;
  if (langParam instanceof URL) {
    const [, pathLang] = langParam.pathname.split('/');
    langStr = pathLang;
  }
  
  const l = (langStr && (languagesList as readonly string[]).includes(langStr) ? langStr : defaultLang) as Lang;
  return { lang: l, messages: messagesMap[l] };
}
