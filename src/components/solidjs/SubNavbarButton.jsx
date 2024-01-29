import { createEffect, createSignal } from "solid-js";
import { navbarStore } from "../../store";

const SubNavbarButton = ({ item, index }) => {
  const [store, storeSet] = navbarStore;
  const [subCategoryState, subCategoryStateSet] = createSignal(false);

  createEffect(() => {
    if (!store.subCategoryGlobalState) subCategoryStateSet(false);
  });

  const subCategoryClick = () => {
    if (!store.hamburgerState) return;
    storeSet("subCategoryGlobalState", () => true);
    subCategoryStateSet(true);
  };

  return (
    <div class="min-w-[220px] flex group/sub text-start transition cursor-pointer py-2 lg:pr-10 pl-7 sm:pl-14 lg:pl-0 w-full lg:w-auto">
      <div
        class={
          "subCategoryButton lg:-translate-y-5 lg:group-hover/blur:translate-y-0 lg:delay-100 lg:group-hover:delay-200 transition-all duration-300 lg:duration-200 lg:group-hover:duration-300 w-full " +
          (store.subCategoryGlobalState ? "-translate-x-10 opacity-0" : "delay-100")
        }
        onClick={item.items.length ? subCategoryClick : undefined}
      >
        <div
          class="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition"
          style={{
            transitionDelay: `calc((var(--curr-Delay, 0) * (300 + (${30 * index}))*1ms)`,
          }}
        >
          <p class="text-2xl sm:text-3xl lg:text-xl font-semibold lg:font-medium lg:group-hover/sub:translate-x-4 transition ease-out lg:group-hover/sub:text-zinc-900">
            {item.subCategoryName}
          </p>
        </div>
      </div>
      {/* {#if item.items.length > 0} */}
      {item.items.length > 0 && (
        <div
          class={
            "bg-white transition-all lg:transition-none duration-300 lg:translate-x-0 lg:opacity-100 lg:group-hover/sub:visible cursor-default flex flex-col absolute left-0 top-0 lg:left-full w-full lg:w-auto h-full z-10 lg:pr-4 " +
            (subCategoryState() ? "delay-100" : "translate-x-10 opacity-0 invisible")
          }
        >
          {/* {#each item.items as subItem} */}
          {item.items.map((subItem) => (
            <div class="w-full group/subItem cursor-pointer p-2 pl-7 sm:pl-14 lg:pl-2 transition">
              <p class="text-2xl sm:text-3xl lg:text-base font-semibold lg:font-normal lg:group-hover/subItem:translate-x-4 transition ease-out lg:group-hover/subItem:text-zinc-900">
                {subItem.name}
              </p>
            </div>
          ))}
          {/* {/each} */}
        </div>
      )}
      {/* {/if} */}
    </div>
  );
};

export default SubNavbarButton;
