import React from 'react';
import './App.css';
import Card from './components/Card.js';
import Header from './components/Header.js';
import './Mobilenavbar';

import imgcard1 from './assets/imgcard1.png'
import imgcard2 from './assets/imgcard2.png'
import imgcard3 from './assets/imgcard3.png'
import imgcard4 from './assets/imgcard4.png'
import imgcard5 from './assets/imgcard5.png'
import icon from './assets/icon.png'
import logocoinsure from './assets/logocoinsure.jpg'
import seguradoras from './assets/seguradoras.png'


export default (props) => (
  <div className="container">
    <div className="containerMenu">
      <img className="logo" src={logocoinsure} />
        <div className="mobile-menu">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        <ul class="nav-list">
            <li><a href="#"><button className='button'>gostei</button></a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Seguros</a></li>
            <li><a a href="#">Login</a></li>
         </ul>    
    </div>

    <div className="Card">
      <div id="card1"> 
          <div className="linha">
            <div className="coluna">
              <h1>Coberturas para <wbr/> você e seu negócio com <span className="word">liberdade</span></h1>
              <br/>
              <p>Uma plataforma de seguros que foi criada pensando na sua experiência.</p>
              <a href="#"><button className='button2'>Gostei</button></a> 
            </div>
            
            <div className="coluna">
              <img className="img1" src={imgcard1} />
            </div>
          </div>  
       </div>

      <div id="card2"> 
          <div className="linha">
            <div className="coluna">
            <h1>Um MarketPlace de seguros e seguradoras</h1>
            <p>Conectamos os produtos das seguradoras na Coinsure para que você possa
           contratar seguros de forma mais simples e educativa.</p>
            </div>
            
            <div className="coluna">
              <img className="img2" src={imgcard2} />
            </div>
          </div>  
       </div>

       <div id="card3"> 
          <div className="linha">
            <div className="coluna1">
            <h1>Seguradoras conectadas</h1>
            <p>Nosso objetivo é trazer as seguradoras para perto de você transformando
               a linguagem das coberturas em algo mais educativo e didático.</p>
            <img className="seguradoraslogo" src={seguradoras} />
            </div>
            
            <div className="coluna2">
              <img className="img3" src={imgcard3} />
            </div>
          </div>  
       </div>

       
      <div id="card4"> 
          <div className="linha">
            <div className="coluna">
              <h1>Digital, mas do seu lado =)</h1>
              <p>Muitas vezes é difícil entender todas as coberturas do seguro. Por
                 isso, nos preocupamos em unir uma compra simples e educativa com uma 
                 assessoria especializada.</p>
            </div>
            
            <div className="coluna">
              <img className="img4" src={imgcard4} />
            </div>
          </div>  
       </div>
      
      <div id="card5">
        <div className="linha">
          <div className="coluna1">
            <h1>Lembramos você da sua renovação</h1>
            <p>Você já chegou a perder a renovação de um seguro? Com a Coinsure,
              você consegue subir todos os seus seguros na plataforma, e iremos te
              lembrar de realizar a renovação quando chegar a hora!</p>
          </div>
          
          <div className="coluna2">
            <img className="img5"src={imgcard5} />
          </div>        
        </div>
      </div>
        
      <div id="card6">
        <h1> Perguntas e respostas</h1>
          <div className="linha">
            <div className="coluna">
              <ul>
                <li><img className="icon"src={icon} />Tem custo para abrir uma conta?</li>
                <p>Não, o único valor que você paga é o do próprio seguro.</p>
                <li><img className="icon"src={icon} />Tenho um corretor de confiança, e agora?</li>
                <p>Tudo bem, convide ele para fazer parte do clube corretor parceiro.</p>
              </ul>
            </div>
            
            <div className="coluna">
              <ul>
                <li><img className="icon"src={icon} />Quando tiver um sinistro, vocês me ajudam?</li>
                <p>Sim, fazemos toda a intermediação do sinistro para você.</p>
                <li><img className="icon"src={icon} />Vocês terão mais produtos na plataforma?</li>
                <p>Sim, estamos ampliando o nosso portfólio para que tenhamos todas as modalidades 
                  de coberturas aqui.</p>  
              </ul> 
            </div>
          </div>  
       </div>
         
    </div>
 </div>
)