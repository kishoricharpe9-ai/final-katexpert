import { PdfViewerCard } from "./pdf-viewer-card";

function ResourcesGrid({ resources }) {
  return (
    <section className="bg-background py-8 sm:py-10">
      <div className="container-x mx-auto max-w-5xl px-4 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <PdfViewerCard
              key={resource.id}
              title={resource.title}
              subtitle={resource.subtitle}
              pdfUrl={resource.pdfUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { ResourcesGrid };
