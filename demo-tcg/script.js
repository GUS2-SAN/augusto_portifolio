import {
  currency,
  getCatalogItemById,
  getCartItemCount,
  heroSlides,
  readCart,
  readWishlist,
  shelves,
  writeCart,
  writeWishlist,
} from './store.js'

const heroSlider = document.querySelector('#hero-slider')
const heroDots = document.querySelector('#hero-dots')
const cartCount = document.querySelector('#cart-count')
const wishlistCount = document.querySelector('#wishlist-count')
const searchForm = document.querySelector('#search-form')
const searchInput = document.querySelector('#search-input')
const toast = document.querySelector('#toast')
const menuToggle = document.querySelector('#menu-toggle')
const mobileSidebar = document.querySelector('#mobile-sidebar')
const mobileOverlay = document.querySelector('#mobile-overlay')
const cartActionButton = document.querySelector('.icon-action--cart')
const wishlistActionButton = document.querySelector('.icon-action--wishlist')

const state = {
  heroIndex: 0,
  query: '',
  cart: readCart(),
  wishlist: readWishlist(),
  toastTimeout: null,
}

function persistCounts() {
  writeCart(state.cart)
  writeWishlist(state.wishlist)
}

function updateHeaderCounts() {
  cartCount.textContent = String(getCartItemCount(state.cart))
  wishlistCount.textContent = String(state.wishlist.length)
}

function showToast(message) {
  toast.textContent = message
  toast.classList.add('is-visible')

  window.clearTimeout(state.toastTimeout)
  state.toastTimeout = window.setTimeout(() => {
    toast.classList.remove('is-visible')
  }, 2200)
}

function setMobileMenuOpen(isOpen) {
  if (!menuToggle || !mobileSidebar || !mobileOverlay) {
    return
  }

  menuToggle.setAttribute('aria-expanded', String(isOpen))
  mobileSidebar.setAttribute('aria-hidden', String(!isOpen))
  mobileSidebar.classList.toggle('is-open', isOpen)
  mobileOverlay.hidden = !isOpen
  document.body.classList.toggle('menu-open', isOpen)
}

function renderHeroBannerSlide(slide) {
  return `
    <article class="hero-slide hero-slide--banner">
      <div class="hero-slide__banner-shell" style="--hero-banner-position:${slide.imagePosition ?? 'center'};">
        <img class="hero-slide__banner-image" src="${slide.image}" alt="${slide.imageAlt}" />
        <div class="hero-slide__banner-copy">
          <span class="hero-slide__banner-badge">${slide.eyebrow}</span>
          ${slide.overlayTitle ? `<div class="hero-slide__banner-title">${slide.overlayTitle}</div>` : ''}
          ${slide.overlaySummary ? `<p class="hero-slide__banner-summary">${slide.overlaySummary}</p>` : ''}
        </div>
        <div class="hero-slide__banner-actions">
          <a class="hero-slide__cta hero-slide__cta--banner" href="${slide.target}">${slide.cta}</a>
        </div>
      </div>
    </article>
  `
}

function renderHero() {
  const slide = heroSlides[state.heroIndex]

  heroSlider.innerHTML = renderHeroBannerSlide(slide)
}

function renderHeroDots() {
  heroDots.innerHTML = heroSlides
    .map(
      (_, index) => `
        <button
          type="button"
          class="${index === state.heroIndex ? 'is-active' : ''}"
          data-hero-dot="${index}"
          aria-label="Ir para banner ${index + 1}"
        ></button>
      `,
    )
    .join('')
}

function getShelfProducts(shelfKey) {
  const shelf = shelves[shelfKey]
  const activeItems = shelf.products[shelf.activeTab]

  if (!state.query) {
    return activeItems
  }

  const normalized = state.query.toLowerCase()

  return activeItems.filter((item) => {
    const text = `${item.name} ${item.set} ${item.meta}`.toLowerCase()
    return text.includes(normalized)
  })
}

function renderShelfTabs(shelfKey) {
  const shelf = shelves[shelfKey]
  const container = document.querySelector(`#shelf-tabs-${shelfKey}`)

  container.innerHTML = shelf.tabs
    .map(
      (tab) => `
        <button
          type="button"
          class="${tab.id === shelf.activeTab ? 'is-active' : ''}"
          data-shelf-tab="${shelfKey}"
          data-tab-id="${tab.id}"
        >
          ${tab.label}
        </button>
      `,
    )
    .join('')
}

function renderPromoPanel(shelfKey) {
  const shelf = shelves[shelfKey]
  const panel = document.querySelector(`#promo-panel-${shelfKey}`)
  const promo = shelf.promo

  panel.innerHTML = `
    <div class="promo-panel__label">${promo.label}</div>
    <div class="promo-panel__body">
      <div
        class="promo-panel__thumb"
        style="--promo-a:${promo.colorA}; --promo-b:${promo.colorB};"
      >${promo.image ? `<img src="${promo.image}" alt="${promo.title}" />` : ''}</div>
      <div class="promo-panel__title">${promo.title}<br />(${promo.set})</div>
      <div class="promo-panel__prices">
        <div><span>de:</span><strong><s>${currency.format(promo.oldPrice)}</s></strong></div>
        <div><span>por:</span><strong>${currency.format(promo.price)}</strong></div>
      </div>
      <div class="promo-panel__timer" data-countdown="${shelfKey}">00:00:00.0</div>
    </div>
  `
}

function renderProductGrid(shelfKey) {
  const items = getShelfProducts(shelfKey)
  const grid = document.querySelector(`#product-grid-${shelfKey}`)

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="product-grid__empty">
        Nenhum item encontrado para "${state.query}".
      </div>
    `
    return
  }

  grid.innerHTML = items
    .map(
      (item) => `
        <article class="product-card">
          <button
            class="product-card__cart"
            type="button"
            data-add="${item.id}"
            aria-label="Adicionar ${item.name} ao carrinho"
          ></button>

          <div
            class="product-thumb product-thumb--${item.kind}"
            style="--accent:${item.accent}; --accent-2:${item.accent2};"
          >
            ${item.badge ? `<span class="product-thumb__badge">${item.badge}</span>` : ''}
            ${
              item.image
                ? `<img class="product-thumb__image" src="${item.image}" alt="${item.name}" />`
                : `
                  <div class="product-thumb__frame">
                    <div class="product-thumb__set">${item.set}</div>
                    <div class="product-thumb__art"><span>${item.art}</span></div>
                    <div class="product-thumb__name">${item.kind === 'single' ? 'Pokemon TCG' : item.meta}</div>
                  </div>
                `
            }

            <span class="product-thumb__stock">
              <strong>${item.stock}</strong>
              <small>unid</small>
            </span>
          </div>

          <h3>${item.name}</h3>
          ${item.meta ? `<div class="product-card__meta">${item.meta}</div>` : ''}
          <div class="product-card__price">${currency.format(item.price)}</div>
        </article>
      `,
    )
    .join('')
}

function renderShelves() {
  Object.keys(shelves).forEach((shelfKey) => {
    renderShelfTabs(shelfKey)
    renderPromoPanel(shelfKey)
    renderProductGrid(shelfKey)
  })
}

function addToCart(itemId) {
  const item = getCatalogItemById(itemId)

  if (!item) {
    return
  }

  const existing = state.cart.find((entry) => entry.id === itemId)

  if (existing) {
    existing.quantity += 1
  } else {
    state.cart.push({
      id: item.id,
      name: item.name,
      quantity: 1,
    })
  }

  persistCounts()
  updateHeaderCounts()
  showToast(`${item.name} adicionado ao carrinho.`)
}

function updateCountdowns() {
  const now = new Date()
  const deadline = new Date(now)
  deadline.setHours(23, 59, 59, 999)

  const remaining = Math.max(0, deadline.getTime() - now.getTime())
  const totalSeconds = remaining / 1000
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0')
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0')
  const seconds = String(Math.floor(totalSeconds % 60)).padStart(2, '0')
  const tenths = Math.floor((remaining % 1000) / 100)
  const output = `${hours}:${minutes}:${seconds}.${tenths}`

  document.querySelectorAll('[data-countdown]').forEach((element) => {
    element.textContent = output
  })
}

function rotateHero() {
  state.heroIndex = (state.heroIndex + 1) % heroSlides.length
  renderHero()
  renderHeroDots()
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault()
  state.query = searchInput.value.trim()
  renderShelves()
  document.querySelector('.shelf-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
})

if (cartActionButton) {
  cartActionButton.addEventListener('click', () => {
    window.location.href = './carrinho.html'
  })
}

if (wishlistActionButton) {
  wishlistActionButton.addEventListener('click', () => {
    showToast('Favoritos em breve nesta demo.')
  })
}

document.addEventListener('click', (event) => {
  const heroDot = event.target.closest('[data-hero-dot]')

  if (heroDot) {
    state.heroIndex = Number(heroDot.dataset.heroDot)
    renderHero()
    renderHeroDots()
    return
  }

  const tabButton = event.target.closest('[data-shelf-tab]')

  if (tabButton) {
    const shelfKey = tabButton.dataset.shelfTab
    const tabId = tabButton.dataset.tabId
    shelves[shelfKey].activeTab = tabId
    renderShelfTabs(shelfKey)
    renderProductGrid(shelfKey)
    return
  }

  const addButton = event.target.closest('[data-add]')

  if (addButton) {
    addToCart(addButton.dataset.add)
    return
  }

  if (event.target.closest('#menu-toggle')) {
    setMobileMenuOpen(true)
    return
  }

  if (
    event.target.closest('#mobile-sidebar-close') ||
    event.target.closest('#mobile-overlay') ||
    event.target.closest('.mobile-nav a') ||
    event.target.closest('.mobile-sidebar__contact a')
  ) {
    setMobileMenuOpen(false)
  }
})

window.addEventListener('resize', () => {
  if (window.innerWidth > 820) {
    setMobileMenuOpen(false)
  }
})

renderHero()
renderHeroDots()
renderShelves()
updateHeaderCounts()
updateCountdowns()
setMobileMenuOpen(false)

window.setInterval(updateCountdowns, 100)
window.setInterval(rotateHero, 5000)
