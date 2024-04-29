import React, { useState, useEffect, useContext } from 'react';
import '../App.css';
import logo from "../Images/logo.jpeg"
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import StoreContext from '../Store/Context';


function Escolha({navigation}){

    const { setPreco, preco } = useContext(StoreContext);
    const { setNome, nome } = useContext(StoreContext);

    const [formData, setFormData] = useState({
        nome: nome.nome, 
        preco: preco.preco, 
      });

    return (
      <div className="App-header">
            <div className='form'>
                <img src={logo} className='logo'/>
                <div className='label-resultado'>
                    O melhor Petshop para você é:<br/>
                    <label className='text-resultado' value = {formData.nome}>{formData.nome}</label><br/>
                    <label className='text-resultado' value = {formData.preco}>Pelo valor de R$ {formData.preco}</label>
                </div>

            </div>
      </div>
        
        
  );
}

export default Escolha;