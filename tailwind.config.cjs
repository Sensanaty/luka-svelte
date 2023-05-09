const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: ['class', '.light'],
  theme: {
    extend: {
      colors: {
        'bg': 'var(--bg)',
        'bg-highlight': 'var(--bg-highlight)',
        'cl': 'var(--cl)',
        'accent': "#FF9F1C",
        'ruby': "#EF3054",
      },
    },
  },
  plugins: [],
};

module.exports = config;
