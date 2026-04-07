export const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

const CART_STORAGE_KEY = 'demo-tcg-cart-items'
const WISHLIST_STORAGE_KEY = 'demo-tcg-wishlist-items'

const realCardImages = {
  card01: new URL('./assets/cards/card-01.png', import.meta.url).href,
  card02: new URL('./assets/cards/card-02.png', import.meta.url).href,
  card03: new URL('./assets/cards/card-03.png', import.meta.url).href,
  card04: new URL('./assets/cards/card-04.png', import.meta.url).href,
  card05: new URL('./assets/cards/card-05.png', import.meta.url).href,
  card06: new URL('./assets/cards/card-06.png', import.meta.url).href,
  card07: new URL('./assets/cards/card-07.png', import.meta.url).href,
  card08: new URL('./assets/cards/card-08.png', import.meta.url).href,
  card09: new URL('./assets/cards/card-09.png', import.meta.url).href,
  card10: new URL('./assets/cards/card-10.png', import.meta.url).href,
  card11: new URL('./assets/cards/card-11.png', import.meta.url).href,
  card12: new URL('./assets/cards/card-12.png', import.meta.url).href,
}

const heroPerfectOrderImage = new URL('./assets/hero-perfect-order.jpg', import.meta.url).href
const sv09BannerImage = new URL('./assets/sv09-banner-hq.png', import.meta.url).href
const sv8pt5BannerImage = new URL('./assets/sv8pt5-banner-hq.png', import.meta.url).href

function single(
  id,
  name,
  set,
  price,
  stock,
  accent,
  accent2,
  badge,
  image = '',
  meta = 'Pokemon TCG',
) {
  return {
    id,
    kind: 'single',
    name,
    set,
    meta,
    price,
    stock,
    accent,
    accent2,
    badge,
    art: name,
    image,
  }
}

function sealed(id, name, meta, price, stock, accent, accent2, art) {
  return {
    id,
    kind: 'sealed',
    name,
    set: meta,
    meta,
    price,
    stock,
    accent,
    accent2,
    badge: '',
    art,
  }
}

export const heroSlides = [
  {
    eyebrow: 'Lancamento em destaque',
    title: 'Mega Evolution-Perfect Order',
    summary:
      'Nova fase do Pokemon TCG com ETB, Booster Display Box, Booster Bundle e Build & Battle Box em vitrine principal.',
    cta: 'Compre aqui',
    target: '#product-grid-sealed',
    image: heroPerfectOrderImage,
    imageAlt:
      'Banner Pokemon TCG Mega Evolution Perfect Order com Eternatus, Blissey, Starmie e Meowth.',
    imagePosition: 'center center',
    overlayTitle: 'Mega Evolution-Perfect Order',
    overlaySummary:
      'Nova fase do Pokemon TCG com ETB, display box, bundle e colecoes em vitrine principal.',
    packs: [
      {
        label: 'Elite Trainer Box',
        title: 'ETB',
        caption: 'promo Tyrunt',
        colorA: '#d0f22d',
        colorB: '#1f8f5f',
      },
      {
        label: 'Booster Display Box',
        title: '36 Packs',
        caption: 'caixa selada',
        colorA: '#ffd247',
        colorB: '#ef684b',
      },
      {
        label: 'Booster Bundle',
        title: 'Bundle',
        caption: '6 boosters',
        colorA: '#ff4d93',
        colorB: '#7b44d0',
      },
    ],
  },
  {
    eyebrow: 'Pokemon TCG premium',
    title: 'Scarlet & Violet-Prismatic Evolutions',
    summary:
      'Eevee e suas evolucoes em uma vitrine forte de ETB, Booster Bundle, Binder Collection e caixas de colecionador.',
    cta: 'Explorar vitrine',
    target: '#product-grid-sealed',
    image: sv8pt5BannerImage,
    imageAlt:
      'Banner Scarlet & Violet-Prismatic Evolutions com Umbreon e Espeon em arte cristalizada.',
    imagePosition: 'center center',
    overlayTitle: 'Scarlet & Violet-Prismatic Evolutions',
    overlaySummary:
      'Eevee e evolucoes premium em uma vitrine selada para colecionador.',
    packs: [
      {
        label: 'Elite Trainer Box',
        title: 'ETB',
        caption: 'promo Eevee',
        colorA: '#ffd34f',
        colorB: '#ff61b2',
      },
      {
        label: 'Binder Collection',
        title: 'Binder',
        caption: 'colecionavel',
        colorA: '#77e5ff',
        colorB: '#6d4cf4',
      },
      {
        label: 'Booster Bundle',
        title: '6 Packs',
        caption: 'entrada rapida',
        colorA: '#ff84de',
        colorB: '#6a4df5',
      },
    ],
  },
  {
    eyebrow: 'Trainer cards em alta',
    title: 'Scarlet & Violet-Journey Together',
    summary:
      "Cards de N, Lillie, Iono e Hop puxando a busca por singles e sealed em uma home de loja com cara de vitrine.",
    cta: 'Ver singles',
    target: '#product-grid-singles',
    image: sv09BannerImage,
    imageAlt:
      'Banner Scarlet & Violet-Journey Together com N e Zoroark em fundo azul.',
    imagePosition: 'center 18%',
    overlayTitle: 'Scarlet & Violet-Journey Together',
    overlaySummary:
      'Cards de treinadores e sealed em uma pagina inicial com cara de loja real.',
    packs: [
      {
        label: 'Enhanced Display',
        title: 'Display',
        caption: "N's Reshiram bonus",
        colorA: '#56e7ff',
        colorB: '#2eb56a',
      },
      {
        label: 'Elite Trainer Box',
        title: 'ETB',
        caption: 'selado premium',
        colorA: '#ffd247',
        colorB: '#35b87d',
      },
      {
        label: 'Booster Pack',
        title: 'Pack',
        caption: 'abertura rapida',
        colorA: '#6be46a',
        colorB: '#1f8de9',
      },
    ],
  },
]

export const shelves = {
  singles: {
    tabs: [
      { id: 'popular', label: 'Mais procurados' },
      { id: 'promo', label: 'Em promocao' },
      { id: 'best', label: 'Mais vendidos' },
    ],
    activeTab: 'popular',
    promo: {
      label: '#promo',
      title: 'Mega Hawlucha ex',
      set: 'ASCP 116/217',
      oldPrice: 99.75,
      price: 89.75,
      colorA: '#ffd84d',
      colorB: '#ff7a42',
      image: realCardImages.card01,
    },
    products: {
      popular: [
        single(
          'mega-hawlucha-ex',
          'Mega Hawlucha ex',
          'ASCP 116/217',
          89.75,
          1,
          '#ffd84d',
          '#ff8c3a',
          'Foil',
          realCardImages.card01,
          'Mega Evolucao',
        ),
        single(
          'toxtricity',
          'Toxtricity',
          'PFLI 103/094',
          14.75,
          2,
          '#67ddff',
          '#4d7bf0',
          '',
          realCardImages.card02,
          'Estagio 1',
        ),
        single(
          'yamper',
          'Yamper',
          'PFLI 099/094',
          9.75,
          3,
          '#ffe18c',
          '#ffc680',
          '',
          realCardImages.card03,
          'Basico',
        ),
        single(
          'mega-diancie-ex',
          'Mega Diancie ex',
          'PFLI 041/094',
          119.75,
          1,
          '#ff84de',
          '#9a6bea',
          'Foil',
          realCardImages.card04,
          'Mega Evolucao',
        ),
      ],
      promo: [
        single(
          'togedemaru',
          'Togedemaru',
          'PFLI 104/094',
          8.75,
          2,
          '#9ce769',
          '#7dcf69',
          '',
          realCardImages.card05,
          'Basico',
        ),
        single(
          'stufful',
          'Stufful',
          'MEG 154/132',
          9.75,
          2,
          '#f7c87a',
          '#c67575',
          '',
          realCardImages.card06,
          'Basico',
        ),
        single(
          'marill',
          'Marill',
          'ASCP 232/217',
          39.75,
          1,
          '#ffd56b',
          '#ff90d9',
          'Foil',
          realCardImages.card07,
          'Ilustracao Rara',
        ),
        single(
          'mega-lucario-ex',
          'Mega Lucario ex',
          'MEG 077/132',
          149.75,
          1,
          '#ffa35a',
          '#5a8fff',
          'Foil',
          realCardImages.card08,
          'Mega Evolucao',
        ),
      ],
      best: [
        single(
          'rotom',
          'Rotom',
          'DRM 197/182',
          24.75,
          2,
          '#9be7ff',
          '#ffc590',
          'Foil',
          realCardImages.card09,
          'Ilustracao Rara',
        ),
        single(
          'staraptor-do-lauro',
          'Staraptor do Lauro',
          'ASCP 249/217',
          59.75,
          1,
          '#ffc08c',
          '#8f91ff',
          '',
          realCardImages.card10,
          'Estagio 2',
        ),
        single(
          'mega-emboar-ex',
          'Mega Emboar ex',
          'ASCP 031/217',
          169.75,
          1,
          '#ff9a4d',
          '#ff5f4d',
          'Foil',
          realCardImages.card11,
          'Mega Evolucao',
        ),
        single(
          'sagacidade-do-clemont',
          'Sagacidade do Clemont',
          'SVP 229/191',
          49.75,
          1,
          '#ffd865',
          '#77d3ff',
          'Foil',
          realCardImages.card12,
          'Apoiador',
        ),
      ],
    },
  },
  sealed: {
    tabs: [
      { id: 'popular', label: 'Mais procurados' },
      { id: 'promo', label: 'Em promocao' },
      { id: 'best', label: 'Mais vendidos' },
    ],
    activeTab: 'popular',
    promo: {
      label: '#promo',
      title: 'Scarlet & Violet-151 Pokemon Center Elite Trainer Box',
      set: 'Premium sealed',
      oldPrice: 999.75,
      price: 899.9,
      colorA: '#ffd44e',
      colorB: '#5bc9ff',
    },
    products: {
      popular: [
        sealed(
          'perfect-order-etb',
          'Mega Evolution-Perfect Order Elite Trainer Box',
          'Lancamento de 27 mar 2026',
          709.9,
          4,
          '#d0f22d',
          '#1fa66d',
          'ETB',
        ),
        sealed(
          'perfect-order-display',
          'Mega Evolution-Perfect Order Booster Display Box',
          'Display com 36 packs',
          1549.9,
          2,
          '#ffd44e',
          '#ff8a42',
          'Display',
        ),
        sealed(
          'prismatic-etb',
          'Scarlet & Violet-Prismatic Evolutions Elite Trainer Box',
          'Promo Eevee',
          599.9,
          4,
          '#ff72c8',
          '#ffd44e',
          'ETB',
        ),
        sealed(
          'journey-display',
          'Scarlet & Violet-Journey Together Enhanced Booster Display Box',
          "N's Reshiram bonus",
          1499.9,
          2,
          '#61e5ff',
          '#4bb56b',
          'Display',
        ),
        sealed(
          'sv151-etb',
          'Scarlet & Violet-151 Pokemon Center Elite Trainer Box',
          '11 boosters',
          899.9,
          2,
          '#ffd44e',
          '#57cfff',
          'PC ETB',
        ),
      ],
      promo: [
        sealed(
          'prismatic-bundle',
          'Scarlet & Violet-Prismatic Evolutions Booster Bundle',
          '6 boosters',
          319.9,
          6,
          '#ff92df',
          '#6c58ef',
          'Bundle',
        ),
        sealed(
          'phantasmal-etb',
          'Mega Evolution-Phantasmal Flames Elite Trainer Box',
          'Promo Charcadet',
          679.9,
          3,
          '#ff8d4b',
          '#ff5b93',
          'ETB',
        ),
        sealed(
          'pokemon-go-etb-plus',
          'Pokemon GO Pokemon Center Elite Trainer Box Plus',
          'Promo Mewtwo V',
          829.9,
          2,
          '#68deff',
          '#ffd44e',
          'ETB Plus',
        ),
        sealed(
          'grand-adventure',
          'Pokemon TCG: Grand Adventure Collection',
          'Pokemon Horizons',
          389.9,
          5,
          '#78e6c9',
          '#58a8ff',
          'Collection',
        ),
        sealed(
          'surging-sparks-etb',
          'Scarlet & Violet-Surging Sparks Elite Trainer Box',
          'Pikachu ex',
          569.9,
          3,
          '#ffd44e',
          '#58b1ff',
          'ETB',
        ),
      ],
      best: [
        sealed(
          'journey-etb',
          'Scarlet & Violet-Journey Together Elite Trainer Box',
          'Trainer cards',
          579.9,
          4,
          '#67e4ff',
          '#44bf7b',
          'ETB',
        ),
        sealed(
          'sv151-booster-bundle',
          'Scarlet & Violet-151 Booster Bundle',
          '6 boosters',
          329.9,
          8,
          '#ffd44e',
          '#5ec9ff',
          'Bundle',
        ),
        sealed(
          'perfect-order-bundle',
          'Mega Evolution-Perfect Order Booster Bundle',
          'Nova colecao',
          339.9,
          7,
          '#d8f33b',
          '#44a86d',
          'Bundle',
        ),
        sealed(
          'prismatic-binder',
          'Scarlet & Violet-Prismatic Evolutions Binder Collection',
          'Binder + boosters',
          289.9,
          6,
          '#ff8bd5',
          '#6f4df1',
          'Binder',
        ),
        sealed(
          'journey-booster-pack',
          'Scarlet & Violet-Journey Together Booster Pack',
          'Abertura avulsa',
          32.9,
          24,
          '#6be4ff',
          '#3daa67',
          'Pack',
        ),
      ],
    },
  },
}

function readStorage(key) {
  const stored = localStorage.getItem(key)

  if (!stored) {
    return []
  }

  try {
    return JSON.parse(stored)
  } catch {
    return []
  }
}

export function readCart() {
  return readStorage(CART_STORAGE_KEY)
}

export function readWishlist() {
  return readStorage(WISHLIST_STORAGE_KEY)
}

export function writeCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
}

export function writeWishlist(wishlist) {
  localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist))
}

export function getCatalogItems() {
  return Object.values(shelves).flatMap((shelf) => Object.values(shelf.products).flat())
}

export function getCatalogItemById(itemId) {
  return getCatalogItems().find((item) => item.id === itemId) ?? null
}

export function getCartItemCount(cart) {
  return cart.reduce((total, item) => total + item.quantity, 0)
}
