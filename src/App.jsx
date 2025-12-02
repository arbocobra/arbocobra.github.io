import { useState, useRef } from 'react';
import './App.css';
import upArrow from './assets/upArrow.svg'
import downArrow from './assets/downArrow.svg'

const App = () => {
   const [toggleOpen, setToggleOpen] = useState(false)   
   const toggleRef = useRef(null)

   const toggleAccordion = () => {
      if (toggleOpen) {
         toggleRef.current.classList.add('closed')
         setToggleOpen(false)
      } else {
         toggleRef.current.classList.remove('closed')
         setToggleOpen(true)
      }
   }
   
   return (
      <div id='App'>
         <div id='Body'>
          <div className='body-container'>
            <h2>Natalie Rekai &mdash; Programming Portfolio</h2>
            <ol>
               <li>
                  <a target='_blank' href='https://character-builder-next.vercel.app/'>Table-Top Game Character Builder</a>
                  <ul>
                     <li>
                        Build and stat-out a playable character using Dungeons & Dragons 5E. This application has selectable classes, backgrounds, abilities and species with built-in special traits and proficiencies.
                     </li>
                     <li>
                        Built from scratch using NextJS, using a PostgreSQL database. Includes option to create a user account to save and edit your characters. Designed for browser and mobile.
                     </li>
                     <li>
                        A complete list of project specifications, as well as current and incoming features can be found <a href='https://character-builder-next.vercel.app/about' target='_blank'>here</a>.
                     </li>
                  </ul>
               </li>
               <li>
                  <a target='_blank' href='https://that-my-mp.vercel.app/'>That My MP?? (Work in Progress)</a>
                  <ul>
                     <li>
                        When you want to find out who your MP is, and what they are voting for in Parliament. Please keep in mind, this project is <em>in progress</em>. Next step is expanding the information provided about each Bill in MP's voting record.
                     </li>
                     <li>Built from scratch with NextJS, fetching data from <a href='https://api.openparliament.ca/' target='_blank'>api.OpenParliament.ca</a> &hearts;</li>
                  </ul>
               </li>
               <li>
                  <a target='_blank' href='https://verb-application-client.vercel.app/'>Portuguese Verb Practice</a>
                  <ul>
                     <li>
                        Flashcard-style test of conjugation of irregular Portuguese verbs in present, past, perfect,
                        continuous, imperfect and imperative tense.
                     </li>
                     <li>Built from scratch with REACT, MongoDB, Node, and Express. Designed for browser and mobile.</li>
                  </ul>
               </li>
               <li>
                  <a target='_blank' href='https://arbocobra.github.io/redux-minesweeper/'>Redux Minesweeper</a>
                  <ul>
                     <li>It's like writing a tic-tac-toe application, only harder</li>
                     <li>
                        Classic Minesweeper, built from scratch using REACT and REDUX. Designed for browser and mobile.
                     </li>
                  </ul>
               </li>
               <li>
                  <p onClick={toggleAccordion} className='toggle'>Websites Built Using WordPress {toggleOpen ? <img width='20' src={downArrow}/> : <img width='20' src={upArrow}/>}</p>
                  <ul ref={toggleRef} className='closed'>
                     <li>All sites built by me using Wordpress and modified themes</li>
                     <li><a href='https://www.mobilitylaw.com/' target='_blank'>Mobility Law</a></li>
                     <li><a href='https://senseengineering.com/' target='_blank'>Sense Engineering</a></li>
                     <li><a href='https://equityici.com/' target='_blank'>EquityICI</a></li>
                     <li><a href='https://carboniron.ca/' target='_blank'>Carbon & Iron</a></li>
                  </ul>
               </li>
            </ol>
          </div>
         </div>
         <div id='Footer'>
            <div className='footer-container'>
               <p>&copy; Natalie Rekai, 2025 &mdash; <a href='https://github.com/arbocobra' target='_blank'>GitHub</a></p>
               <p>
                  Natalie is also a blacksmith - <a href='https://madeforge.com' target='_blank'>View artist portfolio</a>
               </p>
            </div>
         </div>
      </div>
   );
};

export default App;
