import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Timer, CheckCircle, XCircle } from 'lucide-react'
import PButton from "@/components/pButton"
import SButton from "@/components/sButton"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Question {
    id: number
    question: string
    options: string[]
    correctAnswer: number
}

interface QuizSessionProps {
    materialId: string,
    questions: Question[]
    timeLimit?: number
    onExit?: () => void
}

export default function QuizSession({ materialId, questions, timeLimit = 300, onExit }: QuizSessionProps) {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(questions.length).fill(-1))
    const [correctAnswers, setCorrectAnswers] = useState<number[]>(new Array(questions.length).fill(-1))
    const [timeRemaining, setTimeRemaining] = useState(timeLimit)
    const [isFinished, setIsFinished] = useState(false)
    const [showResults, setShowResults] = useState(false)
    const [score, setScore] = useState(0)
    const [timeSpent, setTimeSpent] = useState(0)
    const [hasStarted, setHasStarted] = useState(false)
    const [error, setError] = useState<String | null>(null)

    useEffect(() => {
        // Contar tiempo para terminar quiz
        if (hasStarted && timeRemaining > 0 && !isFinished) {
            const timer = setInterval(() => {
                setTimeRemaining((prev) => prev - 1)
            }, 1000)
            return () => clearInterval(timer)
        } else if (timeRemaining === 0 && !isFinished) {
            calculateResults()
        }
    }, [timeRemaining, isFinished, hasStarted])

    // Actualizar estado de las respuestas
    const handleAnswerSelect = (optionIndex: number) => {
        const newAnswers = [...selectedAnswers]
        newAnswers[currentQuestion] = optionIndex
        setSelectedAnswers(newAnswers)
    }

    // Navegar entre preguntas
    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        }
    }

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
        }
    }

    // Convertir de segundos a minutos
    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
    }

    const progress = ((currentQuestion + 1) / questions.length) * 100

    const calculateResults = async () => {
        try {
            setIsFinished(true)

            // Enviar resultados al servidor
            const response = await fetch(`/api/question/${materialId}.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    answers: selectedAnswers,
                }),
            })

            const { score, total, correct } = await response.json()
            setScore(score)
            setTimeSpent(timeLimit - timeRemaining)
            setCorrectAnswers(correct)
            setShowResults(true)
        } catch (err) {
            setError("Error al procesar resultados")
        }
    }

    const handleStart = () => {
        setHasStarted(true)
    }

    const handleRetry = () => {
        setCurrentQuestion(0)
        setSelectedAnswers(new Array(questions.length).fill(-1))
        setTimeRemaining(timeLimit)
        setIsFinished(false)
        setShowResults(false)
        setScore(0)
        setTimeSpent(0)
        setHasStarted(false)
    }

    if (!hasStarted) {
        return (
            // Pantalla para iniciar quiz
            <div className="bg-backk p-4 md:p-8">
                <div className="max-w-4xl mx-auto">
                    <Card className="p-6 text-center">
                        <h2 className="text-2xl font-bold text-bl3 mb-4">¿Listo para comenzar?</h2>
                        <p className="text-gray-600 mb-6">
                            El quiz contiene {questions.length} preguntas y tienes {formatTime(timeLimit)} para completarlo.
                        </p>
                        <PButton onClick={handleStart}>
                            Empezar Quiz
                        </PButton>
                    </Card>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-backk p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header con tiempo y progreso */}
                <div className="mb-6 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 text-bl3 font-semibold">
                            <Timer className="w-5 h-5" />
                            <span>{formatTime(timeRemaining)}</span>
                        </div>
                        <span className="text-bl2 font-medium">
                            {currentQuestion + 1} de {questions.length}
                        </span>
                    </div>
                    <Progress value={progress} className="bg-bl2" />
                </div>

                {/* Tarjeta de pregunta */}
                <Card className="p-6 mb-6 bg-white shadow-lg">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-bl3">{questions[currentQuestion].question}</h2>
                    <div className="grid gap-4">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerSelect(index)}
                                className={`p-4 text-left rounded-lg transition-all ${
                                    selectedAnswers[currentQuestion] === index
                                        ? "bg-bl2 text-white"
                                        : "bg-backk hover:bg-bl1 hover:text-white"
                                }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </Card>

                {/* Botones de navegación */}
                <div className="flex justify-between gap-4">
                    <SButton
                        onClick={handlePrevious}
                        disabled={currentQuestion === 0}
                    >
                        <ChevronLeft className="w-4 h-4" /> Anterior
                    </SButton>
                    <PButton
                        onClick={handleNext}
                        disabled={currentQuestion === questions.length - 1}
                    >
                        Siguiente <ChevronRight className="w-4 h-4" />
                    </PButton>
                </div>

                {/* Botón de finalizar */}
                <div className="mt-6 text-center">
                    <PButton
                        onClick={calculateResults}
                    >
                        Finalizar Quiz
                    </PButton>
                </div>

                {/* Modal de resultados */}
                <Dialog open={showResults} onOpenChange={setShowResults}>
                    <DialogContent className="max-w-md">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-center mb-4">
                                Resultados del Quiz
                            </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                            {
                                error ?
                                    <div className="text-red-600"></div>
                                :
                                <div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-bl2 mb-2">
                                            {score} / {questions.length}
                                        </div>
                                        <div className="text-gray-600">Puntuación final</div>
                                    </div>

                                    <div className="bg-backk p-4 rounded-lg space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span>Tiempo empleado:</span>
                                            <span className="font-semibold">{formatTime(timeSpent)}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Respuestas correctas:</span>
                                            <span className="font-semibold text-green-600">{score}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Respuestas incorrectas:</span>
                                            <span className="font-semibold text-red-600">{questions.length - score}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="font-semibold text-lg">Resumen de respuestas:</h3>
                                        <div className="space-y-2 max-h-54 overflow-y-auto">
                                            {questions.map((question, index) => (
                                                <div key={question.id} className="flex items-start gap-2 p-2 rounded-lg bg-gray-50">
                                                    {selectedAnswers[index] === correctAnswers[index] ? (
                                                        <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                                    ) : (
                                                        <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                                                    )}
                                                    <div className="flex-1">
                                                        <p className="text-sm font-medium">{question.question}</p>
                                                        <p className="text-sm text-gray-600">
                                                            Tu respuesta: {question.options[selectedAnswers[index]]}
                                                        </p>
                                                        {selectedAnswers[index] !== question.correctAnswer && (
                                                            <p className="text-sm text-green-600">
                                                                Respuesta correcta: {question.options[correctAnswers[index]]}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className="flex justify-between gap-4">
                                <a href="/">
                                    <SButton>
                                        Regresar
                                    </SButton>
                                </a>
                                <PButton onClick={handleRetry}>
                                    Reintentar
                                </PButton>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}
