import './App.css';
import { WelcomeHome } from './components/WelcomeHome';
import { Search } from './components/Search'
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="">
      <WelcomeHome >
        <Search />
      </WelcomeHome>
    </div>
  );
}

export default App;
