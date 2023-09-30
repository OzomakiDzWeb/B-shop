export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     fontFamily: {
      'Poppins': "Poppins"
    },
    colors:{
      'green1':'#006400',
      'green2':'	#228B22',
      'green3':'#7CFC00',
      'red1':'	#FF0000',
      'red2':'	#DC143C',
      'red3':'	#FA8072',
      'gray-darck':'#505658',
      'gray-lghit':'#9CA2A4',
      'gray-extrai':'#DDE3E6',
      },
     fontSize:{
      'small':['14px',{
        lineHeight:'20px',
        fontWeight:'400'
      }],
      'tit-h1':['65px',{
        lineHeight:'71.5px',
        fontWeight:'400'
      }],
     
    },
   
    extend: {},
  },
  plugins: [],
}
