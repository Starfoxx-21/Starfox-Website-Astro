import { ui, defaultLang } from './ui';

export function getLangFromUrl(url) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // Remove trailing slash
  const relativePath = url.pathname.replace(base, ''); // Remove base path
  const [, lang] = relativePath.split('/');
  if (lang in ui) return lang;
  return defaultLang;
}

export function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}