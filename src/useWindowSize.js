import { useState, useEffect } from 'react';

const debounce = (fn, ms) => {
   let timer;
   return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), ms)
   }
}

export const useWindowSize = () => {
   const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight
   })

   const [minView, setMinView] = useState(windowSize.width < 747 || false)

   useEffect(() => {
      const handleResize = () => setWindowSize({
         width: window.innerWidth,
         height: window.innerHeight
      })
      // const handleResize = debounce(() => {
      //    setWindowSize({
      //       width: window.innerWidth,
      //       height: window.innerHeight
      //    })
      // }, 500)

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
   }, []);

   useEffect(() => {
      setMinView(windowSize.width < 747)
   }, [windowSize])

   return minView;
}