import { Avatar } from "./Avatar";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { useState } from "react";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

export interface PostTye {
  id: number;
  author: Author;
  content: Content[];
  publishedAt: Date;
}

interface PostProps {
  post: PostTye;
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState(["Ótimo post!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const formattedDate = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const dateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateComment(event: React.FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function deleteComment(comment: string) {
    const commentsWithoutDeletedOne = comments.filter((c) => {
      return c !== comment;
    });

    setComments(commentsWithoutDeletedOne);
  }

  function handleNewCommentInvalid(
    event: React.InvalidEvent<HTMLTextAreaElement>
  ) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={formattedDate} dateTime={post.publishedAt.toISOString()}>
          {dateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {post.content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
