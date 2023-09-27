import { $documentBody, $window } from '../../entities';

type copyOptions = {
  format?: string;
  debug?: boolean;
  onCopy?: () => void;
  onFailed?: () => void;
};

function copyExecCommand(text: string, options?: copyOptions) {
  let selection: Selection;
  let mark: HTMLElement;
  let range: Range;
  let success = false;

  try {
    range = $window.document.createRange();
    selection = $window.document.getSelection();

    mark = $window.document.createElement('span');
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = 'unset';
    // prevents scrolling to the end of the page
    mark.style.position = 'fixed';
    mark.style.top = '0';
    mark.style.clip = 'rect(0, 0, 0, 0)';
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = 'pre';
    // do not inherit user-select (it may be `none`)
    mark.style.userSelect = 'text';

    mark.addEventListener('copy', (e) => {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        // does not work on IE
        e.clipboardData.clearData();
        e.clipboardData.setData(options.format, text);
      }
    });

    $documentBody.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    success = $window.document.execCommand('copy');

    if (!success) {
      throw new Error('copy command was unsuccessful');
    }
  } catch (err) {
    options.debug && console.error('unable to copy using execCommand: ', err);
  } finally {
    if (selection) {
      if (typeof selection.removeRange === 'function') {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      $documentBody.removeChild(mark);
    }
  }

  return success;
}

async function copyAsync(text: string, options: copyOptions) {
  let success = false;

  try {
    if (navigator && navigator.clipboard) {
      await navigator?.clipboard?.writeText?.(text);
      success = true;
    } else {
      throw new Error('browser does not support clipboard API');
    }
  } catch (err) {
    options.debug && console.error('unable to copy using Clipboard API: ', err);
  }

  return success;
}

export async function copy(text: string, { onCopy, onFailed, ...options }: copyOptions = {}) {
  const successAsync = await copyAsync(text, options);

  const success = successAsync || copyExecCommand(text, options);

  if (success) {
    onCopy?.();
  } else {
    onFailed?.();
  }
}
