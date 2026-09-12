import React, { useContext } from "react";
import { createContext, useState } from "react";

//1. tipado del objeto principal del contexto
type User = {
    email: string;
    authToken? :string;
    sessionToken? : string;
    role?: string;
} | null

type AuthContextType ={
    user: User | null;
    login: (email: string) => boolean;
    logout: ()=> {};
}

//2. creacion del contexto 
const AuthContext = createContext<AuthContextType | null>(null);

//3. creacion del provider: medio por el cual manejamos el estado desde otras pantallas
export const AuthProvider = ({children}: {children: React.ReactNode}) =>{
    //declaracion de las 3 propiedad del contexto
    const [user, setUser] = useState<User>(null);
    const login = (email: string): boolean =>{
        const isAllowed = email.endsWith('.edu');
        if (isAllowed){
            setUser({email});
        }
        return isAllowed;
    }
    const logout = () =>{
        return '';
    }
    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

// 4. hook personalizado: exposicion del contexto a componentes de la aplicacion
export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) throw new Error("useAuth debe ser utilizado dentro de AuthProvider");
    return context;
}
