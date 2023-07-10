import { Post } from "./Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Lucas Cezar"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius rhoncus massa, vel convallis nisi pharetra vitae. Proin eget tincidunt orci. Curabitur eget turpis luctus, sollicitudin neque sed, pulvinar nunc. Sed convallis tellus et justo vulputate lacinia. Duis dignissim urna nec erat condimentum, vitae tincidunt purus commodo. Duis in viverra est. Integer molestie venenatis nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse tristique tristique scelerisque. Nunc nec dolor sed leo consectetur ultricies ut eget sem."
          />
        </main>
      </div>
    </>
  );
}

export default App;
