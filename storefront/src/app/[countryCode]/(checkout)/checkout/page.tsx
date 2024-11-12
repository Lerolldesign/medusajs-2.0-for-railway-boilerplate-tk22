import { enrichLineItems, retrieveCart } from "@lib/data/cart"
import { getCustomer } from "@lib/data/customer"
import { HttpTypes } from "@medusajs/types"
import Wrapper from "@modules/checkout/components/payment-wrapper"
import CheckoutForm from "@modules/checkout/templates/checkout-form"
import CheckoutSummary from "@modules/checkout/templates/checkout-summary"

const fetchCartData = async () => {
  const cart = await retrieveCart()
  if (!cart) throw new Error("Cart not found")

  if (cart?.items?.length) {
    cart.items = (await enrichLineItems(
      cart.items,
      cart.region_id!
    )) as HttpTypes.StoreCartLineItem[]
  }

  return cart
}

export default async function Checkout() {
  const cart = await fetchCartData()
  const customer = await getCustomer()

  return (
    <div className="grid grid-cols-1 small:grid-cols-[1fr_416px] content-container gap-x-40 py-12">
      <Wrapper cart={cart}>
        <CheckoutForm cart={cart} customer={customer} />
      </Wrapper>
      <CheckoutSummary cart={cart} />
    </div>
  )
}
