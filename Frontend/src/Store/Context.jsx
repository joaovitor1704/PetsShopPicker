
import { createContext } from 'react';

const StoreContext = createContext({
  preco: null,
  setPreco: () => {},
  nome: null,
  setNome: () => {},
});

export default StoreContext;
