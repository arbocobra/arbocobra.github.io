import './App.css';

const App = () => {
   return (
      <div id='App'>
         <div id='Body'>
          <div className='body-container'>
            <h2>Natalie Rekai &mdash; Programming Portfolio</h2>
            <ol>
               <li>
                  <a target='_blank' href='https://verb-application-client.vercel.app/'>Portuguese Verb Practice</a>
                  <ul>
                     <li>
                        Flashcard-style test of conjugation of irregular Portuguese verbs in present, past, perfect,
                        continuous, imperfect and imperative tense.
                     </li>
                     <li>Built from scratch with REACT, MongoDB, Node, and Express</li>
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
