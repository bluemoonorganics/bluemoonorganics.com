import { useRouter } from "next/router";
import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";

import { remark } from "remark";
import html from "remark-html";
import { getDeliveryAreas } from "../../lib/api";

export async function getStaticPaths() {
  const files = fs.readdirSync("content/delivery-areas");
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
  const file = fs.readFileSync(`content/delivery-areas/${slug}.md`, "utf8");
  const { data, content } = matter(file);
  const processedContent = await remark().use(html).process(content);
  const htmlContent = processedContent.toString();

  return {
    props: {
      deliveryArea: { title: data.title, deliveryDay: data.delivery_day },
      content: htmlContent,
      deliveryAreas: getDeliveryAreas(),
    },
  };
}

export default function DeliveryArea({ deliveryArea }) {
  return (
    <div className="content">
      <Head>
        <title>{deliveryArea.title}</title>
      </Head>
      <h1>{deliveryArea.title}</h1>
      <p>(delivery day is {deliveryArea.deliveryDay})</p>
      <p>
        A local family business since 1997, Blue Moon Organics delivers fresh
        100% Certified Organic Fruits and Vegetables right to your door in{" "}
        {deliveryArea.title} every {deliveryArea.deliveryDay}.
      </p>
      <p>
        The regular cost of a bin is $38.00, with a one-time refundable deposit
        of $20. Every week the content of your bin will be a little bit
        different, depending what is in season and what is available.
      </p>
      <p>
        We update our web-page every Friday, so you can see what is offered the
        following week, and you can make as many changes as you want. Just go on
        to our web-pages home page, check out what is offered and click on the
        “click here for substitutions” button. Fill out the form and submit it.
      </p>
      <p>
        We always try to make it $38.00, but if you order extras or go over the
        $38.00, we will e-mail you with your new total.
      </p>
      <p>
        We also offer <a href="/groceries">grocery items</a> and high quality{" "}
        <a href="/pet-food">Pet Food</a>. Call Blue Moon Organics today, or{" "}
        <a href="/sign-up">SIGN UP</a> right now!
      </p>
      <p>Antal, Jessy and Kelly Boros</p>
    </div>
  );
}
