import '../styles/globals.css';
import Navbar from '../components/Navbar';

import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firestore } from '../lib/firebase';

function MyApp({ Component, pageProps }) {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    let unsubscribe;

    if (user) {
      const ref = firestore.collection('users').doc(user.uid);
      unsubscribe = ref.onSnapshot((doc) => {
        setUsername(doc.data()?.username);
      })
      // unsubscribe && unsubscribe();    //For reference
    } else {
      setUsername(null);
    }

  }, [user]);


  return (
    // Temporary hardcoding, modify later
    <UserContext.Provider value={{ user:{}, username: 'collin' }}>
      <Navbar/>
      <Component {...pageProps}/>
      <Toaster/>
    </UserContext.Provider>
  );
}

export default MyApp
