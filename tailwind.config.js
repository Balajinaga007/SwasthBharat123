/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Noto Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        // Primary brand colors
        'ta-cream': '#F8F6F0',     // Warm cream background
        'ta-beige': '#E8E2D5',     // Light beige accents
        'ta-brown': '#8B6F47',     // Warm brown for text/accents
        'ta-dark-brown': '#5D4037', // Darker brown for headings
        
        // Neutral colors
        'ta-white': '#FFFFFF',      // Pure white
        'ta-off-white': '#FAFAFA',  // Slightly off white
        'ta-gray-light': '#F5F5F5', // Light gray backgrounds
        'ta-gray': '#9E9E9E',       // Medium gray for text
        'ta-gray-dark': '#424242',  // Dark gray for body text
        'ta-black': '#212121',      // Near black for headings
        
        // Accent colors
        'ta-sage': '#A8B5A0',       // Soft sage green
        'ta-terracotta': '#C17B5A', // Warm terracotta
        'ta-navy': '#2C3E50',       // Deep navy blue
        //app
        "app-brand":"#2D8686",
        'white': '#FFFFFF',
        "app-brand2":"#162F6A",
        saffron: '#FF9933',
        blue: {
          900: '#003087',
        },
      }
    },
    // padding: {
    //   "p-standard-lg": "6rem",
    //    "9-scale":"0.563rem",
    //    "11-scale": "0.688rem",
    //   "12-scale": "0.75rem",
    //   "13-scale": "0.8125rem",
    //   "14-scale": "0.75rem",
    //   "15-scale": "0.938rem",
    //   "16-scale": "1rem",
    //   "17-scale": "1.063rem",
    //   "18-scale": "1.125rem",
    //   "20-scale": "1.25rem",
    //   "20-scale-lg": "1.25rem",
    //   "21-scale": "1.313rem",
    //   "22-scale": "1.375rem",
    //   "23-scale": "1.438rem",
    //   "24-scale": "1.5rem",
    //   "25-scale": "1.563rem",
    //   "26-scale": "1.625rem",
    //   "29-scale": "1.8125rem",
    //   "30-scale": "1.875rem",
    //   "31-scale": "1.9375rem",
    //   "32-scale": "2rem",
    //   "32-scale-scale": "2rem",
    //   "34-scale": "2.125rem",
    //   "35-scale": "2.188rem",
    //   "37-scale": "2.312rem",
    //   "38-scale": "2.375rem",
    //   "39-scale": "2.438rem",
    //   "40-scale": "2.5rem",
    //   "43-scale": "2.688rem",
    //   "47-scale": "2.938rem",
    //   "48-scale": "3rem",
    //   "54-scale":"3.375rem",
    //   "76-scale": "4.75rem",
    //   "79-scale": "4.935rem",
    //   "90-scale-lg": "5.625rem",
    //   "100-scale-lg": "6.25rem",
    //   "113-scale": "7.063rem",
    //   "154-scale": "9.625rem",

  

    // },
    fontSize: {
       // Tailwind defaults
       'xs': '0.75rem',
       'sm': '0.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
       '3xl': '1.875rem',
       '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '3.75rem',
       '7xl': '4.5rem',
       '8xl': '6rem',
       '9xl': '8rem',

      "10-scale": "0.625rem",
      "8-scale": "0.5rem",
      "11-scale": "0.69rem",

      "48-scale": "3rem",
      "24-scale": "1.5rem",
      "16-scale": "1rem",
      "22-scale": "1.38rem",
      "18-scale": "1.125rem",
      "20-scale": "1.25rem",
      "14-scale": "0.875rem",
      "15-scale": "0.938rem",
      "32-scale": "2rem",
      "36-scale": "2.25rem",
      "28-scale": "1.75rem",
      "50-scale": "3.125rem",
      "54-scale": "3.375rem",
      "12-scale": "0.75rem",
      "40-scale": "2.5rem",
      "44-scale": "2.75rem",
      "36-scale-lg": "2.25rem",
      "24-scale-lg": "1.5rem",
      "16-scale-lg": "1rem",
      "18-scale-lg": "1.125rem",
      "14-scale-lg": "0.875rem",

      
      "28-scale-lg": "1.75rem",
      "60-scale-lg": "3.75rem",
      "56-scale-lg": "3.5rem",
      "12-scale-lg": "0.75rem",
      "40-scale-lg": "2.5rem",
      "47-scale-lg": "2.94rem",
      "32-scale-lg": "2rem",

      "11-scale-lg": "0.69rem",

      "10-scale-lg": "0.625rem",
      "13-scale-lg": "0.8125rem",
      "20-scale-lg": "1.25rem",
      "22-scale-lg": "1.375rem",
      "64-scale-lg": "4rem",
      "72-scale-lg": "4.5rem",
      "88-scale-lg": "5.5rem",
      "30-scale-lg": "1.875rem",

    }
  },
  plugins: [],
}

