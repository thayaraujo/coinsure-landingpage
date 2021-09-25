import React from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header.js';


export default (props) => (
  <div className="container">
    <div className="containerMenu">
      <Header logo="Coinsure"></Header>
        <button className='button'>gostei</button> 
      <Header menu="Home Seguros Login"></Header>
    </div>

    <div className="Card">
      <div id="card1">
        <h1>Coberturas para você e seu negócio com liberdade</h1>
        <p>Uma plataforma de seguros que foi criada pensando na sua experiência.</p>
        <button className='button2'>Gostei</button> 
      </div>

      <div id="card2">
        <h1>Um MarketPlace de seguros e seguradoras</h1>
        <p>Conectamos os produtos das seguradoras na Coinsure para que você possa
           contratar seguros de forma mais simples e educativa.</p>
      </div>

      <div id="card3">
        <h1>Seguradoras conectadas</h1>
        <p>Nosso objetivo é trazer as seguradoras para perto de você transformando
           a linguagem das coberturas em algo mais educativo e didático.</p>
      </div>

      <div id="card4">
        <h1>Digital, mas do seu lado =)</h1>
        <p>Muitas vezes é difícil entender todas as coberturas do seguro. Por
           isso, nos preocupamos em unir uma compra simples e educativa com uma 
           assessoria especializada.</p>
      </div>
      
      <div id="card5">
        <h1>Lembramos você da sua renovação</h1>
        <p>Você já chegou a perder a renovação de um seguro? Com a Coinsure,
           você consegue subir todos os seus seguros na plataforma, e iremos te
           lembrar de realizar a renovação quando chegar a hora!</p>
      </div>

      <div id="card6">
        <h1>Perguntas e respostas</h1>
        <p>Tem custo para abrir uma conta?</p>
        <p>Não, o único valor que você paga é o do próprio seguro.</p>
        <p>Tenho um corretor de confiança, e agora?</p>
        <p>Tudo bem, convide ele para fazer parte do clube corretor parceiro.</p>
      </div>

      <div id="gray">
      <Card titulo6=""></Card>
      </div>
      <Card className= "question1">
              
      </Card>

      <Card className= "question2">
              <p>Quando tiver um sinistro, vocês me ajudam?</p>
              <p>Sim, fazemos toda a intermediação do sinistro para você.</p>
              <p>Vocês terão mais produtos na plataforma?</p>
              <p>Sim, estamos ampliando o nosso portfólio para que tenhamos todas as modalidades 
                de coberturas aqui.</p>            
      </Card>
    </div>
 </div>
 
)

