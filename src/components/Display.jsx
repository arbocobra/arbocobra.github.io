import { Fragment, useState, useEffect, useRef } from 'react';
import clsx from 'clsx';


const Display = ({content, close}) => {
   const {id, desc, imageA, imageB, title, url, git} = content

   const [displayText, setDisplayText] = useState(true);
   const [displayImages, setDisplayImages] = useState(
      !window.matchMedia('(max-width: 639px)').matches
   );
   const toggleText = () => setDisplayText((prev) => !prev);
   const toggleImage = () => setDisplayImages((prev) => !prev);
   const textRef = useRef(null)
   const imageRef = useRef(null)

   useEffect(() => {
      const media = window.matchMedia('(max-width: 639px)')
      if (media.matches) {
         const textLink = textRef.current
         const imageLink = imageRef.current
         if (textLink) textLink.addEventListener('click', toggleText)
         if (imageLink) imageLink.addEventListener('click', toggleImage)
         
         return () => {
            if (textLink) textLink.removeEventListener('click', toggleText)
            if (imageLink) imageLink.removeEventListener('click', toggleImage)
         }
      }
   }, [])

   useEffect(() => {
     const media = window.matchMedia('(max-width: 639px)')
     if (media.matches) {
      displayText ? setDisplayImages(false) : setDisplayImages(true)
     }
   },[displayText])

   useEffect(() => {
     const media = window.matchMedia('(max-width: 639px)')
     if (media.matches) {
      displayImages ? setDisplayText(false) : setDisplayText(true)
     }
   },[displayImages])

   if (content) return (
      <div id='Display' className='flex flex-col w-full h-screen absolute top-0 bg-background/60 overflow-hidden'>
         <div className='flex-1 flex justify-center items-center animate-slide-up'>
            <div className='display-container flex flex-col bg-mist-100 dark:bg-gray-800'>
               <div className='flex justify-end w-full'>
                  <div onClick={close} className='flex justify-center items-center cursor-pointer text-[28px]/7 size-15'> X </div>
               </div>
               <div className='display-body-container flex p-4 gap-4'>
                  <div className='display-text-container flex flex-col gap-4'>
                     <div className='flex justify-start w-full text-3xl'>
                        <a className='no-underline' href={url} target='_blank'>{title}</a>
                     </div>
                     <div className='sm:hidden flex gap-5'>
                        <div ref={textRef} className={clsx('underline p-2 text-lg/tight bg-mist-200 dark:bg-gray-700', {'font-bold': displayText})}>Description</div>
                        <div ref={imageRef} className={clsx('underline p-2 text-lg/tight bg-mist-200 dark:bg-gray-700', {'font-bold': displayImages})}>Images</div>
                     </div>
                     <div className={clsx({'flex flex-col gap-3 delay-500':displayText, 'hidden':!displayText})}>
                        {desc.map((el,i) => ( <Fragment key={`${id}-desc-${i}`}>{el}</Fragment>))}
                        <div className='hidden sm:block'>
                           <a href={url} target='_blank'>(Link)</a>&emsp;
                           <a href={git} target='_blank'>(Git)</a>
                        </div>
                     </div>
                  </div>
                  <div className={clsx('display-image-container', {'flex flex-col items-end gap-4 delay-500':displayImages, 'hidden':!displayImages},)}>
                     <div className='shrink min-h-0'><img className='max-h-full' src={imageA}/></div>
                     <div className='shrink min-h-0'><img className='max-h-full' src={imageB}/></div>
                  </div>
                  <div className='block sm:hidden'>
                     <a href={url} target='_blank'>(Link)</a>&emsp;
                     <a href={git} target='_blank'>(Git)</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Display;