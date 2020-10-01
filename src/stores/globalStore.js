import {
  writable
} from "svelte/store"

const globalStore = writable({
  sidebar: false,
  fechaActual:"null",
})

const store = {
  subscribe: globalStore.subscribe,
  toggleItem: (item, value, alertText, alertDanger = false) => {
    if (item === "alert") {
      globalStore.update(storeValues => {
        return {
          ...storeValues,
          [item]: value,
          alertText,
          alertDanger
        }
      })
    }
    globalStore.update(storeValues => {
      return {
        ...storeValues,
        [item]: value
      }
    })
  }
}

export default store