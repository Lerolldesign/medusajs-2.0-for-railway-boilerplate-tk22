import { Metadata } from "next"

import Footer from "@modules/layout/templates/footer"
//import Nav from "@modules/layout/templates/nav"
import { getBaseURL } from "@lib/util/env"
import CookieBot from "@modules/elements/cookiebot"
import Tidio from "@modules/elements/tidio"
import HeaderNew from "@modules/layout/templates/headernew"
import Ornements from "@modules/layout/templates/ornements"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <Ornements />

      <HeaderNew />
      <CookieBot />
      {props.children}
      <Footer />
      <Tidio />
    </>
  )
}
