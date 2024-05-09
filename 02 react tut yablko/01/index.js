class App extends React.Component {
   //state
   constructor(props) {
      super(props)

      this.state = {
         dude: 'Princess Bubblegum'
      }
   }

   handleChange = event => { //arrow functions nevytvaraju vlastny kontext pre this
      this.setState({
         dude: event.target.value
      });
      //console.log(event.target.value);
   }

   //template
   render() {
      return (
         <div>
            <form className="add-new">
               <input type="text" value={this.state.dude} onChange={this.handleChange} />
            </form>

            <p className="preview">{this.state.dude}</p>
         </div>
      )
   }
}

ReactDOM.render(<App />, document.getElementById('root'));