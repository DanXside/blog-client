import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/home";
import { ThemeProvider } from "@emotion/react";
import { AuthContext } from "./components/context/context";
import theme from "./assets/mui_styles/theme";
import Login from "./components/pages/Login/login";
import Registration from "./components/pages/Registration/registration";
import { userAPI } from "./services/UserService";
import { useAppDispatch } from "./store/store";

function App() {
  const [isAuth, setAuth] = React.useState(false);
  const {data} = userAPI.useGetUserQuery(undefined);
  const dispatch = useAppDispatch();

  React.useEffect( () => {
    if (data) {
      dispatch(userAPI.endpoints.getUser.initiate(undefined));
      setAuth(true);
    }
  }, [dispatch, data])

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={{isAuth, setAuth}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </ThemeProvider>
  )
}

export default App;
