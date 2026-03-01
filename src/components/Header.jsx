import { useEffect } from 'react'
const Header = () => {
   
   const toggleLightDark = () => {
      document.body.classList.toggle('dark')
   }

   const divStyle = 'relative w-9 h-5 bg-cyan-700 inset-shadow-xs rounded-full peer-focus:ring-4 peer-focus:ring-slate-300 peer-checked:bg-cyan-800 dark:peer-focus:ring-cyan-950 after:absolute after:content-[\'\'] after:bg-mist-100 after:h-4 after:w-4 after:rounded-full after:top-0.5 after:start-0.5 after:transition-all peer-checked:after:translate-x-full '

   useEffect(() => {
      document.getElementById('toggle').addEventListener('change', toggleLightDark)
   })

   return (
      <div className='flex justify-end h-6'>
         <label className='flex items-center cursor-pointer'>
            <input id='toggle' type='checkbox' className='sr-only peer'/>
            <div className={`temp-toggle ${divStyle}`} />
            <span className="select-none ms-3 text-sm font-medium text-heading">Toggle Dark/Light</span>
         </label>
      </div>
   )
}

export default Header