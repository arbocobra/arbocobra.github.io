import './App.css';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/16/solid';
import Footer from './components/Footer';
import Preview from './components/Preview';
import Header from './components/Header';
import Display from './components/Display';
import images from './assets/image-index';
import { characterDesc, mpDesc, verbsDesc, minesweeperDesc } from './assets/description-text';

const App = () => {
   const [toggleOpen, setToggleOpen] = useState(false);
   const [display, setDisplay] = useState(false);
   const [displayObj, setDisplayObj] = useState(null);

   const toggleAccordion = () => setToggleOpen((prev) => !prev)

   const { mpLoad, mpView, charLoad, charView, minesLoad, minesView, verbsPreview, verbsLoad, verbsView, carbonView, senseView, mobilityView, equityView } = images;

   const details = {
      character: {
         id: 'character',
         title: 'Table-Top Game Character Builder',
         desc: characterDesc,
         url: 'https://character-builder-next.vercel.app/',
         git: 'https://github.com/arbocobra/character-builder-next',
         imageA: charLoad,
         imageB: charView,
         imgDisplay: 'column'
      },
      mp: {
         id: 'mp',
         title: 'That My MP??',
         desc: mpDesc,
         url: 'https://that-my-mp.vercel.app/',
         git: 'https://github.com/arbocobra/that-my-mp',
         imageA: mpLoad,
         imageB: mpView,
         imgDisplay: 'column'
      },
      verbs: {
         id: 'verbs',
         title: 'Portuguese Verb Practice',
         desc: verbsDesc,
         url: 'https://verb-application-client.vercel.app/',
         git: 'https://github.com/arbocobra/verb-application',
         preview: verbsPreview,
         imageA: verbsLoad,
         imageB: verbsView,
         imgDisplay: 'row'
      },
      minesweeper: {
         id: 'minesweeper',
         title: 'Redux Minesweeper',
         desc: minesweeperDesc,
         url: 'https://arbocobra.github.io/redux-minesweeper/',
         git: 'https://github.com/arbocobra/redux-minesweeper',
         imageA: minesLoad,
         imageB: minesView,
         imgDisplay: 'column'
      },
   };
   const wpDetails = {
      carbon: {
         id: 'carbon',
         title: 'Carbon & Iron',
         url: 'https://carboniron.ca/',
         image: carbonView,
      },
      sense: {
         id: 'sense',
         title: 'Sense Engineering',
         url: 'https://senseengineering.com/',
         image: senseView,
      },
      mobility: {
         id: 'mobility',
         title: 'Mobility Law',
         url: 'https://www.mobilitylaw.com/',
         image: mobilityView,
      },
      equity: {
         id: 'equity',
         title: 'Equity ICI',
         url: 'https://equityici.com/',
         image: equityView,
      },
   }

   const openDisplay = (val) => setDisplayObj(details[val]);
   const closeDisplay = () => setDisplayObj(null);
   const openURL = (url) => window.open(url, '_blank')

   useEffect(() => {
      if (displayObj) {
         setDisplay(true);
      } else {
         setDisplay(false);
      }
   }, [displayObj]);

   return (
      <div id='App' className={clsx('app-container flex flex-col justify-start gap-4 mx-auto px-3 py-6', {'h-screen overflow-hidden': display})}>
         <Header />
         <div className='flex flex-col items-center gap-8'>
            <div className='title flex justify-start font-light w-full'>
               <div><span>Natalie Rekai</span><span>&mdash;</span></div>
               <div><span>Developer Portfolio</span></div>
            </div>
            {/* <div className='title flex justify-start font-light'>Natalie Rekai &mdash; Developer Portfolio</div> */}
            {/* <div className='flex justify-start text-3xl/snug sm:text-4xl/snug font-light'>Natalie Rekai &mdash; Developer Portfolio</div> */}
            {/* <div className='flex justify-center flex-wrap gap-6'> */}
            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center'> */}
            <div className='grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 justify-center'>
               {Object.keys(details).map((el, i) => (
                  <Preview
                     key={`preview-${i}`}
                     id={el}
                     open={openDisplay}
                     image={details[el]?.preview || details[el].imageA}
                     title={details[el].title}
                  />
               ))}
               {/* <div className='placeholder-container' />
               <div className='placeholder-container' /> */}
            </div>
            <div className='flex flex-col gap-6'>
               <div onClick={toggleAccordion} className='toggle-title-container flex justify-between font-light items-center bg-[#dce1e2] dark:bg-gray-800'>
                  <div>Websites Built Using WordPress</div>
                  {toggleOpen ? <ChevronUpIcon className='size-7'/> : <ChevronDownIcon className='size-7' />}
               </div>
               <div className={clsx({'grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 justify-center':toggleOpen, 'h-0 overflow-hidden':!toggleOpen})}>
               {/* <div className='grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 justify-center'> */}
               {/* <div className={clsx({'flex justify-center flex-wrap gap-6':toggleOpen, 'h-0 overflow-hidden':!toggleOpen})}> */}
               {Object.keys(wpDetails).map((el, i) => (
                  <Preview
                     key={`wp-preview-${i}`}
                     id={wpDetails[el].url}
                     open={openURL}
                     image={wpDetails[el].image}
                     title={wpDetails[el].title}
                  />
               ))}
               <div className='placeholder-container' />
               <div className='placeholder-container' />
            </div>
            </div>
            {display && displayObj && <Display content={displayObj} close={closeDisplay} />}
         </div>
         <Footer />
      </div>
   );
};

export default App;