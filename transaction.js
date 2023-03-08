const readline = require('readline-sync');

function purchaseBook() {
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
    console.log("You are eligible for a discount!");
    discountPercent = parseFloat(readline.question("Enter discount percentage: "));
    discountAmount = price * (discountPercent / 100);
    discountedPrice = price - discountAmount;
    discountApplied = true;
  }

  let taxAmount = discountedPrice * (taxPercent / 100);
  let priceAfterTax = discountedPrice + taxAmount;

  console.log("=====================================");
  console.log("Book title:", bookTitle);
  console.log("Author:", author);
  console.log("Price:", price.toFixed(2));
  console.log("-------------------------------------");
  
  if (discountApplied) {
    console.log("Discount:", discountPercent + "%");
    console.log("Discount amount:", discountAmount.toFixed(2));
    console.log("Price after discount:", discountedPrice.toFixed(2));
    console.log("-------------------------------------");
  }
  
  console.log("Tax:", taxPercent + "%");
  console.log("Tax amount:", taxAmount.toFixed(2));
  console.log("-------------------------------------");
  console.log("Price after tax:", priceAfterTax.toFixed(2));
  console.log("=====================================");
}

purchaseBook();
