const maxItems = 1000;
const itemsToClone = 10;
let totalClonedItems = 0;

function loadMoreItems() {
  const list = document.getElementById('art-objects-list');
  const items = list.querySelectorAll('li');
  const itemsCount = items.length;

  if (totalClonedItems + itemsToClone > maxItems) return;

  for (let i = 0; i < itemsToClone; i++) {
    const item = items[i % itemsCount].cloneNode(true);
    list.appendChild(item);
    totalClonedItems++;
  }
}

function handleScroll() {
  const scrollableHeight = document.documentElement.scrollHeight;
  const currentScroll = window.scrollY + window.innerHeight;

  if (currentScroll >= scrollableHeight - 100) {
    loadMoreItems();
  }
}

window.addEventListener('scroll', handleScroll);

