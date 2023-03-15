const readline = require('readline-sync');

function purchaseBook(stock, purchased, creditTerm) {
  const TAX_RATE = 0.1; // 10% tax rate

  console.log("==============================================================");
  let bookTitle = readline.question("Enter book title: ");
  let author = readline.question("Enter author name: ");
  let price = parseFloat(readline.question("Enter book price: "));
  let discountPercent = parseFloat(readline.question("Enter discount percentage: "));
  let taxPercent = parseFloat(readline.question("Enter tax percentage: "));
  console.log("==============================================================");

  let discountAmount = 0;
  if (price > 50000) {
    discountAmount = price * (discountPercent / 100);
  }

  let discountedPrice = price - discountAmount;
  let taxAmount = discountedPrice * (taxPercent / 100);
  let priceAfterTax = discountedPrice + taxAmount;

  if (purchased + creditTerm > stock) {
    console.log(`Only ${stock - purchased} book(s) left in stock. Cannot purchase more than that.`);
    return;
  }

  let totalPrice = 0;
  let termPrice = priceAfterTax / creditTerm;
  let dueDates = [];
  for (let i = 0; i < creditTerm; i++) {
    totalPrice += termPrice;
    dueDates.push(`Due ${i + 1} month(s) after purchase`, totalPrice.toFixed(2));
  }

  console.log("============================ OUTPUT ==================================");
  console.log("Book title:", bookTitle);
  console.log("Author:", author);
  console.log("Price:", price.toFixed(2));
  console.log("Discount:", discountPercent + "%");
  console.log("Discount amount:", discountAmount.toFixed(2));
  console.log("Price after discount:", discountedPrice.toFixed(2));
  console.log("Tax:", taxPercent + "%");
  console.log("Tax amount:", taxAmount.toFixed(2));
  console.log("Price after tax:", priceAfterTax.toFixed(2));
  console.log(`Total price for ${creditTerm} months:`, totalPrice.toFixed(2));
  console.log("Credit due dates:", dueDates);
}

// Example usage:
// purchaseBook(stock, purchased, creditTerm);
purchaseBook(10, 2, 4); // Purchase 2 books with a credit term of 4 months, when 10 books are in stock
