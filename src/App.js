import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h2>Ofertas de la semana</h2>
      <ItemListContainer greeting={'Bienvenido!'} />
    </div>
  );
}

export default App;
