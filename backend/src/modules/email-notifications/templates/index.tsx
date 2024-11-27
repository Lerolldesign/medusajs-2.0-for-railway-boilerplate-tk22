import { MedusaError } from "@medusajs/utils";
import { ReactNode } from "react";
import { INVITE_USER, InviteUserEmail, isInviteUserData } from "./invite-user";
import {
  ORDER_PLACED,
  OrderPlacedTemplate,
  isOrderPlacedTemplateData,
} from "./order-placed";
import {
  ORDER_PLACED_ADMIN,
  OrderPlacedAdminTemplate,
  isOrderPlacedAdminTemplateData,
} from "./order-placed-admin";

export const EmailTemplates = {
  INVITE_USER,
  ORDER_PLACED,
  ORDER_PLACED_ADMIN, // Ajout du template admin
} as const;

export type EmailTemplateType = keyof typeof EmailTemplates;

export function generateEmailTemplate(
  templateKey: string,
  data: unknown
): ReactNode {
  switch (templateKey) {
    case EmailTemplates.INVITE_USER:
      if (!isInviteUserData(data)) {
        throw new MedusaError(
          MedusaError.Types.INVALID_DATA,
          `Invalid data for template "${EmailTemplates.INVITE_USER}"`
        );
      }
      return <InviteUserEmail {...data} />;

    case EmailTemplates.ORDER_PLACED:
      if (!isOrderPlacedTemplateData(data)) {
        throw new MedusaError(
          MedusaError.Types.INVALID_DATA,
          `Invalid data for template "${EmailTemplates.ORDER_PLACED}"`
        );
      }
      return <OrderPlacedTemplate {...data} />;

    case EmailTemplates.ORDER_PLACED_ADMIN:
      if (!isOrderPlacedAdminTemplateData(data)) {
        throw new MedusaError(
          MedusaError.Types.INVALID_DATA,
          `Invalid data for template "${EmailTemplates.ORDER_PLACED_ADMIN}"`
        );
      }
      return <OrderPlacedAdminTemplate {...data} />; // Appel du template pour l'admin

    default:
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        `Unknown template key: "${templateKey}"`
      );
  }
}

export { InviteUserEmail, OrderPlacedAdminTemplate, OrderPlacedTemplate }; // Exportation du template admin
