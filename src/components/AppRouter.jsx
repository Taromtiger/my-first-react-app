import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../context";
import { publicRoutes, privateRoutes } from "../router/routes";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {

  const { isAuth, isLoading } = useContext(AuthContext);
  console.log(isAuth);

  if (isLoading) {
    return <Loader />
  }

  return (

    isAuth

      ?
      <Routes>

        {privateRoutes.map(route =>

          <Route
            element={<route.element />}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        )}

        < Route path="*" element={<Navigate to="/posts" />} />

      </Routes >

      :
      <Routes>

        {publicRoutes.map(route =>

          <Route
            element={<route.element />}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        )}

        < Route path="*" element={<Navigate to="/login" />} />

      </Routes >

  );
};

export default AppRouter;