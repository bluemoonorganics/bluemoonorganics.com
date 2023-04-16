import Link from "next/link";

import { getDeliveryAreas } from "../lib/api";

export async function getStaticProps() {
  return {
    props: {
      deliveryAreas: getDeliveryAreas(),
    },
  };
}

function DeliveryAreas({ deliveryAreas }) {
  return (
    <div>
      <h1>Delivery Areas</h1>
      {deliveryAreas.map((area) => (
        <div>
          <Link key={area.title} href={`/${area.title.replace(" ", "-")}`}>
            {area.title}
          </Link>
        </div>
      ))}

      <p>
        A local family business since 1997, Blue Moon Organics delivers fresh
        100% Certified Organic Fruits and Vegetables right to your door.
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
        We also offer <Link href="/groceries">grocery items</Link> and high
        quality <Link href="/pet-food">Pet Food</Link>. Call Blue Moon Organics
        today, or <Link href="/sign-up">SIGN UP</Link> right now!
      </p>
      <p>Antal, Jessy and Kelly Boros</p>
    </div>
  );
}

export default DeliveryAreas;
