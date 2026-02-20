import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-900 text-white">
      <div className="max-w-2xl px-6 text-center">

        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/logo-horizontal.svg"
            alt="Virtual Lab Logo"
            width={250}
            height={120}
            priority
          />
        </div>

        <h1 className="mt-4 text-4xl font-semibold">
          Interactive Experiments for Chemical Engineering Education.
        </h1>

        <p className="mt-4 text-neutral-300">
          Immersive virtual laboratory experiences for
          chemical engineering education.
        </p>

        <p className="mt-6 text-neutral-500 text-sm">
          Platform under development. Stay tuned for updates!
        </p>

        <p className="mt-2 text-neutral-500 text-sm">
          Contact: hello@virtuallab.app
        </p>
      </div>
    </main>
  );
}
