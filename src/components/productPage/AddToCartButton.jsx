import { colorStore, handleQuantityInBasket } from "../../store";

const AddToCartButton = ({ product }) => {
  const [colorState] = colorStore;

  return (
    <button
      class="py-2 px-8 font-semibold rounded transition-[border,box-shadow] ease-linear duration-200 hover:shadow-lg active:shadow-none bg-black text-white"
      onClick={() => handleQuantityInBasket(product, 1, colorState())}
    >
      Do koszyka
    </button>
  );
};

export default AddToCartButton;
