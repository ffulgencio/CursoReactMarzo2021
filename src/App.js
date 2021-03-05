import React from 'react'
// componentes
import Header from './main-page/Header';
import Menu from './main-page/Menu';
import Container from './main-page/Container';
import StateComponent from './main-page/StateComponent'

const App = function(){
    const options = ["Inicio", "Contactos","Nosotros", "Productos"]

    return (
    <div>
        <Header title="Curso React"></Header>
        <Header title="Otro Titulo"></Header>
        <Menu options={ options }></Menu>
        <Container></Container>
        <StateComponent></StateComponent>
    </div>
    );
}

export default App;