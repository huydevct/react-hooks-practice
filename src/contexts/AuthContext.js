import { createContext, useEffect, useReducer } from "react";
import { authReducer } from "../reducers/AuthReducer";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  //State
  // const [isAuthenticated, setAuthentication] = useState(false);

  const [isAuthenticated, dispatch] = useReducer(authReducer, false);

  // const toggleAuth = () => {
  //     setAuthentication(!isAuthenticated)
  // }

  useEffect(() => {
    alert(
      isAuthenticated
        ? "Login successful"
        : "You are logout. Please login to see todos."
    );
  }, [isAuthenticated]);

  //context data
  const AuthContextData = {
    isAuthenticated,
    dispatch,
  };

  return (
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
