import { useRouter } from "next/router";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { getDeliveryAreas } from "../lib/api";

export async function getStaticProps() {
  const file = fs.readFileSync(`content/pages/index.md`, "utf8");
  const { data, content } = matter(file);
  const processedContent = await remark().use(html).process(content);
  const htmlContent = processedContent.toString();

  return {
    props: {
      content: htmlContent,
      deliveryAreas: getDeliveryAreas()
    },
  };
}

const Index = ({content}) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
};

export default Index;
