# Uso de la API

Esta aplicación incluye una API que proporciona preguntas categorizadas por tema y permite validar respuestas enviadas por el usuario.

## GET `/api/questions/:id.json`

Devuelve una lista de preguntas para una categoría específica sin incluir las respuestas correctas.

Ejemplo de url a usar:
```
http://localhost:4321/api/question/histology.json
```

Ejemplo de lo que regresa:
```json
{
  "questions": [
    {
      "id": 1,
      "question": "Pregunta",
      "options": ["opcion1", "opcion2", "opcion3", "opcion4"]
    }
  ]
}
```

## POST `/api/questions/:id`

Evalúa un conjunto de respuestas enviadas y devuelve la cantidad de aciertos.

Cuerpo del request:

```json
{
"answers": [1, 3, 1, 2]
}
```

Ejemplo de respuesta:

```json
{
    "score": 3,
    "total": 4,
    "correct": [
        0,
        2,
        0,
        1
    ]
}
```

Se requiere mandar las respuestas correctas pues al final se hace un resumen de cuales estuvieron bien y mal y sus respectivas correctas opciones.