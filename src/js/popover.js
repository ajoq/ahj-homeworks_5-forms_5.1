export default function popover() {
  const popoverExist = document.querySelector('.popover');

  if (popoverExist) {
    popoverExist.classList.remove('popover-visible');
    setTimeout(() => popoverExist.remove(), 500);

    return;
  }

  const popoverDiv = document.createElement('div');
  popoverDiv.className = 'popover';

  const arrowDiv = document.createElement('div');
  arrowDiv.className = 'arrow';

  const popoverTitle = document.createElement('h3');
  popoverTitle.className = 'popover-header';
  popoverTitle.textContent = this.dataset.popoverTitle;

  const popoverContent = document.createElement('div');
  popoverContent.className = 'popover-body';
  popoverContent.textContent = this.dataset.popoverContent;

  popoverDiv.append(arrowDiv);
  popoverDiv.append(popoverTitle);
  popoverDiv.append(popoverContent);

  this.after(popoverDiv);

  popoverDiv.style.top = `${this.offsetTop - popoverDiv.offsetHeight - arrowDiv.offsetHeight}px`;
  popoverDiv.style.left = `${this.offsetLeft + (this.offsetWidth / 2) - (popoverDiv.offsetWidth / 2)}px`;

  popoverDiv.classList.add('popover-visible');
}
