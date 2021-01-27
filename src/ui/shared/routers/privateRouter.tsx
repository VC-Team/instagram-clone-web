import React from "react";
import Home from "@view/pages/Home/index";
import ProFileTemplate from "@view/templates/Profile";

export const privateRouter: Array<object> = [
  {
    path: "/",
    exact: true,
    permissionCode: "ALLOW",
    main: () => <Home />,
  },
  {
    path: "/profile",
    exact: true,
    permissionCode: "ALLOW",
    main: () => <ProFileTemplate />,
  },
];
