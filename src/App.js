
import { useState } from 'react';
import './index.css';
import List from './List';
import data from './data'

function App() {
  const [people, setPeople ] = useState(data)
  return (
    <main>
      <div className='container'>
      <h4>Kim Convience Birthday Card</h4>
      <h3>{people.length} Birthday Today</h3>
      <List people={people} />
      <button onClick={() => setPeople([])} >Clear</button>
      </div>
    </main>
  );
}

export default App;
