import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Outlet, useNavigate } from 'react-router-dom';
import Logo from './Logo.png';

const Menu = () => {
    const navigate = useNavigate();
    async function irMental(){
        navigate('/Mental')
      }
    async function irFisica(){
        navigate('/Fisica')
      }
      async function irSocial(){
        navigate('/Social')
      }
      async function irCalendar(){
        navigate('/Calendar')
      }
  return (
    <div>

      <img src={Logo} alt="Logo" style={style.logo} />
      <h1 style={style.title}>Escolha seu estado de saúde:</h1>
      <br/>
      <button style={style.button} onClick={irMental}>Mental</button>
      <br/><br/>
      <button style={style.button} onClick={irFisica}>Física</button>
      <br/><br/>
      <button style={style.button} onClick={irSocial}>Social</button>
      <br/><br/>
      <button style={style.button} onClick={irCalendar}>Calendário</button>
    </div>
  );
};

export default Menu;

const style = {
  button: {
    position: 'relative',
    left: '46%',
    
    bottom: '30%',
  },
  spacing: {
    marginTop: '10px'
  },
  title:{
    paddingTop: '10px',
    paddingLeft: '340px'
  },
  logo: {
    display: 'block',
    margin: '0 auto',
    width: '200px',
  },

};