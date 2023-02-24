import { createContext, ReactNode, useContext, useState } from "react";

import { StoreType, NewsContextInterface } from "../@types/index.d";

const defaultState: NewsContextInterface = {
  store: {
    user: {
      userName: "",
      emailID: "",
      uid: "",
    },
  },
  setStore: (): void => {},
};

export const NewsContext = createContext(defaultState);

const NewsContextProvider = ({ children }: { children: ReactNode }) => {
  const userName = localStorage.getItem("userName");
  const emailID = localStorage.getItem("emailID");
  const uid = localStorage.getItem("uid");

  const [store, setStore] = useState<StoreType>({
    user: {
      userName: userName || "",
      emailID: emailID || "",
      uid: uid || "",
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
