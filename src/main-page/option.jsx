import React from 'react';

class Option extends React.Component {
    constructor(props){
        super(props);

    }
    
    render(){
        return (<li>{ this.props.option } <button onClick={ this.props.onDelete}>x</button></li>);
    }

    componentWillUnmount(){
        alert("Fue eliminado");
    }
}
 
export default Option;