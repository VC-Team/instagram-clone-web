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
  const { notification, profile } = useSelector((state: RootState) => state)
  const { getListNotification, subcribeNotification } = useNotification(notification)
  const { getProfile } = useUser()

  useEffect(() => {
    getProfile()
  }, [])

  useEffect(() => {
    if (profile._id) {
      getListNotification(profile._id)
      subcribeNotification(profile._id)
    }
  }, [ profile._id ])

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
