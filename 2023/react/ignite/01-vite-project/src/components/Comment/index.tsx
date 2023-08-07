import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '@Components/index';
import styles from './Comment.module.css';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export const Comment = ({ content, onDeleteComment }: CommentProps) => {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleIncreaseLikeCount() {
        setLikeCount(previousCount => previousCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/54908803?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Leonardo Barbosa</strong>
                            <time title='12 de Março as 20:13' dateTime='2023-12-04'>Publicado há 1H</time>
                        </div>
                        <button
                            onClick={handleDeleteComment} 
                            title='Deletar comentário'>
                            <Trash  size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleIncreaseLikeCount}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}