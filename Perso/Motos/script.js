document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const brandSelect = document.getElementById('brand-select');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  // Éléments des compteurs
  const countTotal = document.getElementById('count-total');
  const countSportive = document.getElementById('count-sportive');
  const countRoadster = document.getElementById('count-roadster');
  const countYamaha = document.getElementById('count-yamaha');

  let activeCategory = 'all';

  function filterAndCount() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedBrand = brandSelect.value.toLowerCase();

    let visibleTotal = 0;
    let visibleSportive = 0;
    let visibleRoadster = 0;
    let visibleYamaha = 0;

    cards.forEach(card => {
      const category = card.getAttribute('data-category') || '';
      const brand = card.getAttribute('data-brand') || '';
      const cardText = card.textContent.toLowerCase();

      // Vérification des conditions de filtre
      const matchesSearch = cardText.includes(searchTerm);
      const matchesCategory = (activeCategory === 'all' || category === activeCategory);
      const matchesBrand = (selectedBrand === 'all' || brand === selectedBrand);

      if (matchesSearch && matchesCategory && matchesBrand) {
        card.style.display = 'block';
        visibleTotal++;

        // Incrémentation des compteurs spécifiques sur les éléments visibles
        if (category === 'sportive') visibleSportive++;
        if (category === 'roadster') visibleRoadster++;
        if (brand === 'yamaha') visibleYamaha++;
      } else {
        card.style.display = 'none';
      }
    });

    // Mise à jour des compteurs dans l'interface
    countTotal.textContent = visibleTotal;
    countSportive.textContent = visibleSportive;
    countRoadster.textContent = visibleRoadster;
    countYamaha.textContent = visibleYamaha;
  }

  // Événement : Recherche
  searchInput.addEventListener('input', filterAndCount);

  // Événement : Sélection de la marque
  brandSelect.addEventListener('change', filterAndCount);

  // Événement : Clic sur les catégories
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      activeCategory = button.getAttribute('data-category');
      filterAndCount();
    });
  });

  // Calcul initial au chargement de la page
  filterAndCount();
});
