/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    backgroundColor: {
      'dark-primary': '#1a1a1a',
      'dark-secondary': '#2d2d2d',
    },
    textColor: {
      'dark-primary': '#ffffff',
      'dark-secondary': '#a3a3a3',
    }
  },
};
export const plugins = [];