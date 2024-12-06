import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Connectez-vous",
  description:
    "Connectez-vous à votre compte la Lune Curieuse pour suivre vos commandes.",
}

export default function Login() {
  return <LoginTemplate />
}
