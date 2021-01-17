import React from "react";
import Home from "@view/Home/index";

export const privateRouter: Array<object> = [
  {
    path: "/",
    exact: true,
    permissionCode: "ALLOW",
    main: () => <Home />,
  },
];
