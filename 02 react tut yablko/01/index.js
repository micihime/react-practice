class App extends React.Component {
   //state
   constructor(props) {
      super(props)

      this.state = {
         newWho: 'Princess Bubblegum',
         newWat: 'A wild rocker girl, yeah!',
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

   handleWho = event => { //arrow functions nevytvaraju vlastny kontext pre this
      this.setState({
         newWho: event.target.value
      });
      //console.log(event.target.value);
   }
   
   handleWat = event => { 
      this.setState({
         newWat: event.target.value
      });
   }

   listOfDudes = () => {
      return this.state.characters.map(dude => (
         <li className="dude" key={dude.id}>
            <a className="ctrl">x</a>

            <article className="">
               {dude.who}
               <span>{dude.wat}</span>
            </article>

            <input className="ctrl" type="number" value={dude.cool}></input>
         </li>
      ))
   }

   handleSubmit = event => {
      if (event.key === 'Enter') {

         //nesmiem menit state priamo
         this.setState(state => {         
            const newDude = {
               id: Math.max(...state.characters.map(d => d.id)) + 1,
               who: this.state.newWho,
               wat: this.state.newWat,
               cool: 15
            };

            return {
               characters: [...this.state.characters, newDude]
            }
         });
      }
   }

   //template
   render() {
      return (
         <div>
            <ul>{this.listOfDudes()}</ul>
            
            <form className="add-new" onKeyPress={this.handleSubmit}>
               <input type="text" value={this.state.newWho} onChange={this.handleWho} />
               <input type="text" value={this.state.newWat} onChange={this.handleWat} />
            </form>

            <p className="preview">
               {this.state.newWho}
               <br />
               <small>{this.state.newWat}</small>
            </p>
         </div>
      )
   }
}

ReactDOM.render(<App />, document.getElementById('root'));