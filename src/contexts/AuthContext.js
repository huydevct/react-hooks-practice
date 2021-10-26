import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    //State
    const [isAuthenticated, setAuthentication] = useState(false);

    const toggleAuth = () => {
        setAuthentication(!isAuthenticated)
    }

    useEffect(() => {
        alert(isAuthenticated ? 'Login successful' : 'You are logout. Please login to see todos.')
    }, [isAuthenticated])

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