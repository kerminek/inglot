import { handleQuantityInBasket } from "../../store";

const InlineProduct = ({ item, isSearchRes = true }) => {
  return (
    <WrapperTag
      isLink={isSearchRes}
      item={item}
      class={
        `my-2 py-2 pr-2 flex items-center gap-1 md:gap-4 group/searchRes transition-[border] justify-between ` +
        (isSearchRes && "sm:hover:border-l-8 cursor-pointer")
      }
      style={{ "border-color": item.mainColor }}
      // href={isSearchRes ? "/product/" + item?.productId : undefined}
    >
      <WrapperTag isLink={!isSearchRes} item={item} class="flex gap-4 items-center">
        <div class="w-14 h-14 flex-shrink-0">
          <img src={item.image} alt="" loading="lazy" />
        </div>
        <div>
          <p class="">{item.name}</p>
          {item?.variant && (
            <p
              class="whitespace-nowrap text-xs font-thin border-l-4 pl-2"
              style={{ "border-color": item?.variant?.color }}
            >
              {item?.variant?.id}
            </p>
          )}
        </div>
      </WrapperTag>
      {!isSearchRes && (
        <div class="flex flex-col md:flex-row items-end md:items-center gap-1 md:gap-4">
          <p class="whitespace-nowrap font-extralight">{item.price} zł</p>
          <div
            class="flex flex-col items-center border rounded-md ml-auto min-w-24 border-black"
            // style={{ "border-color": item.mainColor }}
          >
            <div class="flex text-center">
              <button
                class="px-2 text-2xl font-thin flex items-center justify-center touch-manipulation"
                onClick={() => handleQuantityInBasket(item, -1)}
              >
                <div class="w-4 h-4">
                  {item.quantity > 1 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  ) : (
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
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  )}
                </div>
              </button>
              {/* <p>1</p> */}
              <div
                class="w-8 flex items-center border-x flex-1 border-black"
                //  style={{ "border-color": item.mainColor }}
              >
                <p class="text-center mx-auto">{item.quantity}</p>
              </div>
              <button
                class="px-2 text-2xl font-thin flex items-center justify-center touch-manipulation"
                onClick={() => handleQuantityInBasket(item, 1)}
              >
                <div class="w-4 h-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </WrapperTag>
  );
};

const WrapperTag = ({ children, isLink, item, ...props }) => {
  if (isLink)
    return (
      <a {...props} href={"/product/" + item?.productId}>
        {children}
      </a>
    );
  return <div {...props}>{children}</div>;
};

export default InlineProduct;
