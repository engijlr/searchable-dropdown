import "./SearchableDropdown.ts";
import { SearchableDropdown } from "./SearchableDropdown.ts";

const dropdown = document.getElementById("dropdown") as SearchableDropdown;
dropdown!.options = ["Apple", "Banana", "Cherry"];

//Check for setting the selected value programmatically
//dropdown.selectedOption = "Apple";

dropdown.addEventListener("onSelectOption", (event) => {
  const customEvent = event as CustomEvent<{ option: string }>;
  const selectedOption = customEvent.detail.option;

  document.getElementById("selected-option")!.textContent = selectedOption;
});
