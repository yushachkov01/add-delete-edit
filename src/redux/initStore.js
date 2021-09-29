export const initStore = {
  contacts: [],
}

export default function reducer(store = initStore, { type, payload }) {
  switch (type) {
    case 'SEND_NEW_CONTACT':
      return { ...store, contacts: [...store.contacts, payload] };
    case 'SAVE_EDITED_CONTACT':
      return { ...store, contacts: [...store.contacts.filter(cont => cont !== payload.oldValue), payload.newValue] };
    case 'DELETE_CONTACT':
      return { ...store, contacts: [...store.contacts.filter(cont => cont !== payload)] };
    default:
      return store;
  }
}