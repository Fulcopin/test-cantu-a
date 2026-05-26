"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, Trophy, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface Question {
  id: number
  scene: string
  image: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const questions: Question[] = [
  {
    id: 1,
    scene: "The Pact with the Devil",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z19meFJuuad2fGEh9mWn5UPJQgXpod.png",
    question: "What did Cantuña promise the Devil in exchange for building the Church of San Francisco?",
    options: [
      "All of his gold and riches",
      "His soul",
      "His firstborn child",
      "Eternal servitude as a builder"
    ],
    correctAnswer: 1,
    explanation: "Cantuña made a pact with the Devil, offering his own soul as payment if the construction of the Church of San Francisco was completed by dawn."
  },
  {
    id: 2,
    scene: "The Legend of Cantuña",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z19meFJuuad2fGEh9mWn5UPJQgXpod.png",
    question: "Who was Cantuña in the legend?",
    options: [
      "A wealthy Spanish merchant",
      "An Indigenous Ecuadorian stonemason",
      "A Catholic priest from Quito",
      "A Spanish colonial governor"
    ],
    correctAnswer: 1,
    explanation: "Cantuña was an Indigenous Ecuadorian stonemason who was tasked with building the church and entered into a desperate pact with the Devil to complete it."
  },
  {
    id: 3,
    scene: "The Construction Agreement",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-js5NLYNtZjJAf0iWlmNozu6gw2jg10.png",
    question: "What was the deadline set by the Devil for completing the construction?",
    options: [
      "Before midnight",
      "Before the first rooster crowed",
      "Before dawn broke",
      "Before the church bells rang at noon"
    ],
    correctAnswer: 2,
    explanation: "The Devil demanded that the entire Church of San Francisco be completed before dawn. This night deadline was the core of the dangerous bet."
  },
  {
    id: 4,
    scene: "The Devil's Army",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-js5NLYNtZjJAf0iWlmNozu6gw2jg10.png",
    question: "Who did the Devil send to help build the church through the night?",
    options: [
      "A group of enslaved workers",
      "Hundreds of demons and imps",
      "A team of powerful angels",
      "An army of stone giants"
    ],
    correctAnswer: 1,
    explanation: "The Devil unleashed hundreds of demons and imps to labour through the night, working at supernatural speed to raise the walls and structure of the church."
  },
  {
    id: 5,
    scene: "Cantuña's Clever Trick",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bijdYyd1ttc0ozSL5F6NYTc7QhIXPR.png",
    question: "How did Cantuña manage to save his soul from the Devil?",
    options: [
      "He prayed all night and was rescued by an angel",
      "He secretly removed one small stone before dawn",
      "He bribed the Devil with gold",
      "He fled the city before the deadline"
    ],
    correctAnswer: 1,
    explanation: "Cantuña outwitted the Devil by secretly hiding one small stone so the construction could never be truly 'complete.' Without finishing the work, the Devil had no right to claim his soul."
  },
  {
    id: 6,
    scene: "The Devil's Defeat",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bijdYyd1ttc0ozSL5F6NYTc7QhIXPR.png",
    question: "Why was the Devil unable to claim Cantuña's soul at dawn?",
    options: [
      "Because Cantuña had already died",
      "Because the church had not been fully completed",
      "Because god intervened and protected Cantuña",
      "Because the Devil forgot the terms of the pact"
    ],
    correctAnswer: 1,
    explanation: "The Devil could not collect the soul because the pact required the church to be finished. Since Cantuña had hidden one stone, the work remained technically incomplete — and the Devil's claim was void."
  },
  {
    id: 7,
    scene: "The Church of San Francisco",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kLbVBBRc4kRMBv3higmVJn24EX66h1.png",
    question: "Where is the Church of San Francisco, associated with the legend of Cantuña, located?",
    options: [
      "Guayaquil, Ecuador",
      "Cuenca, Ecuador",
      "Quito, Ecuador",
      "Bogotá, Colombia"
    ],
    correctAnswer: 2,
    explanation: "The Church of San Francisco stands in the historic centre of Quito, Ecuador. It is one of the oldest and largest colonial churches in the Americas and is tied to the legend of Cantuña."
  },
  {
    id: 8,
    scene: "Symbols in the Legend",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bZNWKtoY3UWf5UKiiD7rkzW87sMBC1.png",
    question: "What does the legend of Cantuña represent in Ecuadorian culture?",
    options: [
      "The power of the Devil over humans",
      "The ingenuity and resilience of Indigenous people",
      "The superiority of colonial construction methods",
      "The dangers of making promises"
    ],
    correctAnswer: 1,
    explanation: "Cantuña's story is celebrated as a symbol of Indigenous cleverness and resilience — a humble stonemason who used his wits to outsmart a much more powerful supernatural foe."
  },
  {
    id: 9,
    scene: "The Hidden Stone",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9YpADygvUk3rElgYB6IqsPXVRncC2P.png",
    question: "What does the hidden stone in the legend symbolise?",
    options: [
      "Greed and corruption",
      "Human wit and the power of a loophole",
      "The weakness of the Devil",
      "The strength of colonial architecture"
    ],
    correctAnswer: 1,
    explanation: "The hidden stone is the heart of the legend — it symbolises that a single clever act, finding a loophole in an ironclad pact, can be more powerful than all the Devil's supernatural army."
  },
  {
    id: 10,
    scene: "Legacy of Cantuña",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l4OkMobmuu6emlql1afEujqsyj1Fke.png",
    question: "What element of the Church of San Francisco is traditionally associated with Cantuña's story?",
    options: [
      "Its golden altar",
      "Its bell tower",
      "The atrium and its stones",
      "Its underground catacombs"
    ],
    correctAnswer: 2,
    explanation: "The atrium of the Church of San Francisco and its carefully laid stones are traditionally linked to the legend. Locals say one stone was deliberately left out — Cantuña's eternal trick against the Devil."
  }
]

export default function CantuñaQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(questions.length).fill(false))

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return
    setSelectedAnswer(answerIndex)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return
    setShowResult(true)
    const newAnswered = [...answeredQuestions]
    newAnswered[currentQuestion] = true
    setAnsweredQuestions(newAnswered)
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizComplete(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setQuizComplete(false)
    setAnsweredQuestions(new Array(questions.length).fill(false))
  }

  const progress = ((currentQuestion + (showResult ? 1 : 0)) / questions.length) * 100

  if (quizComplete) {
    const percentage = (score / questions.length) * 100
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-card border-border shadow-2xl">
          <CardHeader className="text-center space-y-4 pb-2">
            <div className="mx-auto w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
              <Trophy className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Congratulations!</h1>
            <p className="text-lg text-foreground">You Completed the Legend of Cantuña Quiz</p>
          </CardHeader>
          <CardContent className="text-center space-y-6 pt-4">
            <div className="space-y-4">
              <div className="bg-primary/10 rounded-lg p-6 border-2 border-primary">
                <p className="text-6xl md:text-7xl font-bold text-primary mb-2">{score}/{questions.length}</p>
                <p className="text-sm text-muted-foreground font-semibold">Final Score</p>
              </div>
              <p className="text-2xl font-semibold text-foreground">
                {percentage === 100 ? "Perfect Score! 🔥" :
                 percentage >= 90 ? "Outstanding Performance!" :
                 percentage >= 80 ? "Excellent! You know the legend well!" :
                 percentage >= 70 ? "Great job! Very impressive!" :
                 percentage >= 60 ? "Good effort! Keep learning!" :
                 percentage >= 40 ? "Not bad! Try again to improve!" :
                 "Keep studying the legend of Cantuña!"}
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              {percentage >= 80 && (
                <>
                  <Sparkles className="w-6 h-6 text-primary animate-bounce" />
                  <span className="text-primary font-bold text-lg">Master of the Legend!</span>
                  <Sparkles className="w-6 h-6 text-primary animate-bounce" />
                </>
              )}
            </div>
            <Progress value={percentage} className="h-4" />
            <p className="text-sm text-muted-foreground">{percentage.toFixed(1)}% Correct</p>
          </CardContent>
          <CardFooter className="justify-center gap-3 pb-6">
            <Button onClick={handleRestart} size="lg" className="gap-2">
              <RotateCcw className="w-4 h-4" />
              Try Again
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const isCorrect = selectedAnswer === question.correctAnswer

  return (
    <div className="min-h-screen bg-background py-6 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            The Legend of Cantuña
          </h1>
          <p className="text-muted-foreground">Interactive English Quiz</p>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>Score: {score}/{answeredQuestions.filter(Boolean).length}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="bg-card border-border shadow-xl overflow-hidden">
          {/* Scene Image */}
          <div className="relative w-full aspect-video">
            <Image
              src={question.image}
              alt={question.scene}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-semibold text-sm md:text-base">{question.scene}</p>
            </div>
          </div>

          <CardContent className="p-6 space-y-6">
            {/* Question */}
            <h2 className="text-lg md:text-xl font-semibold text-foreground leading-relaxed">
              {question.question}
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrectOption = index === question.correctAnswer
                
                let optionClass = "border-border hover:border-primary/50 hover:bg-secondary/50"
                if (showResult) {
                  if (isCorrectOption) {
                    optionClass = "border-[color:var(--success)] bg-[color:var(--success)]/10"
                  } else if (isSelected && !isCorrectOption) {
                    optionClass = "border-destructive bg-destructive/10"
                  }
                } else if (isSelected) {
                  optionClass = "border-primary bg-primary/10"
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult}
                    className={cn(
                      "w-full p-4 rounded-lg border-2 text-left transition-all duration-200",
                      "flex items-center gap-3",
                      optionClass,
                      !showResult && "cursor-pointer",
                      showResult && "cursor-default"
                    )}
                  >
                    <span className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0",
                      "border-2",
                      showResult && isCorrectOption ? "border-[color:var(--success)] text-[color:var(--success)]" :
                      showResult && isSelected && !isCorrectOption ? "border-destructive text-destructive" :
                      isSelected ? "border-primary bg-primary text-primary-foreground" :
                      "border-muted-foreground text-muted-foreground"
                    )}>
                      {showResult && isCorrectOption ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : showResult && isSelected && !isCorrectOption ? (
                        <XCircle className="w-5 h-5" />
                      ) : (
                        String.fromCharCode(65 + index)
                      )}
                    </span>
                    <span className="text-foreground text-sm md:text-base">{option}</span>
                  </button>
                )
              })}
            </div>

            {/* Explanation */}
            {showResult && (
              <div className={cn(
                "p-4 rounded-lg",
                isCorrect ? "bg-[color:var(--success)]/10 border border-[color:var(--success)]" : "bg-destructive/10 border border-destructive"
              )}>
                <p className={cn(
                  "font-semibold mb-2",
                  isCorrect ? "text-[color:var(--success)]" : "text-destructive"
                )}>
                  {isCorrect ? "Correct!" : "Incorrect!"}
                </p>
                <p className="text-foreground text-sm leading-relaxed">
                  {question.explanation}
                </p>
              </div>
            )}
          </CardContent>

          <CardFooter className="p-6 pt-0 flex justify-end gap-3">
            {!showResult ? (
              <Button 
                onClick={handleSubmit} 
                disabled={selectedAnswer === null}
                size="lg"
              >
                Check Answer
              </Button>
            ) : (
              <Button onClick={handleNext} size="lg" className="gap-2">
                {currentQuestion < questions.length - 1 ? (
                  <>
                    Next Question
                    <ChevronRight className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    See Results
                    <Trophy className="w-4 h-4" />
                  </>
                )}
              </Button>
            )}
          </CardFooter>
        </Card>

        {/* Question indicators */}
        <div className="flex justify-center gap-2 flex-wrap">
          {questions.map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-200",
                index === currentQuestion ? "bg-primary scale-125" :
                answeredQuestions[index] ? "bg-primary/50" :
                "bg-muted"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
