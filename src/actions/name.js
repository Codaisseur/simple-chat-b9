export const RESTORE_NAME = 'RESTORE_NAME'
export const STORE_NAME = 'STORE_NAME'

const NAME_STORAGE_KEY = 'sayMyName'

export const restoreName = () => {
  const storedName = window.localStorage.getItem(NAME_STORAGE_KEY)

  return {
    type: RESTORE_NAME,
    payload: storedName
  }
}

export const storeName = (name) => {
  window.localStorage.setItem(NAME_STORAGE_KEY, name)

  return {
    type: STORE_NAME,
    payload: name
  }
}
