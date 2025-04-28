import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((prevCount) => prevCount + 1);
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/smkhb.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Samuel Bernardo</strong>
              <time title="10 de Janeiro às 8h" dateTime="2023-10-01 08:00">
                Publicado há uma hora
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
