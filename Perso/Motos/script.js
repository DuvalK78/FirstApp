document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const brandSelect = document.getElementById('brand-select');
  const resetBtn = document.getElementById('reset-filters-btn');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  // Éléments des compteurs
  const countTotal = document.getElementById('count-total');
  const countSportive = document.getElementById('count-sportive');
  const countRoadster = document.getElementById('count-roadster');
  const countAprilia = document.getElementById('count-aprilia');
  const countBMW = document.getElementById('count-bmw');
  const countDucati = document.getElementById('count-ducati');
  const countHonda = document.getElementById('count-honda');
  const countKawasaki = document.getElementById('count-kawasaki');
  const countSuzuki = document.getElementById('count-suzuki');
  const countYamaha = document.getElementById('count-yamaha');

  let activeCategory = 'all';

  function filterAndCount() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedBrand = brandSelect.value.toLowerCase();

    let visibleTotal = 0;
    let visibleSportive = 0;
    let visibleRoadster = 0;
    let visibleAprilia = 0;
    let visibleBMW = 0;
    let visibleDucati = 0;
    let visibleHonda = 0;
    let visibleKawasaki = 0;
    let visibleSuzuki = 0;
    let visibleYamaha = 0;

    cards.forEach(card => {
      const category = card.getAttribute('data-category') || '';
      const brand = card.getAttribute('data-brand') || '';
      const cardText = card.textContent.toLowerCase();

      const matchesSearch = cardText.includes(searchTerm);
      const matchesCategory = (activeCategory === 'all' || category === activeCategory);
      const matchesBrand = (selectedBrand === 'all' || brand === selectedBrand);

      if (matchesSearch && matchesCategory && matchesBrand) {
        card.style.display = 'block';
        visibleTotal++;

        if (category === 'sportive') visibleSportive++;
        if (category === 'roadster') visibleRoadster++;
        if (brand === 'aprilia') visibleAprilia++;
        if (brand === 'bmw') visibleBMW++;
        if (brand === 'ducati') visibleDucati++;
        if (brand === 'honda') visibleHonda++;
        if (brand === 'kawasaki') visibleKawasaki++;
        if (brand === 'suzuki') visibleSuzuki++;
        if (brand === 'yamaha') visibleYamaha++;
      } else {
        card.style.display = 'none';
      }
    });

    countTotal.textContent = visibleTotal;
    countSportive.textContent = visibleSportive;
    countRoadster.textContent = visibleRoadster;
    countAprilia.textContent = visibleAprilia;
    countBMW.textContent = visibleBMW;
    countDucati.textContent = visibleDucati;
    countHonda.textContent = visibleHonda;
    countKawasaki.textContent = visibleKawasaki;
    countSuzuki.textContent = visibleSuzuki;
    countYamaha.textContent = visibleYamaha;
  }

  // Fonction de réinitialisation complète
  function resetAllFilters() {
    searchInput.value = '';
    brandSelect.value = 'all';
    
    activeCategory = 'all';
    filterButtons.forEach(btn => {
      if (btn.getAttribute('data-category') === 'all') {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    filterAndCount();
  }

  // Événements
  searchInput.addEventListener('input', filterAndCount);
  brandSelect.addEventListener('change', filterAndCount);
  resetBtn.addEventListener('click', resetAllFilters);

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      activeCategory = button.getAttribute('data-category');
      filterAndCount();
    });
  });

  filterAndCount();
});
