const inventory = [
  { name: "flour", quantity: 20 },
  { name: "rice", quantity: 5 },
];

function findProductIndex(productName) {
  return inventory.findIndex(
    (i) => i.name.toLowerCase() === productName.toLowerCase(),
  );
}

function addProduct(product) {
  const productIndex = findProductIndex(product.name.toLowerCase());
  if (productIndex > -1) {
    inventory[productIndex].quantity += product.quantity;
    console.log(`${product.name.toLowerCase()} quantity updated`);
  } else {
    inventory.push({
      name: product.name.toLowerCase(),
      quantity: product.quantity,
    });
    console.log(`${product.name.toLowerCase()} added to inventory`);
  }
}

function removeProduct(productName, quantity) {
  const validators = {
    isIndexValid: (index) => index != -1,
    isQuantityValid: (cur, target) => cur >= target,
    isQuantityZero: (quantity) => quantity === 0,
  };
  const productIndex = findProductIndex(productName.toLowerCase());
  if (!validators["isIndexValid"](productIndex)) {
    console.log(`${productName.toLowerCase()} not found`);
    return;
  }
  if (
    !validators["isQuantityValid"](inventory[productIndex].quantity, quantity)
  ) {
    console.log(
      `Not enough ${productName.toLowerCase()} available, remaining pieces: ${inventory[productIndex].quantity}`,
    );
    return;
  }
  inventory[productIndex].quantity -= quantity;
  console.log(
    `Remaining ${inventory[productIndex].name} pieces: ${inventory[productIndex].quantity}`,
  );

  if (validators["isQuantityZero"](inventory[productIndex].quantity)) {
    inventory.splice(productIndex, 1);
  }
}

removeProduct("FLOUR", 5);
