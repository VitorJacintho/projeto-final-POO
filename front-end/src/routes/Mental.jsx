import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Outlet, useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom'

const Mental = () => {
  return (
    <div>

      <h1>Saúde mental</h1>
      
      <div>
      A saúde mental está relacionada ao cognitivo, psicológico e ao emocional. <br/>
      É o equilíbrio entre emoções e sentimentos diante dos desafios, conflitos, <br/>
      mudanças e demais eventos da vida. Diante disso, é fundamental reconhecer <br/>
      seus limites e buscar ajuda quando necessário.<br/>
      </div>
      <br/>
      <div>
      Não há uma definição oficial para saúde mental, isso acontece pois ela é subjetiva e está <br/>
      ligada à percepção que cada indivíduo tem da sua própria realidade. Mas, de toda forma, ela<br/>
        está relacionada ao bem-estar emocional e ao equilíbrio psicológico.<br/>
      </div>
      <br/>
      <div>
        *assegurar-se que a pessoa seja avaliada por um especialista;<br/>
        *ter paciência no convívio;<br/>
        *compreender a doença, através de leituras, pesquisas, entre outros meios;<br/>
        *compreender que o indivíduo não escolheu estar ou ser assim;<br/>
        *saber ouvir e dar atenção necessária;<br/>
        *demonstrar que compreende este momento difícil;<br/>
        *respeitar cada momento do paciente, incentivando atividades, mesmo na recusa;<br/>
        *lembre-se que em situações difíceis um abraço pode ser a melhor solução;<br/>
        *não se culpe.<br/>
      </div>
      <br/>
      <div>
        Alimentos indicados para melhorar a saúde mental<br/>
        “O recomendado é priorizar alimentos naturais como frutas,<br/>
        legumes, verduras, hortaliças, grãos integrais, carnes magras<br/>
        e peixes, ovos, feijão e produtos lácteos desnatados.<br/>
        <br/>
        especialista: Miliane Rossafa<br/>
      </div>
      <br/>
      <div>
        48 3045.7949(número do whatsAPP)<br/>
        Rua Princesa Isabel, 213, Centro - Criciuma - SC<br/>
      </div>
      <br/>
      <div>
      EXERCICIOS: YOGA
      </div>
    </div>
  );
};

export default Mental;

