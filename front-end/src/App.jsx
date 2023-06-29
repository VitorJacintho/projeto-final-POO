import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Outlet, useNavigate } from 'react-router-dom';




const App = () => {
  const  [dados, setDados] = useState([]);
  const navigate = useNavigate();


    async function entrarBt(){
      navigate('/Menu')
    }



    useEffect(() => {
      const mostraDados = async () => {
        try{
          const response = await axios.get('http://127.0.0.1:8000/alunos/');
          setDados(response.data)
        }catch (error){
          console.error(error)
        }
      };
      mostraDados();
    },[]);



    const botaoExcluir = async (id) => {
      try {
        await axios.delete(`http://127.0.0.1:8000/alunos/${id}`);
        const updatedDados = dados.filter(item => item.id !== id);
        setDados(updatedDados);
      } 
      catch (error) 
      {
      console.error(error);
      }
    };




  return (
    <div style={styles.container}>
      <h1>Escolha Seu Usuario:</h1>
      {dados.map((item) => (
      <div key={item.id}>
      <p>Nome: {item.nome}</p>
      <p>Email: {item.email}</p>
      
      <button onClick={entrarBt}>Entrar com essa Conta</button>
      <br/><br/>  
      <button onClick={() => botaoExcluir(item.id)}>Deletar Conta</button>
      <br/><br/>
      </div>))}
      <br/>
        <Link to="/Cadastrar">
          <button>
            Cadastrar Nova Conta
          </button>
        </Link>
        <br/>
        
    </div>
  )
}

export default App

const styles = {
  container: {
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid black',
    padding: '20px',
    top:'50%',
  },
};