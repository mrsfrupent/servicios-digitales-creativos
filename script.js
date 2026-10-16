// =========================================================
// CONFIGURACIÓN — rellena estos dos valores cuando tengas las cuentas
// =========================================================
const CONFIG = {
  // Formulario: crea un formulario gratis en https://formspree.io y pega aquí
  // el código que aparece en su URL (https://formspree.io/f/XXXXXXXX → "XXXXXXXX").
  // Mientras esté vacío, el formulario abre el programa de correo del visitante.
  formspreeId: "",

  // Estadísticas: crea una cuenta gratis en https://www.goatcounter.com y pega
  // aquí tu código (si tu panel es https://andrea.goatcounter.com → "andrea").
  // Mientras esté vacío, no se carga nada.
  goatcounterCode: "",

  email: "montesgz@gmail.com",
};

const lang = document.documentElement.lang === "en" ? "en" : "es";

// ---------- Estadísticas (GoatCounter: sin cookies) ----------
if (CONFIG.goatcounterCode) {
  const gc = document.createElement("script");
  gc.async = true;
  gc.src = "https://gc.zgo.at/count.js";
  gc.dataset.goatcounter = `https://${CONFIG.goatcounterCode}.goatcounter.com/count`;
  document.head.appendChild(gc);
}

// ---------- Menú móvil ----------
const toggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__links");

if (toggle && links) {
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
}

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
// Edita aquí los textos de cada respuesta (es = español, en = inglés).
const COLORS = {
  digital: ["var(--blue)", "var(--paper)"],
  web: ["var(--blue)", "var(--paper)"],
  contenido: ["var(--red)", "var(--paper)"],
  club: ["var(--red)", "var(--paper)"],
  arte: ["var(--yellow)", "var(--ink)"],
  fuerza: ["var(--black)", "var(--paper)"],
  otro: ["var(--pink)", "var(--paper)"],
};

const ANSWERS = {
  es: {
    cta: "Lo hablamos",
    digital: {
      emoji: "⚙️",
      area: "Digital & tecnología",
      title: "Una app hecha a tu medida",
      text: "Analizo cómo trabajáis hoy, detecto dónde se pierde el tiempo y diseño una herramienta sencilla que lo automatice. Sin software que no necesitas.",
    },
    web: {
      emoji: "🌐",
      area: "Digital & tecnología",
      title: "Una web que te represente",
      text: "Defino contigo qué tiene que conseguir tu web (vender, informar, captar contactos) y la diseño para que lo haga, con una estética que sea tuya.",
    },
    contenido: {
      emoji: "📸",
      area: "Contenido & marca",
      title: "Un Instagram con relato",
      text: "Reviso tu perfil, encuentro por qué no conecta y construimos una línea editorial y visual: qué contar, cómo y con qué frecuencia.",
    },
    club: {
      emoji: "🏅",
      area: "Contenido & marca",
      title: "Comunicación para tu club",
      text: "Conozco el deporte desde dentro. Ayudo a clubes y empresas deportivas a mostrar su comunidad, sus resultados y su personalidad en redes y web.",
    },
    arte: {
      emoji: "🖼️",
      area: "Arte & cultura",
      title: "Dirección artística y curaduría",
      text: "Te ayudo a encontrar el hilo conductor de la exposición, a construir el discurso curatorial y a diseñar un catálogo que lo cuente.",
    },
    fuerza: {
      emoji: "🏋️",
      area: "Fuerza & halterofilia",
      title: "Entrenamiento online",
      text: "Programación adaptada a tu nivel y tu horario, análisis técnico por vídeo y seguimiento cercano. Pensado para amateurs que quieren progresar sin lesionarse.",
    },
    otro: {
      emoji: "🧩",
      area: "Fuera de la caja",
      title: "¡Mejor todavía!",
      text: "Los problemas que no encajan en ninguna categoría son mis favoritos. Cuéntamelo y pensamos juntas/os cómo resolverlo.",
    },
  },
  en: {
    cta: "Let's talk",
    digital: {
      emoji: "⚙️",
      area: "Digital & tech",
      title: "An app built for you",
      text: "I look at how your team works today, find where time is being lost and design a simple tool that automates it. No software you don't need.",
    },
    web: {
      emoji: "🌐",
      area: "Digital & tech",
      title: "A website that represents you",
      text: "Together we define what your website has to achieve (sell, inform, get enquiries) and I design it to do exactly that, with a look that's truly yours.",
    },
    contenido: {
      emoji: "📸",
      area: "Content & brand",
      title: "An Instagram with a story",
      text: "I review your profile, find out why it isn't connecting and we build an editorial and visual line: what to say, how and how often.",
    },
    club: {
      emoji: "🏅",
      area: "Content & brand",
      title: "Communication for your club",
      text: "I know sport from the inside. I help clubs and sports businesses show their community, results and personality on social media and the web.",
    },
    arte: {
      emoji: "🖼️",
      area: "Art & culture",
      title: "Art direction and curating",
      text: "I help you find the common thread of your exhibition, build the curatorial narrative and design a catalogue that tells it.",
    },
    fuerza: {
      emoji: "🏋️",
      area: "Strength & weightlifting",
      title: "Online coaching",
      text: "Programming adapted to your level and schedule, video technique analysis and close follow-up. Designed for amateurs who want to progress without getting injured.",
    },
    otro: {
      emoji: "🧩",
      area: "Outside the box",
      title: "Even better!",
      text: "Problems that don't fit any category are my favourite. Tell me about it and we'll work out how to solve it together.",
    },
  },
};

const answerBox = document.querySelector(".finder__answer");

document.querySelectorAll(".opt").forEach((btn) =>
  btn.addEventListener("click", () => {
    document.querySelectorAll(".opt").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const key = btn.dataset.target;
    const a = ANSWERS[lang][key];
    const [bg, fg] = COLORS[key];
    answerBox.innerHTML = `
      <div class="answer" style="--accent:${bg};--fg:${fg}">
        <span class="answer__emoji">${a.emoji}</span>
        <span class="label">${a.area}</span>
        <h3>${a.title}</h3>
        <p>${a.text}</p>
        <a href="#contacto" class="btn">${ANSWERS[lang].cta}</a>
      </div>`;

    // Preselecciona el tema en el formulario de contacto
    const topic = document.querySelector("#f-topic");
    if (topic) topic.value = topicFor(key) || "otro";

    if (window.innerWidth < 820) {
      answerBox.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  })
);

function topicFor(key) {
  return { digital: "digital", web: "digital", contenido: "contenido", club: "contenido", arte: "arte", fuerza: "fuerza" }[key];
}

// ---------- Formulario de contacto ----------
const FORM_TEXT = {
  es: {
    sending: "Enviando…",
    ok: "¡Gracias! Te respondo lo antes posible.",
    error: "Vaya, algo ha fallado. Escríbeme directamente a ",
    mailto: "Se ha abierto tu programa de correo con el mensaje listo para enviar. Si no se abre, escríbeme a ",
    subject: "Consulta desde la web",
    name: "Nombre",
    email: "Email",
    topic: "Tema",
  },
  en: {
    sending: "Sending…",
    ok: "Thank you! I'll get back to you as soon as I can.",
    error: "Oops, something went wrong. Please email me directly at ",
    mailto: "Your email app has opened with the message ready to send. If it didn't open, write to ",
    subject: "Enquiry from the website",
    name: "Name",
    email: "Email",
    topic: "Topic",
  },
};

const form = document.querySelector("#contact-form");

if (form) {
  const status = form.querySelector(".form__status");
  const button = form.querySelector("button[type=submit]");
  const t = FORM_TEXT[lang];

  const show = (msg, kind, withEmail) => {
    status.classList.remove("ok", "error");
    if (kind) status.classList.add(kind);
    status.textContent = msg;
    if (withEmail) {
      const a = document.createElement("a");
      a.href = `mailto:${CONFIG.email}`;
      a.textContent = CONFIG.email;
      status.appendChild(a);
    }
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (form.querySelector(".form__hp input").value) return; // bot

    const data = new FormData(form);
    const topicText = form.querySelector("#f-topic").selectedOptions[0].textContent;

    // Sin Formspree configurado: abre el correo del visitante
    if (!CONFIG.formspreeId) {
      const body =
        `${t.name}: ${data.get("name")}\n${t.email}: ${data.get("email")}\n${t.topic}: ${topicText}\n\n${data.get("message")}`;
      window.location.href =
        `mailto:${CONFIG.email}?subject=${encodeURIComponent(`${t.subject} · ${topicText}`)}&body=${encodeURIComponent(body)}`;
      show(t.mailto, "ok", true);
      return;
    }

    button.disabled = true;
    show(t.sending, "");
    data.set("_subject", `${t.subject} · ${topicText}`);

    try {
      const res = await fetch(`https://formspree.io/f/${CONFIG.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(res.status);
      form.reset();
      show(t.ok, "ok");
    } catch {
      show(t.error, "error", true);
    } finally {
      button.disabled = false;
    }
  });
}

// ---------- Año del footer ----------
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
