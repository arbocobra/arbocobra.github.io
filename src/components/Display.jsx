import { Fragment, useState, useEffect, useRef } from 'react';
import { useWindowSize } from '../useWindowSize'
import clsx from 'clsx';

const Display = ({content, close}) => {
   const {id, desc, imageA, imageB, title, url, git, imgDisplay} = content
   const minView = useWindowSize();

   // const [displayText, setDisplayText] = useState(true);
   // const [displayImages, setDisplayImages] = useState(!minView);

   // 0 = all | 1 = text not image | 2 = image not text
   const [display, setDisplay] = useState(minView ? 1 : 0)

   // const toggleText = () => setDisplayText((prev) => !prev);
   // const toggleImage = () => setDisplayImages((prev) => !prev);
   const textRef = useRef(null)
   const imageRef = useRef(null)
   const thumbRef = useRef(null)

   const textBlockStyle = clsx({'flex flex-col gap-3 max-h-250':display < 2, 'max-h-0':display == 2})

   // Add toggle display listeners on mobile load
   useEffect(() => {
      const toggleDisplay = () => {
         if (minView) setDisplay((prev) => {
            if (prev == 1) return 2;
            else if (prev ==2) return 1;
         })
      }

      const textLink = textRef.current
      const imageLink = imageRef.current
      const thumbLink = thumbRef.current
      if (textLink) textLink.addEventListener('click', toggleDisplay);
      if (imageLink) imageLink.addEventListener('click', toggleDisplay);
      if (thumbLink) {
         thumbLink.firstChild.addEventListener('click', toggleDisplay);
         thumbLink.lastChild.addEventListener('click', toggleDisplay);
      }

      return () => {
         if (textLink) textLink.removeEventListener('click', toggleDisplay);
         if (imageLink) imageLink.removeEventListener('click', toggleDisplay);
         if (thumbLink) {
            thumbLink.firstChild.removeEventListener('click', toggleDisplay);
            thumbLink.lastChild.removeEventListener('click', toggleDisplay);
         }
      }

   }, [minView])

   useEffect(() => {
      if (minView) setDisplay(1)
      else setDisplay(0)
   }, [minView])

   if (content) return (
      <div id='Display' className='flex flex-col w-full h-screen absolute top-0 bg-background/60 overflow-hidden'>
         <div className='flex-1 flex justify-center items-center animate-slide-up'>
            <div className='display-container flex flex-col bg-mist-100 dark:bg-gray-800'>
               <TopRow close={close} />
               <div className='display-body-container flex p-4 gap-4 min-h-0'>
                  <div className='display-text-container flex flex-col gap-4'>
                     <Title title={title} url={url} />
                     { minView && <ToggleDisplay display={display} textRef={textRef} imageRef={imageRef} />}
                     {/* <div className={clsx({'flex flex-col gap-3 delay-500':displayText, 'hidden':!displayText})}> */}
                     <div className={textBlockStyle}>
                        <TextBlock desc={desc} id={id} />
                        { minView ? 
                           <ThumbnailImages thumbRef={thumbRef} imageA={imageA} imageB={imageB} /> 
                           : <Links url={url} git={git} /> }
                     </div>
                  </div>
                  <ImageDisplay display={display} imageA={imageA} imageB={imageB} imgDisplay={imgDisplay} />
                  { minView && <Links url={url} git={git} />}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Display;

const TopRow = ({close}) => {
   return (
      <div className='flex justify-end w-full'>
         <div onClick={close} className='flex justify-center items-center cursor-pointer text-[28px]/7 size-15'> X </div>
      </div>
   )
}

const Title = ({title, url}) => {
   return (
      <div className='flex justify-start w-full text-2xl sm:text-3xl'>
         <a className='no-underline' href={url} target='_blank'>{title}</a>
      </div>
   )
}

const ToggleDisplay = ({display, textRef, imageRef}) => {
   return (
      <div className='flex gap-5'>
      {/* <div className='sm:hidden flex gap-5'> */}
         <div ref={textRef} className={clsx('underline p-2 text-lg/tight bg-mist-200 dark:bg-gray-700', {'font-bold': display == 1})}>Description</div>
         <div ref={imageRef} className={clsx('underline p-2 text-lg/tight bg-mist-200 dark:bg-gray-700', {'font-bold': display == 2})}>Images</div>
      </div>
   )
}

const TextBlock = ({desc, id}) => {
   return desc.map((el,i) => ( <Fragment key={`${id}-desc-${i}`}>{el}</Fragment>))
}

const Links = ({url, git}) => {
   return (
      <div className='flex gap-3'>
         <span>(<a href={url} target='_blank'>Link</a>)</span>
         <span>(<a href={git} target='_blank'>Git</a>)</span>
      </div>
   )
}

const ThumbnailImages = ({thumbRef, imageA, imageB}) => {
   return (
      <div ref={thumbRef} className='flex gap-4'>
         <div className='p-2 bg-mist-200 dark:bg-gray-700'><img className='h-20' src={imageA}/></div>
         <div className='p-2 bg-mist-200 dark:bg-gray-700'><img className='h-20' src={imageB}/></div>
      </div>
   )
}

const ImageDisplay = ({display, imageA, imageB, imgDisplay}) => {
   // const imageBlockHeight = window.innerHeight * .95 - 90
   const imageBlockHeightMin = window.innerHeight * .95 - 250

   const imageBlockStyle = clsx('display-image-container', 'flex flex-col gap-4', {'flex-col': imgDisplay == 'column', 'flex-row': imgDisplay == 'row'}, {'items-start': display == 2 && imgDisplay == 'column', 'items-stretch': display == 2 && imgDisplay == 'row', 'items-end': display == 0})
   const maxHeight = display == 1 ? 0 : display == 2 ? imageBlockHeightMin : 1000;

   return (
      <div style={{maxHeight}} className={imageBlockStyle}>
         <div className={clsx({'shrink min-h-0': imgDisplay == 'column', 'flex': imgDisplay == 'row'})}><img className={clsx({'max-h-full': imgDisplay == 'column'})} src={imageA}/></div>
         <div className={clsx({'shrink min-h-0': imgDisplay == 'column', 'flex': imgDisplay == 'row'})}><img className={clsx({'max-h-full': imgDisplay == 'column'})} src={imageB}/></div>
      </div>
   )
}

// const MobileLinks = ({url, git}) => {
//    return (
//       <div className='block sm:hidden'>
//          <a href={url} target='_blank'>(Link)</a>&emsp;
//          <a href={git} target='_blank'>(Git)</a>
//       </div>
//    )
// }

