// pages/index.tsx
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="container mx-auto p-6">
      <header className="text-center py-12">
        <h1 className="text-5xl font-bold mb-4">Welcome to MySpace</h1>
        <p className="text-lg text-gray-600">Your personal corner on the web for everything you love.</p>
      </header>

      <section className="text-center mt-8">
        <h2 className="text-3xl font-semibold">Create, Customize, and Share</h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Whether you’re an artist, blogger, or photographer, mySpace gives you full control over how you display your passions. Curate your space with your favorite memories, quotes, music, and artwork.
        </p>
        <Button className="mt-6">Get Started</Button>
      </section>

      <footer className="text-center mt-12">
        <p className="text-sm text-gray-500">&copy; 2024 mySpace. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
