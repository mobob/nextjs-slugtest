import {
  collectionForSlug,
  collectionForPk,
  lessonForSlug,
  lessonForPk,
} from "@/app/data";
import { Header } from "@/components/header";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { collectionSlug: string; lessonSlug: string };
}) {
  // believe it or not, this shouldn't be "reloading" it - next should cache all fetches
  // that happen on the same page load...  worth testing, but i did read about it ;)

  const collection =
    collectionForSlug(params.collectionSlug) ||
    collectionForPk(params.collectionSlug);

  if (!collection) {
    return <div>Collection not found</div>;
  }

  const lesson =
    lessonForSlug(collection, params.lessonSlug) ||
    lessonForPk(collection, params.lessonSlug);

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <section className="p-4 font-bold">
      <Header
        breadcrumbs={[
          { label: collection.name, href: `/${collection.slug}` },
          { label: lesson.name, href: `/${collection.slug}/${lesson.slug}` },
          { label: "Edit", href: `/${collection.slug}/${lesson.slug}/edit` },
        ]}
      />
      <nav></nav>

      {children}
    </section>
  );
}
