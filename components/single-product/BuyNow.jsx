import { cn } from "@/lib/utils/mergeCss";

function BuyNow({ className, priceId }) {
	return (
		<form action="/api/checkout" className={cn(" ", className)} method="POST">
			<input type="hidden" name="id" value="from dashboard" />

			<input type="hidden" name="price" value={priceId} />
			<button type="submit" value="submit">
				Buy Now
			</button>
		</form>
	);
}

export { BuyNow };
