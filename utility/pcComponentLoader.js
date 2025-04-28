// Modularized pcComponentLoader.js (External HTML Version) ✅

document.addEventListener('DOMContentLoaded', function() {
  const componentItems = document.querySelectorAll('.component-card');

  componentItems.forEach(item => {
    item.addEventListener('click', function() {
      const componentName = item.innerText.trim();
      loadComponentDetail(componentName);
    });
  });
});

// Component File Paths Map
const componentFilePaths = {
  'NVIDIA RTX 3060 12GB': '/assets/components/gpu.html',
  'Intel Core i5-12400': '/assets/components/cpu.html',
  'Corsair Vengeance 16GB DDR4 3200MHz': '/assets/components/ram.html',
  'Gigabyte B660M DS3H AX DDR4': '/assets/components/motherboard.html',
  'WD Black SN770 1TB NVMe': '/assets/components/storage.html',
  'Corsair CV650 PSU': '/assets/components/psu.html',
  'ANT ESports 690 AIR': '/assets/components/cabinet.html',
  'ANT ESports Superflow 120': '/assets/components/cpu-cooler.html'
};

// Loader Function (Fetch from External HTML)
function loadComponentDetail(componentName) {
  const gameplaysSection = document.getElementById('gameplays');
  const dynamicContentSection = document.getElementById('dynamic-content');

  const filePath = componentFilePaths[componentName];

  if (filePath) {
    fetch(filePath)
      .then(response => response.text())
      .then(html => {
        gameplaysSection.style.display = 'none';
        dynamicContentSection.innerHTML = html;
        dynamicContentSection.style.display = 'block';
        setTimeout(() => {
          dynamicContentSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        bindDynamicButtons();
      })
      .catch(error => {
        console.error('Error loading component HTML:', error);
      });
  }
}

function bindDynamicButtons() {
  const depreciationToggle = document.getElementById('depreciation-toggle');
  const depreciationDetails = document.getElementById('depreciation-details');
  const backButton = document.getElementById('back-to-components');

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  if (depreciationToggle) {
    depreciationToggle.addEventListener('click', function() {
      depreciationDetails.classList.toggle('hidden');
      setTimeout(() => {
        if (!depreciationDetails.classList.contains('hidden')) {
          depreciationDetails.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    });
  }

  if (backButton) {
    backButton.addEventListener('click', function() {
      const gameplaysSection = document.getElementById('gameplays');
      const dynamicContentSection = document.getElementById('dynamic-content');
      const pcComponentsSection = document.querySelector('.my-pc-section');

      if (pcComponentsSection) {
        pcComponentsSection.scrollIntoView({ behavior: 'smooth' });
      }

      setTimeout(() => {
        dynamicContentSection.innerHTML = '';
        dynamicContentSection.style.display = 'none';
        gameplaysSection.style.display = 'block';
      }, 300);
    });
  }
}
