module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://images.ctfassets.net/nfc1w9qpk6sl/3jyLsbjyYsheLrUEwI64Hh/cfc525ee3e41e0c993865c292c400d18/What-is-Onnit-Banner-2.jpg?q=40&fm=jpg&fl=progressive')"
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    }
  }
}