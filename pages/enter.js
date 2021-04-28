import toast from "react-hot-toast";
import { auth, googleAuthProvider } from "../lib/firebase";
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function EnterPage({ }) {
    const { user, username } = useContext(UserContext)

    return (
        <div>
            {user ? (!username ? <UsernameForm /> : <SignOutButton />) : <SignInButton />}



            <h1>Pages enter.js</h1>
            <button onClick={() => toast.success('Enter-page toast')}>Toast trigger</button>
        </div>
    )
}

function SignInButton() {
    const signInWithGoogle = async () => {
        await auth.signInWithPopup(googleAuthProvider);
    };

    return (
        <button className="btn-google" onClick={signInWithGoogle}>
            <img src={'/google.png'} /> Sign in with Google
        </button>
    );
}

function SignOutButton() {
    return (
        <button onClick={() => auth.signOut()}>
            Sign out
        </button>
    );
}

function UsernameForm() {
    return (
        null



    );
}