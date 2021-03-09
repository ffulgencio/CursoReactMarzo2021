import React from 'react'
import './estilo.css'

// componentes
import Header from './main-page/Header';
import Menu from './main-page/Menu';
import Container from './main-page/Container';
import StateComponent from './main-page/StateComponent'
import Counter from './main-page/Counter'

class App extends React.Component{
   state = { options :["Inicio", "Contactos","Nosotros", "Productos", "Clientes"]}

   handleDelete = () => {
        const options = this.state.options.filter(op => op !== "Clientes");
        this.setState({ options })
        // alert("bien");
    }

    render(){
        return (
        <div>
            <Header title="Curso React"></Header>
            <Header title="Otro Titulo"></Header>
            <Menu proptest="Test" handleDelete={ this.handleDelete } options={ this.state.options }></Menu>
            <Container></Container>
            <StateComponent></StateComponent>
            <Counter />
            <Counter />
            <Counter />
            <Counter />
        </div>
        );
    }
}

export default App;