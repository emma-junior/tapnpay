import React, { useContext, useState, type ReactNode } from "react";

type AuthContextType = {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AppContext = React.createContext<AuthContextType | undefined>(undefined);
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);

  return (
    <AppContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useAuthContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return context;
};

export default AuthProvider;
