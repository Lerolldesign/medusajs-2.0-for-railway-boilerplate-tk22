import { Metadata } from "next"

import Footer from "@modules/layout/templates/footer"
//import Nav from "@modules/layout/templates/nav"
import { getBaseURL } from "@lib/util/env"
import Logo_brown from "@modules/layout/templates/logoBrown"
import Ornements from "@modules/layout/templates/ornements"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      {" "}
      <Ornements />
      <Logo_brown />
      {props.children}
      <Footer />
    </>
  )
}
