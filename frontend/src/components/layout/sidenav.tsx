import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/sidenav.module.scss";
import NavLinks from "../navlinks";

const SideNav: React.FC = () => {
  return (
    <div className={styles.sidenav}>
      <Link className={styles.logolink} href="/dashboard">
        <div className={styles.logo}>
          <Image src="/images/unis-logo.svg" alt="Unis Logo" width="140" height="70"/>
        </div>
      </Link>
      <div className={styles.navlink}>
        <NavLinks />
        <div className={styles.filler}></div>
      </div> 
    </div>
  );
};

export default SideNav;
