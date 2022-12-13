import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'How many companies are actively traded in NSE?',
			answerOptions: [
				{ answerText: '1600', isCorrect: false },
				{ answerText: '1878', isCorrect: false },
				{ answerText: '1328', isCorrect: true },
				{ answerText: '1920', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the founder of Ethereum?',
			answerOptions: [
				{ answerText: 'Satoshi Nakamoto', isCorrect: false },
				{ answerText: 'Vitalik Buterin', isCorrect: true },
				{ answerText: 'Billy Markus', isCorrect: false },
				{ answerText: 'Jackson Palmer', isCorrect: false },
			],
		},
		{
			questionText: 'Nokia is an MNC based on which country?',
			answerOptions: [
				{ answerText: 'Finland', isCorrect: true },
				{ answerText: 'Poland', isCorrect: false },
				{ answerText: 'USA', isCorrect: false },
				{ answerText: 'El salvador', isCorrect: false },
			],
		},
		{
			questionText: 'How many states and UT in India?',
			answerOptions: [
				{ answerText: '29+7', isCorrect: false },
				{ answerText: '28+7', isCorrect: false },
				{ answerText: '30+8', isCorrect: false },
				{ answerText: '28+8', isCorrect: true },
			],
		},
		{
			questionText: 'In which year Japan finally handed over Andaman and Nicobar Islands to India?',
			answerOptions: [
				{ answerText: '1946', isCorrect: false },
				{ answerText: '1951', isCorrect: false },
				{ answerText: '1944', isCorrect: false },
				{ answerText: '1943', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} 
		else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
