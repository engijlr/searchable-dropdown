## Tools Used

- **Vite** — Fast and easy development server and build tool to quickly run and build the project.
- **TypeScript** — For type safety and better developer experience.
- **Lit** — I chose Lit because it was mentioned in the first interview and it fits well for building Web Components.
- **Playwright** — I picked Playwright because I’ve used it before and I’m familiar with it for writing simple interaction tests.

## Development Process

1. **Setup the project**

   - Initialized the project with Vite and TypeScript.
   - Installed Lit for building the component and Playwright for testing.

2. **Create the basic structure**

   - Defined the custom element `<searchable-dropdown>`.
   - Created the basic HTML structure for the dropdown: container, selected option, search input, and list of options.
   - Applied simple styles to have a clean base layout, without any functionality yet.(Make it look nice, without polluting the css of the rest of the page)

3. **Add dropdown open/close behavior**

   - Made the dropdown open and close when clicking the selected element.

4. **Implement option selection**

   - Enabled selecting an option by clicking it, and displayed the selected value.

5. **Make options dynamic**

   - Made the list of options dynamic by passing an array of options from outside the component.

6. **Add search functionality**

   - Added a search input to filter the list of options based on user input.

7. **Emit change event**

   - Made the component dispatch a `onSelectOption` event when the user selects an option.(Make it emit a change event when the user changes their selection)

8. **Programmatic selection**

   - Supported setting the selected value programmatically from outside the component.(Add support for handling changes to the inputs, and for setting the selected value programmatically)

9. **Basic accessibility improvements**

   - Added ARIA roles and attributes for screen reader support.(Make it screen reader friendly)

10. **Write basic tests with Playwright**

    - Wrote tests to render the component, open the dropdown, and select an option.(Add a test or two for your element to show you master that as well)

11. **Add a very simple animation**

## Resources Used

While working on this component, I checked these resources to help understand Web Components and LitElement better:

- [MDN Web Components Guide](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements) — for the fundamentals of custom elements.
- [Thinktecture: Lightweight and Fast Web Components with LitElement](https://www.thinktecture.com/en/web-components/lightweight-and-fast-web-components-with-litelement/) — for understanding how to use LitElement efficiently.
- [Lit Documentation](https://lit.dev/docs/components/overview/) — to understand Lit’s features and apply them correctly in the project.

## What I Could Have Improved

During this project, there were a few things I considered but decided not to implement fully, either due to time constraints or to avoid adding something I wasn’t fully confident about yet. Here’s a quick review:

1. **Keyboard navigation**  
   I didn’t implement keyboard navigation, even though I know it’s an important feature for accessibility. I looked into it, but the sources I found were a bit complex to understand properly in the time I had. Rather than adding something I wasn’t sure about, I preferred to leave it out for now. It's definitely a priority for me to learn more about and improve in future versions.

2. **Improved styling**  
   I kept the styling very simple. Since it was my first time building a custom component from scratch, I focused on getting the functionality right first. With a bit more time, I would love to refine the design and make it look more polished and professional.

3. **More advanced testing**  
   The tests I wrote are quite basic. Testing is not one of my strongest skills yet, which is also why I chose Playwright, I had used it before for simple tests and felt more comfortable with it. In the future, I would like to expand the test coverage, including edge cases and accessibility tests.

4. **Building the component without Lit**  
   Since Lit was mentioned in the interview, I chose to use it for this project. However, I do think it would be valuable to take the time to build a similar component without any libraries, to understand the core concepts of Web Components better. That’s something I would like to explore.

5. **Browser support checking**  
   For a library component that could be used widely, it’s important to ensure good browser compatibility. I didn’t focus on this yet, but it's definitely something to consider to make the component more robust and production-ready.

## How to Use the Project

### Setup and Run

```bash
# Clone the repository
git clone https://github.com/engijlr/searchable-dropdown.git
cd searchable-dropdown-umbraco

# Install dependencies
npm install

# Start the development server
npm run dev

# Run Playwright tests
npm run test
```
