import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";

const navbarStore = createStore({
  timeoutId: undefined,
  hamburgerState: false,
  categoryGlobalState: false,
  subCategoryGlobalState: false,
});

const colorStore = createSignal({ id: undefined, color: undefined });

const basketStore = createStore({
  items: {},
});

const welcomeInfoStatus = createStore({ status: false });

export const handleQuantityInBasket = (product, add, variant) => {
  const [, basketSet] = basketStore;

  const newProduct = { ...product };
  if (!newProduct.hasOwnProperty("quantity")) newProduct.quantity = 0;
  if (!newProduct.hasOwnProperty("variant") && variant?.id !== undefined) newProduct.variant = variant;
  newProduct.quantity += add;
  if (newProduct.quantity > 0) {
    basketSet("items", String(product.productId + "&" + newProduct?.variant?.id), newProduct);
  } else {
    basketSet("items", () => ({ [String(product.productId + "&" + newProduct?.variant?.id)]: undefined }));
  }
};

export { navbarStore, colorStore, basketStore, welcomeInfoStatus };
export const BASE_URL = import.meta.env.BASE_URL;
