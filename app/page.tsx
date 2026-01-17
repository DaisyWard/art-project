import Image from "next/image";
import Artworks from "@/app/landing/artworks";
import Header from "@components/Header";
import type { Artwork } from "./landing/artworks";

export default function Home() {

  const artworks: Artwork[] = [];
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-neutral-900">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between  bg-white dark:bg-black sm:items-start pb-16">
       <Header />
       <Artworks artworks={artworks} />
      </main>
    </div>
  );
}
