import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';

function MyApp({ Component, pageProps }) {
  return (
    // Temporary hardcoding, modify later
    <UserContext.Provider value={{ user:{}, username: 'collin'}}>
      <Navbar/>
      <Component {...pageProps}/>
      <Toaster/>
    </UserContext.Provider>
  );
}

export default MyApp
