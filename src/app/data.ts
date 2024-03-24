export interface Lesson {
  pk: string;
  slug?: string; // less need for global uniqueness if its always accesses within a collection
  name: string;
  description: string;
  content: string;
  collection: string;
}

export interface Collection {
  pk: string;
  slug?: string;
  name: string;
  description: string;
  lessons: Lesson[];
}

// load the data from data.json into a variable called data
export const data = require("../../data/data.json") as {
  collections: Collection[];
};

export const lessonForPk = (collection: Collection, pk: string) => {
  const lesson = collection.lessons.find((lesson) => lesson.pk === pk);
  if (lesson) {
    return lesson;
  }

  return null;
};

export const lessonForSlug = (collection: Collection, slug: string) => {
  const lesson = collection.lessons.find((lesson) => lesson.slug === slug);
  if (lesson) {
    return lesson;
  }

  return null;
};

export const collectionForPk = (pk: string) => {
  return data.collections.find((collection) => collection.pk === pk);
};

export const collectionForSlug = (slug: string) => {
  return data.collections.find((collection) => collection.slug === slug);
};
