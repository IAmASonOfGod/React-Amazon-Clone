const stripe = require("stripe")("sk_test_...");

async function testConnection() {
  try {
    const response = await stripe.balance.retrieve();
    console.log("Connection successful:", response);
  } catch (error) {
    console.error("Error connecting to Stripe:", error.message);
  }
}

testConnection();
