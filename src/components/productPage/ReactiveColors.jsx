import { colorStore } from "../../store";

const ReactiveColors = ({ colors }) => {
  const [curColor, colorSet] = colorStore;

  return (
    <>
      {colors.map(({ id, color }) => (
        <div class="flex flex-col sm:flex-row justify-between w-full gap-1 items-center">
          <div
            class="h-10 w-10 rounded-full cursor-pointer relative flex justify-center items-center transition-[shadow,transform] duration-200 shadow-md hover:shadow-lg hover:scale-105 active:shadow-none active:scale-95"
            style={{ "background-color": color }}
            onClick={() => colorSet({ id, color })}
          />
          <span
            class={
              "text-xs tracking-tighter cursor-default hidden sm:inline " +
              (id === curColor()?.id ? "font-bold" : "font-thin")
            }
            style="text-orientation: upright; writing-mode: vertical-lr;"
          >
            {id}
          </span>
          <span
            class={
              "text-xs tracking-tighter cursor-default sm:hidden mx-auto " +
              (id === curColor()?.id ? "font-bold" : "font-thin")
            }
          >
            {id}
          </span>
        </div>
      ))}
    </>
  );
};

export default ReactiveColors;
