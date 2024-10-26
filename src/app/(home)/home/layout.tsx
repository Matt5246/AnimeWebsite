import { Inter } from "next/font/google"

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main>

			{children}
		</main>
	);
}
