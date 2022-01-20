import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Search from './components/Search';
import Starwars from './views/Starwars';

function App() {
  return (
    <div className="App">
      <h1 className='name'>Luke ApiWalker</h1>
      <BrowserRouter>
        <Search />
        <Switch>
          <Route exact path="/:people_planets/:id">
            <Starwars />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
