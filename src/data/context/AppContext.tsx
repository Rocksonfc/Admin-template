import { createContext } from "react";
import React from 'react';


type Tema = 'dark' | '' 

interface AppContextType {
    tema?: string | null;
    alternarTema?: () => void
    
}

const AppContext = createContext<AppContextType>({})



interface AppProviderProps {
    children: React.ReactNode;
}

export function AppProvider(props: AppProviderProps) {

    const [tema, setTema] = React.useState<Tema>('dark');

    function alternarTema() {
        console.log('alternarTema...')
        setTema(tema === 'dark' ? '' : 'dark');
    }
    return (
        <AppContext.Provider value={{
            tema,
            alternarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
