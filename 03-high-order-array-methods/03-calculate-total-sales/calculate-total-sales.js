function calculateTotalSalesWithTax(items, tax) {
  const subtotal = items.reduce((total, current) => {
    return total + current.price * current.quantity;
  }, 0);

  const taxes = subtotal * (tax / 100);
  const total = subtotal + taxes;

  return total.toFixed(2);
}

module.exports = calculateTotalSalesWithTax;
