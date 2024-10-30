import Link from 'next/link';
import AnimeList from './anime/page';

export default function Home() {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="mt-8">
          <AnimeList />
        </div>
      </div>
    </>
  );
}
