const calculHT = () => {
  const ttc = parseFloat(document.getElementById('TTC-price-input').value);
  const tauxTVA = parseFloat(document.getElementById('select-input').value);

  if (!isNaN(ttc) && ttc >= 0 && tauxTVA !== 0) {
    const ht = ttc / (1 + tauxTVA);
    const tvaValue = ttc - ht;

    document.getElementById('HT-price-span').textContent = ht.toFixed(2);
    document.getElementById('TVA-value').textContent = tvaValue.toFixed(2);
  }
};

const calculMargin = () => {
  const ttc = parseFloat(document.getElementById('TTC-price-input').value);
  const tauxTVA = parseFloat(document.getElementById('select-input').value);
  const sellingPrice = parseFloat(document.getElementById('selling-price-input').value);

  if (!isNaN(sellingPrice) && sellingPrice > 0 && !isNaN(ttc) && ttc >= 0 && tauxTVA !== 0) {
    const ht = ttc / (1 + tauxTVA);
    const margin = sellingPrice - ht;
    const marginPercentage = (margin / sellingPrice) * 100;

    document.getElementById('margin').textContent = margin.toFixed(2);
    document.getElementById('margin-percentage').textContent = marginPercentage.toFixed(2);
  }
};

document.getElementById('TTC-price-input').addEventListener('input', () => {
  calculHT();
  calculMargin();
});

document.getElementById('selling-price-input').addEventListener('input', calculMargin);

document.getElementById('select-input').addEventListener('change', () => {
  calculHT();
  calculMargin();
});



document.getElementById('download-pdf').addEventListener('click', () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Récupérer valeurs affichées ou saisies correctement
  const ht = document.getElementById('HT-price-span').textContent || 'N/A';        // span affichage HT
  const taux = document.getElementById('select-input').value || 0;
  const tva = document.getElementById('TVA-value').textContent || 'N/A';          // attention à la casse
  const ttc = document.getElementById('TTC-price-input').value || 'N/A';          // input TTC
  const marge = document.getElementById('margin').textContent || 'N/A';           // span marge
  const margePourcent = document.getElementById('margin-percentage').textContent || 'N/A'; // span %

  doc.text("Calcul TVA & Marge", 10, 10);
  doc.text(`Prix HT : ${ht} `, 10, 20);
  doc.text(`Taux TVA : ${(taux * 100).toFixed(1)} %`, 10, 30);
  doc.text(`Montant TVA : ${tva} `, 10, 40);
  doc.text(`Prix TTC : ${ttc} `, 10, 50);
  doc.text(`Marge brute : ${marge} `, 10, 60);
  doc.text(`Taux de marge : ${margePourcent} %`, 10, 70);

  doc.save("calcul-tva-marge.pdf");
});

