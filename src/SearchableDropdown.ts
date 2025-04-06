import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("searchable-dropdown")
export class SearchableDropdown extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      font-family: sans-serif;
      position: relative;
    }

    .dropdown {
      border: 1px solid #ddd;
      border-radius: 4px;
      background-color: white;
      min-width: 200px;
      user-select: none;
    }

    .selected {
      padding: 10px;
      background-color: #f9f9f9;
      cursor: pointer;
      border-bottom: 1px solid #ddd;
    }

    .options {
      display: none;
      flex-direction: column;
      background-color: white;
      border: 1px solid #ddd;
      border-top: none;
      position: absolute;
      width: 100%;
      z-index: 1000;
    }
    .options.open {
      display: flex;
    }

    .search-input {
      padding: 8px 10px;
      border: none;
      border-bottom: 1px solid #ddd;
      outline: none;
      font-size: 14px;
    }

    .option {
      padding: 10px;
      cursor: pointer;
    }

    .option:hover {
      background-color: #eee;
    }
  `;

  @state()
  private open = false;
  @state() private selectedOption = "Select an option";
  @state()
  private searchTerm = "";

  //1)Open and close the dropdown
  private toggleDropdown() {
    this.open = !this.open;
  }

  //2)Select the option
  private selectOption(option: string) {
    this.selectedOption = option;
    this.open = false;
    this.searchTerm = "";
  }

  //3)Make options dynamic
  @property({ type: Array })
  options: string[] = [];

  //4)Search the options
  private handleSearch(event: InputEvent) {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value.toLowerCase();
  }

  render() {
    const filteredOptions = this.options.filter((option) =>
      option.toLowerCase().includes(this.searchTerm)
    );

    return html`<div class="dropdown">
      <div class="selected" @click=${this.toggleDropdown}>
        ${this.selectedOption}
      </div>

      <div class="options ${this.open ? "open" : ""}">
        <input
          class="search-input"
          type="text"
          placeholder="Search..."
          .value=${this.searchTerm}
          @input=${this.handleSearch}
        />
        ${filteredOptions.map(
          (option) => html`
            <div class="option" @click=${() => this.selectOption(option)}>
              ${option}
            </div>
          `
        )}
        ${filteredOptions.length === 0
          ? html`<div class="option">No results found</div>`
          : null}
      </div>
    </div>`;
  }
}
