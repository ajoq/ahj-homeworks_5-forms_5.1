/**
 * @jest-environment jsdom
 */
/* eslint-disable no-useless-escape */

import popover from './popover';

const content = `
 <div class="example">
     <button class="btn" data-popover-content="And here\'s some amazing content. It\'s very engaging. Right?" data-popover-title="Popover title">Click to toggle popover
     </button>
 </div>
`;

test('show popover', () => {
  document.body.innerHTML = content;

  const btn = document.querySelector('.btn');
  btn.addEventListener('click', popover);
  btn.click();
  const popoverExist = document.querySelector('.popover');

  expect(popoverExist.classList.contains('popover-visible')).toBeTruthy();
});

test('hide popover', () => {
  document.body.innerHTML = content;

  const btn = document.querySelector('.btn');
  btn.addEventListener('click', popover);
  btn.click();
  btn.click();
  const popoverExist = document.querySelector('.popover');

  expect(popoverExist.classList.contains('popover-visible')).toBeFalsy();
});
