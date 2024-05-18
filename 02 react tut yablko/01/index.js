class App extends React.Component {
   //state
   constructor(props) {
      super(props)

      this.state = {
         dude: 'Princess Bubblegum',
         characters: [
            {               
               id: 1,
               who: "Finn the Human",
               wat: "A silly kid who wants to become a great hero one day.",
               cool: 9
            },
            {
               id: 2,
               who: "JaketheDog",
               wat: "Finn's best friend is a wise, old dog with a big heart.",
               cool: 42
            }
         ]
      }
   }

   handleChange = event => { //arrow functions nevytvaraju vlastny kontext pre this
      this.setState({
         dude: event.target.value
      });
      //console.log(event.target.value);
   }

   listOfDudes = () => {
      return this.state.characters.map(dude => (
         <li className={dude.who.split(' '). length < 3 ? 'strong' : ''} key={dude.id}>
            {dude.who}

            {dude.who.split(' ').length < 3 && (
               <small>
                  <strong> - short name</strong>
               </small>
            )}
         </li>
      ))
   }

   handleSubmit = event => {
      event.preventDefault(); //zabranit refreshu prehliadaca
      
      //nesmiem menit state priamo
      //console.log([...this.state.characters, newDude]);
      this.setState(state => {         
         const newDude = {
            id: Math.max(...state.characters.map(d => d.id)) + 1,
            who: this.state.dude,
            wat: "test",
            cool: 15
         };

         return {
            characters: [...this.state.characters, newDude]
         }
      });
      //alert(this.state.dude);
   }

   //template
   render() {
      return (
         <div>
            <ul>{this.listOfDudes()}</ul>
            
            <form className="add-new" onSubmit={this.handleSubmit}>
               <input type="text" value={this.state.dude} onChange={this.handleChange} />
            </form>

            <p className="preview">{this.state.dude}</p>
         </div>
      )
   }
}

ReactDOM.render(<App />, document.getElementById('root'));