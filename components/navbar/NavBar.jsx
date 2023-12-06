import { BrandLogo } from "../ui/branding";

import { MobileMenu } from "../ui/mobile-menu/MobileMenu";
import { NavLinks } from "./NavLinks";
import { NavLink } from "./NavLink";
import { pageLinks } from "./pageLinks";
import { Cart } from "../cart/Cart";

function NavBar({ children, className }) {
	return (
		<nav
			className="mx-auto max-w-7xl  flex items-center justify-between p-6 lg:px-8"
			aria-label="Global">
			<NavLink href="/">
				{" "}
				<BrandLogo className="fill-indigo-600" />
			</NavLink>

			<NavLinks className="hidden md:flex">
				{pageLinks.map((route) => (
					<NavLink
						key={route.id}
						className="text-sm font-semibold leading-6 text-gray-900 mx-6"
						href={route.href}>
						{route.name}
					</NavLink>
				))}
			</NavLinks>

			<div>
				<Cart />
			</div>
		</nav>
	);
}

export { NavBar };
