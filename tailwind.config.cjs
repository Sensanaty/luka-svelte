const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: ['class', '.light'],
  theme: {
    extend: {
      colors: {
        'bg': 'var(--bg)',
        'highlight': 'var(--highlight)',
        'cl': 'var(--cl)',
        'accent': "var(--accent)",
        'ruby': "var(--ruby)",
      },
    },
  },
  plugins: [],
};

module.exports = config;
