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
