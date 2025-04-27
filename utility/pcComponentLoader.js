// Modularized pcComponentLoader.js ✅

document.addEventListener('DOMContentLoaded', function() {
  const componentItems = document.querySelectorAll('.component-card');

  componentItems.forEach(item => {
    item.addEventListener('click', function() {
      const componentName = item.innerText.trim();
      loadComponentDetail(componentName);
    });
  });
});

// Generator function for GPU Details
function generateGPUDetail() {
  return `
    <section id="component-detail" class="fade-in">
      <div class="component-header">
        <span class="component-icon" data-lucide="monitor"></span>
        <h2>NVIDIA RTX 3060 12GB</h2>
      </div>

      <div class="component-pricing">
        <div class="price-source">
          <i data-lucide="shopping-cart"></i>
          <p>Flipkart Price: ₹29,200</p>
        </div>
        <div class="price-source">
          <i data-lucide="box"></i>
          <p>Amazon Price: ₹28,500</p>
        </div>
      </div>

      <div class="resale-section">
        <h3><i data-lucide="badge-dollar-sign"></i> Your Resale Price: ₹24,000</h3>
      </div>

      <button id="depreciation-toggle" class="depreciation-button">
          <i data-lucide="calculator"></i> How was this calculated?
      </button>

      <div id="depreciation-details" class="depreciation-details hidden">
        <p>
          <i data-lucide="tag"></i> Original Price ~₹36,000 → After ~1.5 years (~30% depreciation)<br>
          <i data-lucide="badge-dollar-sign"></i> Calculated Resale: ₹24,000 based on ~30% value drop<br>
          <i data-lucide="calendar-clock"></i> Usage Period: Dec 2022 – May 2025
        </p>
      </div>

      <button id="back-to-components" class="back-button">
          <i data-lucide="cpu"></i> Back to Components
      </button>
    </section>
  `;
}

// Component Generators Map
const componentGenerators = {
  'NVIDIA RTX 3060 12GB': generateGPUDetail
};

// Loader Function
function loadComponentDetail(componentName) {
  const gameplaysSection = document.getElementById('gameplays');
  const dynamicContentSection = document.getElementById('dynamic-content');

  const generator = componentGenerators[componentName];

  if (generator) {
    // Hide Gameplays
    gameplaysSection.style.display = 'none';

    // Show Dynamic Content
    dynamicContentSection.innerHTML = generator();
    dynamicContentSection.style.display = 'block';

    // Scroll to dynamic content
    setTimeout(() => {
      dynamicContentSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);

    // Bind buttons inside dynamic content
    bindDynamicButtons();
  }
}

function bindDynamicButtons() {
  const depreciationToggle = document.getElementById('depreciation-toggle');
  const depreciationDetails = document.getElementById('depreciation-details');
  const backButton = document.getElementById('back-to-components');

  // Very important: create Lucide icons for newly added elements
  if (typeof lucide !== 'undefined') {
      lucide.createIcons();
  }

  if (depreciationToggle) {
    depreciationToggle.addEventListener('click', function() {
      depreciationDetails.classList.toggle('hidden');
      // After expanding, scroll to details
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

      // Show PC Components
      if (pcComponentsSection) {
        pcComponentsSection.scrollIntoView({ behavior: 'smooth' });
      }

      // Clear dynamic content after short delay
      setTimeout(() => {
        dynamicContentSection.innerHTML = '';
        dynamicContentSection.style.display = 'none';
        gameplaysSection.style.display = 'block';
      }, 300);
    });
  }
}
