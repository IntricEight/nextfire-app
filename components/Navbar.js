import Link from 'next/link'
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function Navbar({ show }) {
    const { user, username } = useContext(UserContext)

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button className="btn-logo">FEED</button>
                    </Link>
                </li>

                {/* User has signed-in && has a username*/}
                {username && (
                    <>
                        <li>
                            <Link href="/admin">
                                <button>Write Posts</button>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/${username}'}>
                                <img src={user?.photoURL} />
                            </Link>
                        </li>
                    </>
                )}

                {/* User has not signed in || has not created a username */}
                {!username && (
                    <>
                        <li>
                            <Link href="/enter">
                                <button className="btn-blue">Log in</button>
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )


}