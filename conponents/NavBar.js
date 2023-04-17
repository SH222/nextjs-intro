import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";
export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <span className={router.path === "/" ? "active" : ""}>Home</span>
      </Link>
      <Link href="/about">
        <span className={router.path === "/active" ? "active" : ""}>About</span>
      </Link>
    </nav>
  );
}
