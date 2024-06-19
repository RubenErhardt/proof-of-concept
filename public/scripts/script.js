const itemsToClone = 10;
let totalClonedItemsVertical = 0;
let totalClonedItemsHorizontal = 0;

function loadMoreItems(direction) {
  const list = document.getElementById('art-objects-list');
  const items = list.querySelectorAll('li');
  const itemsCount = items.length;

  for (let i = 0; i < itemsToClone; i++) {
    const item = items[i % itemsCount].cloneNode(true);
    if (direction === 'vertical') {
      list.appendChild(item);
      totalClonedItemsVertical++;
    } else if (direction === 'horizontal') {
      list.appendChild(item);
      totalClonedItemsHorizontal++;
    }
  }
}

function handleScroll() {
  const container = document.querySelector('.container');
  const scrollableHeight = container.scrollHeight;
  const currentScrollY = container.scrollTop + container.clientHeight;
  const scrollableWidth = container.scrollWidth;
  const currentScrollX = container.scrollLeft + container.clientWidth;

  // Load more items vertically when scrolling down
  if (currentScrollY >= scrollableHeight - container.clientHeight) {
    loadMoreItems('vertical');
  }

  // Load more items horizontally when scrolling right
  if (currentScrollX >= scrollableWidth - container.clientWidth) {
    loadMoreItems('horizontal');
  }

  // Load more items horizontally when scrolling left
  if (container.scrollLeft <= 0) {
    loadMoreItems('horizontal');
  }
}
// Initial loading of images and setting random row spans
document.querySelectorAll('.art-object-item').forEach(item => {
  const rowSpan = Math.floor(Math.random() * 5) + 5;
  item.style.setProperty('--row-span', rowSpan);
});

// Initial clone to fill the container for scrolling
loadMoreItems('vertical');
loadMoreItems('horizontal');

// Event listeners for scroll events
document.querySelector('.container').addEventListener('scroll', handleScroll);
