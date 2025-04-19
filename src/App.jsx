import { Post } from "./components/Post.jsx";
import { Header } from "./components/Header.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import styles from "./App.module.css";
import "./global.css";

export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="John Doe" content="This is a sample post content." />
        </main>
      </div>
    </div>
  );
}
