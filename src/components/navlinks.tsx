"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  CommandLineIcon,
  HomeIcon,
  SwatchIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import styles from "@/styles/components/navlinks.module.scss";
import { WrenchScrewdriverIcon } from "@heroicons/react/16/solid";

const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  { name: "Bay Selection", href: "/dashboard/bay-selection", icon: SwatchIcon },
  { name: "Live", href: "/dashboard/live-video", icon: VideoCameraIcon },
  { name: "Logs", href: "/dashboard/logs-page", icon: CommandLineIcon },
  { name: "Settings", href: "/dashboard/settings", icon: WrenchScrewdriverIcon },
];

const NavLinks: React.FC = () => {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(styles.unselected, {
              [styles.selected]: pathname === link.href,
            })}
          >
            <LinkIcon className={styles.linkIcon} />
            <p className={styles.linkText}>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
