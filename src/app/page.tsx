export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="max-w-xl px-6 text-center">
        <div className="text-sm tracking-widest text-slate-400">
          VIRTUAL LAB
        </div>
        <h1 className="mt-4 text-4xl font-semibold">
          Interactive Experiments
        </h1>
        <p className="mt-4 text-slate-300">
          Immersive virtual laboratory experiences for
          chemical engineering education.
        </p>
        <p className="mt-6 text-slate-500 text-sm">
          Platform under development.
        </p>
        <p className="mt-2 text-slate-500 text-sm">
          Contact: info@virtuallab.com
        </p>
      </div>
    </main>
  );
}