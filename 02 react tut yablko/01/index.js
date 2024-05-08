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
            <p>
               My good friend <strong>{this.state.dude}</strong>.
            </p>
         </div>
      )
   }
}

ReactDOM.render(<App />, document.getElementById('root'));