import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    //State
    const [isAuthenticated, setAuthentication] = useState(false);

    const toggleAuth = () => {
        setAuthentication(!isAuthenticated)
    }

    //context data
    const AuthContextData = {
        isAuthenticated,
        toggleAuth,
    }

    return (
        <AuthContext.Provider value={AuthContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;