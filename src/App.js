import './App.css';
import {useState, useEffect} from 'react';
import Componentlists from './ComponentLists';

function App() {
 
  let [data, setData] = useState([]);

  useEffect(() => {
    data = fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setData(data))
  }, []);

  return (
    <div className="App">
      <Componentlists data={data} setData={setData}/>
    </div>
  );
}

export default App;