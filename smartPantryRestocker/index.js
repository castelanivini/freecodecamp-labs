const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge",
];

const pantry = [
  {
    sku: "A10",
    name: "Tomatoes",
    qty: 4,
    expires: "2027-01-01",
    zone: "fridge",
  },
  {
    sku: "D43",
    name: "Pineapples",
    qty: 2,
    expires: "2020-01-01",
    zone: "general",
  },
];

function parseShipment(rawData) {
  let arr = [];
  const validator = {
    isObjUnique: (key, arr) => {
      let bool = true;
      for (let obj of arr) {
        if (obj["sku"] == key) {
          bool = false;
          return bool;
        }
      }
      return bool;
    },
  };
  for (let item of rawData) {
    let obj = {};

    const [sku, name, qty, expires, zone = "general"] = item.split("|");
    if (!validator["isObjUnique"](sku, arr)) continue;

    obj = {
      sku,
      name,
      qty: Number(qty),
      expires,
      zone,
    };

    arr.push(obj);
  }

  return arr;
}

function planRestock(pantry, shipment) {
  const validator = {
    ifQtyValid: (qty) => qty > 0,
  };
  let arr = [];
  for (let item of shipment) {
    let obj = { item: item };
    const { sku, qty } = item;
    const pantryIndex = pantry.findIndex((pantry) => pantry.sku === sku);
    const pantryItem = pantry[pantryIndex];

    if (!validator["ifQtyValid"](qty)) obj["type"] = "discard";
    else if (!pantryItem) obj["type"] = "donate";
    else obj["type"] = "restock";

    arr.push(obj);
  }

  return arr;
}

function groupByZone(actions) {
  const validator = {
    attrExists: (obj, attr) => Object.hasOwn(obj, attr),
  };
  let obj = {};
  for (let action of actions) {
    const {
      type,
      item,
      item: { zone },
    } = action;

    if (!validator["attrExists"](obj, zone)) {
      obj[zone] = [];
    }

    obj[zone].push({ type, item });
  }
  return obj;
}

function clonePantry(pantry) {
  return JSON.parse(JSON.stringify(pantry));
}
groupByZone(planRestock(clonePantry(pantry), parseShipment(rawData)));
