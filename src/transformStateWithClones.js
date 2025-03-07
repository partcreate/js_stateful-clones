// 'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here

  const stateCopy = Object.assign({}, state);

  const resultArray = [];

  actions.forEach((obj, i) => {
    switch (obj?.type) {
      case 'addProperties':
        for (const [key, value] of Object.entries(obj?.extraData)) {
          stateCopy[key] = value;
        }
        resultArray.push(Object.assign({}, stateCopy));
        break;
      case 'removeProperties':
        for (const key of obj?.keysToRemove) {
          delete stateCopy[key];
        }

        resultArray.push(Object.assign({}, stateCopy));
        break;

      case 'clear':
        for (const prop in stateCopy) {
          delete stateCopy[prop];
        }

        resultArray.push(Object.assign({}, stateCopy));
    }
  });

  return resultArray;
}

module.exports = transformStateWithClones;
