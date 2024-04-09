//we don't have to create a base HTML file and the JavaScript (like with the simple React app built without a toolchain)
//don't have to create a virtual DOM 
//don't have to explicitly render virtual DOM to the browser

export default function Home() {
  function ListItems() {
    return ( //React fragment
      <> 
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </>
    )
  }
  
  return (
    <ul>
      <ListItems />
    </ul>
  );
}