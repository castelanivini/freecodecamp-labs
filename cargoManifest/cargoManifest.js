const manifest = { containerId: -88, destination: "Soledad", weight: NaN };

// { containerId: 0, destination: 405, weight: -84, unit: "pounds", hazmat: "no" }

function normalizeUnits(manifest) {
  const converteParaKG = (lb) => lb * 0.45;
  const { weight, unit } = manifest;
  return {
    ...manifest,
    weight: unit === "lb" ? converteParaKG(weight) : weight,
    unit: unit === "lb" ? "kg" : unit,
  };
}

function validateManifest(manifest) {
  const attrs = ["containerId", "destination", "weight", "unit", "hazmat"];
  const missingAttrs = {};
  const invalidAttrs = {};

  attrs.forEach((attr) => {
    const attrExists = Object.hasOwn(manifest, attr);

    if (!attrExists) {
      missingAttrs[attr] = "Missing";
      return;
    }

    if (manifest[attr] == null) {
      invalidAttrs[attr] = "Invalid";
      return;
    }

    const attrValue = manifest[attr];

    if (
      (attr === "containerId" &&
        (attrValue <= 0 || !Number.isInteger(attrValue))) ||
      (attr === "weight" && (attrValue <= 0 || isNaN(attrValue)))
    ) {
      invalidAttrs[attr] = "Invalid";
      return;
    }

    if (attr == "hazmat" && typeof attrValue != "boolean") {
      invalidAttrs[attr] = "Invalid";
      return;
    }

    if (
      (attr == "destination" && typeof attrValue != "string") ||
      !String(attrValue).trim().length
    ) {
      invalidAttrs[attr] = "Invalid";
      return;
    }

    if (attr == "unit" && attrValue != "lb" && attrValue != "kg") {
      invalidAttrs[attr] = "Invalid";
      return;
    }
  });

  return {
    ...invalidAttrs,
    ...missingAttrs,
  };
}

function processManifest(manifest) {
  const validatedObj = validateManifest(manifest);
  if (!Object.keys(validatedObj).length) {
    const processedObj = normalizeUnits(manifest);
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${processedObj.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validatedObj);
  }
}

console.log(processManifest(manifest));
