import { useState } from "react";
import { getDeliveryAreas } from "../lib/api";
import fs from "fs";
import matter from "gray-matter";
import html from "remark-html";
import { remark } from "remark";
import { rehype } from "rehype";
import rehypeSlug from "rehype-slug";
import { parse } from 'node-html-parser';

const getBoxContent = (htmlContent, boxId) => {
  try {
    const htmlDoc = parse(htmlContent.toString());
    const box = htmlDoc.getElementById(boxId).nextElementSibling;
    return box.outerHTML
  } catch (error) {
    return null;
  }
};

export async function getStaticProps() {
  const file = fs.readFileSync(`content/pages/index.md`, "utf8");
  const { content } = matter(file);
  const processedContent = await remark().use(html).process(content);
  const htmlContent = (
    await rehype().use(rehypeSlug).process(processedContent)
  ).toString();
  return {
    props: {
      deliveryAreas: getDeliveryAreas(),
      regular: getBoxContent(htmlContent, "regular-box-4200"),
      fruit: getBoxContent(htmlContent, "fruit-box-4200"),
      extras: getBoxContent(htmlContent, "extras"),
    },
  };
}

export default function Substitutions({
  deliveryAreas,
  regular,
  fruit,
  extras,
}) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    type: "Substitution",
    fullName: "",
    phone: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    deliveryDay: "",
    boxType: "",
    itemsToRemove: "",
    itemsToAdd: "",
    comments: "",
    captcha: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/submission", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      setSuccess(true);
      setError(false);
    } else {
      setSuccess(false);
      setError(true);
    }
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Substitutions</h1>

      {regular && fruit && extras && (
        <div id="extras-specials">
          <div>
            <h3>Regular Box</h3>
            <div dangerouslySetInnerHTML={{ __html: regular }} />
          </div>
          <div>
            <h3>Fruit Box</h3>
            <div dangerouslySetInnerHTML={{ __html: fruit }} />
          </div>
          <div>
            <h3>Extras</h3>
            <div dangerouslySetInnerHTML={{ __html: extras }} />
          </div>
        </div>
      )}
      {success && (
        <div className="panel--success">
          <p>Substitution submitted successfully.</p>
        </div>
      )}
      {error && (
        <div className="panel--error">
          <p>
            An error occurred: Submission was marked as spam. Please email{" "}
            <a href="mailto:info@bluemoonorganics.com">
              info@bluemoonorganics.com
            </a>{" "}
            directly.
          </p>
        </div>
      )}
      {!success && !error && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full name*</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="John Appleseed"
            required
            value={formData.fullName}
            onChange={handleInputChange}
          />

          <label htmlFor="phone">Phone number*</label>
          <input
            onChange={handleInputChange}
            value={formData.phone}
            placeholder="123-123-1234"
            type="tel"
            name="phone"
            required
          />

          <label htmlFor="address1">Address - line 1*</label>
          <input
            onChange={handleInputChange}
            value={formData.address1}
            placeholder="502 Infinite Way"
            type="text"
            name="address1"
            required
          />

          <label htmlFor="address2">Address - line 2</label>
          <input
            onChange={handleInputChange}
            value={formData.address2}
            placeholder="Unit 15"
            type="text"
            name="address2"
          />

          <label htmlFor="city">City*</label>
          <input
            onChange={handleInputChange}
            value={formData.city}
            placeholder="Coquitlam"
            type="text"
            name="city"
            required
          />

          <label htmlFor="email">Email address*</label>
          <input
            onChange={handleInputChange}
            value={formData.email}
            placeholder="john@appleseed.com"
            type="email"
            name="email"
            required
          />

          <label htmlFor="deliveryDay">Delivery day*</label>
          <input
            onChange={handleInputChange}
            value={formData.deliveryDay}
            placeholder="Monday"
            type="text"
            name="deliveryDay"
            required
          />

          <label>Box type*</label>
          <input
            id="regularBox"
            onChange={handleInputChange}
            checked={formData.boxType === "Regular box"}
            type="radio"
            name="boxType"
            value="Regular box"
            required
          />
          <label className="radio" htmlFor="regularBox">
            Regular box
          </label>

          <input
            id="fruitBox"
            onChange={handleInputChange}
            checked={formData.boxType === "Fruit box"}
            type="radio"
            name="boxType"
            value="Fruit box"
          />
          <label className="radio" htmlFor="fruitBox">
            Fruit box
          </label>

          <label htmlFor="itemsToRemove">Items to remove</label>
          <textarea
            onChange={handleInputChange}
            value={formData.itemsToRemove}
            name="itemsToRemove"
          />

          <label htmlFor="itemsToAdd">Items to add</label>
          <textarea
            onChange={handleInputChange}
            value={formData.itemsToAdd}
            name="itemsToAdd"
          />

          <label htmlFor="comments">Comments</label>
          <textarea
            onChange={handleInputChange}
            value={formData.comments}
            name="comments"
          />

          {/* the following input is a honeypot */}
          <p id="captcha">
            If you're human, don't fill this out:
            <input
              onChange={handleInputChange}
              value={formData.captcha}
              type="text"
            />
          </p>

          <button>Submit</button>
        </form>
      )}
    </div>
  );
}
