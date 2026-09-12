import React from "react";
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
    login: ()=>{};
    logout: ()=> {};
}

//2. creacion del contexto 
const AuthContext = createContext<AuthContextType | null>(null);

//3. creacion del provider: medio por el cual manejamos el estado desde otras pantallas
export const AuthProvider = ({children}: {children: React.ReactNode}) =>{
    //declaracion de las 3 propiedad del contexto
    const [user, setUser] = useState<User>(null);
    const login = ()=>{
        return '';
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

