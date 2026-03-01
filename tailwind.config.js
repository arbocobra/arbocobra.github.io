import plugin from 'tailwindcss/plugin';

export default {
   plugins: [
      plugin(({ addVariant }) => {
         addVariant('dark', '&:where(.dark, .dark *)');
      })
   ]
}