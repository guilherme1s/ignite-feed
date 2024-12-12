/* eslint-disable react/prop-types */
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";


export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
       "Post muito daora!"
    ]); 

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormated = new Intl.DateTimeFormat("pt-br", {
        day: "2-digit",
        month: "long",
        hour: "2-digit",
        minute: "2-digit"   
    }).format(publishedAt);

    function handleCreateNewComment() {
        event.preventDefault();
        
        setComments((prevComments) => [...prevComments, newCommentText]);

        setNewCommentText('');
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }
    
    function deleteComment(deletedComment) {
        const commentsWithoutDeletedOne = comments.filter((comment) => {
            return comment !== deletedComment;
        });
        
        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} dateTime={publishedDateFormated}>
                    {publishedDateFormated}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((line) => {
                    
                    if(line.type === "paragraph") {
                        return (
                            <p key={line.content}>
                                {line.content}
                            </p>    
                        ); 
                    } else if(line.type === "link") {
                        return (
                            <p key={line.content}>
                                <a href="#">{line.content}</a>
                            </p>  
                        );
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    value={newCommentText}
                    onChange={handleNewCommentChange} 
                    name="inputComment" 
                    placeholder="Deixe um comentário" 
                    required
                />

                <footer>
                    <button 
                        type="submit" 
                        disabled={isNewCommentEmpty}>
                            Publicar
                        </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => {
                    return (
                        <Comment 
                            onDeleteComments={deleteComment}
                            key={comment}
                            content={comment}
                        />
                    );
                })}
            </div>
        </article>
    );
}