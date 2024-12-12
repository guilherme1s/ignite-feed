/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment({ content }) {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/guilherme1s.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Guilherme Silva</strong>
                            <time 
                                title="09 de dezembro de 2024 às 08:13:30" dateTime="2024-12-09: 08:13:30">Publicado há 1 hora
                            </time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div> 

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}