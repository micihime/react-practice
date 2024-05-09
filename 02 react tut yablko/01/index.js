class App extends React.Component {
   //state
   constructor(props) {
      super(props)

      this.state = {
         dude: 'Marceline the Vampire'
      }
   }

   //template
   render() {
      return (
         <div>
            <form className="add-new">
               <input type="text" />
            </form>
         </div>
      )
   }
}

ReactDOM.render(<App />, document.getElementById('root'));