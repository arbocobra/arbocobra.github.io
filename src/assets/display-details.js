import images from './image-index';
import { characterDesc, mpDesc, verbsDesc, minesweeperDesc } from './description-text';

const { mpLoad, mpView, charLoad, charView, minesLoad, minesView, verbsPreview, verbsLoad, verbsView, carbonView, senseView, mobilityView, equityView } = images;

export const details = {
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

export const wpDetails = {
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