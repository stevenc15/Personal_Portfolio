// AppContext.js
import React, {createContext, useContext, useState} from 'react';

//App context
const AppContext = createContext();

//wrapper object
export const AppProvider = ({children})=>{

  //specify usestates to be shared accross pages/components
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  //set the usestates to be available when components is within wrapper
  return (
    <AppContext.Provider value={{
      currentPage, setCurrentPage,
      menuOpen, setMenuOpen
      }}>
      {children}
    </AppContext.Provider>
  );
};


export const useApp = () => { //this is what gets imported by whatever components 
// or pages want to use these usestates, gives them access
  return useContext(AppContext);
};
