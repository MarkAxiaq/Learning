// To refactor and use something like immutable.js
function makeImmutable(object) {
  Object.freeze(object);

  Object.getOwnPropertyNames(object).forEach(prop => {
    if (
      object.hasOwnProperty(prop) &&
      object[prop] !== null &&
      typeof object[prop] === 'object' &&
      !Object.isFrozen(object[prop])
    ) {
      makeImmutable(object[prop]);
    }
  });

  return object;
}

export default function makeObjImmutable(store) {
  return next => action => {
    const result = next(action);
    const state = store.getState();
    makeImmutable(state);
    return result;
  };
}
