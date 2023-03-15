const readline = require('readline-sync');

function purchaseBook(stock, purchased) {
  const TAX_RATE = 0.1; // 10% tax rate

  let bookTitle = readline.question("Enter book title: ");
  let author = readline.question("Enter author name: ");
  let price = parseFloat(readline.question("Enter book price: "));
  let discountPercent;
  let taxPercent = parseFloat(readline.question("Enter tax percentage: "));

  let discountApplied = false;
  let discountAmount = 0;
  let discountedPrice = price;

  if (price > 50000) {
    discountPercent = parseFloat(readline.question("Enter discount percentage: "));
    discountAmount = price * (discountPercent / 100);
    discountedPrice = price - discountAmount;
    discountApplied = true;
  }

  let taxAmount = discountedPrice * (taxPercent / 100);
  let priceAfterTax = discountedPrice + taxAmount;

  let totalPrice = 0;
  let outOfStock = false;

  for (let i = 0; i < purchased; i++) {
    if (stock <= 0) {
      outOfStock = true;
      break;
    }
    totalPrice += priceAfterTax;
    stock--;
  }

  console.log("Book title:", bookTitle);
  console.log("Author:", author);
  console.log("Price:", price.toFixed(2));
  
  if (discountApplied) {
    console.log("Discount:", discountPercent + "%");
    console.log("Discount amount:", discountAmount.toFixed(2));
    console.log("Price after discount:", discountedPrice.toFixed(2));
  }
  
  console.log("Tax:", taxPercent + "%");
  console.log("Tax amount:", taxAmount.toFixed(2));
  console.log("Total price:", totalPrice.toFixed(2));
  
  if (outOfStock) {
    console.log("Out of stock!");
  } else {
    console.log("Remaining stock:", stock);
  }
}

// Example usage
purchaseBook(5, 3);
