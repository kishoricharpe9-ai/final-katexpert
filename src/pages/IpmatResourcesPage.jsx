import { PageHero } from "@/components/site/page-hero";
import { ResourcesGrid } from "@/components/site/resources-grid";
import { IPMAT_RESOURCES } from "@/lib/site-data";

function IpmatResourcesPage() {
  return (
    <main>
      <PageHero title="IPMAT" breadcrumb={["IPMAT"]} />
      <ResourcesGrid resources={IPMAT_RESOURCES} />
    </main>
  );
}

export default IpmatResourcesPage;
