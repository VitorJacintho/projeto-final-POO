import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Outlet, useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom'

const Fisica = () => {
  return (
    <div>

      <h1>Saúde física</h1>
      
      <div>
      O bem-estar físico se refere às condições do nosso corpo e está relacionado à capacidade física,<br/>
      disposição, nutrição e autoestima. Pode ser desenvolvido através da combinação dos benefícios das<br/>
       atividades físicas e hábitos alimentares saudáveis.<br/>
      </div>
      <br/>
      <div>
        Fabiana Prestes, tutora dos cursos de Tecnologia em Gerontologia,<br/>
        Agente Comunitário de Saúde e Endemias, Paramedicina e Instrumentação Cirúrgica,<br/>
        ressalta que o primeiro passo para ter uma vida de qualidade é adotar hábitos saudáveis.<br/>
      </div>
      <br/>
      <div>
        *Ofereça apoio emocional.<br/>
        *Seja compreensivo e respeite os limites.<br/>
        *Ofereça ajuda prática.<br/>
        *Pesquise e forneça informações relevantes.<br/>
        *Incentive um estilo de vida saudável.<br/>
        *Ajude a encontrar recursos e suporte.<br/>
        *Esteja presente. <br/>
      </div>
      <br/>
      <div>
        Inclua alimentos ricos em nutrientes: Opte por alimentos naturais e frescos,<br/>
        como frutas, legumes, verduras, grãos integrais, proteínas magras (como peixe,<br/>
        frango, carne magra, tofu) e laticínios com baixo teor de gordura.<br/>
        Esses alimentos fornecem vitaminas, minerais e antioxidantes importantes para a saúde.<br/>
    </div>
      <br/>
      <div>
      Consuma proteínas adequadas: A proteína é essencial para a recuperação e a reparação dos tecidos.<br/>
       Inclua fontes de proteína magra em cada refeição, como carnes magras, aves, peixes, ovos, leguminosas<br/>
       (feijões, lentilhas, grão-de-bico) e laticínios com baixo teor de gordura.<br/>
      </div>
      <br/>
      <div>
      Priorize gorduras saudáveis: Inclua gorduras saudáveis em sua alimentação,<br/>
       como aquelas encontradas em abacate, nozes, sementes, azeite de oliva e peixes gordurosos <br/>
       (salmão, sardinha, cavala), que são ricos em ácidos graxos ômega-3, que têm propriedades anti-inflamatórias.<br/>
      </div>
      <br/>
      <div>
      Consuma fibras: As fibras alimentares são importantes para a saúde digestiva e podem ajudar a<br/>
       prevenir problemas gastrointestinais. Inclua alimentos ricos em fibras, como frutas, legumes, <br/>
       verduras, grãos integrais, nozes e sementes.<br/>
      </div>
      <br/>
      <div>
      Mantenha-se hidratado: Beba água suficiente ao longo do dia para manter-se hidratado. <br/>
      A hidratação adequada é fundamental para o funcionamento adequado do organismo, inclusive <br/>
      para a recuperação e a saúde física.<br/>
      </div>
      <br/>
      <div>
        especialista:Yasmin Ghellere<br/>
        Telefone: (48) 99624-5563<br/>
        Endereço: Edifício Minérios - Av. dos Italianos, N° 100 - sala 103A - Universitário, Criciúma - SC, 88805-350<br/>
      </div>
      <br/>
      <div>
      exercicios: MUSCULAÇÃO, CAMINHADA, FUTEBOL,NATAÇÃO E ETC
      </div>
    </div>
  );
};

export default Fisica;

