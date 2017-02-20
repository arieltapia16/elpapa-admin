export function selectMenuItem (item) {
  return {
    type: 'ITEM_SELECTED',
    payload: item
  };
}
export function ModalState (state) {
  return {
    type: 'STATE_SELECTED',
    payload: state
  };
}
