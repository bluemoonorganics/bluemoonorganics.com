import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export function getDeliveryAreas() {
  const files = fs.readdirSync("content/delivery-areas");
  const deliveryAreas = files.map((filename) => {
      const fileContents = fs.readFileSync(`content/delivery-areas/${filename}`, "utf8");
      const { data } = matter(fileContents);
      return {
        title: data.title,
        deliveryDay: data.delivery_day,
        slug: filename.replace(".md", "")
      };
  });
  return deliveryAreas;
}

export function getPages() {}

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
