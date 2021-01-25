import PrivateLogin from "src/ui/shared/hoc/PrivateLogin";
import PublicPage from "src/ui/shared/routers/component/PublicPage";
import React, { Suspense, useEffect, useState } from "react";
import { Switch } from "react-router-dom";
import "./../src/ui/styles/styles.scss"
const PrivatePage = React.lazy(() => import("src/ui/shared/routers/component/PrivatePage"));
import { io } from "socket.io-client";
interface Iprops {
  privateLogin: boolean;
}

const App = ({ privateLogin }: Iprops) => {

  useEffect(() => {
    const socket = io('http://localhost:9520', {
      reconnectionDelay: 1000,
      reconnection: true,
      transports: [ 'websocket' ],
      agent: false,
      upgrade: false,
      rejectUnauthorized: false
    });
    socket.on('connect', function (data) {
      socket.emit('client send', { client: 'message' })
      socket.on('post', (data) => {
        console.log('post data: ', data);
      })
    })
  }, [])

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
  );
};

export default PrivateLogin(App);
