import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi';
import { signIn, useSession, signOut } from 'next-auth/client';

import styles from './styles.module.scss';

export function SignInButton() {
    const [session] = useSession();

    const user = session?.user;

    return session ? (
        <button 
            type="button"
            className={styles.signInButton}
            onClick={() => signOut()}
            >
            <FaGithub color="#04D361" />
            {user?.name || 'Olá, dev'}
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button 
            type="button"
            className={styles.signInButton}
            onClick={() => signIn('github')}
            >
            <FaGithub color="#EBA417" />
            Sign In With Github
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    )
}