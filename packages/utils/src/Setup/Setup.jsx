import { StrictMode } from "react";
import { ToastContainer } from "react-toastify";
import { CLRouterProvider } from "@antopolis/admin-component-library/dist/helper";
import { ThemeProvider, AuthContextProvider } from "@antopolis/admin-component-library/dist/contexts";
import "react-toastify/dist/ReactToastify.min.css";
import "@antopolis/admin-component-library/dist/index.css";
import { Toaster } from "sonner";

const Setup = ({ routes }) => {
  return (
    <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AuthContextProvider>
          <CLRouterProvider router={routes} />
          <Toaster richColors />
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition="slide"
          />
        </AuthContextProvider>
      </ThemeProvider>
    </StrictMode>
  );
};


export default Setup;
