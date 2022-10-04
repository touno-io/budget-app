/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
  theme: {
    extend: {
      colors: {
        "smoke-900": "rgba(0, 0, 0, 0.9)",
        "smoke-800": "rgba(0, 0, 0, 0.75)",
        "smoke-600": "rgba(0, 0, 0, 0.6)",
        smoke: "rgba(0, 0, 0, 0.5)",
        "smoke-400": "rgba(0, 0, 0, 0.4)",
        "smoke-200": "rgba(0, 0, 0, 0.25)",
        "smoke-100": "rgba(0, 0, 0, 0.1)",
      },
    },
  }
}
