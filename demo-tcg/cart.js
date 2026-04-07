import {
  currency,
  getCatalogItemById,
  getCartItemCount,
  readCart,
  writeCart,
} from './store.js'

const paymentLabels = {
  pix: 'Pix instantaneo',
  card: 'Cartao de credito',
  boleto: 'Boleto bancario',
}

const cartCount = document.querySelector('#cart-count')
const cartItemsCount = document.querySelector('#cart-items-count')
const cartItems = document.querySelector('#cart-items')
const cartEmpty = document.querySelector('#cart-empty')
const subtotalValue = document.querySelector('#subtotal-value')
const shippingValue = document.querySelector('#shipping-value')
const totalValue = document.querySelector('#total-value')
const summaryPayment = document.querySelector('#summary-payment')
const shippingForm = document.querySelector('#shipping-form')
const shippingZip = document.querySelector('#shipping-zip')
const shippingFeedback = document.querySelector('#shipping-feedback')
const paymentToggle = document.querySelector('#payment-toggle')
const paymentPanel = document.querySelector('#payment-panel')
const currentPaymentLabel = document.querySelector('#current-payment-label')
const checkoutButton = document.querySelector('#checkout-button')
const demoModal = document.querySelector('#demo-modal')

const state = {
  cart: readCart(),
  paymentMethod: 'pix',
  paymentPanelOpen: false,
  shippingMessage: 'Frete gratis para todo o Brasil nesta demo.',
}

function getDetailedCart() {
  return state.cart
    .map((entry) => {
      const item = getCatalogItemById(entry.id)

      if (!item) {
        return null
      }

      return {
        ...item,
        quantity: entry.quantity,
      }
    })
    .filter(Boolean)
}

function getSubtotal() {
  return getDetailedCart().reduce((total, item) => total + item.price * item.quantity, 0)
}

function persistCart() {
  writeCart(state.cart)
}

function formatZip(value) {
  const digits = value.replace(/\D/g, '').slice(0, 8)

  if (digits.length <= 5) {
    return digits
  }

  return `${digits.slice(0, 5)}-${digits.slice(5)}`
}

function setModalOpen(isOpen) {
  demoModal.hidden = !isOpen
}

function renderHeader() {
  const totalItems = getCartItemCount(state.cart)
  cartCount.textContent = String(totalItems)
  cartItemsCount.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'itens'}`
}

function renderSummary() {
  const subtotal = getSubtotal()

  subtotalValue.textContent = currency.format(subtotal)
  shippingValue.textContent = 'Gratis'
  totalValue.textContent = currency.format(subtotal)
  summaryPayment.textContent = paymentLabels[state.paymentMethod]
  currentPaymentLabel.textContent = paymentLabels[state.paymentMethod]
  paymentToggle.setAttribute('aria-expanded', String(state.paymentPanelOpen))
  paymentPanel.hidden = !state.paymentPanelOpen
  shippingFeedback.textContent = state.shippingMessage
  checkoutButton.disabled = state.cart.length === 0
}

function renderCartItems() {
  const items = getDetailedCart()

  cartEmpty.hidden = items.length !== 0
  cartItems.innerHTML = items
    .map(
      (item) => `
        <article class="cart-item">
          <div
            class="cart-item__media"
            style="--accent:${item.accent}; --accent-2:${item.accent2};"
          >
            ${
              item.image
                ? `<img src="${item.image}" alt="${item.name}" />`
                : `<div class="cart-item__media-fallback">${item.art}</div>`
            }
          </div>

          <div class="cart-item__body">
            <span class="cart-item__kind">
              ${item.kind === 'single' ? 'Carta avulsa' : 'Produto selado'}
            </span>
            <h3>${item.name}</h3>
            <p>${item.meta}</p>
          </div>

          <div class="cart-item__controls">
            <div class="cart-item__qty">
              <button type="button" data-quantity-action="decrease" data-item-id="${item.id}">
                -
              </button>
              <span>${item.quantity}</span>
              <button type="button" data-quantity-action="increase" data-item-id="${item.id}">
                +
              </button>
            </div>

            <div class="cart-item__price">
              <strong>${currency.format(item.price * item.quantity)}</strong>
              <small>${currency.format(item.price)} cada</small>
            </div>

            <button class="cart-item__remove" type="button" data-remove-item="${item.id}">
              Remover
            </button>
          </div>
        </article>
      `,
    )
    .join('')
}

function render() {
  renderHeader()
  renderCartItems()
  renderSummary()
}

function updateItemQuantity(itemId, direction) {
  const item = state.cart.find((entry) => entry.id === itemId)

  if (!item) {
    return
  }

  item.quantity += direction

  if (item.quantity <= 0) {
    state.cart = state.cart.filter((entry) => entry.id !== itemId)
  }

  persistCart()
  render()
}

function removeItem(itemId) {
  state.cart = state.cart.filter((entry) => entry.id !== itemId)
  persistCart()
  render()
}

shippingForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const formattedZip = formatZip(shippingZip.value)
  const digits = formattedZip.replace(/\D/g, '')

  shippingZip.value = formattedZip

  if (digits.length < 8) {
    state.shippingMessage = 'Digite um CEP valido de 8 digitos para simular o frete gratis.'
    renderSummary()
    return
  }

  state.shippingMessage = `CEP ${formattedZip} com frete gratis aplicado nesta demo.`
  renderSummary()
})

paymentToggle.addEventListener('click', () => {
  state.paymentPanelOpen = !state.paymentPanelOpen
  renderSummary()
})

document.addEventListener('change', (event) => {
  const paymentInput = event.target.closest('input[name="payment-method"]')

  if (!paymentInput) {
    return
  }

  state.paymentMethod = paymentInput.value
  renderSummary()
})

document.addEventListener('click', (event) => {
  const quantityButton = event.target.closest('[data-quantity-action]')

  if (quantityButton) {
    const direction = quantityButton.dataset.quantityAction === 'increase' ? 1 : -1
    updateItemQuantity(quantityButton.dataset.itemId, direction)
    return
  }

  const removeButton = event.target.closest('[data-remove-item]')

  if (removeButton) {
    removeItem(removeButton.dataset.removeItem)
    return
  }

  if (event.target.closest('#checkout-button') && state.cart.length > 0) {
    setModalOpen(true)
    return
  }

  if (event.target.closest('[data-close-modal]')) {
    setModalOpen(false)
  }
})

render()
setModalOpen(false)
