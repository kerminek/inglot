import allProducts from "../../assets/products/allProducts.json";
import { basketStore } from "../../store";
import InlineProduct from "./InlineProduct";

const SearchBar = ({ searchState, bagState, toggleSearch, searchRef }) => {
  const [basket] = basketStore;

  return (
    <div
      class={
        "w-full absolute transition-[opacity,visibility] duration-300 " +
        (searchState() || bagState() ? "opacity-100" : "h-0 -z-10 opacity-0")
      }
    >
      <div class={"overflow-hidden absolute top-full left-0 w-full"}>
        <div
          class={
            "max-h-[calc(100vh-49px)] overflow-y-scroll overscroll-contain " +
            (!(searchState() || bagState()) && "invisible h-0")
          }
        >
          <div
            class={
              "fixed top-0 left-0 w-full h-screen bg-white/80 backdrop-blur-sm -z-50 transition-[visibility] cursor-pointer " +
              (searchState() || bagState() ? "" : "invisible")
            }
            onClick={toggleSearch}
          />
          {/* search bar*/}
          <div class="" hidden={!searchState() || bagState()}>
            <input
              class={"w-full px-4 sm:px-10 py-2 outline-none border-b text-xl " + (searchState() ? "" : "hidden")}
              type="text"
              id="searchRef"
              placeholder="Czego szukasz?"
              spellcheck={false}
              ref={searchRef}
            />
            <div class={"text-base font-medium text-gray-700 py-2 bg-white " + (searchState() ? "" : "hidden")}>
              <div class="px-2 sm:pl-16">
                {Object.values(allProducts)
                  .slice(0, 8)
                  .map((item) => (
                    <InlineProduct item={item} />
                  ))}
              </div>
              <p class="py-2 text-center cursor-pointer hover:underline">Zobacz więcej</p>
            </div>
          </div>
          {/* cart */}
          <div class="bg-white" hidden={!bagState() || searchState()}>
            {!Object.values(basket.items).length ? (
              <p class="text-2xl text-center py-2">Twój koszyk jest pusty</p>
            ) : (
              <div class="pl-2 sm:pl-0 py-2 mx-auto w-fit">
                <div class="">
                  {Object.values(basket.items).map((item) => (
                    <InlineProduct item={item} isSearchRes={false} />
                  ))}
                </div>
                <div class="text-xl text-center font-semibold">
                  <div class="lg:flex items-center justify-around">
                    <p>
                      Wysyłka: <span>8.90 zł</span>
                    </p>
                    <p class="py-2">
                      Razem:{" "}
                      <span>
                        {Object.values(basket.items)
                          .reduce(
                            (accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity,
                            8.9
                          )
                          .toFixed(2)}
                      </span>{" "}
                      zł
                    </p>
                  </div>
                  <button class="py-2 px-20 rounded-lg bg-black text-white">Do kasy</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
