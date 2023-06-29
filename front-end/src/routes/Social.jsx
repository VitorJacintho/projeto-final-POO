import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Outlet, useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom'

const Social = () => {
  return (
    <div>

      <h1>Saúde social</h1>
      
      <div>
      A saúde social está ligada à manutenção de uma relação saudável nos relacionamentos <br/>
      com a família, amigos, colegas, ambiente de trabalho e a comunidade de convívio em geral.<br/>
       É a capacidade de interagir com a sociedade.<br/>
      </div>
      <br/>
      <div>
      Além do comportamento de cada indivíduo, depende da cultura e do coletivo.<br/>
       Sociedades mais solidárias tendem a apresentar níveis mais saudáveis de sociabilidade.<br/>
        Por outro lado, sociedades mais individualistas dificultam as relações entre as pessoas.<br/>
      </div>
      <br/>
      <div>
        *Escute e mostre interesse.<br/>
        *Ofereça apoio emocional.<br/>
        *Esteja disponível.<br/>
        *Ajude na busca por recursos.<br/>
        *Promova a inclusão social.<br/>
        *Evite o estigma.<br/>
        *Incentive o autocuidado.<br/>
      </div>
      <br/>
      <div>
      Alimentos que promovem o bem-estar mental: Alimentos ricos em triptofano, como peru,<br/>
      frango, peixe, ovos, nozes e sementes, são importantes para a produção de serotonina, <br/>
      um neurotransmissor associado ao humor e ao bem-estar mental. Além disso, uma dieta equilibrada <br/>
      que inclua alimentos ricos em ômega-3, como peixes gordurosos, sementes de linhaça e chia, pode <br/>
      ajudar na saúde cerebral e na função cognitiva.<br/>
      </div>
      <br/>
      <div>
      Alimentos que aumentam a energia: Uma dieta equilibrada e nutritiva, com uma combinação<br/>
       adequada de carboidratos complexos (como grãos integrais, legumes, verduras) e proteínas <br/>
       magras (como carnes magras, aves, peixes, leguminosas), pode fornecer energia sustentada<br/>
        ao longo do dia, ajudando a combater a fadiga e melhorando o humor.<br/>
      </div>
      <br/>
      <div>
      Alimentos ricos em antioxidantes: Os antioxidantes têm propriedades anti-inflamatórias<br/>
       e podem ajudar a reduzir o estresse oxidativo no corpo. Inclua alimentos como frutas vermelhas,<br/>
        vegetais de folhas verde-escuras, nozes e sementes, que são ricos em antioxidantes.<br/>
      </div>
      <br/>
      <div>
      Alimentos que promovem a saúde do sistema imunológico: Uma alimentação equilibrada, <br/>
      rica em frutas, verduras e legumes, fornece vitaminas, minerais e antioxidantes que ajudam<br/>
       a fortalecer o sistema imunológico, o que é importante para a saúde geral e a resiliência social.<br/>
      </div>
      <br/>
      <div>
        Clinica social de Psicologia<br/>
        Telefone: (48) 99673-8375<br/>
        Endereço: R. Germano Magrin, 100 - Centro, Criciúma - SC, 88802-090<br/>
      </div>
      <br/>
      <div>
      exercicos: CAMINHADA, CICLISMO
      </div>
      
    </div>
  );
};

export default Social;

