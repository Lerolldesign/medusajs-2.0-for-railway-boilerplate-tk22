"use client"

import { Heading } from "@medusajs/ui"
import CartTotals from "@modules/common/components/cart-totals"
import Items from "@modules/order/components/items"
import OrderDetails from "@modules/order/components/order-details"
import ShippingDetails from "@modules/order/components/shipping-details"
import { sendConfirmation } from "../../../../lib/actions"

import { useRef, useState } from "react"

type OrderCompletedClientProps = {
  order: any // Type spécifique à définir
  isOnboarding: boolean
}

export default function OrderCompletedClient({
  order,
  isOnboarding,
}: OrderCompletedClientProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    const formData = new FormData(event.currentTarget)
    const result = await sendConfirmation(formData)

    setIsSubmitting(false)

    if (result.success) {
      setMessage(result.message)
      formRef.current?.reset()
    } else {
      setMessage(result.message)
    }
  }

  return (
    <div className="flex flex-col gap-4 max-w-4xl h-full w-full py-10">
      {isOnboarding && (
        <p className="text-green-500">Onboarding activé pour cette commande.</p>
      )}

      <Heading
        level="h1"
        className="flex flex-col gap-y-3 text-ui-fg-base text-3xl mb-4"
      >
        <span>Merci!</span>
        <span>Votre commande a été passée avec succès</span>
      </Heading>

      <OrderDetails order={order} />

      <Heading level="h2" className="flex flex-row text-3xl-regular">
        Sommaire
      </Heading>

      <Items items={order.items} />
      <CartTotals totals={order} />
      <ShippingDetails order={order} />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-lune hover:bg-browny focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-creamy disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
      </button>
      {message && (
        <div
          className={`mt-4 p-2 rounded ${
            message.includes("succès")
              ? "bg-green-100 text-lune"
              : "bg-red-100 text-red-800"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  )
}
