import { useOthersConnectionIds } from "../liveblocks.config";
import styles from "./Header.module.css";
import Avatar from "./Avatar";
import { COLORS_PRESENCE } from "../constants";
export default function Header() {
  const connectionIds = useOthersConnectionIds();

  return (
    <header className={styles.container}       
   
    >
      <div className={styles.container_avatars}>
        {connectionIds.map((connectionId) => (
  <Avatar
  key={connectionId}
  color={COLORS_PRESENCE[connectionId % COLORS_PRESENCE.length]}
/>        ))}
      </div>
    </header>
  );
}
