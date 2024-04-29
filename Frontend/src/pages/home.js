import React, { useState, useContext } from 'react';
import '../App.css';
import logo from "../Images/logo.jpeg"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import StoreContext from '../Store/Context';


function Formulario({navigation}){
    const navigate = useNavigate()
    const { setPreco, preco } = useContext(StoreContext);
    const { setNome, nome } = useContext(StoreContext);

    const [selectedDate, setselectedDate] = useState(null);

    const [formData, setFormData] = useState({ 
        qtdGrande: 0,
        qtdPequeno: 0,  
    });

    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        if ((formData.qtdGrande <= 0 && formData.qtdPequeno <= 0) 
            || (formData.qtdGrande < 0 || formData.qtdPequeno < 0 || isNaN(formData.qtdPequeno)
                || isNaN(formData.qtdGrande))) {
            window.alert("Entre com uma quantidade válida.");
        } else{
            console.log(formData.qtdGrande)
            console.log(formData.qtdPequeno)
            console.log(selectedDate)
            var data = selectedDate.toISOString();
            axios.post('https://localhost:7021/Petshop/'.concat(formData.qtdPequeno,"/", formData.qtdGrande), selectedDate)
            .then(response => {
                console.log(response)
                setPreco({preco: (response.data.price).toFixed(2)});
                setNome({nome: response.data.name});
                navigate("Escolha",  { replace: false });
                } )
            .catch(error => {
              console.error('Erro ao enviar dados:', error);
            });
        }
      
        event.preventDefault();
      };
    

    return (
      <div className="App-header">
        <form onSubmit={handleSubmit}>
            <div className='form'>
                <img src={logo} className='logo'/>
                <label>
                    Data desejada:<br/>
                    <DatePicker 
                        selected={selectedDate} 
                        onChange={date => setselectedDate(date)}
                        dateFormat="dd/MM/yyyy"
                        className="form-field"
                        id="birthDate"
                    />
                </label>
                
                <label>
                    Quantidade de cães pequenos:<br/>
                    <input 
                        name="qtdPequeno" 
                        className='qtdTamanho' 
                        value={formData.qtdPequeno}
                        onChange={handleInputChange} />
                </label>
                <label>
                    Quantidade de cães grandes:<br/>
                    <input 
                        name="qtdGrande" 
                        className='qtdTamanho' 
                        value={formData.qtdGrande}
                        onChange={handleInputChange} />
                </label>
                <button type="submit"> Buscar </button>
                
            </div>
        </form>
      </div>
        
        
  );
}

export default Formulario;