const ramos = [
  // Primer año
  { id: "micro1", nombre: "Introducción a la microeconomía", semestre: 1, año: 1, optativa: false, previas: [] },
  { id: "calculo1a", nombre: "Cálculo 1/a", semestre: 1, año: 1, optativa: false, previas: [] },
  { id: "contables", nombre: "Conceptos contables", semestre: 1, año: 1, optativa: false, previas: [] },
  { id: "admin1", nombre: "Administración y Gestión de las organizaciones 1", semestre: 1, año: 1, optativa: false, previas: [] },

  { id: "ecoDesc", nombre: "Economía descriptiva", semestre: 2, año: 1, optativa: false, previas: [] },
  { id: "algebra", nombre: "Álgebra lineal", semestre: 2, año: 1, optativa: false, previas: [] },
  { id: "calculo1b", nombre: "Cálculo 1/b", semestre: 2, año: 1, optativa: false, previas: ["calculo1a"] },
  { id: "opt1", nombre: "Ciencia política", semestre: 2, año: 1, optativa: true, previas: [] },
  { id: "opt2", nombre: "Sociología económica", semestre: 2, año: 1, optativa: true, previas: [] },
  { id: "opt3", nombre: "Sociología Contemporánea", semestre: 2, año: 1, optativa: true, previas: [] },
  { id: "opt4", nombre: "Desarrollo y bienestar", semestre: 2, año: 1, optativa: true, previas: [] },

  // Segundo año
  { id: "macro1", nombre: "Macroeconomía 1", semestre: 3, año: 2, optativa: false, previas: ["micro1"] },
  { id: "calculo2", nombre: "Cálculo 2", semestre: 3, año: 2, optativa: false, previas: ["calculo1a", "calculo1b"] },
  { id: "histEco", nombre: "Historia económica mundial", semestre: 3, año: 2, optativa: false, previas: ["ecoDesc", "micro1"] },
  { id: "opt5", nombre: "Sistemas de Descripción Macroeconómica", semestre: 3, año: 2, optativa: true, previas: ["micro1", "ecoDesc"] },
  { id: "opt6", nombre: "Estadística descriptiva", semestre: 3, año: 2, optativa: true, previas: [] },
  { id: "opt7", nombre: "Población, Economía y Desarrollo", semestre: 3, año: 2, optativa: true, previas: [] },
  { id: "opt8", nombre: "Historia contemporánea de América Latina", semestre: 3, año: 2, optativa: true, previas: [] },
  { id: "opt9", nombre: "Derecho del Empresario", semestre: 3, año: 2, optativa: true, previas: [] },

  { id: "micro2", nombre: "Microeconomía 1", semestre: 4, año: 2, optativa: false, previas: ["calculo2", "micro1"] },
  { id: "macro2", nombre: "Macroeconomía 2", semestre: 4, año: 2, optativa: false, previas: ["macro1"] },
  { id: "estad1", nombre: "Estadística 1", semestre: 4, año: 2, optativa: false, previas: ["calculo2"] },
  { id: "opt10", nombre: "Cálculo 3", semestre: 4, año: 2, optativa: true, previas: ["calculo1a", "algebra"] },
  { id: "opt11", nombre: "Economía Matemática", semestre: 4, año: 2, optativa: true, previas: ["calculo2", "algebra", "micro1"] },
  { id: "opt12", nombre: "Ética, Economía y Justicia", semestre: 4, año: 2, optativa: true, previas: [] },
  { id: "opt13", nombre: "Economía Circular", semestre: 4, año: 2, optativa: true, previas: [] },

  // Tercer año
  { id: "micro3", nombre: "Microeconomía 2", semestre: 5, año: 3, optativa: false, previas: ["micro2"] },
  { id: "latam", nombre: "Economía de América Latina", semestre: 5, año: 3, optativa: false, previas: [] },
  { id: "macro3", nombre: "Macroeconomía 3", semestre: 5, año: 3, optativa: false, previas: ["macro1", "calculo2"] },
  { id: "estad2", nombre: "Estadística 2", semestre: 5, año: 3, optativa: false, previas: ["estad1"] },
  { id: "metodo", nombre: "Introducción a la metodología", semestre: 5, año: 3, optativa: false, previas: [] },
  { id: "opt14", nombre: "Estadística 1/pr", semestre: 5, año: 3, optativa: true, previas: [] },
  { id: "opt15", nombre: "EFI MicroCECA", semestre: 5, año: 3, optativa: true, previas: [] },
  { id: "opt16", nombre: "Ciencia de Datos con R", semestre: 5, año: 3, optativa: true, previas: ["opt6"] },
  { id: "opt17", nombre: "Evaluación de Impacto de Proyectos", semestre: 5, año: 3, optativa: true, previas: ["micro2"] },
  { id: "opt18", nombre: "EFI: Cooperativas y Colectivos Autogestionados", semestre: 5, año: 3, optativa: true, previas: [] },

  { id: "uru", nombre: "Economía del Uruguay", semestre: 6, año: 3, optativa: false, previas: ["ecoDesc", "micro2", "macro2"] },
  { id: "micro4", nombre: "Microeconomía 3", semestre: 6, año: 3, optativa: false, previas: ["micro2"] },
  { id: "econo1", nombre: "Econometría 1", semestre: 6, año: 3, optativa: false, previas: ["algebra", "estad2"] },
  { id: "estad2pr", nombre: "Estadística 2/pr", semestre: 6, año: 3, optativa: false, previas: [] },
  { id: "opt19", nombre: "Cambio y Diseño de Instituciones Económicas", semestre: 6, año: 3, optativa: true, previas: ["micro2"] },
  { id: "opt20", nombre: "Matemática financiera", semestre: 6, año: 3, optativa: true, previas: ["estad1"] },
  { id: "opt21", nombre: "Economía Agropecuaria y Ambiental", semestre: 6, año: 3, optativa: true, previas: ["micro2"] },
  { id: "opt22", nombre: "Economía y gestión bancaria", semestre: 6, año: 3, optativa: true, previas: [] },
  { id: "opt23", nombre: "Historia Económica del Uruguay", semestre: 6, año: 3, optativa: true, previas: ["histEco"] },
  { id: "opt24", nombre: "Desigualdad y Pobreza", semestre: 6, año: 3, optativa: true, previas: ["estad1"] },
  { id: "opt25", nombre: "Análisis de Información Contable", semestre: 6, año: 3, optativa: true, previas: ["contables"] },
  { id: "opt26", nombre: "Economía Laboral", semestre: 6, año: 3, optativa: true, previas: ["micro2"] },
  { id: "opt27", nombre: "EFI: Determinantes del Abandono Universitario", semestre: 6, año: 3, optativa: true, previas: [] },
  { id: "opt28", nombre: "Unidad de Difusión Académica", semestre: 6, año: 3, optativa: true, previas: [] },

  // Cuarto año
  { id: "int", nombre: "Economía Internacional", semestre: 7, año: 4, optativa: false, previas: ["micro2", "macro2"] },
  { id: "teodes", nombre: "Teorías del Desarrollo Económico", semestre: 7, año: 4, optativa: false, previas: ["macro3"] },
  { id: "econo2", nombre: "Econometría 2", semestre: 7, año: 4, optativa: false, previas: ["econo1"] },
  { id: "pensamiento", nombre: "Historia del Pensamiento Económico", semestre: 7, año: 4, optativa: false, previas: [] },
  { id: "opt29", nombre: "Economía Pública", semestre: 7, año: 4, optativa: true, previas: ["macro2"] },
  { id: "opt30", nombre: "Economía y Género", semestre: 7, año: 4, optativa: true, previas: ["macro1", "estad1", "micro2"] },
  { id: "opt31", nombre: "Economía y Política Monetaria", semestre: 7, año: 4, optativa: true, previas: ["macro2"] },
  { id: "opt32", nombre: "Política Económica", semestre: 7, año: 4, optativa: true, previas: ["macro2"] },
  { id: "opt33", nombre: "Organización industrial", semestre: 7, año: 4, optativa: true, previas: ["micro3"] },
  { id: "opt34", nombre: "Análisis Multivariado 1", semestre: 7, año: 4, optativa: true, previas: ["estad2"] },
  { id: "opt35", nombre: "Series Cronológicas 1", semestre: 7, año: 4, optativa: true, previas: ["estad2"] },
  { id: "opt36", nombre: "Bases y Paquetes Estadísticos", semestre: 7, año: 4, optativa: true, previas: ["metodo", "econo1"] },
  { id: "opt37", nombre: "Finanzas Corporativas", semestre: 7, año: 4, optativa: true, previas: ["admin1", "opt20", "estad1", "opt25"] },
  { id: "opt38", nombre: "Marketing Básico", semestre: 7, año: 4, optativa: true, previas: [] },

  { id: "opt39", nombre: "Mercados Financieros", semestre: 8, año: 4, optativa: true, previas: ["opt37"] },
  { id: "opt40", nombre: "Modelos Dinámicos y Computacionales", semestre: 8, año: 4, optativa: true, previas: ["calculo2"] },
  { id: "opt41", nombre: "Economía y Finanzas Internacionales", semestre: 8, año: 4, optativa: true, previas: ["macro2"] },
  { id: "opt42", nombre: "Tópicos de Macroeconomía", semestre: 8, año: 4, optativa: true, previas: ["macro2"] },
  { id: "opt43", nombre: "Seminario de Economía Nacional", semestre: 8, año: 4, optativa: true, previas: ["uru"] },
  { id: "opt44", nombre: "Macroeconomía y Finanzas Públicas", semestre: 8, año: 4, optativa: true, previas: ["macro2"] },
  { id: "opt45", nombre: "Economía y Estrategia Empresarial", semestre: 8, año: 4, optativa: true, previas: ["macro2"] },
  { id: "opt46", nombre: "Globalización y Desarrollo", semestre: 8, año: 4, optativa: true, previas: ["macro2", "int", "latam"] },
  { id: "opt47", nombre: "Taller de Análisis de Coyuntura", semestre: 8, año: 4, optativa: true, previas: ["macro2", "econo1"] },
  { id: "opt48", nombre: "Desarrollo Económico Territorial", semestre: 8, año: 4, optativa: true, previas: [] },
  { id: "opt49", nombre: "CCEEmprende", semestre: 8, año: 4, optativa: true, previas: ["admin1", "opt20", "estad1", "opt25"] },
  { id: "opt50", nombre: "Marketing Estratégico", semestre: 8, año: 4, optativa: true, previas: ["opt38"] },
  { id: "opt51", nombre: "Proyectos de Inversión", semestre: 8, año: 4, optativa: true, previas: ["opt37"] },
  { id: "opt52", nombre: "Trabajo de Iniciación a la Investigación", semestre: 8, año: 4, optativa: true, previas: ["econo1", "metodo"] }
];

const aprobados = new Set();

function isDesbloqueado(ramo) {
  return ramo.previas.every(previa => aprobados.has(previa));
}

function actualizar() {
  ramos.forEach(ramo => {
    const btn = document.getElementById(`btn-${ramo.id}`);
    const div = document.getElementById(`div-${ramo.id}`);

    if (aprobados.has(ramo.id)) {
      btn.disabled = true;
      div.classList.add('aprobado');
    } else {
      btn.disabled = !isDesbloqueado(ramo);
      div.classList.remove('aprobado');
    }
  });
}

function aprobarRamo(id) {
  aprobados.add(id);
  actualizar();
}

function render() {
  const container = document.getElementById('malla');
  container.innerHTML = '';

  // Agrupar ramos por semestre y año
  const semestres = {};
  ramos.forEach(ramo => {
    const key = `año-${ramo.año}-sem-${ramo.semestre}`;
    if (!semestres[key]) semestres[key] = [];
    semestres[key].push(ramo);
  });

  // Ordenar claves para que se muestren en orden
  const keys = Object.keys(semestres).sort((a, b) => {
    const [aYear, aSem] = a.match(/\d+/g).map(Number);
    const [bYear, bSem] = b.match(/\d+/g).map(Number);
    return aYear === bYear ? aSem - bSem : aYear - bYear;
  });

  keys.forEach(key => {
    const ramosSem = semestres[key];
    const año = ramosSem[0].año;
    const semestre = ramosSem[0].semestre;

    const divSemestre = document.createElement('div');
    divSemestre.classList.add('semestre');
    divSemestre.classList.add(`año-${año}`);
    divSemestre.innerHTML = `<h2>Año ${año} - Semestre ${semestre}</h2>`;

    ramosSem.forEach(ramo => {
      const divRamo = document.createElement('div');
      divRamo.classList.add('ramo');
      if (ramo.optativa) divRamo.classList.add('optativa');
      divRamo.id = `div-${ramo.id}`;
      divRamo.innerHTML = `
        <span>${ramo.nombre}${ramo.optativa ? ' (Optativa)' : ''}</span>
        <button id="btn-${ramo.id}">Aprobar</button>
      `;
      divSemestre.appendChild(divRamo);

      const btn = divRamo.querySelector('button');
      btn.addEventListener('click', () => aprobarRamo(ramo.id));
    });

    container.appendChild(divSemestre);
  });

  actualizar();
}

document.addEventListener('DOMContentLoaded', () => {
  render();
});
