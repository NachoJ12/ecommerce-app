import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h2>Ofertas de la semana</h2>
      <ItemListContainer greeting={'Bienvenido!'} />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
