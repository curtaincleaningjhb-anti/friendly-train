import { notFound } from "next/navigation";
import { EditorialDetailPage, buildEditorialMetadata } from "../../editorial-detail-page";
import { editorialPages, findEditorial } from "../../editorial-content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return editorialPages.filter((page) => page.path.startsWith("/guides/")).map((page) => ({ slug: page.path.split("/").at(-1)! }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const entry = findEditorial("guides", slug);
  return entry ? buildEditorialMetadata(entry) : {};
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const entry = findEditorial("guides", slug);
  if (!entry) notFound();
  return <EditorialDetailPage entry={entry} />;
}
