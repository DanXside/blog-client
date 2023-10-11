import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home/home";
import { ThemeProvider } from "@emotion/react";
import { AuthContext } from "./components/context/context";
import theme from "./assets/mui_styles/theme";

function App() {
  const [isAuth, setAuth] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={{isAuth, setAuth}}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </AuthContext.Provider>
    </ThemeProvider>
  )
}

export default App;
