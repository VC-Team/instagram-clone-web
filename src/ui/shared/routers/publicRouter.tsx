import React from "react";
import LoginPage from "@view/pages/Login/index";
export const publicRouter: Array<object> = [
    {
        path: "/login",
        exact: true,
        permissionCode: "ALLOW",
        main: () => <LoginPage />,
    },
];
