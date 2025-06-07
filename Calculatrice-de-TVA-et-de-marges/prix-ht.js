const calculTTC = () => {
  const htPrice = parseFloat(document.getElementById('HT-price-input').value);
  const tvaRate = parseFloat(document.getElementById('select-input').value);

  if (!isNaN(htPrice) && htPrice >= 0 && tvaRate !== 0) {
    const ttcPrice = htPrice * (1 + tvaRate);
    const tvaValue = htPrice * tvaRate;

    document.getElementById('TTC-price-span').textContent = ttcPrice.toFixed(2);
    document.getElementById('TVA-value').textContent = tvaValue.toFixed(2);
  }
};

const calculMargin = () => {
  const htPrice = parseFloat(document.getElementById('HT-price-input').value);
  const sellingPrice = parseFloat(document.getElementById('selling-price-input').value);
  const tvaRate = parseFloat(document.getElementById('select-input').value);

  if (
    !isNaN(sellingPrice) && sellingPrice > 0 &&
    !isNaN(htPrice) && htPrice >= 0 &&
    tvaRate !== 0
  ) {
    const margin = sellingPrice - htPrice;
    const marginPercentage = (margin / sellingPrice) * 100;

    document.getElementById('margin').textContent = margin.toFixed(2);
    document.getElementById('margin-percentage').textContent = marginPercentage.toFixed(2);
  }
};

document.getElementById('HT-price-input').addEventListener('input', () => {
  calculTTC();
  calculMargin();
});

document.getElementById('selling-price-input').addEventListener('input', calculMargin);

document.getElementById('select-input').addEventListener('change', () => {
  calculTTC();
  calculMargin();
});


// Fonction pour générer le PDF avec jsPDF
document.getElementById('download-pdf').addEventListener('click', () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Récupération des valeurs affichées
  const ht = document.getElementById('HT-price-input').value || 'N/A'; // input, pas span
  const taux = document.getElementById('select-input').value;
  const tva = document.getElementById('TVA-value').textContent || 'N/A';
  const ttc = document.getElementById('TTC-price-span').textContent || 'N/A'; // span, pas input
  const marge = document.getElementById('margin').textContent || 'N/A';
  const margePourcent = document.getElementById('margin-percentage').textContent || 'N/A';

  doc.text("Calcul TVA & Marge", 10, 10);
  doc.text(`Prix HT : ${ht} `, 10, 20);
  doc.text(`Taux TVA : ${(taux * 100).toFixed(1)} %`, 10, 30);
  doc.text(`Montant TVA : ${tva} `, 10, 40);
  doc.text(`Prix TTC : ${ttc} `, 10, 50);
  doc.text(`Marge brute : ${marge} `, 10, 60);
  doc.text(`Taux de marge : ${margePourcent} %`, 10, 70);

  doc.save("calcul-tva-marge.pdf");
});
