const itemsToClone = 20;
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
    }
  }
}

document.documentElement.classList.add('js-enabled');

function handleScroll() {
  const container = document.querySelector('.container');
  const scrollableHeight = container.scrollHeight;
  const currentScrollY = container.scrollTop + container.clientHeight;

  if (currentScrollY >= scrollableHeight - container.clientHeight) {
    loadMoreItems('vertical');
  }
}

document.querySelectorAll('.art-object-item').forEach(item => {
  const rowSpan = Math.floor(Math.random() * 5) + 5;
  item.style.setProperty('--row-span', rowSpan);
});

loadMoreItems('vertical');

// Event listeners for scroll events
document.querySelector('.container').addEventListener('scroll', handleScroll);
