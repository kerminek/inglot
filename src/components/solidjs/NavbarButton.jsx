import { createEffect, createSignal } from "solid-js";
import { navbarStore } from "../../store";
import SubNavbarButton from "./SubNavbarButton";

const NavbarButton = ({ category, index, navRef }) => {
  const { items, categoryName, categoryId } = category;
  const [store, storeSet] = navbarStore;
  //
  const [categoryState, categoryStateSet] = createSignal(false);
  createEffect(() => {
    if (!store.categoryGlobalState) categoryStateSet(false);
  });

  const emptyCategory = () => {
    navRef.style.setProperty("--curr-H", "0");
    clearTimeout(store.timeoutId);
  };

  const filledCategory = (navButtonEvent) => {
    navRef.style.setProperty(
      "--curr-H",
      String(navButtonEvent.srcElement.lastElementChild.lastElementChild.clientHeight)
    );
    navRef.style.setProperty("--curr-Delay", "0");
  };

  const mobileButtonClick = () => {
    storeSet("categoryGlobalState", () => true);
    categoryStateSet(true);
  };

  return (
    <button
      class="navButton group lg:flex-1 uppercase whitespace-nowrap bg-white text-zinc-700 w-full lg:w-auto"
      id={`navButton_${categoryId}`}
      onMouseEnter={!items.length ? emptyCategory : filledCategory}
    >
      <div
        class={
          "categoryButton py-2 pl-7 sm:pl-14 lg:pl-0 -z-50 text-2xl sm:text-3xl lg:text-sm font-semibold lg:font-light capitalize text-left lg:text-center lg:hidden w-full transition duration-300 " +
          (store.hamburgerState ? "" : "opacity-0 -translate-y-5")
        }
        style:transitionDelay={`calc(${index} * 30ms + 250ms)`}
        id={`button_${categoryId}`}
        role="button"
        onClick={items.length && mobileButtonClick}
      >
        <h3
          class={
            "navButtonName transition duration-300 " +
            (store.categoryGlobalState ? "-translate-x-10 opacity-0" : "delay-100")
          }
        >
          {categoryName}
        </h3>
      </div>
      <div class="py-2 lg:px-3 xl:px-6 z-50 text-2xl sm:text-3xl lg:text-sm font-semibold lg:font-light capitalize text-left lg:text-center hidden lg:block">
        <h3 class="group-hover:text-zinc-900 transition duration-300">{categoryName}</h3>
      </div>

      {/* {#if items.length > 0} */}
      {items.length > 0 && (
        <div
          class={
            "subCategories bg-transparent h-full lg:h-[calc(var(--curr-H,_0)_*_1px)] w-full z-50 lg:-z-30 lg:group-hover:z-10 lg:pointer-events-none lg:group-hover:pointer-events-auto transition-opacity duration-300 lg:transition-[height,visibility] lg:duration-[600ms] lg:group-hover:delay-100 absolute left-0 top-0 lg:top-[100%] flex flex-col overflow-hidden lg:opacity-100 lg:group-hover:visible cursor-default " +
            (categoryState() ? "delay-100" : "invisible opacity-0")
          }
        >
          <div class="bg-white capitalize">
            <div class="lg:container mx-auto">
              <div class="w-full lg:w-fit relative lg:p-3 lg:pr-0 lg:pb-16 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity lg:group-hover:delay-200">
                <div
                  id={`movableSubCategory_${categoryId}`}
                  class={
                    "movableSubCategory transition duration-300 lg:translate-x-0 " +
                    (categoryState() ? "delay-100" : "translate-x-10")
                  }
                >
                  {/* {#each items as item, index} */}
                  {items.map((item, index) => (
                    <SubNavbarButton item={item} index={index} />
                  ))}
                  {/* {/each} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* {/if} */}
    </button>
  );
};

export default NavbarButton;
