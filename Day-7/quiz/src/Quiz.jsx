import React, {  useState } from "react";

function Quiz()
{
  const Questions=[
    {
        QuestionText:'Who is the Primeminister of India',
        AnswerOptions:[
           { answerText: "Vijay Rupani", isCorrect: false },
            { answerText: "Manmohan Singh", isCorrect: false },
            { answerText: "Narendra Modi", isCorrect: true },
            { answerText: "Deep Patel", isCorrect: false },

        ]
    },

   {
        QuestionText: "Who is CEO of Tata?",
        AnswerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Ratan Tata", isCorrect: true },
        { answerText: "Mukesh Ambani", isCorrect: false },
        { answerText: "Gautam Adani", isCorrect: false },
],
   },

    {
    QuestionText: "Who is richest person in the world?",
    AnswerOptions: [
    { answerText: "Jeff Bezos", isCorrect: false },
    { answerText: "Elon Musk", isCorrect: true },
    { answerText: "Mukesh Ambani", isCorrect: false },
    { answerText: "Warren Buffett", isCorrect: false },
    ],
    },

    {
    QuestionText: "How many countries are in the world?",
        AnswerOptions: [
        { answerText: "120", isCorrect: false },
        { answerText: "183", isCorrect: false },
        { answerText: "170", isCorrect: false },
        { answerText: "195", isCorrect: true },
        ],
    },

 ]

 const [score,setScore]=useState(0);
 const[currentQuestion,setCurrentQuestion]=useState(0);
 const[showscore,setShowscore]=useState(false);

 const ButtonClick=(isCorrect)=>
 {
        if(isCorrect)
        {
            setScore(score+1)
            
        }
        const nextQuestion = currentQuestion + 1;  // 0+1    1+1  2+1  3+1


        if (nextQuestion < Questions.length)   //if(1 < 4)
             {
        setCurrentQuestion(nextQuestion);
        }

        else
            {
            setShowscore(true)
        }

 }

    return(
        <>
            <div className="min-h-screen bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center">
                <div className="bg-white p-8 rounded-xl shadow-xl w-[400px] text-center">
                    <h1 className="text-3xl font-bold mb-6 text-red-700">
                        Quiz App
                    </h1>

                    {
                        showscore === true ? 
                        (
                            <div> You have scored {score} out of {Questions.length}</div>
                        )
                         :
                         (
                                <>
                                <div className="QuestionSection">
                                    <div className="text-red-500 mb-2">
                                        Question  {currentQuestion+1} / {Questions.length}
                                    </div>
                                    
                                    <div className="text-lg font-semibold">
                                        {Questions[currentQuestion].QuestionText}
                                    </div>

                                </div>
                               <div className="grid gap-3">

                        {Questions[currentQuestion].AnswerOptions.map((answerOption, index) => (

                        <button
                        key={index}
                        onClick={() =>
                        ButtonClick(answerOption.isCorrect)
                        }
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                        >

                        {answerOption.answerText}

                        </button>

                        ))
                        }

</div>
                                </>

                         )

                    }

                </div>
             </div>
        </>
    )
}


export default Quiz