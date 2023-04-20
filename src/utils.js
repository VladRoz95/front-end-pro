export const deepClone = (originalObj) => {
  if (!originalObj || typeof originalObj !== "object") return originalObj;

  const clonedObj = Array.isArray(originalObj) ? [] : {};

  for (const key in originalObj) {
    const value = originalObj[key];

    clonedObj[key] = deepClone(value);
  }

  return clonedObj;
};

export const deepFreeze = (object) => {
  // Retrieve the property names defined on object
  const propNames = Reflect.ownKeys(object);

  // Freeze properties before freezing self
  for (const name of propNames) {
    const value = object[name];

    if ((value && typeof value === "object") || typeof value === "function") {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
};
