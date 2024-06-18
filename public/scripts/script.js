    const maxItems = 1000; 
    const itemsToClone = 10;
    let totalClonedItems = 0;

    function loadMoreItems() {
      const list = document.getElementById('art-objects-list');
      const items = list.querySelectorAll('li');
      const itemsCount = items.length;

      if (totalClonedItems + itemsToClone > maxItems) return; 

      for (let i = 0; i < itemsToClone; i++) { //Dit betekent dat we iets gaan herhalen. Het aantal keren dat we willen herhalen staat in itemsToClone.
        const item = items[i % itemsCount].cloneNode(true); // items[i % itemsCount] zorgt ervoor dat je steeds een image uit de rij kiest. Als je aan het eind van de rij komt, begin je gewoon weer vooraan.
        // cloneNode(true) betekent dat je een exacte kopie van die gekozen foto maakt, inclusief alle details. En dit herhaalt zich dus meerdere keren
        list.appendChild(item); // hier ontstaan dus een rij gekopierde foto genaamd item, en item voegd die hier toe aan list, dat is in dit geval 'art-object-list'
        totalClonedItems++;// hier houdt die bij hoeveel items er gecloned zijn want er is een maxItems, zonder dit weet die niet hoeveel er gecloned is
    }
  }


// nu moeten we nog wat doen met deze functie, want we willen dat als je naar beneden scrollt, dan gaat de functie loadMoreItems() uitvoeren.


  function handleScroll() {
    const scrollableHeight = document.documentElement.scrollHeight; // totale height van het document
    const currentScroll = window.scrollY + window.innerHeight; // window.scrollY geeft de huidige verticale scrollpositie van het venster terug. + window.innerHeight geeft de huidige hoogte van het venster terug.
    
    if (currentScroll >= scrollableHeight - 100) { // Hier controleren we of de huidige scrollpositie (currentScroll) binnen 100 pixels van het einde van het document (scrollableHeight) ligt.
      // als dat zo is dan functie loadmoreitems 
      loadMoreItems();
    }
  }
  window.addEventListener('scroll', handleScroll);

  
// intersectionobserver 