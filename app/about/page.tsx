// pages/about.tsx
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12 ">
      {/* Header Section */}
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-6">About mySpace</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover how mySpace helps you create a personalized digital space where you can express your unique personality, share your passions, and connect with others.
        </p>
      </header>

      {/* Features Section */}
      <section className="mt-16 space-y-12">
        <h2 className="text-3xl font-semibold text-center">Why Choose mySpace?</h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Feature 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Create a Personal Hub</h3>
            <p className="text-gray-600">
              mySpace is your own space on the internet, where you can store and showcase everything that matters to you. Whether it's your thoughts, favorite memories, or latest projects, this is your creative playground.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Easy Customization</h3>
            <p className="text-gray-600">
              No coding required! With an intuitive interface and endless customization options, you can design your mySpace to reflect your style, mood, or theme.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Connect and Share</h3>
            <p className="text-gray-600">
              Share your space with friends, family, or the world. Whether it’s a gallery of photos, a collection of your favorite quotes, or a blog of your personal thoughts, mySpace helps you stay connected.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Privacy and Security</h3>
            <p className="text-gray-600">
              We value your privacy. You have full control over who can see your content, and we use cutting-edge security measures to keep your data safe.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold">Ready to Create Your mySpace?</h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Get started today and build your personal space on the web. It’s free, easy, and fun to use. Let the world see what makes you unique.
        </p>
        <Button className="mt-6">Get Started</Button>
      </section>

      {/* Footer Section */}
      <footer className="mt-16 text-center">
        <p className="text-sm text-gray-500">&copy; 2024 mySpace. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
