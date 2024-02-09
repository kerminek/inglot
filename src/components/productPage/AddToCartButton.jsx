import { colorStore, handleQuantityInBasket } from "../../store";

const AddToCartButton = ({ product }) => {
  let buttonRef;
  const [colorState] = colorStore;

  return (
    <button
      class="py-2 px-8 font-semibold rounded transition-[border,box-shadow] ease-linear duration-200 hover:shadow-lg active:shadow-none text-white"
      style={{ "background-color": "black" }}
      ref={buttonRef}
      onClick={() => {
        handleQuantityInBasket(product, 1, colorState());
        buttonRef.classList.add("animate-buttonClicked");

        const dotRef = document.getElementById("basketDot");
        dotRef.classList.add("animate-buttonClickedDot");
      }}
      onAnimationEnd={() => {
        buttonRef.classList.remove("animate-buttonClicked");

        const dotRef = document.getElementById("basketDot");
        dotRef.classList.remove("animate-buttonClickedDot");
      }}
    >
      Do koszyka
    </button>
  );
};

export default AddToCartButton;
