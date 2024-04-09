//we don't have to create a base HTML file and the JavaScript (like with the simple React app built without a toolchain)
//don't have to create a virtual DOM 
//don't have to explicitly render virtual DOM to the browser
import {useState} from 'react';

export default function Home() {
  function ListItems({ints, addValue}) {
    return ( //React fragment
      <> 
        <button onClick={addValue}>Add Item</button>
        {
          ints.map(id => {
            return (
              <li key={id}>{id}</li>
            )
          })
        }
      </>
    )
  }

  const [ints, setInts] = useState([1,2,3]);

  function addValue() {
    const newValue = Math.max(...ints) + 1;
    setInts([...ints, newValue]);
  }

  return (
    <ul>
      <ListItems ints={ints} addValue={addValue} />
    </ul>
  );
}
