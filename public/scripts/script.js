document.getElementById('load-more').addEventListener('click', function() {
    const list = document.getElementById('art-objects-list');
    
    const items = list.querySelectorAll('li');
    items.forEach(item => {
        const clone = item.cloneNode(true);
        list.appendChild(clone);
    });
});