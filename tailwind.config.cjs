const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: ['class', '.light'],
  theme: {
    extend: {
      colors: {
        'bg': '#212121',
        'bg-highlight': '#323031',
        'cl': '#FDFDFD',
        'accent': "#FF9F1C",
        'ruby': "#EF3054",

        'bg-light': '#EDE7D9',
        'bg-highlight-light': '#FDFDFD',
        'cl-light': '#222222'
      },
    },
  },
  plugins: [],
};

module.exports = config;
