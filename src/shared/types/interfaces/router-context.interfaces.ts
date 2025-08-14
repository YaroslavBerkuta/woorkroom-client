export interface RouterContext {
  auth: {
    isAuthenticated: boolean;
  };
  setAuth: React.Dispatch<React.SetStateAction<{ isAuthenticated: boolean }>>;
}
