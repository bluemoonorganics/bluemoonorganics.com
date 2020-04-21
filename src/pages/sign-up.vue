<template>
  <Layout>
    <h1>Sign up</h1>
    <p>
      Thank you for your interest in Blue Moon Organics. Please complete the
      Sign-up form and we will contact you to confirm your first delivery date.
    </p>
    <form>
      <label>
        Full name
        <input type="text" name="name" />
      </label>

      <label>
        Phone Number
        <input type="tel" name="phone" />
      </label>

      <label>
        Address
        <input type="text" name="address1" />
      </label>
      <label>
        Address - Line 2
        <input type="text" name="address2" />
      </label>

      <label>
        City
        <input type="text" name="city" required />
      </label>

      <label>
        E-mail Address
        <input type="email" name="email" required />
      </label>

      <label>How often would you like delivery?</label>

      <input id="everyweek" type="radio" name="frequency" value="Every week" required />
      <label for="everyweek">Every week</label>

      <input id="everyotherweek" type="radio" name="frequency" value="Every other week" />
      <label for="everyotherweek">Every other week</label>

      <label for="startdate">Start Date</label>
      <input type="date" name="startdate" required />

      <label for="promocode">Promo Code</label>
      <input type="text" name="promocode" />
    </form>
  </Layout>
</template>
