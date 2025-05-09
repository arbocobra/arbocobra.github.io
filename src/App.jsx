import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const App = () => {
   return (
      <div id='App'>
         <div id='Body'>
          <div className='body-container'>
            <h2>Natalie Rekai &mdash; Programming Portfolio</h2>
            <ol>
               <li>
                  Portuguese Verb Practice
                  <ul>
                     <li>
                        Flashcard-style test of conjugation of irregular Portuguese verbs in present, past, perfect,
                        continuous, imperfect and imperative tense.
                     </li>
                     <li>Built with REACT, MongoDB</li>
                  </ul>
               </li>
            </ol>
          </div>
         </div>
         <div id='Footer'>
            <div className='footer-container'>
               <p>&copy; Natalie Rekai, 2025</p>
               <p>
                  Natalie is also a blacksmith -{' '}
                  <a href='https://madeforge.com' target='_blank'>
                     View artist portfolio
                  </a>
               </p>
            </div>
         </div>
      </div>
   );
};

export default App;
