import React from 'react';
import Context from './Context.jsx';
import useStorage from './useStorage.js';

const StoreProvider = ({ children }) => {
  const [preco, setPreco] = useStorage('preco');
  const [nome, setNome] = useStorage('nome');

  return (
    <Context.Provider
      value={{
        preco,
        setPreco,
        nome,
        setNome,
      }}
    >
      {children}
    </Context.Provider>
  )
}


export default StoreProvider;