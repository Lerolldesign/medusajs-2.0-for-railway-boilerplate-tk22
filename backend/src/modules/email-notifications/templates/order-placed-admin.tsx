import { OrderAddressDTO, OrderDTO } from "@medusajs/types/dist/order/common";
import { Hr, Img, Section, Text } from "@react-email/components";
import * as React from "react";
import { Base } from "./base";

export const ORDER_PLACED_ADMIN = "order-placed-admin";

interface OrderPlacedAdminTemplateProps {
  order: OrderDTO & {
    display_id: string;
    summary: { raw_current_order_total: { value: number } };
  };
  shippingAddress: OrderAddressDTO;
  preview?: string;
}

export const isOrderPlacedAdminTemplateData = (
  data: any
): data is OrderPlacedAdminTemplateProps =>
  typeof data.order === "object" && typeof data.shippingAddress === "object";

// The main OrderPlacedTemplate component
export const OrderPlacedAdminTemplate: React.FC<
  OrderPlacedAdminTemplateProps
> = ({ order, shippingAddress, preview = "Your order has been placed!" }) => {
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
          src="https://res.cloudinary.com/dvdup4fx9/image/upload/v1718902365/La%20Lune%20Curieuse/Mailing/logo_long_uhz2ni.png"
          width="360"
          height="109"
          alt="La Lune Curieuse"
          style={{ margin: "0 auto", display: "block" }}
        />
      </Section>

      {/* Order details */}
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
          Félicitations 🍻
        </Text>

        <Text style={{ margin: "0 0 15px" }}>Bonjour Madame la Tapissière</Text>

        <Text style={{ margin: "0 0 30px" }}>
          Vous avez une nouvelle commande à expédier à{" "}
          {shippingAddress.first_name} {shippingAddress.last_name}.
        </Text>

        {/* Order summary */}
        <Text
          style={{ fontSize: "18px", fontWeight: "bold", margin: "0 0 10px" }}
        >
          Résumé
        </Text>
        <Text style={{ margin: "0 0 5px" }}>Order ID: {order.display_id}</Text>
        <Text style={{ margin: "0 0 5px" }}>
          Date: {new Date(order.created_at).toLocaleDateString()}
        </Text>
        <Text style={{ margin: "0 0 20px" }}>
          Total: {order.summary.raw_current_order_total.value}{" "}
          {order.currency_code}
        </Text>

        <Hr style={{ margin: "20px 0" }} />

        {/* Shipping address */}
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

        {/* Order items */}
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
          Service créé avec ❤️ par //// Leroll Design
        </Text>
      </Section>
    </Base>
  );
};

// Preview data for OrderPlacedTemplate
export const OrderPlacedAdminTemplatePreviewProps = {
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
};

export default OrderPlacedAdminTemplate;
