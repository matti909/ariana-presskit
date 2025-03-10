import Hero from "./sections/Hero";
import Bio from "./sections/Bio"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center gap-16 font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Bio />
    </div>
  );
}
