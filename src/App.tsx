import PrivateLogin from "src/ui/shared/hoc/PrivateLogin"
import PublicPage from "src/ui/shared/routers/component/PublicPage"
import React, { Suspense, useEffect, useState } from "react"
import { Switch } from "react-router-dom"
import "./../src/ui/styles/styles.scss"
const PrivatePage = React.lazy(() => import("src/ui/shared/routers/component/PrivatePage"))
import useNotification from "./ui/viewModels/useNotification"
import { useSelector } from "react-redux"
import { RootState } from "@stores/index"
import useUser from "./ui/viewModels/useUser"
interface Iprops {
  privateLogin: boolean
}

const App = ({ privateLogin }: Iprops) => {
  return (
    <Switch>
      {privateLogin ? (
        <Suspense fallback={<div></div>}>
          <PrivatePage />
        </Suspense>
      ) : (
          <Suspense fallback={<div></div>}>
            <PublicPage />
          </Suspense>
        )}
    </Switch>
  )
}

export default PrivateLogin(App)
