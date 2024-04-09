//we don't have to create a base HTML file and the JavaScript (like with the simple React app built without a toolchain)
//don't have to create a virtual DOM 
//don't have to explicitly render virtual DOM to the browser

export default function Home() {
  function ListItems({ints}) {
    return ( //React fragment
      <> 
        {
          ints.map(id => {
            return (
              <li>{id}</li>
            )
          })
        }
      </>
    )
  }

  const ints = [1,2,3];
  
  return (
    <ul>
      <ListItems ints={ints} />
    </ul>
  );
}
