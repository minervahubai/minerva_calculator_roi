function calculateROI() {
  // Obtener valores del formulario
  const numEmployees = document.getElementById('numEmployees').value;
  const annualRevenuePerEmployee = document.getElementById('annualRevenuePerEmployee').value;
  const hoursWorkedPerYear = document.getElementById('hoursWorkedPerYear').value;
  const hoursSavedWithMinerva = 384; // Fijo, 20% de 1920 horas laborales

  // Fórmulas basadas en las celdas de Excel proporcionadas
  const revenuePerHour = annualRevenuePerEmployee / hoursWorkedPerYear; // B24 = B21/B23
  const additionalRevenuePerEmployee = hoursSavedWithMinerva * revenuePerHour; // B28 = B25 * B24
  const totalAdditionalRevenue = additionalRevenuePerEmployee * numEmployees; // B29 = B28 * B20
  const totalAnnualCostMinerva = numEmployees * 12 * 25; // B30 = B20 * 12 * 25, asumiendo $25 por mes por empleado
  const roi = ((totalAdditionalRevenue - totalAnnualCostMinerva) / totalAnnualCostMinerva) * 100; // B31 = (B29 - B30) / B30 * 100

  // Mostrar resultados
  document.getElementById('revenuePerHour').textContent = `$${revenuePerHour.toFixed(2)}`;
  document.getElementById('additionalRevenuePerEmployee').textContent = `$${additionalRevenuePerEmployee.toFixed(2)}`;
  document.getElementById('totalAdditionalRevenue').textContent = `$${totalAdditionalRevenue.toFixed(2)}`;
  document.getElementById('totalAnnualCostMinerva').textContent = `$${totalAnnualCostMinerva.toFixed(2)}`;
  document.getElementById('roiPercentage').textContent = `${roi.toFixed(2)}%`;
  document.getElementById('roiExplanation').textContent = `For every $1 invested in Minerva, you will get $${(roi / 100).toFixed(2)} back.`;
}