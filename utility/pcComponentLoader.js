document.addEventListener('DOMContentLoaded', function() {
  // Bind click listeners to all PC components
  const componentItems = document.querySelectorAll('.component-item'); // Assuming your PC parts have this class

  componentItems.forEach(item => {
    item.addEventListener('click', function() {
      const componentName = item.getAttribute('data-component');
      loadComponentDetail(componentName);
    });
  });
});

function loadComponentDetail(componentName) {
  const gameplaysSection = document.getElementById('gameplays');
  const dynamicContentSection = document.getElementById('dynamic-content');

  // Hide gameplays
  gameplaysSection.style.display = 'none';

  // Generate dynamic content based on component
  let componentHTML = '';

  if (componentName === 'RTX 3060') {
    componentHTML = `
      <section id="component-detail" class="fade-in">
        <div class="component-header">
          <span class="component-icon" data-lucide="gpu">️</span>
          <h2>RTX 3060 12GB</h2>
        </div>

        <div class="component-pricing">
          <div class="price-source">
            <img src="./assets/icons/flipkart-icon.png" alt="Flipkart" class="store-icon">
            <p>Flipkart Price: ₹29,200</p>
          </div>
          <div class="price-source">
            <img src="./assets/icons/amazon-icon.png" alt="Amazon" class="store-icon">
            <p>Amazon Price: ₹28,500</p>
          </div>
        </div>

        <div class="resale-section">
          <h3>📉 Your Resale Price: ₹24,000</h3>
        </div>

        <button id="depreciation-toggle" class="depreciation-button">How was this calculated?</button>

        <div id="depreciation-details" class="depreciation-details hidden">
          <p>
            🎯 Original Price ~₹36,000 → After ~1.5 years (~30% depreciation)<br>
            📉 Calculated Resale: ₹24,000 based on ~30% value drop<br>
            📅 Usage Period: Dec 2022 – May 2025
          </p>
        </div>

        <button id="back-to-main" class="back-button">⬅️ Back to Gameplays</button>
      </section>
    `;
  }

  // Insert content
  dynamicContentSection.innerHTML = componentHTML;
  dynamicContentSection.style.display = 'block';

  // Bind buttons inside dynamic content
  bindDynamicButtons();
}

function bindDynamicButtons() {
  const depreciationToggle = document.getElementById('depreciation-toggle');
  const depreciationDetails = document.getElementById('depreciation-details');
  const backButton = document.getElementById('back-to-main');

  if (depreciationToggle) {
    depreciationToggle.addEventListener('click', function() {
      depreciationDetails.classList.toggle('hidden');
    });
  }

  if (backButton) {
    backButton.addEventListener('click', function() {
      const gameplaysSection = document.getElementById('gameplays');
      const dynamicContentSection = document.getElementById('dynamic-content');

      // Show Gameplays again
      gameplaysSection.style.display = 'block';
      dynamicContentSection.style.display = 'none';
      dynamicContentSection.innerHTML = ''; // Clear component detail
    });
  }
}
