import MagazineViewer from "@/components/MagazineViewer";

export const metadata = {
  title: "Digital Magazine",
  description: "Explore the latest issue of the digital magazine.",
};

const images = Array.from({ length: 14 }, (_, i) => `/magazine/${i + 1}.png`);

export default function MagazinePage() {


  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto h-[90vh] flex flex-col justify-center">
        <h1 className="font-mono text-3xl sm:text-4xl font-bold mb-6 text-center">
          <span className="text-soft-lavender">Digital</span> Magazine
        </h1>

        <MagazineViewer images={images} />
      </div>
    </main>
  );
}
