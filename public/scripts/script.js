function loadMoreItems() {
    const list = document.getElementById('art-objects-list');
    
    const items = list.querySelectorAll('li');
    items.forEach(item => {
        const clone = item.cloneNode(true);
        list.appendChild(clone);
    });
  }
  
  function handleScroll() {
    const scrollableWidth = document.documentElement.scrollWidth;
    const currentScroll = window.scrollX + window.innerWidth;
    
    if (currentScroll >= scrollableWidth - 100) { 
      loadMoreItems();
    }
  }
  window.addEventListener('scroll', handleScroll);

  
  