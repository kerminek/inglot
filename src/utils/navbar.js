let currentSubCategories;
let currentLastLayer;

const header = document.getElementById("header");
const navbar = document.getElementById("navbar");
const hamburgerMenu = document.getElementById("hamburgerMenu");
const logo = document.getElementById("logo");
const categoryButtons = document.querySelectorAll(".categoryButton");
const back = document.getElementById(`back_button`);

const toggle = {
  navButtonName: (navButtonName) => {
    ["delay-100", "-translate-x-10", "opacity-0"].forEach((item) => navButtonName.classList.toggle(item));
  },
  currentSubCategories: () => {
    ["delay-100", "invisible", "opacity-0"].forEach((item) => currentSubCategories.classList.toggle(item));
  },
  movableSubCategory: (movableSubCategory) => {
    ["delay-100", "translate-x-10"].forEach((item) => movableSubCategory.classList.toggle(item));
  },
  subCategoryButton: (subCategoryButton) => {
    ["delay-100", "-translate-x-10", "opacity-0"].forEach((item) => subCategoryButton.classList.toggle(item));
  },
  currentLastLayer: () => {
    ["delay-100", "invisible", "translate-x-10", "opacity-0"].forEach((item) =>
      currentLastLayer.classList.toggle(item)
    );
  },
  logo: () => {
    ["invisible", "opacity-0"].forEach((item) => logo.classList.toggle(item));
  },
  categoryButton: (categoryButton) => {
    ["-translate-y-5", "opacity-0"].forEach((item) => categoryButton.classList.toggle(item));
  },
  navbar: () => {
    ["invisible", "h-0", "h-screen"].forEach((item) => navbar.classList.toggle(item));
  },
};

export const subCategoriesOn = (navButton, movableSubCategory) => {
  currentSubCategories = navButton.getElementsByClassName("subCategories")[0];
  // # step 1
  document.querySelectorAll(".navButtonName").forEach((navButtonName) => toggle.navButtonName(navButtonName));
  // # step 2
  toggle.currentSubCategories();
  //
  back.classList.remove("invisible", "opacity-0");
  toggle.movableSubCategory(movableSubCategory);
};

export const subCategoryOn = (subCategory) => {
  document
    .querySelectorAll(".subCategoryButton")
    .forEach((subCategoryButton) => toggle.subCategoryButton(subCategoryButton));
  currentLastLayer = subCategory.lastElementChild;
  toggle.currentLastLayer();
};

back.addEventListener("click", () => {
  if (currentLastLayer !== undefined) {
    document
      .querySelectorAll(".subCategoryButton")
      .forEach((subCategoryButton) => toggle.subCategoryButton(subCategoryButton));

    toggle.currentLastLayer();
    currentLastLayer = undefined;
  } else if (currentSubCategories !== undefined) {
    // # step 1
    document.querySelectorAll(".navButtonName").forEach((navButtonName) => toggle.navButtonName(navButtonName));
    // # step 2
    toggle.currentSubCategories();
    toggle.movableSubCategory(currentSubCategories.querySelector(".movableSubCategory"));

    back.classList.add("invisible", "opacity-0");
    currentSubCategories = undefined;
  }
});

hamburgerMenu.addEventListener("click", () => {
  [hamburgerMenu.firstElementChild, hamburgerMenu.lastElementChild].forEach((item) =>
    item.classList.toggle("invisible")
  );
  back.classList.add("invisible", "opacity-0");
  toggle.logo();
  categoryButtons.forEach((categoryButton) => toggle.categoryButton(categoryButton));
  //
  header.classList.toggle("z-30");
  header.classList.toggle("z-50");
  header.classList.toggle("delay-300");

  if (currentLastLayer !== undefined && !currentLastLayer.classList.contains("invisible")) {
    currentLastLayer.classList.add("invisible");
    currentLastLayer = undefined;
  }

  if (currentSubCategories !== undefined) currentSubCategories.classList.add("invisible");
  toggle.navbar();
});
