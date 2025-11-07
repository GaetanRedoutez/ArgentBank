import { Provider } from "react-redux";
import store from "../features/store";

export const ReduxProviders = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
