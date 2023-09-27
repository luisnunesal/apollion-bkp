export function getDomNode() {
  const cloneNodeString =
    document.getElementById('preview-container').innerHTML;

  const parser = new DOMParser();
  const domNode = parser.parseFromString(cloneNodeString, 'text/html');

  const cssRules = document.querySelector('style[data-styled="active"]').sheet
    .rules;

  const usedSelectors = [];

  const cssRulesLenght = cssRules.length;

  for (let idx = 0; idx < cssRulesLenght; idx++) {
    const rule = cssRules[idx];
    const selector = rule.selectorText;

    domNode.querySelectorAll(selector).forEach((elem) => {
      usedSelectors.push(selector);

      elem.style.cssText = elem.style.cssText + rule.style.cssText;
    });
  }

  // remove classes
  usedSelectors.forEach((selector) => {
    domNode.querySelectorAll(selector).forEach((elem) => {
      elem.removeAttribute('class');
    });
  });

  let htmlString = domNode.documentElement.innerHTML;

  htmlString = htmlString.replaceAll('||*', '{{');
  htmlString = htmlString.replaceAll('*||', '}}');

  return `<html>${htmlString}</html>`;
}
