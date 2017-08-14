/* global gemini: false */

const TOLERANCE_OVERRIDE_BECAUSE_OF_EDGE = 3.5;
const UNHOVER_DELAY = 500;

gemini.suite('Select', () => {
  gemini.suite('Input based select', child => {
    child.
      setUrl('/select/simple-input-based-select.html').
      setCaptureElements('[data-test=ring-select]', '[data-test=ring-popup]').
      capture('selectPopup', (actions, find) => {
        actions.click(find('[data-test=ring-input]'));
        actions.mouseMove(find('body'), {x: 800, y: 1024});
        actions.wait(UNHOVER_DELAY);
      });
  });

  gemini.suite('Select button', child => {
    child.
      setUrl('/select/select-with-a-customized-filter-and-an-add-item-button.html').
      setCaptureElements('[data-test=ring-select]').
      capture('button', (actions, find) => {
        actions.mouseMove(find('body'), {x: 800, y: 1024});
        actions.wait(UNHOVER_DELAY);
      });
  });

  gemini.suite('Select with filter', child => {
    child.
      setUrl('/select/simple-select-with-default-filter-mode-enabled.html').
      setCaptureElements('[data-test=ring-select]', '[data-test=ring-popup]').
      capture('selectPopup', (actions, find) => {
        actions.click(find('[data-test=ring-select]'));
        actions.mouseMove(find('body'), {x: 800, y: 1024});
        actions.wait(UNHOVER_DELAY);
      });
  });

  gemini.suite('Multi-value select with options descriptions', child => {
    child.
      setUrl('/select/multiple-select-with-a-description.html').
      //We often have a waird render artefact here
      setTolerance(TOLERANCE_OVERRIDE_BECAUSE_OF_EDGE).
      setCaptureElements('[data-test=ring-popup]').
      capture('selectPopup', (actions, find) => {
        actions.click(find('[data-test=ring-select]'));
        actions.mouseMove(find('body'), {x: 800, y: 1024});
        actions.wait(UNHOVER_DELAY);
      });
  });

});
