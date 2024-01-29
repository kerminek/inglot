import { basketStore, navbarStore } from "../../store";
import categories from "../../assets/products/categories.json";
import NavbarButton from "./NavbarButton";
import { createMemo, createSignal } from "solid-js";
import SearchBar from "../header/SearchAndCartBar";

const Header = () => {
  const [store, storeSet] = navbarStore;
  let navbarRef;
  let searchRef;

  const onHamburgerClick = () => {
    if (store.hamburgerState)
      setTimeout(() => storeSet({ ...store, subCategoryGlobalState: false, categoryGlobalState: false }), 500);

    storeSet("hamburgerState", (hamburgerState) => !hamburgerState);
  };

  const navLeave = (navbarEvent) => {
    navbarEvent.srcElement.style.setProperty("--curr-H", "0");
    storeSet("timeoutId", () => setTimeout(() => navbarEvent.srcElement.style.setProperty("--curr-Delay", "1"), 150));
  };

  const backClick = () => {
    if (store.subCategoryGlobalState) storeSet("subCategoryGlobalState", () => false);
    else storeSet("categoryGlobalState", () => false);
  };

  const [searchState, searchStateSet] = createSignal(false);
  const [bagState, bagStateSet] = createSignal(false);
  const toggleSearch = (whichState) => {
    // console.log({ whichState });
    if (whichState === "bag") {
      bagStateSet((prev) => !prev);
      searchStateSet(false);
    } else if (whichState === "search") {
      searchStateSet((prev) => !prev);
      bagStateSet(false);
      if (!searchState()) searchRef?.blur();
    } else {
      searchStateSet(false);
      bagStateSet(false);
    }
  };

  const [basket] = basketStore;
  const numOfItems = createMemo(() => {
    // console.log("Recalcing num of items in the bag.");
    const totalQuantity = Object.values(basket.items).reduce((prev, currentVal) => prev + currentVal.quantity, 0);
    if (totalQuantity > 9) return 10;
    return totalQuantity;
  });

  return (
    <header
      class={
        "sticky top-0 transition-[z-index] w-full mx-auto select-none " +
        (store.hamburgerState || searchState() || bagState() ? "z-50" : "z-30 delay-300")
      }
      style={{ "-webkit-tap-highlight-color": "transparent" }}
      id="header"
    >
      <div class="bg-white/95">
        {/* <!-- upper header --> */}
        <div class="border-b p-3 px-4 md:py-3 flex items-center justify-center relative z-50 bg-white">
          <div class="lg:absolute h-6 flex items-center">
            <a href="/">
              <img
                id="logo"
                class={
                  "h-3 transition-[visibility,opacity] duration-500 " + (store.hamburgerState && "invisible opacity-0")
                }
                src="/logo.svg"
                alt="Logo"
              />
            </a>
            <div
              id={`back_button`}
              class={
                "text-5xl cursor-pointer p-2 z-50 absolute transition-[visibility,opacity] duration-300 " +
                (store.hamburgerState && store.categoryGlobalState ? "" : "invisible opacity-0")
              }
              onClick={backClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6">
                <path
                  fill-rule="evenodd"
                  d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div class="flex gap-6 ml-auto">
            {/* <!-- search icon --> */}
            <label for="searchRef" class="w-5 cursor-pointer" onClick={() => toggleSearch("search")}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </label>
            {/* <!-- shopping bag --> */}
            <button class="w-5 relative" onClick={() => toggleSearch("bag")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              {numOfItems() !== 0 && (
                <div class="absolute -right-3 -bottom-3 w-5 h-5 rounded-full bg-black text-xs font-light text-white flex items-center justify-center">
                  {numOfItems() === 10 ? "+9" : numOfItems()}
                </div>
              )}
            </button>
            {/* <!-- hamburger menu --> */}
            <button id="hamburgerMenu" class="lg:hidden w-5 relative z-50" onClick={onHamburgerClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class={"absolute top-0 w-full " + (store.hamburgerState ? "invisible" : "")}
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class={"absolute top-0 w-full " + (store.hamburgerState ? "" : "invisible")}
              >
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Search bar */}
        <SearchBar searchState={searchState} bagState={bagState} toggleSearch={toggleSearch} searchRef={searchRef} />
        {/* <!-- navbar --> */}
        <nav
          class={
            "absolute lg:top-0 z-30 lg:-z-50 lg:static lg:h-auto w-full transition-[height,visibility] duration-500 lg:visible lg:flex flex-col lg:flex-row lg:justify-evenly group/main bg-white lg:pt-0 " +
            (store.hamburgerState ? "h-screen" : "invisible h-0")
          }
          id="navbar"
          onMouseLeave={navLeave}
          ref={navbarRef}
        >
          <div class="h-full w-full lg:flex flex-row overflow-hidden">
            <div class="lg:flex-[2] flex flex-col lg:flex-row lg:justify-evenly group/blur">
              {categories.slice(0, 2).map((category, index) => (
                <>
                  <div class="hidden lg:block fixed top-0 left-0 w-full h-screen backdrop-blur-sm -z-50 opacity-0 group-hover/blur:opacity-100 transition duration-500 pointer-events-none" />
                  <NavbarButton category={category} index={index} navRef={navbarRef} />
                </>
              ))}
            </div>
            {categories.slice(2).map((category, index) => (
              <NavbarButton category={category} index={index + 2} navRef={navbarRef} />
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
