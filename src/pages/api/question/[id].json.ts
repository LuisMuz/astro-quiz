import type { APIRoute } from 'astro'
export const prerender = false;

// Simulación de base de datos
const questionsDB = {
    'histology': [
        {
            id: 1,
            question: "¿Cuál es el tipo principal de tejido que forma la epidermis?",
            options: ["Tejido conectivo", "Tejido epitelial", "Tejido muscular", "Tejido nervioso"],
            correctAnswer: 1
        },
        {
            id: 2,
            question: "¿Qué tipo de tejido conectivo es el más abundante en el cuerpo humano?",
            options: ["Tejido óseo", "Tejido cartilaginoso", "Tejido adiposo", "Tejido conjuntivo laxo"],
            correctAnswer: 3
        },
        {
            id: 3,
            question: "¿Cómo se llaman las células responsables de la producción de colágeno en el tejido conectivo?",
            options: ["Macrófagos", "Fibroblastos", "Mastocitos", "Condrocitos"],
            correctAnswer: 1
        },
        {
            id: 4,
            question: "¿Qué tipo de epitelio reviste el intestino delgado?",
            options: ["Epitelio plano simple", "Epitelio cúbico simple", "Epitelio cilíndrico simple", "Epitelio cilíndrico estratificado"],
            correctAnswer: 2
        }
    ],
    'anatomy': [
        {
            id: 5,
            question: "¿Cuál es el hueso más largo del cuerpo humano?",
            options: ["Fémur", "Húmero", "Tibia", "Radio"],
            correctAnswer: 0
        },
        {
            id: 6,
            question: "¿En qué órgano se encuentra el atrio derecho?",
            options: ["Cerebro", "Pulmón", "Corazón", "Riñón"],
            correctAnswer: 2
        },
        {
            id: 7,
            question: "¿Cuántos huesos tiene el cuerpo humano en un adulto promedio?",
            options: ["206", "214", "220", "195"],
            correctAnswer: 0
        },
        {
            id: 8,
            question: "¿Cómo se llama el músculo principal encargado de la respiración?",
            options: ["Trapecio", "Diafragma", "Intercostales", "Pectoral mayor"],
            correctAnswer: 1
        }
    ],
    'immunology': [
        {
            id: 9,
            question: "¿Qué tipo de glóbulos blancos son los principales responsables de la inmunidad adquirida?",
            options: ["Neutrófilos", "Eosinófilos", "Linfocitos", "Basófilos"],
            correctAnswer: 2
        },
        {
            id: 10,
            question: "¿Qué anticuerpo es el más abundante en la sangre humana?",
            options: ["IgA", "IgG", "IgE", "IgM"],
            correctAnswer: 1
        },
        {
            id: 11,
            question: "¿Cuál de las siguientes es una célula presentadora de antígenos?",
            options: ["Eritrocito", "Macrófago", "Plaqueta", "Osteoclasto"],
            correctAnswer: 1
        },
        {
            id: 12,
            question: "¿Qué tipo de inmunidad proporciona la vacunación?",
            options: ["Inmunidad innata", "Inmunidad pasiva", "Inmunidad adaptativa activa", "Inmunidad adaptativa pasiva"],
            correctAnswer: 2
        }
    ],
    'biochemistry': [
        {
            id: 13,
            question: "¿Cuál es la principal molécula de almacenamiento de energía en las células animales?",
            options: ["Glucosa", "ADN", "Glucógeno", "Triglicéridos"],
            correctAnswer: 2
        },
        {
            id: 14,
            question: "¿Qué tipo de enlace une a los aminoácidos en una proteína?",
            options: ["Puentes de hidrógeno", "Enlace peptídico", "Enlace iónico", "Enlace fosfodiéster"],
            correctAnswer: 1
        },
        {
            id: 15,
            question: "¿Cuál de las siguientes es una coenzima esencial en la respiración celular?",
            options: ["ATP", "NAD+", "ADP", "ARN"],
            correctAnswer: 1
        },
        {
            id: 16,
            question: "¿Qué molécula es el principal transportador de electrones en la cadena de transporte de electrones mitocondrial?",
            options: ["FADH2", "NADH", "ATP", "CO2"],
            correctAnswer: 1
        }
    ]
}


export const GET: APIRoute = async ({ params }) => {
    try {
        const { id } = params
        // Buscamos preguntas del tema
        const questions = questionsDB[id as keyof typeof questionsDB] || []

        // Devolvemos las preguntas sin las respuestas correctas
        const sanitizedQuestions = questions.map(({ id, question, options }) => ({
            id,
            question,
            options
        }))

        // Regresamos las preguntas con las opciones
        return new Response(JSON.stringify({
            questions: sanitizedQuestions,
        }), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch (error) {
        return new Response(JSON.stringify({ error: "Error al obtener las preguntas" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}

export const POST: APIRoute = async ({ request, params }) => {
    try {
        const { id } = params

        // Buscamos respuestas para comparar
        const questions = questionsDB[id as keyof typeof questionsDB]

        if (!questions) {
            return new Response(JSON.stringify({ error: "Material no encontrado" }), {
                status: 404,
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }

        const body = await request.json()
        const { answers } = body

        // Valida tipo de dato answers
        if (!answers || !Array.isArray(answers)) {
            return new Response(JSON.stringify({ error: "Formato de respuestas inválido" }), {
                status: 400,
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }

        // Calcula respuestas correctas
        const results = answers.map((answer, index) => {
            const question = questions[index]
            if (!question) return false
            return answer === question.correctAnswer
        })
        const score = results.filter(Boolean).length

        return new Response(JSON.stringify({
            score,
            total: questions.length,
            correct: questions.map((question) => {
                return question.correctAnswer
            }),
        }), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch (error) {
        return new Response(JSON.stringify({ error: "Error al procesar las respuestas" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}

// Definimos rutas a usar
export function getStaticPaths() {
    return [
        { params: { id: "anatomy"} },
        { params: { id: "biochemistry"} },
        { params: { id: "histology"} },
        { params: { id: "immunology"} }
    ]
}