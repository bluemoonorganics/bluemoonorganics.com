import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { getDeliveryAreas } from "../lib/api";

export async function getStaticPaths() {
  const files = fs.readdirSync("content/pages");
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const file = fs.readFileSync(`content/pages/${slug}.md`, "utf8");
  const { data, content } = matter(file);
  const processedContent = await remark().use(html).process(content);
  const htmlContent = processedContent.toString();

  return {
    props: {
      title: data.title,
      content: htmlContent,
      deliveryAreas: getDeliveryAreas()
    },
  };
}

const Page = ({title, content }) => {
  return (
    <div className="content">
      <h1>{ title }</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Page;
