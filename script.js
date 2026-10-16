// ---------- Menú móvil ----------
const toggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__links");

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// ---------- Aparición al hacer scroll ----------
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }),
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ---------- Buscador de problemas ----------
// Edita aquí los textos de cada respuesta.
const answers = {
  digital: {
    emoji: "⚙️",
    area: "Digital & tecnología",
    title: "Una app hecha a tu medida",
    text: "Analizo cómo trabajáis hoy, detecto dónde se pierde el tiempo y diseño una herramienta sencilla que lo automatice. Sin software que no necesitas.",
    color: "var(--blue)",
    fg: "var(--paper)",
  },
  web: {
    emoji: "🌐",
    area: "Digital & tecnología",
    title: "Una web que te represente",
    text: "Defino contigo qué tiene que conseguir tu web (vender, informar, captar contactos) y la diseño para que lo haga, con una estética que sea tuya.",
    color: "var(--blue)",
    fg: "var(--paper)",
  },
  contenido: {
    emoji: "📸",
    area: "Contenido & marca",
    title: "Un Instagram con relato",
    text: "Reviso tu perfil, encuentro por qué no conecta y construimos una línea editorial y visual: qué contar, cómo y con qué frecuencia.",
    color: "var(--red)",
    fg: "var(--paper)",
  },
  club: {
    emoji: "🏅",
    area: "Contenido & marca",
    title: "Comunicación para tu club",
    text: "Conozco el deporte desde dentro. Ayudo a clubes y empresas deportivas a mostrar su comunidad, sus resultados y su personalidad en redes y web.",
    color: "var(--red)",
    fg: "var(--paper)",
  },
  arte: {
    emoji: "🖼️",
    area: "Arte & cultura",
    title: "Dirección artística y curaduría",
    text: "Te ayudo a encontrar el hilo conductor de la exposición, a construir el discurso curatorial y a diseñar un catálogo que lo cuente.",
    color: "var(--yellow)",
    fg: "var(--ink)",
  },
  fuerza: {
    emoji: "🏋️",
    area: "Fuerza & halterofilia",
    title: "Entrenamiento online",
    text: "Programación adaptada a tu nivel y tu horario, análisis técnico por vídeo y seguimiento cercano. Pensado para amateurs que quieren progresar sin lesionarse.",
    color: "var(--black)",
    fg: "var(--paper)",
  },
  otro: {
    emoji: "🧩",
    area: "Fuera de la caja",
    title: "¡Mejor todavía!",
    text: "Los problemas que no encajan en ninguna categoría son mis favoritos. Cuéntamelo y pensamos juntas/os cómo resolverlo.",
    color: "var(--pink)",
    fg: "var(--paper)",
  },
};

const answerBox = document.querySelector(".finder__answer");

document.querySelectorAll(".opt").forEach((btn) =>
  btn.addEventListener("click", () => {
    document.querySelectorAll(".opt").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const a = answers[btn.dataset.target];
    answerBox.innerHTML = `
      <div class="answer" style="--accent:${a.color};--fg:${a.fg}">
        <span class="answer__emoji">${a.emoji}</span>
        <span class="label">${a.area}</span>
        <h3>${a.title}</h3>
        <p>${a.text}</p>
        <a href="#contacto" class="btn">Lo hablamos</a>
      </div>`;

    if (window.innerWidth < 820) {
      answerBox.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  })
);

// ---------- Año del footer ----------
document.getElementById("year").textContent = new Date().getFullYear();
