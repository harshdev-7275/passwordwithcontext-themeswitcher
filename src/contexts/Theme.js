import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
  isDarkMode: 'false',
  toggleDarkMode: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
