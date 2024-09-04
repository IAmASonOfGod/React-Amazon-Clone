const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51PsDyoFw1mGcKjKvJ3qvRMTnw0Ekct0oLRo7oAUtAN8q15oSzBo9D9EFNVzg90FOhgcBq9hIJHPS7bTp1wQsjhtM00X7oYtdN1"
);

const app = express();
app.use(express.json());
app.use(cors());

app.post("/payment/create", async (req, res) => {
  const { total } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
      payment_method_types: ["card"],
    });
    console.log("Payment Intent Response:", paymentIntent); // Log the full response
    console.log("Client Secret:", paymentIntent.client_secret); // Log just the client secret

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5001, () => console.log("Server running on port 5001"));
