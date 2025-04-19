import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/smkhb.png" />
          <div className={styles.authorInfo}>
            <strong>Samuel Bernardo</strong>
            <span>Dev Junior</span>
          </div>
        </div>

        <time title="10 de Janeiro às 8h" dateTime="2023-10-01 08:00">
          Publicado há uma hora
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a>
          <a href=""> #nlw</a>
          <a href=""> #rocketseat</a>
        </p>
      </div>
    </article>
  );
}
