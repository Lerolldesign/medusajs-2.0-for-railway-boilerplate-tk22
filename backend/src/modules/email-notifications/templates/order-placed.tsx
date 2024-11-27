import { OrderAddressDTO, OrderDTO } from "@medusajs/types/dist/order/common";
import { Hr, Img, Section, Text } from "@react-email/components";
import * as React from "react";
import { Base } from "./base";

export const ORDER_PLACED = "order-placed";

interface OrderPlacedPreviewProps {
  order: OrderDTO & {
    display_id: string;
    summary: { raw_current_order_total: { value: number } };
  };
  shippingAddress: OrderAddressDTO;
}

export interface OrderPlacedTemplateProps {
  order: OrderDTO & {
    display_id: string;
    summary: { raw_current_order_total: { value: number } };
  };
  shippingAddress: OrderAddressDTO;
  preview?: string;
}

export const isOrderPlacedTemplateData = (
  data: any
): data is OrderPlacedTemplateProps =>
  typeof data.order === "object" && typeof data.shippingAddress === "object";

export const OrderPlacedTemplate: React.FC<OrderPlacedTemplateProps> & {
  PreviewProps: OrderPlacedPreviewProps;
} = ({ order, shippingAddress, preview = "Your order has been placed!" }) => {
  return (
    <Base preview={preview}>
      {/* Header */}
      <Section
        style={{
          padding: "20px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Img
          src={`https://res.cloudinary.com/dvdup4fx9/image/upload/v1718902365/La%20Lune%20Curieuse/Mailing/logo_long_uhz2ni.png`}
          width="360"
          height="109"
          alt="La Lune Curieuse"
          style={{
            margin: "0 auto",
            display: "block",
          }}
        />
      </Section>
      <Section>
        <Text
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            margin: "0 0 30px",
            padding: "0 0 20px",
          }}
        >
          Confirmation de commmande
        </Text>

        <Text style={{ margin: "0 0 15px" }}>
          Bonjour {shippingAddress.first_name} {shippingAddress.last_name},
        </Text>

        <Text style={{ margin: "0 0 30px" }}>
          Merci pour votre récente commande ! Voici les détails de votre
          commande :
        </Text>

        <Text
          style={{ fontSize: "18px", fontWeight: "bold", margin: "0 0 10px" }}
        >
          Résumé
        </Text>
        <Text style={{ margin: "0 0 5px" }}>Order ID: {order.display_id}</Text>
        <Text style={{ margin: "0 0 5px" }}>
          Date : {new Date(order.created_at).toLocaleDateString()}
        </Text>
        <Text style={{ margin: "0 0 20px" }}>
          Total: {order.summary.raw_current_order_total.value}{" "}
          {order.currency_code}
        </Text>

        <Hr style={{ margin: "20px 0" }} />

        <Text
          style={{ fontSize: "18px", fontWeight: "bold", margin: "0 0 10px" }}
        >
          Adresse de livraison
        </Text>
        <Text style={{ margin: "0 0 5px" }}>{shippingAddress.address_1}</Text>
        <Text style={{ margin: "0 0 5px" }}>
          {shippingAddress.city}, {shippingAddress.province}{" "}
          {shippingAddress.postal_code}
        </Text>
        <Text style={{ margin: "0 0 20px" }}>
          {shippingAddress.country_code}
        </Text>

        <Hr style={{ margin: "20px 0" }} />

        <Text
          style={{ fontSize: "18px", fontWeight: "bold", margin: "0 0 15px" }}
        >
          Article(s)
        </Text>

        <div
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid #ddd",
            margin: "10px 0",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#f2f2f2",
              padding: "8px",
              borderBottom: "1px solid #ddd",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Item</Text>
            <Text style={{ fontWeight: "bold" }}>Quantity</Text>
            <Text style={{ fontWeight: "bold" }}>Price</Text>
          </div>
          {order.items.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px",
                borderBottom: "1px solid #ddd",
              }}
            >
              <Text>
                {item.title} - {item.product_title}
              </Text>
              <Text>{item.quantity}</Text>
              <Text>
                {item.unit_price} {order.currency_code}
              </Text>
            </div>
          ))}
        </div>
      </Section>
      {/* Footer */}
      <Section
        style={{
          backgroundColor: "#333",
          padding: "20px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Text style={{ fontSize: "14px", margin: 0 }}>
          © {new Date().getFullYear()} La Lune Curieuse
        </Text>
        <Text style={{ fontSize: "12px", margin: 0 }}>
          3 Rue de l'Église, 21610 Chaume-et-Courchamp rue Boutique +33(0) 6 03
          03 15 20
        </Text>
      </Section>
    </Base>
  );
};

OrderPlacedTemplate.PreviewProps = {
  order: {
    id: "test-order-id",
    display_id: "ORD-123",
    created_at: new Date().toISOString(),
    email: "test@example.com",
    currency_code: "USD",
    items: [
      {
        id: "item-1",
        title: "Item 1",
        product_title: "Product 1",
        quantity: 2,
        unit_price: 10,
      },
      {
        id: "item-2",
        title: "Item 2",
        product_title: "Product 2",
        quantity: 1,
        unit_price: 25,
      },
    ],
    shipping_address: {
      first_name: "Test",
      last_name: "User",
      address_1: "123 Main St",
      city: "Anytown",
      province: "CA",
      postal_code: "12345",
      country_code: "US",
    },
    summary: { raw_current_order_total: { value: 45 } },
  },
  shippingAddress: {
    first_name: "Test",
    last_name: "User",
    address_1: "123 Main St",
    city: "Anytown",
    province: "CA",
    postal_code: "12345",
    country_code: "US",
  },
} as OrderPlacedPreviewProps;

export default OrderPlacedTemplate;
