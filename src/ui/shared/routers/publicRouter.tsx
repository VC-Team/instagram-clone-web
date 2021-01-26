import React from "react";
import LoginPage from "@view/pages/Login/index";
import { Redirect } from "react-router";
export const publicRouter: Array<object> = [
    {
        path: "/",
        exact: true,
        permissionCode: "ALLOW",
        main: () => <Redirect to="/login" />,
    },
    {
        path: "/login",
        exact: true,
        permissionCode: "ALLOW",
        main: () => <LoginPage />,
    },
];
