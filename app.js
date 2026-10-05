// Banco de 50 Flashcards basadas en PMBOK (Principios y Dominios)
const flashcardsData = [
  { front: "1. ¿Qué es el PMBOK?", back: "Guía del Conocimiento sobre la Gestión de Proyectos, estándar global desarrollado por el PMI." },
  { front: "2. Principio: Gobernanza", back: "Crear un entorno de proyecto coordinado para posibilitar el rendimiento y cumplimiento." },
  { front: "3. Dominio de Interesados", back: "Enfocado en identificar, involucrar y gestionar las expectativas de los stakeholders del proyecto." },
  { front: "4. Dominio del Equipo", back: "Fomenta el desarrollo, liderazgo y cultura de alto rendimiento en el equipo de trabajo." },
  { front: "5. Enfoque de Desarrollo y Ciclo de Vida", back: "Define si el proyecto usará un enfoque Predictivo, Híbrido o Adaptativo (Ágil)." },
  { front: "6. Dominio de Planificación", back: "Organización inicial y continua para estructurar el trabajo y alcance del proyecto." },
  { front: "7. Dominio del Trabajo del Proyecto", back: "Ejecución de actividades, gestión de recursos físicos e interacción con procesos." },
  { front: "8. Dominio de Entrega", back: "Alineación del proyecto con la consecución de beneficios y valor de negocio esperados." },
  { front: "9. Dominio de Medición", back: "Evaluación del desempeño mediante métricas, KPIs y Earned Value Management (EVM)." },
  { front: "10. Dominio de Incertidumbre", back: "Gestión proactiva de riesgos, ambigüedad y complejidad en el entorno del proyecto." },
  { front: "11. ¿Qué es un MVP?", back: "Minimum Viable Product: versión básica de un producto TI para validar hipótesis con usuarios." },
  { front: "12. Enfoque Predictivo (Cascada)", back: "Modelo donde el alcance, tiempo y costo se determinan en las fases iniciales." },
  { front: "13. Enfoque Adaptativo (Ágil)", back: "Iterativo e incremental; evoluciona según la retroalimentación rápida del cliente." },
  { front: "14. Principio: Valor", back: "Centrarse continuamente en entregar el valor del negocio alineado a los objetivos estratégicos." },
  { front: "15. Principio: Pensamiento Holístico", back: "Reconocer, evaluar y responder a las dinámicas de los sistemas del proyecto." },
  { front: "16. Acta de Constitución del Proyecto (Charter)", back: "Documento emitido por el patrocinador que autoriza formalmente la existencia del proyecto." },
  { front: "17. Gestión del Cambio", back: "Enfoque estructurado para transformar individuos, equipos y organizaciones al estado deseado." },
  { front: "18. Scrum", back: "Framework ágil iterativo basado en Sprints para entrega acelerada de software o productos TI." },
  { front: "19. Kanban", back: "Método visual de gestión de flujo de trabajo que limita el Trabajo en Proceso (WIP)." },
  { front: "20. EDT / WBS", back: "Estructura de Desglose del Trabajo: descomposición jerárquica orientada a entregables del alcance." },
  { front: "21. Ruta Crítica (CPM)", back: "Secuencia de actividades que representa el camino más largo y determina la duración mínima del proyecto." },
  { front: "22. Holgura (Float)", back: "Cantidad de tiempo que una actividad se puede retrasar sin afectar la fecha final del proyecto." },
  { front: "23. Análisis Valor Ganado (EVM)", back: "Técnica que integra mediciones de alcance, agenda y costos (PV, EV, AC)." },
  { front: "24. CPI (Cost Performance Index)", back: "Índice de desempeño del costo. EV / AC. Si es mayor a 1, el costo está por debajo del presupuesto." },
  { front: "25. SPI (Schedule Performance Index)", back: "Índice de desempeño del cronograma. EV / PV. Si es mayor a 1, el proyecto va adelantado." },
  { front: "26. Registro de Riesgos", back: "Documento dinámico donde se capturan los riesgos identificados, análisis y planes de respuesta." },
  { front: "27. Riesgo Positivo (Oportunidad)", back: "Evento incierto que, de ocurrir, tiene un impacto positivo en los objetivos del proyecto." },
  { front: "28. Estrategia de Riesgo: Mitigar", back: "Reducir la probabilidad o el impacto de un riesgo negativo a límites aceptables." },
  { front: "29. Matriz de Interesados", back: "Herramienta de clasificación de stakeholders según su poder, interés o influencia." },
  { front: "30. Definición de Hecho (DoD)", back: "Criterios compartidos en ágil para determinar cuando un entregable o historia está completada." },
  { front: "31. Deuda Técnica", back: "Costo implícito de un trabajo adicional causado por elegir una solución rápida en TI en lugar de la mejor." },
  { front: "32. Historia de Usuario", back: "Explicación corta de una función de software redactada desde la perspectiva del usuario final." },
  { front: "33. Sprint Backlog", back: "Conjunto de elementos del Product Backlog seleccionados para el Sprint actual." },
  { front: "34. Product Owner", back: "Rol responsable de maximizar el valor del producto y gestionar el Product Backlog." },
  { front: "35. Scrum Master", back: "Líder que promueve Scrum, remueve impedimentos y ayuda a optimizar el rendimiento del equipo." },
  { front: "36. Lecciones Aprendidas", back: "Conocimiento adquirido durante el proyecto para mejorar el desempeño futuro." },
  { front: "37. Gestión de Calidad", back: "Asegurar que los entregables cumplan con los requisitos e idoneidad de uso." },
  { front: "38. Criterios de Aceptación", back: "Condiciones formales que debe cumplir un entregable para ser aceptado por el cliente." },
  { front: "39. Matriz RACI", back: "Asignación de roles: Responsible, Accountable, Consulted, Informed." },
  { front: "40. Liderazgo Servidor", back: "Práctica de liderazgo centrada en apoyar y facultar al equipo para entregar resultados." },
  { front: "41. Adaptabilidad y Resiliencia", back: "Capacidad de responder al cambio y recuperarse de contratiempos en proyectos TI." },
  { front: "42. Gestión de Comunicaciones", back: "Asegurar la recopilación, distribución, almacenamiento y gestión oportuna de la información." },
  { front: "43. Plan de Gestión de Beneficios", back: "Documento que describe cómo y cuándo se entregarán los beneficios del proyecto." },
  { front: "44. Solares / Spikes", back: "Tareas de investigación o prototipado en desarrollo ágil para reducir incertidumbre técnica." },
  { front: "45. Gestión de Adquisiciones", back: "Procesos para comprar o adquirir productos o servicios fuera del equipo del proyecto." },
  { front: "46. Matriz de Trazabilidad de Requisitos", back: "Vincula los requisitos del producto desde su origen hasta los entregables probados." },
  { front: "47. Análisis de Causa Raíz (RCA)", back: "Método de solución de problemas para identificar el origen primario de una falla o defecto." },
  { front: "48. Gobernanza del Proyecto", back: "Marco de referencia, funciones y procesos que guían las actividades de gestión de proyectos." },
  { front: "49. Velocidad del Equipo", back: "Métrica en proyectos ágiles que mide la cantidad de trabajo completada por Sprint." },
  { front: "50. Cierre de Proyecto", back: "Proceso final de finalizar todas las actividades, transferir entregables y liberar recursos." }
];

// Generación de 50 preguntas basadas en el banco
const quizData = flashcardsData.map((item, index) => {
  return {
    question: item.front.replace(/^\d+\.\s*/, ""),
    options: shuffleArray([
      item.back,
      "Técnica exclusiva para estimar costos en proyectos de construcción.",
      "Proceso que solo aplica en la fase de auditoría financiera.",
      "Documento estático redactado al finalizar el proyecto."
    ]),
    answer: item.back
  };
});

// Variables de estado
let currentCardIndex = 0;
let currentQuizIndex = 0;
let score = 0;

// Inicialización de la App
document.addEventListener("DOMContentLoaded", () => {
  showCard(currentCardIndex);
  loadQuizQuestion();
});

// Navegación por Pestañas
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  
  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}

// Lógica de Flashcards
function showCard(index) {
  const card = document.getElementById('flashcard');
  card.classList.remove('flipped');
  document.getElementById('card-front').textContent = flashcardsData[index].front;
  document.getElementById('card-back').textContent = flashcardsData[index].back;
  document.getElementById('card-counter').textContent = `${index + 1} / ${flashcardsData.length}`;
}

function flipCard() {
  document.getElementById('flashcard').classList.toggle('flipped');
}

function nextCard() {
  currentCardIndex = (currentCardIndex + 1) % flashcardsData.length;
  showCard(currentCardIndex);
}

function prevCard() {
  currentCardIndex = (currentCardIndex - 1 + flashcardsData.length) % flashcardsData.length;
  showCard(currentCardIndex);
}

// Lógica de Quiz
function loadQuizQuestion() {
  const q = quizData[currentQuizIndex];
  document.getElementById('quiz-counter').textContent = `Pregunta ${currentQuizIndex + 1} de ${quizData.length}`;
  document.getElementById('quiz-question').textContent = q.question;
  
  const optionsContainer = document.getElementById('quiz-options');
  optionsContainer.innerHTML = '';
  document.getElementById('quiz-feedback').textContent = '';
  document.getElementById('next-quiz-btn').style.display = 'none';

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.onclick = () => selectOption(btn, opt, q.answer);
    optionsContainer.appendChild(btn);
  });
}

function selectOption(selectedBtn, selectedOpt, correctOpt) {
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(btn => btn.disabled = true);

  if (selectedOpt === correctOpt) {
    selectedBtn.classList.add('correct');
    document.getElementById('quiz-feedback').textContent = "¡Correcto! 🎉";
    document.getElementById('quiz-feedback').style.color = "#16a34a";
    score++;
    document.getElementById('quiz-score').textContent = `Puntaje: ${score}`;
  } else {
    selectedBtn.classList.add('incorrect');
    document.getElementById('quiz-feedback').textContent = `Incorrecto. Respuesta correcta: ${correctOpt}`;
    document.getElementById('quiz-feedback').style.color = "#dc2626";
  }

  document.getElementById('next-quiz-btn').style.display = 'inline-block';
}

function nextQuestion() {
  currentQuizIndex++;
  if (currentQuizIndex < quizData.length) {
    loadQuizQuestion();
  } else {
    document.getElementById('quiz-container').innerHTML = `
      <h2>¡Has completado el examen! 🎓</h2>
      <p style="font-size: 1.2rem; margin: 1rem 0;">Tu puntaje final es: <strong>${score} / ${quizData.length}</strong></p>
      <button onclick="location.reload()" class="card-controls button">Reiniciar Examen</button>
    `;
  }
}

// Función auxiliar para mezclar opciones aleatoriamente
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}