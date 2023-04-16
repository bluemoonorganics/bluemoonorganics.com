import { useState, useEffect } from "react";
import { getDeliveryAreas } from "../lib/api";

export async function getStaticProps() {
  return {
    props: {
      deliveryAreas: getDeliveryAreas(),
    },
  };
}

export default function SignUp() {
  const [formData, setFormData] = useState({
    type: "Signup",
    fullName: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    frequency: "",
    email: "",
    startDate: "",
    promoCode: "",
    captcha: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const storedData = sessionStorage.getItem("signupData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("signupData", JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting...");
    const response = await fetch("/api/submission", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      setSuccess(true);
      sessionStorage.removeItem("signupData");
    } else {
      setError(true);
    }
  }

  return (
    <div>
      <h1>Sign up</h1>
      <p>
        Thank you for your interest in Blue Moon Organics. Please complete the
        Sign-up form and we will contact you to confirm your first delivery
        date.
      </p>
      {success && (
        <div className="panel--success">
          <p>Thank you for signing up! We will be in touch with you shortly.</p>
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
            value={formData.fullName}
            placeholder="John Appleseed"
            type="text"
            name="fullName"
            required
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
          />

          <label htmlFor="phone">Phone number*</label>
          <input
            value={formData.phone}
            placeholder="123-123-1234"
            type="tel"
            name="phone"
            required
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />

          <label htmlFor="address1">Address - line 1*</label>
          <input
            value={formData.address1}
            placeholder="502 Infinite Way"
            type="text"
            name="address1"
            required
            onChange={(e) =>
              setFormData({ ...formData, address1: e.target.value })
            }
          />

          <label htmlFor="address2">Address - line 2</label>
          <input
            value={formData.address2}
            placeholder="Unit 15"
            type="text"
            name="address2"
            onChange={(e) =>
              setFormData({ ...formData, address2: e.target.value })
            }
          />

          <label htmlFor="city">City*</label>
          <input
            value={formData.city}
            placeholder="Coquitlam"
            type="text"
            name="city"
            required
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />

          <label htmlFor="email">Email address*</label>
          <input
            value={formData.email}
            placeholder="john@appleseed.com"
            type="email"
            name="email"
            required
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <label>How often would you like delivery?*</label>
          <input
            id="everyweek"
            type="radio"
            name="frequency"
            value="Every week"
            required
            checked={formData.frequency === "Every week"}
            onChange={(e) =>
              setFormData({ ...formData, frequency: e.target.value })
            }
          />
          <label className="radio" htmlFor="everyweek">
            Every week
          </label>

          <input
            id="everyotherweek"
            type="radio"
            name="frequency"
            value="Every other week"
            checked={formData.frequency === "Every other week"}
            onChange={(e) =>
              setFormData({ ...formData, frequency: e.target.value })
            }
          />
          <label className="radio" htmlFor="everyotherweek">
            Every other week
          </label>

          <label htmlFor="startDate">Start date*</label>
          <input
            value={formData.startDate}
            type="date"
            name="startDate"
            required
            onChange={(e) =>
              setFormData({ ...formData, startDate: e.target.value })
            }
          />

          <label htmlFor="promocode">Promo code</label>
          <input
            value={formData.promoCode}
            type="text"
            name="promoCode"
            onChange={(e) =>
              setFormData({ ...formData, promoCode: e.target.value })
            }
          />

          {/* the following input is a honeypot */}
          <p id="captcha">
            If you're human, don't fill this out:
            <input
              value={formData.captcha}
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, captcha: e.target.value })
              }
            />
          </p>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
