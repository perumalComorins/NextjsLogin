import '../styles/globals.css'
import React, { useState } from 'react';
import {UserProvider} from './UserContext';

function MyApp({ Component, pageProps }) {
  const [uname, setUname] = useState("Ramesh");
  const [islogged,setlogged] = useState(false);
  const user = {uname, setUname,islogged,setlogged};

  return <UserProvider value={user}><Component {...pageProps} /></UserProvider>
}

export default MyApp


