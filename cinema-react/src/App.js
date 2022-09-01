
import './App.scss';
import NavBar from './containers/nav-Bar/nav-bar';
import ProfilNav from './containers/profil-Nav/profil-nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar>
          <ProfilNav/>
        </NavBar>
      </header>
    </div>
  );
}

export default App;
