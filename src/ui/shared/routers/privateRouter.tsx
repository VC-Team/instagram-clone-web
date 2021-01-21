import React from "react";
import Home from "@view/Home/index";
import ProFile from "@view/profile";

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
    main: () => <ProFile />,
  },
];
