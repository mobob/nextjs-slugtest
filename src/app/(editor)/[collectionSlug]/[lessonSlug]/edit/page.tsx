import {
  collectionForPk,
  collectionForSlug,
  lessonForPk,
  lessonForSlug,
} from "@/app/data";

export default async function LessonEditorPage(props: {
  params: { collectionSlug: string; lessonSlug: string };
}) {
  const collection =
    collectionForSlug(props.params.collectionSlug) ||
    collectionForPk(props.params.collectionSlug);

  if (!collection) {
    return <div>Collection not found</div>;
  }

  const lesson =
    lessonForSlug(collection, props.params.lessonSlug) ||
    lessonForPk(collection, props.params.lessonSlug);

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold">{lesson.name}</h1>
      <p className="text-gray-600">{lesson.description}</p>
      <p className="mt-4">{lesson.content}</p>
    </div>
  );
}
