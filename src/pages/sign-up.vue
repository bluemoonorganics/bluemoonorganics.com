<template>
  <Layout>
    <h1>Sign up</h1>
    <p>
      Thank you for your interest in Blue Moon Organics. Please complete the
      Sign-up form and we will contact you to confirm your first delivery date.
    </p>
    <form>
      <label>
        Full name*
        <input type="text" name="name" required/>
      </label>

      <label>
        Phone number*
        <input type="tel" name="phone" required />
      </label>

      <label>
        Address - line 1*
        <input type="text" name="address1" required />
      </label>

      <label>
        Address - line 2
        <input type="text" name="address2" />
      </label>

      <label>
        City*
        <input type="text" name="city" required />
      </label>

      <label>
        Email address*
        <input type="email" name="email" required />
      </label>

      <label>How often would you like delivery?*</label>
      <input id="everyweek" type="radio" name="frequency" value="Every week" required />
      <label class="radio" for="everyweek">Every week</label>

      <input id="everyotherweek" type="radio" name="frequency" value="Every other week" />
      <label class="radio" for="everyotherweek">Every other week</label>

      <label for="startdate">Start date*</label>
      <input type="date" name="startdate" required />

      <label for="promocode">Promo code</label>
      <input type="text" name="promocode" />

      <button type="submit">Submit</button>
    </form>
  </Layout>
</template>
