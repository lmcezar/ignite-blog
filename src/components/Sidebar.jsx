import { PencilLine } from "@phosphor-icons/react";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
        alt=""
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://media.licdn.com/dms/image/D4E03AQESZsaij75OIA/profile-displayphoto-shrink_100_100/0/1688649889638?e=1695254400&v=beta&t=Y4XeglpQMtBWOGe4lcvC2PQQh527JS3s7OybsHE9guY"
        />

        <strong>Lucas Cezar</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
