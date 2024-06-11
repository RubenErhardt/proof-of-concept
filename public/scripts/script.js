function loadMoreItems() {
    const list = document.getElementById('art-objects-list');
    
    const items = list.querySelectorAll('li');
    items.forEach(item => {
        const clone = item.cloneNode(true);
        list.appendChild(clone);
    });
  }
  
  function handleScroll() {
    const scrollableHeight = document.documentElement.scrollHeight;
    const currentScroll = window.scrollY + window.innerHeight;
    
    if (currentScroll >= scrollableHeight - 100) { 
      loadMoreItems();
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  