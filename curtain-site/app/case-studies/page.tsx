import { notFound } from "next/navigation";
import { EditorialDetailPage, buildEditorialMetadata } from "../editorial-detail-page";
import { findEditorialByPath } from "../editorial-content";

const entry = findEditorialByPath("/case-studies");

export const metadata = entry ? buildEditorialMetadata(entry) : {};

export default function CaseStudiesPage() {
  if (!entry) notFound();
  return <EditorialDetailPage entry={entry} />;
}
