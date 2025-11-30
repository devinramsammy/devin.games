import HomeActionBar from "./components/HomeActionBar";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground relative pb-20">
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-4">shadcn next.js</h1>
      </main>
      <HomeActionBar />
    </div>
  );
}
