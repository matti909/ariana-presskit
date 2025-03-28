import Bio from "./sections/Bio"
import Profile from "./sections/Profile"
import Path from "./sections/Path";
import styles from "./Home.module.scss"

export default function Home() {
  return (
    <div className={styles.layout}>
      <Bio />
      <Profile />
      <Path />
    </div>
  );
}
