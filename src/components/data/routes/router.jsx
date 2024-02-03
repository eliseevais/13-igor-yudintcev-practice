import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "../../../App";
import {Error404} from "../../pages/Error404";
import {Page} from "../../pages/Page";
import {dataState} from "../dataState";
import {ProtectedPage} from "../../pages/ProtectedPage";
import React from "react";
import {ProtectedRoute} from "./ProtectedRoute";
import {PageInPage} from "../../pages/PageInPage";
import {PageOne} from "../../pages/PageOne";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error404/>,
    children: [
      {
        path: '/page/:id',
        element: (
          <Page pages={dataState.pages}/>
        )
      },
      {
        path: '/',
        element: (
          <Navigate to={'/page/0'}/>
        )
      },
      {
        path: '/page/:id/pageinpage',
        element: (
          <PageInPage/>
        )
      },
      {
        path: '/page/protected',
        element: (
          <ProtectedRoute>
            <ProtectedPage/>
          </ProtectedRoute>
        )
      },
      {
        path: '/page/error',
        element: (
          <Error404/>
        )
      },
    ]
  }
])