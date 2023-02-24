import { createContext, ReactNode, useContext, useState } from "react";

interface StoreType {
  user: {
    userName: string | null;
    emailID: string | null;
    uid: string | null;
  };
}

type StoreContextType = {
  store: StoreType | null;
  setStore: React.Dispatch<React.SetStateAction<StoreType | null>>;
};

export const NewsContext = createContext<StoreContextType | null>(null);

const NewsContextProvider = ({ children }: { children: ReactNode }) => {
  const userName = localStorage.getItem("userName");
  const emailID = localStorage.getItem("emailID");
  const uid = localStorage.getItem("uid");

  const [store, setStore] = useState<StoreType | null>({
    user: {
      userName: userName || null,
      emailID: emailID || null,
      uid: uid || null,
    },
  });

  return (
    <NewsContext.Provider value={{ store, setStore }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContextProvider;

export const useNewsContext = () => {
  return useContext(NewsContext);
};
