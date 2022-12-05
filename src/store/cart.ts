import { acceptHMRUpdate, defineStore } from 'pinia'

const totalPrice = ref(0)
export default {
  totalPrice,
}

export const useCartStore = defineStore('user', () => {
  const bAdd = ref(0)
  const bDown = ref(0)
  const addItem_Sum = ref(0)
  const quantity = ref(0)
  const price = ref(0)
  const quantity2 = ref(0)
  const price2 = ref(0)
  const quantity3 = ref(0)
  const price3 = ref(0)
  const quantity4 = ref(0)
  const price4 = ref(0)

  async function addItem(itemId: any) { // +
    if (itemId === 1) {
      quantity.value += 1
      price.value = quantity.value * 100
      addItem_Sum.value += 1
      totalPrice.value += 100
    }
    else if (itemId === 2) {
      quantity2.value += 1
      price2.value = quantity2.value * 110
      addItem_Sum.value += 1
      totalPrice.value += 110
    }
    else if (itemId === 3) {
      quantity3.value += 1
      price3.value = quantity3.value * 120
      addItem_Sum.value += 1
      totalPrice.value += 120
    }
    else if (itemId === 4) {
      quantity4.value += 1
      price4.value = quantity4.value * 130
      addItem_Sum.value += 1
      totalPrice.value += 130
    }
  }
  async function downItem(itemId: any) { // -
    if (itemId === 1 && quantity.value !== 0) {
      quantity.value -= 1
      price.value = quantity.value * 100
      addItem_Sum.value -= 1
      totalPrice.value -= 100
    }
    else if (itemId === 2 && quantity2.value !== 0) {
      quantity2.value -= 1
      price2.value = quantity2.value * 110
      addItem_Sum.value -= 1
      totalPrice.value -= 110
    }
    else if (itemId === 3 && quantity3.value !== 0) {
      quantity3.value -= 1
      price3.value = quantity3.value * 120
      addItem_Sum.value -= 1
      totalPrice.value -= 120
    }
    else if (itemId === 4 && quantity4.value !== 0) {
      quantity4.value -= 1
      price4.value = quantity4.value * 130
      addItem_Sum.value -= 1
      totalPrice.value -= 130
    }
  }

  return {
    bAdd,
    bDown,
    addItem_Sum,
    addItem,
    downItem,
    quantity,
    price,
    quantity2,
    price2,
    quantity3,
    price3,
    quantity4,
    price4,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))

