import { stripe } from "@/lib/stripe";
async function POST(req, { params }) {
  const prices = await stripe.prices.list();
  return Response.json(prices);
}

export { POST };
