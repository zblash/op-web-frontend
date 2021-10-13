import { StaticColorType } from './static-types';
import themeOptions from './statics/theme.js';

const allThemes = Object.keys(themeOptions.themes);
const theme = (() => {
  const themeFromLocalStorage = localStorage.getItem('theme');
  if (!themeFromLocalStorage) {
    return themeOptions.defaultTheme;
  }
  if (allThemes.includes(themeFromLocalStorage)) {
    return themeFromLocalStorage;
  }

  return themeOptions.defaultTheme;
})();
const colors: StaticColorType = themeOptions.themes[theme];

function setTheme(t: string) {
  if (allThemes.includes(t)) {
    localStorage.setItem('theme', t);
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }
}

export { colors, setTheme };
