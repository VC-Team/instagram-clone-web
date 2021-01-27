import React from "react";
import LoginTemplate from "@view/templates/Login";
export const publicRouter: Array<object> = [
    {
        path: "/login",
        exact: true,
        permissionCode: "ALLOW",
        main: () => <LoginTemplate />,
    },
];
