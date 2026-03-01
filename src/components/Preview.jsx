const Preview = ({id, open, image, title}) => {

   return (
      <div id='Preview' className='preview-container flex flex-col justify-start bg-[#dce1e2] dark:bg-gray-800 gap-2 flex-1'>
         <div onClick={() => open(id)} className='group flex flex-col flex-1 relative overflow-hidden cursor-pointer'>
            <div className='preview-image-container'>
               <img src={image} />
            </div>
            <div className='preview-overlay-container absolute top-0 bottom-0 flex w-full overflow-hidden' />
            <div className='preview-text-container absolute top-0 bottom-0 flex w-full justify-center overflow-hidden'>
               <div className='flex justify-center relative'>
               <div className='text-white absolute flex'>{title}</div>
               </div>
            </div>
         </div>
      </div>
   )
};

export default Preview;