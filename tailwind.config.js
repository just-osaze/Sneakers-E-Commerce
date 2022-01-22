module.exports = {
  content: ["./public/*.{html, js}",
          ],
  theme: {
    screens: {
      'xs': {'min': '375px'},
      'sm': {'min': '640px'},
      'md': {'min': '768px'},
      'lg': {'min':'1024px'} 
    },
    extend: {},
  },
  plugins: [],
}
