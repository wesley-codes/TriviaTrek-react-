import React from 'react'
import QuestionCard from '../components/ui/cards/questionCard/QuestionCard'

function NotFound() {
  return (
    <main className="flex  mt-[4rem] md:mt-0 flex-col items-center p-6  md:p-24">
        <QuestionCard question="Page not Found"/>
    </main>

  )
}

export default NotFound