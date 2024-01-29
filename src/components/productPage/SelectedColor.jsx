import { onCleanup, onMount } from "solid-js";
import { colorStore } from "../../store";

const SelectedColor = ({ firstColor }) => {
  const [color, colorSet] = colorStore;
  onMount(() => colorSet(firstColor));
  onCleanup(() => colorSet({ id: undefined, color: undefined }));

  return (
    <>
      {firstColor?.id && color()?.id && (
        <p class="font-light">
          Kolor:{" "}
          <span class="font-semibold border-r-8 pr-1" style={{ "border-color": color().color }}>
            {color().id}
          </span>
        </p>
      )}
    </>
  );
};

export default SelectedColor;
