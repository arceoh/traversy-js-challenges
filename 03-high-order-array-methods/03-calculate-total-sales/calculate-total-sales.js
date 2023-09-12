function calculateTotalSalesWithTax(items, tax) {
  const subtotal = items.reduce((total, current) => {
    return total + current.price * current.quantity;
  }, 0);

  const taxes = subtotal * (tax / 100);
  const total = subtotal + taxes;

  return total;
}

module.exports = calculateTotalSalesWithTax;
