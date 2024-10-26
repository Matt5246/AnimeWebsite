import { Fragment } from "react";
import Link from "next/link";

export default function Home() {
	return (
		<Fragment>
			<div className="container mx-auto p-4">
				<h1 className="text-4xl font-bold mb-4">Welcome to AnimeWebsite</h1>
				<p className="mb-4">Discover your favorite anime and more!</p>
				<Link href="/explore">
					Explore Now
				</Link>
				<div className="mt-8">
				</div>
			</div>
		</Fragment>
	);
}
