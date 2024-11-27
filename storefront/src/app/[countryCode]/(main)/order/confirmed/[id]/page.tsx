import { Metadata } from "next"

import { enrichLineItems } from "@lib/data/cart"
import { retrieveOrder } from "@lib/data/orders"
import OrderCompletedTemplate from "@modules/order/templates/order-completed-template"
import { notFound } from "next/navigation"

type Props = {
  params: { id: string }
}

async function getOrder(id: string) {
  const order = await retrieveOrder(id)

  if (!order) {
    return
  }

  const enrichedItems = await enrichLineItems(order.items, order.region_id!)

  return {
    ...order,
    items: enrichedItems,
  } as unknown as any
}

export const metadata: Metadata = {
  title: "Commande confirmée",
  description: "Vos achat s'est bien passé",
}

async function sendEmail(userFirstname: string) {
  try {
    const response = await fetch("/api/sendAdminMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "commande@lalunecurieuse.com",
        userFirstname,
      }),
    })
    if (!response.ok) {
      console.error("Échec de l'envoi de l'email")
    }
  } catch (error) {
    console.error("Erreur lors de l'appel à l'API:", error)
  }
}

export default async function OrderConfirmedPage({ params }: Props) {
  const order = await getOrder(params.id)
  if (!order) {
    return notFound()
  }
  // Envoyer l'email lors de la récupération de la commande
  sendEmail(order.customer_firstname || "Client")
  return <OrderCompletedTemplate order={order} />
}
