import { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/Search';
import Lista from './components/Lista/Lista';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState('');
  const [initSearch,setInitSearch]=useState(true);
  const [lista, setLista] = useState([]);

  useEffect(() => {
    if(search=='') setInitSearch(true);
  }, [search]);

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }
  const searchFn = () => {

    const url = `http://95.179.139.106/json/stations/search?name=${search}`;
    axios.get(url)
      .then(result => {
        console.log(result.data);
        setLista(result.data)
        setInitSearch(false);
      })
      .catch(error => console.error(error))
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>RADIO FACTORIA</h1>
      </header>
      {/* <section className='search-bar'>
        <input type="search" placeholder='Escribe el nombre de la radio' />
        <button>Buscar</button>

      </section> */}
      <SearchBar
        value={search}
        handleInput={handleInputValue}
        handleClick={searchFn} />
      <Lista lista={lista}
             init={initSearch} />
    </div>
  );
}

export default App;
