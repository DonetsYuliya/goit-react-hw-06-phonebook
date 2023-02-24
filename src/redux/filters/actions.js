export const setFilter = value => {
  return {
    type: 'filters/setFilter',
    payload: value,
  };
};
