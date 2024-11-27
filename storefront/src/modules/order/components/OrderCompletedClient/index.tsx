"use client"

import { Heading } from "@medusajs/ui"
import CartTotals from "@modules/common/components/cart-totals"
import Items from "@modules/order/components/items"
import OrderDetails from "@modules/order/components/order-details"
import ShippingDetails from "@modules/order/components/shipping-details"
import axios from "axios"
import { useState } from "react"

type OrderCompletedClientProps = {
  order: any // Type spécifique à définir
  isOnboarding: boolean
}

export default function OrderCompletedClient({
  order,
  isOnboarding,
}: OrderCompletedClientProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSendMessage = async () => {
    setIsLoading(true)
    setMessage("")

    try {
      // Effectuer une requête POST vers /api/sendAdminMessage avec les bons paramètres
      const response = await axios.post("/api/sendAdminMessage", {
        email: order.user?.email, // Assurez-vous que l'email de l'utilisateur est dans la commande
        userFirstname: order.user?.firstName, // Assurez-vous que le prénom de l'utilisateur est dans la commande
      })
      setMessage(response.data.message)
    } catch (error) {
      setMessage("Échec de l'envoi du message")
    } finally {
      setIsLoading(false)
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
        onClick={handleSendMessage}
        className="bg-lune py-3 mt-3 lg:mt-10 w-[300px] rounded-full text-creamy font-semibold"
        disabled={isLoading}
      >
        {isLoading ? "Chargement..." : "Confirmez les informations"}
      </button>
      {message && <p className="mt-2 text-red-500">{message}</p>}
    </div>
  )
}
