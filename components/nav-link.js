import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./header.module.css";

export function NavLink({ href, children }) {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} ${styles.isActive}`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
}

/* 
.isActive {
  background-repeat: no-repeat;
  background-image: linear-gradient(var(--accent), var(--accent));
  background-size: 100% 4px;
  background-position: 0 105%;
} */
