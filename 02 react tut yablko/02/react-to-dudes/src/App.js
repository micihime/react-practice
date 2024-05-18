import React from 'react';

import './app.css';

class App extends React.Component {
  //state
  constructor(props) {
     super(props)

     this.input = React.createRef() //aby sa po submite formu vzdy kurzor vratil do 1. inputu

     this.state = {
        newWho: '',
        newWat: '',
        characters: []
     }
  }

  componentDidMount = () => {
     fetch('https://raw.githubusercontent.com/micihime/learning-react/main/02%20react%20tut%20yablko/01/dudes.json')
        .then(res => res.json())
        .then(json => this.setState({characters: json}))
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

  handleCool = dude => event => {
     const cool = +event.target.value; //+ prekonvertuje na int
     this.setState(state => {
        return {
           characters: state.characters.map(item => 
              item === dude ? {...dude, cool} : item
           )
        }
     });
  }

  removeDude = dude => {
     this.setState(state => {
        return {
           characters: state.characters.filter(item => item !== dude)
        }
     })
  }

  handleSubmit = event => {
     if (
        event.key === 'Enter' &&
        this.state.newWho &&
        this.state.newWat
     ) {
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

        this.resetForm();
     }
  }

  resetForm = () => {
     this.setState({
        newWho: '',
        newWat: ''
     });

     this.input.current.focus()
  }

  listOfDudes = () => {
     return this.state.characters.map(dude => (
        <li className="dude" key={dude.id}>
           <a className="ctrl" onClick={() => this.removeDude(dude)}>
              x
           </a>

           <article className={
              dude.cool < 10 ? 'faded':
                 dude.cool > 50 ? 'gold' : ''
           }>
              {dude.who}
              <span>{dude.wat}</span>
           </article>

           <input className="ctrl" type="number" 
              value={dude.cool}
              onChange={this.handleCool(dude)}></input>
        </li>
     ))
  }

  //template
  render() {
     return (
        <div>
           <ul>{this.listOfDudes()}</ul>
           
           <form className="add-new" onKeyPress={this.handleSubmit}>
              <input type="text" 
                 autoFocus
                 ref={this.input}
                 value={this.state.newWho} 
                 onChange={this.handleWho} />
              <input type="text" 
                 value={this.state.newWat} 
                 onChange={this.handleWat} />
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

export default App;