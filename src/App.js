import React, { useState } from 'react';
import data from './data'
import List from './List'
function App() {
  const [people, setPeople] = useState(data);
  return (

    <div className='container'>
      <div className="columns is-mobile mx-6	my-5 is-gapless">
        <div className="column is-three-quarters">
        <h3 className="is-size-4 has-text-left ">{people.length} birthdays today</h3>
        </div>
        <div className="column has-text-right">
        <button className="button is-link is-light " onClick={() => setPeople([])}>clear all</button>
        </div>
      </div>
      <List people={people} />
    </div>


  );
}

export default App;
