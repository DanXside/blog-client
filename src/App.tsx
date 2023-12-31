import React, { useMemo } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/home";
import { ThemeProvider } from "@emotion/react";
import { AuthContext } from "./components/context/context";
import theme from "./assets/mui_styles/theme";
import Login from "./components/pages/Login/login";
import Registration from "./components/pages/Registration/registration";
import { userAPI } from "./services/UserService";
import { useAppDispatch } from "./store/store";
import DetailPost from "./components/pages/DetailPost";
import CreatePost from "./components/pages/CreatePost";

function App() {
  const [isAuth, setAuth] = React.useState(false);
  const {data} = userAPI.useGetUserQuery(undefined);
  const dispatch = useAppDispatch();

  const checkUser = useMemo(() => {
      dispatch(userAPI.endpoints.getUser.initiate(undefined));
      setAuth(true);
  }, [dispatch, data]);

  React.useEffect( () => {
    if (data && sessionStorage.getItem('token')) {
      checkUser;
    } else {
      setAuth(false);
    }
  }, [checkUser]);

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={{isAuth, setAuth}}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/post/:id" element={<DetailPost />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/post/:id/edit" element={<CreatePost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </HashRouter>
      </AuthContext.Provider>
    </ThemeProvider>
  )
}

export default App;
