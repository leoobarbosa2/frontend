import { useSession, signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss';

type SubscribeButtonProps = {
    priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
    const [session] = useSession();
    const { push } = useRouter();

    async function handleSubscription() {
        if (!session) {
            signIn('github');
            return
        }

        if(session.activeSubscription) {
            push('/posts');
            return;
        }

        try {
            const response = await api.post('/subscribe');

            const { sessionId } =  response.data;

            const stripe = await getStripeJs();

            await stripe.redirectToCheckout({ sessionId })
        } catch(err) {
            alert(err.messsage);
        }

    }

    return (
        <button
            type="button"
            className={styles.subscribeButton}
            onClick={handleSubscription}
        >
            Subscribe now
        </button>
    )
}