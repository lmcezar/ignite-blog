import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://media.licdn.com/dms/image/D4E03AQESZsaij75OIA/profile-displayphoto-shrink_100_100/0/1688649889638?e=1695254400&v=beta&t=Y4XeglpQMtBWOGe4lcvC2PQQh527JS3s7OybsHE9guY" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Cezar</strong>
              <time title="16 de julho as 09:10" dateTime="2023-07-16 09:10:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
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
