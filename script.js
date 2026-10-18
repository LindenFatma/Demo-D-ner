
"use strict";

// Gerçek restoran WhatsApp numarasını yaz.
// Almanya örneği: 4917668185194
const RESTAURANT_WHATSAPP = "4917668185194";
const DELIVERY_MINIMUM = 50;
const POLISH_MENU_ENABLED = false;
const DELIVERY_MINIMUM_WARNING =
  "Für eine Lieferung muss der Warenkorb mindestens 50,00 € enthalten. Bitte füge weitere Produkte zum Warenkorb hinzu.";

const products = [
  {
    id: 1,
    name: "Döner Kebab",
    category: "Döner",
    description: "Allergene/Zusatzstoffe: a, f, g, j, k, 1, 4, 6",
    price: 7.50,
    image: "images/doner-kebab.png"
  },
  {
    id: 2,
    name: "Dönerteller mit Pommes und Salat",
    category: "Döner",
    description: "Allergene/Zusatzstoffe: a, f, g, j, k, 1, 4, 6",
    price: 12.00,
    image: "images/donerteller-pommes-salat.png"
  },
  {
    id: 3,
    name: "Döner Box",
    category: "Döner",
    description: "Allergene/Zusatzstoffe: a, f, g, j, k, 1, 4, 6",
    price: 7.00,
    image: "images/doner-box.png"
  },
  {
    id: 4,
    name: "Yufka Döner",
    category: "Döner",
    description: "Allergene/Zusatzstoffe: a, f, g, j, k, 1, 4, 6",
    price: 8.00,
    image: "images/yufka-doner.png"
  },
  {
    id: 5,
    name: "Lahmacun mit Salat und Dönerfleisch, gerollt",
    category: "Döner",
    description: "Allergene/Zusatzstoffe: a, f, g, j, k, 1, 4, 6",
    price: 9.00,
    image: "images/lahmacun.png"
  },
  {
    id: 6,
    name: "Köfte (vom Rind) im Fladenbrot",
    category: "Grillgerichte",
    description: "Allergene/Zusatzstoffe: a, c, g, i, j, 3, 6",
    price: 8.00,
    image: "images/koefte-yufka.png"
  },
  {
    id: 7,
    name: "Köfte mit Salat und Pommes",
    category: "Grillgerichte",
    description: "Allergene/Zusatzstoffe: a, c, g, i, j, 3, 6",
    price: 12.00,
    image: "images/koefte-teller-pommes-salat.png"
  },
  {
    id: 8,
    name: "Cevapčići (vom Rind) im Fladenbrot",
    category: "Grillgerichte",
    description: "",
    price: 8.00,
    image: "images/cevapcici-yufka.png"
  },
  {
    id: 9,
    name: "Cevapčići (vom Rind) mit Pommes und Ajvar",
    category: "Grillgerichte",
    description: "Allergene/Zusatzstoffe: j, i, 1, 2",
    price: 12.00,
    image: "images/cevapcici-teller-pommes-ajvar-variante.png"
  },
  {
    id: 10,
    name: "İskender Kebab",
    category: "Döner",
    description: "Nur auf Vorbestellung. Allergene/Zusatzstoffe: a, f, g, j, k, 1, 4, 6",
    price: 18.00,
    image: "images/iskender-kebab.png"
  },
  {
    id: 11,
    name: "Putenschnitzel mit Pommes und Salat",
    category: "Grillgerichte",
    description: "Allergene/Zusatzstoffe: 1, 2, 3, 4, 6, a, c, g, f, i, j",
    price: 8.50,
    image: "images/putenschnitzel-pommes-salat.png"
  },
  {
    id: 12,
    name: "Chicken Nuggets mit Pommes",
    category: "Grillgerichte",
    description: "Allergene/Zusatzstoffe: 1, 2, 3, 4, 6, a, c, g, f, i, k, j",
    price: 8.00,
    image: "images/chicken-nuggets-pommes.png"
  },
  {
    id: 13,
    name: "Backfischbrötchen mit Remoulade",
    category: "Grillgerichte",
    description: "Allergene/Zusatzstoffe: a, c, j, g, i, k, 2, 3, 4",
    price: 8.00,
    image: "images/backfisch-broetchen.png"
  },
  {
    id: 14,
    name: "Backfisch mit Pommes und Salat",
    category: "Grillgerichte",
    description: "Allergene/Zusatzstoffe: a, c, g, j, i, k, 2, 3, 4",
    price: 12.00,
    image: "images/backfisch-pommes-salat.png"
  },
  {
    id: 15,
    name: "Falafel im Yufka, gerollt, mit Salat und Soße",
    category: "Vegetarisch",
    description: "Allergene/Zusatzstoffe: a, i, k, j",
    price: 8.00,
    image: "images/falafel-yufka-variante.png"
  },
  {
    id: 16,
    name: "Falafel Box mit Pommes und Salat",
    category: "Vegetarisch",
    description: "Allergene/Zusatzstoffe: a, i, k, j",
    price: 7.00,
    image: "images/falafel-box.png"
  },
  {
    id: 17,
    name: "Falafel im Fladenbrot",
    category: "Vegetarisch",
    description: "Allergene/Zusatzstoffe: a, i, k, j",
    price: 7.50,
    image: "images/falafel-brot.png"
  },
  {
    id: 18,
    name: "Pierogi z serem i kartoflami (7 Stk.)",
    category: "Polnische Küche",
    polishSpecialty: true,
    description: "Teigtaschen mit Kartoffel-Käse-Füllung, dazu gebratene Zwiebel und saure Sahne. Allergene/Zusatzstoffe: a, c, g, i",
    price: 9.50,
    image: "images/pierogi.png"
  },
  {
    id: 19,
    name: "Pierogi z kapustą i pieczarkami",
    category: "Polnische Küche",
    polishSpecialty: true,
    description: "Teigtaschen mit Sauerkraut und Champignons, dazu gebratene Zwiebel. Allergene/Zusatzstoffe: a, c, g, i",
    price: 9.50,
    image: "images/pierogi-gebraten.png"
  },
  {
    id: 20,
    name: "Bigos Sauerkraut-Eintopf",
    category: "Polnische Küche",
    polishSpecialty: true,
    description: "Mit Rindfleisch, Wurst, Pilzen, Paprika und Champignons, mit Brot. Allergene/Zusatzstoffe: a, g, c, j, i, 2, 3, 4, 6",
    price: 9.50,
    image: "images/bigos.png"
  },
  {
    id: 21,
    name: "Leczo Gemüseeintopf mit Wurst",
    category: "Polnische Küche",
    polishSpecialty: true,
    description: "Paprika, Tomaten, Zwiebeln und Zucchini, mit Brot oder Reis.",
    price: 10.50,
    image: "images/leczo.png"
  },
  {
    id: 22,
    name: "Krokiety z kapustą i pieczarkami (2 Stk.)",
    category: "Polnische Küche",
    polishSpecialty: true,
    description: "Kroketten mit Sauerkraut und Champignons. Allergene/Zusatzstoffe: a, g, c, i, j",
    price: 10.50,
    image: "images/krokiety.png"
  },
  {
    id: 23,
    name: "Pommes klein",
    category: "Beilagen",
    description: "",
    price: 3.50,
    image: "images/pommes.png"
  },
  {
    id: 24,
    name: "Pommes groß",
    category: "Beilagen",
    description: "",
    price: 6.00,
    image: "images/pommes.png"
  },
  {
    id: 25,
    name: "Reis",
    category: "Beilagen",
    description: "",
    price: 3.50,
    image: "images/reis.png"
  },
  {
    id: 26,
    name: "Gemischter Salat",
    category: "Beilagen",
    description: "",
    price: 4.50,
    image: "images/gemischter-salat.png"
  },
  {
    id: 27,
    name: "Ketchup, Mayonnaise oder Senf",
    category: "Beilagen",
    description: "Preis je Portion.",
    price: 0.30,
    image: "images/sose-mayo.png"
  },
  {
    id: 28,
    name: "Brot",
    category: "Beilagen",
    description: "",
    price: 2.50,
    image: "images/fladenbrot.png"
  },
  {
    id: 29,
    name: "Coca-Cola (0,33 l)",
    category: "Getränke",
    description: "",
    price: 2.00,
    image: "images/softdrink-cola.png"
  },
  {
    id: 30,
    name: "Coca-Cola Zero (0,33 l)",
    category: "Getränke",
    description: "",
    price: 2.00,
    image: "images/softdrink-cola.png"
  },
  {
    id: 31,
    name: "Fanta (0,33 l)",
    category: "Getränke",
    description: "",
    price: 2.00,
    image: "images/softdrink-fanta.png"
  },
  {
    id: 32,
    name: "Sprite (0,33 l)",
    category: "Getränke",
    description: "",
    price: 2.00,
    image: "images/mineralwasser.png"
  },
  {
    id: 33,
    name: "Mezzo Mix (0,33 l)",
    category: "Getränke",
    description: "",
    price: 2.00,
    image: "images/mezzomix.png"
  },
  {
    id: 34,
    name: "Red Bull (0,33 l)",
    category: "Getränke",
    description: "",
    price: 3.50,
    image: "images/redbul.png"
  },
  {
    id: 35,
    name: "Wasser (0,5 l)",
    category: "Getränke",
    description: "",
    price: 1.50,
    image: "images/mineralwasser.png"
  },
  {
    id: 36,
    name: "Durstlöscher",
    category: "Getränke",
    description: "",
    price: 2.00,
    image: "images/Durstlöscher.png"
  },
  {
    id: 37,
    name: "Ayran",
    category: "Getränke",
    description: "",
    price: 2.00,
    image: "images/ayran.png"
  },
  {
    id: 38,
    name: "Polnische Oranżada (0,5 l)",
    category: "Getränke",
    polishSpecialty: true,
    description: "Brause.",
    price: 2.00,
    image: "images/softdrink-oranzada.png"
  },
  {
    id: 39,
    name: "Bier (alle Sorten)",
    category: "Getränke",
    description: "",
    price: 3.50,
    image: "images/bier.png"
  }
];

let cart = [];
let currentCategory = "Alle";

const money = amount =>
  amount.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR"
  });

// Produkte anzeigen
function renderProducts() {
  const list = document.getElementById("product-list");
  if (!list) return;

  const availableProducts = products.filter(product =>
    POLISH_MENU_ENABLED || !product.polishSpecialty
  );
  const filtered = currentCategory === "Alle"
    ? availableProducts
    : availableProducts.filter(product =>
        product.category === currentCategory
      );

  list.innerHTML = "";

  filtered.forEach(product => {
    const card = document.createElement("article");
    card.className = "product";

    const imageContainer = document.createElement("div");
    imageContainer.className = "product-image";

    if (product.image) {
      const image = document.createElement("img");
      image.src = product.image;
      image.alt = product.name;
      image.loading = "lazy";
      image.addEventListener("error", () => image.remove());
      imageContainer.appendChild(image);
    }

    const content = document.createElement("div");
    content.className = "product-content";

    const title = document.createElement("h3");
    title.textContent = product.name;

    const description = document.createElement("p");
    description.textContent = product.description;
    if (!product.description) {
      description.hidden = true;
    }

    const bottom = document.createElement("div");
    bottom.className = "product-bottom";

    const price = document.createElement("span");
    price.className = "price";
    price.textContent = money(product.price);

    const button = document.createElement("button");
    button.className = "add-button";
    button.textContent = "+ Hinzufügen";
    button.addEventListener("click", () => addToCart(product.id));

    bottom.append(price, button);
    content.append(title, description, bottom);
    card.append(imageContainer, content);
    list.appendChild(card);
  });
}

// Kategorie auswählen
document.querySelectorAll(".category-button").forEach(button => {
  if (button.dataset.category === "Polnische Küche") {
    button.hidden = !POLISH_MENU_ENABLED;
  }

  button.addEventListener("click", () => {
    document.querySelectorAll(".category-button").forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");
    currentCategory = button.dataset.category;
    renderProducts();
  });
});

// Produkt in den Warenkorb legen
function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
  openCart();
}

// Menge ändern
function changeQuantity(productId, amount) {
  const item = cart.find(product => product.id === productId);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(product => product.id !== productId);
  }

  renderCart();
}

// Gesamtpreis berechnen
function getCartTotal() {
  return cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

// Warenkorb anzeigen
function renderCart() {
  const container = document.getElementById("cart-items");
  const totalElement = document.getElementById("cart-total");
  const countElement = document.getElementById("cart-count");

  if (!container || !totalElement || !countElement) return;

  container.innerHTML = "";

  if (cart.length === 0) {
    const empty = document.createElement("p");
    empty.className = "cart-empty";
    empty.textContent = "Dein Warenkorb ist noch leer.";
    container.appendChild(empty);
  }

  cart.forEach(item => {
    const row = document.createElement("div");
    row.className = "cart-item";

    const info = document.createElement("div");

    const name = document.createElement("div");
    name.className = "cart-item-name";
    name.textContent = item.name;

    const price = document.createElement("div");
    price.className = "cart-item-price";
    price.textContent = money(item.price * item.quantity);

    info.append(name, price);

    const controls = document.createElement("div");
    controls.className = "quantity-controls";

    const minus = document.createElement("button");
    minus.textContent = "−";
    minus.setAttribute("aria-label", "Menge reduzieren");
    minus.addEventListener("click", () => {
      changeQuantity(item.id, -1);
    });

    const quantity = document.createElement("span");
    quantity.textContent = item.quantity;

    const plus = document.createElement("button");
    plus.textContent = "+";
    plus.setAttribute("aria-label", "Menge erhöhen");
    plus.addEventListener("click", () => {
      changeQuantity(item.id, 1);
    });

    controls.append(minus, quantity, plus);
    row.append(info, controls);
    container.appendChild(row);
  });

  totalElement.textContent = money(getCartTotal());

  countElement.textContent = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
}

// Sepeti aç ve kapat
function openCart() {
  document.getElementById("cart-panel")?.classList.add("open");
}

function closeCart() {
  document.getElementById("cart-panel")?.classList.remove("open");
}

document.getElementById("cart-toggle")
  ?.addEventListener("click", openCart);

document.getElementById("nav-order")
  ?.addEventListener("click", openCart);

document.getElementById("contact-order")
  ?.addEventListener("click", openCart);

document.getElementById("close-cart")
  ?.addEventListener("click", closeCart);

document.getElementById("order-type")
  ?.addEventListener("change", event => {
    if (event.target.value === "Lieferung" && getCartTotal() < DELIVERY_MINIMUM) {
      alert(DELIVERY_MINIMUM_WARNING);
    }
  });

// WhatsApp siparişi hazırla
function orderViaWhatsApp() {
  if (cart.length === 0) {
    alert("Dein Warenkorb ist leer!");
    return;
  }

  const type = document.getElementById("order-type").value;
  if (type === "Lieferung" && getCartTotal() < DELIVERY_MINIMUM) {
    alert(DELIVERY_MINIMUM_WARNING);
    return;
  }

  if (RESTAURANT_WHATSAPP === "+4917668185194") {
    alert("Bitte trage die echte WhatsApp-Nummer im script.js ein.");
    return;
  }

  const name = document.getElementById("customer-name").value.trim();
  const note = document.getElementById("customer-note").value.trim();

  let message = "Neue Bestellung - Demo Döner\n\n";
  message += `Bestellart: ${type}\n`;

  if (name) {
    message += `Name: ${name}\n`;
  }

  message += "\nBestellung:\n";

  cart.forEach(item => {
    message += `${item.name} x ${item.quantity} - ${
      money(item.price * item.quantity)
    }\n`;
  });

  message += `\nGesamt: ${money(getCartTotal())}`;

  if (note) {
    message += `\nBemerkung: ${note}`;
  }

  const url =
    `https://wa.me/${RESTAURANT_WHATSAPP}?text=${
      encodeURIComponent(message)
    }`;

  window.open(url, "_blank", "noopener,noreferrer");
}

document.getElementById("order-button")
  ?.addEventListener("click", orderViaWhatsApp);

// Aktuelles Jahr
document.getElementById("year").textContent =
  new Date().getFullYear();

// Beim Laden initialisieren
renderProducts();
renderCart();
