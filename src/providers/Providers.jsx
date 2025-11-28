import { ReduxProviders } from "./ReduxProviders";
import ToastProvider from "./ToastProvider";

export const Providers = ({ children }) => {
  return (
    <ReduxProviders>
      <ToastProvider>{children}</ToastProvider>;
    </ReduxProviders>
  );
};
