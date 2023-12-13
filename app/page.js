import Link from "next/link";

export default function Home() {
  return (
    <div className="hero max-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-primary">GPTGenius</h1>
          <p className="py-6 text-lg leading-loose">
            GPTGenius: Your AI model companion. Powered by OpenAI. It inhences
            your conversation.
          </p>
          <Link href={"/chat"} className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
