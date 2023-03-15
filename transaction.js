const readline = require('readline-sync');

function calculatePrice(price, discountPercent, taxPercent) {
  let discountApplied = false;
  let discountAmount = 0;
  let discountedPrice = price;

  if (price > 50000 && discountPercent > 0) {
    discountAmount = price * (discountPercent / 100);
    discountedPrice = price - discountAmount;
    discountApplied = true;
  }

  let taxAmount = discountedPrice * (taxPercent / 100);
  let priceAfterTax = discountedPrice + taxAmount;

  return {
    price: price,
    discountApplied: discountApplied,
    discountPercent: discountPercent,
    discountAmount: discountAmount,
    discountedPrice: discountedPrice,
    taxPercent: taxPercent,
    taxAmount: taxAmount,
    priceAfterTax: priceAfterTax
  };
}

function purchaseBook(stock, purchased) {
  let bookTitle = readline.question("Enter book title: ");
  let author = readline.question("Enter author name: ");
  let price = parseFloat(readline.question("Enter book price: "));
  let discountPercent = parseFloat(readline.question("Enter discount percentage (optional): "));
  let taxPercent = parseFloat(readline.question("Enter tax percentage: "));

  let priceDetails = calculatePrice(price, discountPercent, taxPercent);

  let totalPrice = 0;
  let outOfStock = false;

  for (let i = 0; i < purchased; i++) {
    if (stock <= 0) {
      outOfStock = true;
      break;
    }
    totalPrice += priceDetails.priceAfterTax;
    stock--;
  }

  console.log("Book title:", bookTitle);
  console.log("Author:", author);
  console.log("Price:", price.toFixed(2));
  
  if (priceDetails.discountApplied) {
    console.log("Discount:", priceDetails.discountPercent + "%");
    console.log("Discount amount:", priceDetails.discountAmount.toFixed(2));
    console.log("Price after discount:", priceDetails.discountedPrice.toFixed(2));
  }
  
  console.log("Tax:", priceDetails.taxPercent + "%");
  console.log("Tax amount:", priceDetails.taxAmount.toFixed(2));
  console.log("Total price:", totalPrice.toFixed(2));
  
  if (outOfStock) {
    console.log("Out of stock!");
  } else {
    console.log("Remaining stock:", stock);
  }
}

// Example usage
purchaseBook(5, 3);
