import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";

async function POST(request) {
	// MAKE SURE TO COPY THE PRICE ID INTO THE CHECKOUT FORM COMPONENT
	// Path: component/CheckoutForm.jsx
	const body = await request.formData();
	const price = body.get("price");
	const quantity = 1;

	//Create Checkout Sessions from body params.
	const checkoutSession = await stripe.checkout.sessions.create({
		mode: "payment",
		line_items: [
			{
				price,
				quantity,
			},
		],
		success_url: `${headers().get("origin")}/success`,
		cancel_url: `${headers().get("origin")}/canceled`,
		automatic_tax: { enabled: true },
	});

	// redirect(checkoutSession.url)
	return Response.redirect(checkoutSession.url);
	//return Response.json({ message: "trying" });
}

export { POST };
