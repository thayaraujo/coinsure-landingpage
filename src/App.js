import React from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header.js';

export default (props) => (
  <div className="Header">
    <Card header="CoinsureLOGO"></Card>
      <button className='button'>gostei</button> 
    <Header menu="Home Seguros Login"></Header>
        
    <div id="white">
    <Card titulo1="Coberturas para você e seu negócio com liberdade">
    </Card>
    <Card texto1="Uma plataforma de seguros que foi criada pensando na sua experiência.">
    </Card>
      <button className='button2'>
      </button> 
    </div>
    
    <div id="bloco2">
    <Card titulo2="Um MarketPlace de seguros e seguradoras">
    </Card>
    <Card texto2="Conectamos os produtos das seguradoras na Coinsure para que você possa
                  contratar seguros de forma mais simples e educativa."></Card>
    </div>  

    <div id="white">
    <Card titulo3="Seguradoras conectadas"></Card>
    <Card texto3="Nosso objetivo é trazer as seguradoras para perto de você transformando
                  a linguagem das coberturas em algo mais educativo e didático.">
    </Card>
    </div>

    <div id="gray">
    <Card titulo4="Digital, mas do seu lado =)"></Card>
    <Card texto4="Muitas vezes é difícil entender todas as coberturas do seguro. Por
                  isso, nos preocupamos em unir uma compra simples e educativa com uma 
                  assessoria especializada.">
    </Card>
    </div>

    <div id="white">
    <Card titulo5="Lembramos você da sua renovação"></Card>
    <Card texto5=" Você já chegou a perder a renovação de um seguro? Com a Coinsure,
                   você consegue subir todos os seus seguros na plataforma, e iremos te
                   lembrar de realizar a renovação quando chegar a hora!">
    </Card>  
    </div>

    <div id="gray">
    <Card titulo6="Perguntas e respostas"></Card>
    </div>
    <Card className= "question1">
            <p>Tem custo para abrir uma conta?</p>
            <p>Não, o único valor que você paga é o do próprio seguro.</p>
            <p>Tenho um corretor de confiança, e agora?</p>
            <p>Tudo bem, convide ele para fazer parte do clube corretor parceiro.</p>
    </Card>

    <div className= "question2">
            <p>Quando tiver um sinistro, vocês me ajudam?</p>
            <p>Sim, fazemos toda a intermediação do sinistro para você.</p>
            <p>Vocês terão mais produtos na plataforma?</p>
            <p>Sim, estamos ampliando o nosso portfólio para que tenhamos todas as modalidades 
              de coberturas aqui.</p>            
    </div>
 </div>
 
)

