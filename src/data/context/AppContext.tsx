import { createContext } from "react";

interface AppContextType {
    tema: string | null;
    
}


const AppContext = createContext<AppContextType>({
    tema: null
})

interface AppProviderProps {
    children: React.ReactNode;
}

export function AppProvider(props: AppProviderProps) {
    return (
        <AppContext.Provider value={{
            tema: 'dark'
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
