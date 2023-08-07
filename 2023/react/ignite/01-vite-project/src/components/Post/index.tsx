import { FormEvent, useState, InvalidEvent } from 'react';
import { format, formatDistanceToNow } from 'date-fns'; 
import { ptBR } from 'date-fns/locale';
import { Comment } from '../index';
import styles from './Post.module.css';
import { Avatar } from '@Components/index';

type Author =  {
    name: string;
    role: string;
    avatarUrl: string;
}

type Content = {
    type: 'paragraph' | 'link';
    content: string;
}

export type PostType = {
    id: number;
    author: Author;
    content: Content[];
    publishedAt: Date;
}

interface PostProps {
    post: PostType;
}

export const Post = ({ 
    post
 }: PostProps) => {
    const [newCommentText, setNewCommentText] = useState('');
    const [comments, setComments] = useState(['Post maneiro']);

    const formattedPublishedDate = format(post.publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault();

        setComments([...comments, newCommentText])

        setNewCommentText('');
    }

    function deleteComment(comment: string) {
        const updatedCommentList = comments.filter(item => item !== comment);

        setComments(updatedCommentList)
    }

    function handleNewInvalidComment(event: InvalidEvent<HTMLTextAreaElement>) {
        console.log(event.target.setCustomValidity('Esse campo é obrigatório'))
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header className={styles.postHeader}>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={formattedPublishedDate} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {post.content.map(item => {
                    if(item.type === 'paragraph') {
                        return (
                            <p key={item.content}>{item.content}</p>
                        )
                    } else if(item.type === 'link') {
                        return (
                            <p key={item.content}>
                                <a>{item.content}</a>
                            </p>
                        )
                    }
                })}
            </div>

            <form onSubmit={e => handleCreateNewComment(e)} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    required
                    onChange={e => {
                        e.target.setCustomValidity('')
                        setNewCommentText(e.target.value)
                    }} 
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onInvalid={handleNewInvalidComment}
                />

            <footer>
                <button 
                disabled={isNewCommentEmpty} 
                type='submit'>
                    Publicar
                </button>
            </footer>
            </form>

        <div className={styles.commentList}> 
            {comments.map(comment => {
                return (
                    <Comment 
                        key={comment} 
                        content={comment} 
                        onDeleteComment={deleteComment} 
                    />
                )
            })}
        </div>
             
        </article>
    )
}