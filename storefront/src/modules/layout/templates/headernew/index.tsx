import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import { Suspense } from "react"
import { PiUserCircleGearFill } from "react-icons/pi"
import Logo_brown from "../logoBrown"

export default function HeaderNew() {
  return (
    <>
      <header className="flex justify-between fixed z-50 w-full px-20 py-16">
        <div>
          <Suspense>
            <Logo_brown />
          </Suspense>
        </div>
        <div className="flex items-center justify-center gap-2 ">
          <Suspense>
            <LocalizedClientLink
              className="hover:text-ui-fg-base text-white"
              href="/account"
              data-testid="nav-account-link"
            >
              <PiUserCircleGearFill className="size-6" />
            </LocalizedClientLink>
          </Suspense>

          <Suspense
            fallback={
              <LocalizedClientLink
                className="hover:text-ui-fg-base flex gap-2 !text-lune bg-browny/60 "
                href="/cart"
                data-testid="nav-cart-link"
              >
                Article (0)
              </LocalizedClientLink>
            }
          >
            <CartButton />
          </Suspense>
        </div>
      </header>
    </>
  )
}
