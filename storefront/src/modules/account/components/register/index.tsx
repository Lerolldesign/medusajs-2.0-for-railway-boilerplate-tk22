"use client"

import { useFormState } from "react-dom"

import { signup } from "@lib/data/customer"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import Input from "@modules/common/components/input"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(signup, null)

  return (
    <div
      className="max-w-sm flex flex-col items-center"
      data-testid="register-page"
    >
      <h1
        className="text-large-semi uppercase mb-6
      text-[6vw] md:text-[4vw] xl:text-[1.8vw] font-semibold tracking-wider  !font-lune text-lune"
      >
        Devenez membre
      </h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-4">
        La création d&apos;un compte permet de retrouvez facilement vos
        commandes et suivre les étapes de créations ou de restaurations de vos
        produits sur mesures.
      </p>
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <div className="flex gap-3">
            {" "}
            <Input
              label="Prénom"
              name="first_name"
              required
              autoComplete="given-name"
              data-testid="first-name-input"
            />
            <Input
              label="Nom"
              name="last_name"
              required
              autoComplete="family-name"
              data-testid="last-name-input"
            />
          </div>

          {/**     <Input
            label="Mobile"
            name="phone"
            type="tel"
            autoComplete="tel"
            data-testid="phone-input"
          /> */}

          <Input
            label="Email"
            name="email"
            required
            type="email"
            autoComplete="email"
            data-testid="email-input"
          />
          <Input
            label="Mot de passe"
            name="password"
            required
            type="password"
            autoComplete="new-password"
            data-testid="password-input"
          />
        </div>
        <ErrorMessage error={message} data-testid="register-error" />
        <span className="text-center text-ui-fg-base text-small-regular mt-6">
          Pour créer un compte vous devez accepter nos
          <LocalizedClientLink
            href="/documents/mentions-legales"
            className="text-lune font-semibold pl-1"
          >
            Mentions Légales
          </LocalizedClientLink>{" "}
          et{" "}
          <LocalizedClientLink
            href="/documents/cgu"
            className="text-lune font-semibold"
          >
            Conditions d&apos;utilisation
          </LocalizedClientLink>
          .
        </span>
        <div className=" mt-6 items-center flex justify-center">
          <SubmitButton className="w-full mt-6" data-testid="register-button">
            Regoignez-nous
          </SubmitButton>
        </div>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        Vous êtes déjà membre ?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline font-semibold uppercase"
        >
          Connectez-vous
        </button>
        .
      </span>
    </div>
  )
}

export default Register
