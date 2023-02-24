export type UserDataType = {
  emailID?: string;
  password?: string;
  userName?: string;
};

// state type
export type StoreType = {
  user: {
    userName: string;
    emailID: string;
    uid: string;
  };
};

// State interface
export interface NewsContextInterface {
  store: StoreType;
  setStore: React.Dispatch<React.SetStateAction<StoreType>>;
  // setStore: (store: StoreType) => void;
}

export type NewsType = {
  author: string | null;
  content?: string | null | undefined;
  description: string | null;
  publishedAt: string | null;
  source: {
    id: string | null;
    name: string | null;
  };
  title: string | null;
  url: string | null;
  urlToImage: string | null;
};

interface ResponseProp {
  articles: NewsType[];
  status: string;
  totalResults: number;
}
