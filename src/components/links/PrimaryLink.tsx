import * as React from "react"

import type {
	UnstyledLinkProps,
} from "@/components/links/UnstyledLink"
import UnstyledLink from "@/components/links/UnstyledLink"
import { cn } from "@/lib/utils"

export const PrimaryLinkVariant = ["primary", "basic"] as const
type PrimaryLinkProps = {
	variant?: (typeof PrimaryLinkVariant)[number];
} & UnstyledLinkProps

const PrimaryLink = React.forwardRef<HTMLAnchorElement, PrimaryLinkProps>(
	({ className, children, variant = "primary", ...rest }, ref) => {
		return (
			<UnstyledLink
				ref={ref}
				{...rest}
				className={cn(
					"inline-flex items-center",
					"focus-visible:ring-primary-500 focus:outline-hidden focus-visible:rounded-sm focus-visible:ring-3 focus-visible:ring-offset-2",
					"font-medium",
					//#region  //*=========== Variant ===========
					variant === "primary" && [
						"text-primary-500 hover:text-primary-600 active:text-primary-700",
						"disabled:text-primary-200",
					],
					variant === "basic" && [
						"text-black hover:text-gray-600 active:text-gray-800",
						"disabled:text-gray-300",
					],
					//#endregion  //*======== Variant ===========
					className
				)}
			>
				{children}
			</UnstyledLink>
		)
	}
)

export default PrimaryLink
