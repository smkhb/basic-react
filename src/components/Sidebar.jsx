import { PencilLine } from "@phosphor-icons/react";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div>
        <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1744868052130-325034c971b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className={styles.profile}>
          <img src="https://github.com/smkhb.png" className={styles.avatar} />
          <strong>John Doe</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine width={20} />
            Editar perfil
          </a>
        </footer>
      </div>
    </aside>
  );
}
