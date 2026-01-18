export const metadata = {
  title: "Digital Magazine",
  description: "Explore the latest issue of the digital magazine.",
};

export default function MagazinePage() {
  const embedUrl = process.env.NEXT_PUBLIC_MAGAZINE_EMBED_URL;

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
          <span className="text-soft-lavender">Digital</span> Magazine
        </h1>
        <p className="font-sans text-center text-gray-300 mb-8">
          A curated publication of projects, research, and creative work.
        </p>

        {embedUrl ? (
          <div className="glass-strong rounded-lg border border-white/10 overflow-hidden">
            <iframe
              src={embedUrl}
              title="Digital Magazine"
              className="w-full h-[75vh]"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
          </div>
        ) : (
          <div className="glass rounded-lg border border-white/10 p-6">
            <p className="font-sans text-gray-300">
              To embed your Canva magazine, publish it to the web in Canva and copy the embed URL.
              Then set <span className="font-mono">NEXT_PUBLIC_MAGAZINE_EMBED_URL</span> in your environment.
            </p>
            <div className="mt-4">
              <ol className="list-decimal list-inside text-gray-300 space-y-1 font-sans">
                <li>In Canva, choose Share → More → Embed, then copy the URL.</li>
                <li>Set an environment variable: <span className="font-mono">NEXT_PUBLIC_MAGAZINE_EMBED_URL</span> to that URL.</li>
                <li>Restart the dev server to apply changes.</li>
              </ol>
            </div>
          </div>
        )}

        <div className="text-center mt-6">
          <a
            href={embedUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 border-2 border-sharp border-thick border-soft-lavender text-soft-lavender font-mono text-sm hover:text-white hover:border-white transition-colors"
          >
            Open in new tab
          </a>
        </div>
      </div>
    </main>
  );
}
