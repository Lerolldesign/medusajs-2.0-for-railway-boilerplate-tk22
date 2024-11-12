import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
//import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
//import SideMenu from "@modules/layout/components/side-menu"
export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-0 mx-auto border-b duration-200 bg-white/0 border-ui-border-base/0 !text-lune">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          {/*   
     
       <header className="relative h-0 mx-auto border-b duration-200 bg-white/0 border-ui-border-base/0">
      <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
     
     <div className="flex-1 basis-0 h-full flex items-center">
          <div className="h-full">
            <SideMenu regions={regions} />
          </div>
        </div>*/}
          {/** 
        <div className="flex items-center h-full">
          <LocalizedClientLink
            href="/"
            className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
          >
            Medusa Store
          </LocalizedClientLink>
        </div>*/}

          <div className="flex items-center gap-x-6 h-10 flex-1 basis-0 justify-end absolute right-10 md:right-16 top-[8vh]  md:top-[8vh] !text-lune bg-browny/60 px-3 py-3 rounded-[6vw]">
            {/**    <div className="hidden small:flex items-center gap-x-6 h-full">
            {process.env.FEATURE_SEARCH_ENABLED && (
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/search"
                scroll={false}
              >
                Search
              </LocalizedClientLink>
            )}
            <LocalizedClientLink
              className="hover:text-ui-fg-base"
              href="/account"
            >
              Account
            </LocalizedClientLink>
          </div>*/}
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2 !z-50 !top-[3vh] !right-[5vh] !text-lune fixed"
                  href="/cart"
                >
                  <span className="  !text-lune">(0)</span>
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
