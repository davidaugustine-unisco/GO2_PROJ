import SideNav from "@/components/layout/sidenav";
import styles from "@/styles/layouts/DashboardLayout.module.scss"
export const experimental_ppr = true;

export default function Layout({children}: {children: React.ReactNode}) {
	return (
	<div className={styles.main}>
	<div className={styles.sidenav}>
			<SideNav />
	</div>
	<div className={styles.children}>{children}</div>
	</div>
)
}
