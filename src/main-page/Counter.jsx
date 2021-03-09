import React, { Component } from 'react';


class Counter extends Component{
    
    constructor(props){
        super(props);
        this.state = {count: 0}
        console.log("Se ha instanciado el componente")
    }

    componentDidMount = ()=>{
        console.log('counter - mount')
    }

    componentWillUnmount = ()=> {
        console.log('Counter - will delete')
    }
    

    increment = () => {
        const { count } = this.state;
        this.setState({count: count + 1 })
    }

    render(){
        console.log('Counter - render')
        return (
            <div>
                <h2 style={ {color:'white',backgroundColor:"red" } }>{ this.state.count }</h2>
                <button onClick={this.increment}>Incrementar</button>
            </div>
        );
    }
}

// const counterStyle = {
//     color:'white',
//     backgroundColor:"red"
// }

export default Counter;