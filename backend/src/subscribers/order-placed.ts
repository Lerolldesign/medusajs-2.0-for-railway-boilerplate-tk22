import { SubscriberArgs, SubscriberConfig } from "@medusajs/medusa";
import {
  INotificationModuleService,
  IOrderModuleService,
} from "@medusajs/types";
import { Modules } from "@medusajs/utils";
import { EmailTemplates } from "../modules/email-notifications/templates";

export default async function orderPlacedHandler({
  event: { data },
  container,
}: SubscriberArgs<any>) {
  const notificationModuleService: INotificationModuleService =
    container.resolve(Modules.NOTIFICATION);
  const orderModuleService: IOrderModuleService = container.resolve(
    Modules.ORDER
  );

  const order = await orderModuleService.retrieveOrder(data.id, {
    relations: ["items", "summary", "shipping_address"],
  });
  const shippingAddress = await (
    orderModuleService as any
  ).orderAddressService_.retrieve(order.shipping_address.id);

  try {
    await notificationModuleService.createNotifications({
      to: order.email,
      channel: "email",
      template: EmailTemplates.ORDER_PLACED,
      data: {
        emailOptions: {
          replyTo: "commande@lalunecurieuse.com",
          subject: "Votre commande est bien enregistrée",
        },
        order,
        shippingAddress,
        preview: "Merci pour votre commande!",
      },
    });
    // Envoi de l'email de confirmation à l'administrateur
    await notificationModuleService.createNotifications({
      to: "commande@lalunecurieuse.com", // L'email de l'administrateur
      channel: "email",
      template: EmailTemplates.ORDER_PLACED_ADMIN, // Vous pouvez utiliser un autre template si nécessaire
      data: {
        emailOptions: {
          replyTo: "commande@lalunecurieuse.com",
          subject: `⭐ Nouvelle commande reçue ⭐ : ${order.id}`,
        },
        order,
        shippingAddress,
        preview: `Nouvelle commande ${order.id} a été placée.`,
      },
    });
  } catch (error) {
    console.error("Error sending order confirmation notification:", error);
  }
}

export const config: SubscriberConfig = {
  event: "order.placed",
};
