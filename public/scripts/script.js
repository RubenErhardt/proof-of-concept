  	    const maxItems = 300; 
        const itemsToClone = 5;
        let totalClonedItems = 0;

        function loadMoreItems() {
            const list = document.getElementById('art-objects-list');
            const items = list.querySelectorAll('li');
            const itemsCount = items.length;

            if (totalClonedItems + itemsToClone > maxItems) return; 

            for (let i = 0; i < itemsToClone; i++) {
                const item = items[i % itemsCount]; 
                const clone = item.cloneNode(true);
                list.appendChild(clone);
                totalClonedItems++;
            }
        }

  function handleScroll() {
    const scrollableWidth = document.documentElement.scrollWidth;
    const currentScroll = window.scrollX + window.innerWidth;
    
    if (currentScroll >= scrollableWidth - 100) { 
      loadMoreItems();
    }
  }
  window.addEventListener('scroll', handleScroll);

  
  