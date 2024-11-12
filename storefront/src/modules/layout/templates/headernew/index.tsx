import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import { Suspense } from "react"
import Logo_brown from "../logoBrown"

export default function HeaderNew() {
  return (
    <>
      <header className="flex justify-between fixed z-50 w-full p-20">
        <Suspense>
          <Logo_brown />
        </Suspense>

        <Suspense
          fallback={
            <LocalizedClientLink
              className="hover:text-ui-fg-base flex gap-2"
              href="/cart"
              data-testid="nav-cart-link"
            >
              Cart (0)
            </LocalizedClientLink>
          }
        >
          <CartButton />
        </Suspense>
      </header>
    </>
  )
}
