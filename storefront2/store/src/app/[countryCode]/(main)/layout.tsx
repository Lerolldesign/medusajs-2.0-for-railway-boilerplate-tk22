import { Metadata } from "next";

import Nav from "@/app/modules/layout/template/nav";
import { getBaseURL } from "../../../lib/util/env";

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
};

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      {props.children}
    </>
  );
}
