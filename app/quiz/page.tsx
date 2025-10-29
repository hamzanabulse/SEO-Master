'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, XCircle, Award } from 'lucide-react';
import StructuredData from '@/components/StructuredData'

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What does SEO stand for?",
    options: [
      "Search Engine Optimization",
      "Social Engine Optimization",
      "Search Engine Organization",
      "Site Engine Optimization"
    ],
    correctAnswer: 0,
    explanation: "SEO stands for Search Engine Optimization - the practice of optimizing websites to rank higher in search engine results.",
    category: "Fundamentals"
  },
  {
    id: 2,
    question: "Which HTTP status code indicates a permanent redirect?",
    options: ["302", "404", "301", "500"],
    correctAnswer: 2,
    explanation: "A 301 status code indicates a permanent redirect, passing most link equity to the new URL.",
    category: "Technical SEO"
  },
  {
    id: 3,
    question: "What is the recommended maximum length for a meta description?",
    options: ["50-60 characters", "100-120 characters", "150-160 characters", "200-220 characters"],
    correctAnswer: 2,
    explanation: "Meta descriptions should be 150-160 characters to avoid truncation in search results.",
    category: "On-Page SEO"
  },
  {
    id: 4,
    question: "Which of these is a Core Web Vital metric?",
    options: ["Time to First Byte (TTFB)", "Largest Contentful Paint (LCP)", "First Paint (FP)", "DOMContentLoaded"],
    correctAnswer: 1,
    explanation: "LCP (Largest Contentful Paint) is one of the three Core Web Vitals, measuring loading performance.",
    category: "Technical SEO"
  },
  {
    id: 5,
    question: "What does 'nofollow' attribute tell search engines?",
    options: [
      "Remove the page from index",
      "Don't pass link equity through this link",
      "Block the page from crawling",
      "Mark the content as duplicate"
    ],
    correctAnswer: 1,
    explanation: "The 'nofollow' attribute tells search engines not to pass link equity (PageRank) through that specific link.",
    category: "Off-Page SEO"
  },
  {
    id: 6,
    question: "What is the ideal LCP (Largest Contentful Paint) score?",
    options: ["Under 1.0 seconds", "Under 2.5 seconds", "Under 4.0 seconds", "Under 5.0 seconds"],
    correctAnswer: 1,
    explanation: "Good LCP score is under 2.5 seconds. Between 2.5-4.0 seconds needs improvement, over 4.0 is poor.",
    category: "Technical SEO"
  },
  {
    id: 7,
    question: "Which search intent type is best for 'buy iPhone 15 Pro'?",
    options: ["Informational", "Navigational", "Transactional", "Commercial Investigation"],
    correctAnswer: 2,
    explanation: "Keywords with 'buy', 'purchase', 'order' indicate transactional intent - ready to make a purchase.",
    category: "Content SEO"
  },
  {
    id: 8,
    question: "What is canonical URL used for?",
    options: [
      "Redirect users to mobile version",
      "Specify the preferred version of duplicate pages",
      "Block search engine crawlers",
      "Track page analytics"
    ],
    correctAnswer: 1,
    explanation: "Canonical tags tell search engines which version of duplicate or similar pages is the preferred one to index.",
    category: "Technical SEO"
  },
  {
    id: 9,
    question: "What does NAP stand for in local SEO?",
    options: [
      "Network Access Point",
      "Name, Address, Phone",
      "National Advertising Platform",
      "New Age Protocol"
    ],
    correctAnswer: 1,
    explanation: "NAP (Name, Address, Phone) consistency across the web is crucial for local SEO rankings.",
    category: "Local SEO"
  },
  {
    id: 10,
    question: "Which tool is NOT provided by Google?",
    options: ["Google Search Console", "Google Analytics", "Google PageSpeed Insights", "Ahrefs"],
    correctAnswer: 3,
    explanation: "Ahrefs is a third-party SEO tool. Google Search Console, Analytics, and PageSpeed Insights are all Google tools.",
    category: "Analytics"
  },
  {
    id: 11,
    question: "What is the purpose of schema markup (structured data)?",
    options: [
      "Speed up page loading",
      "Help search engines understand content context",
      "Block spam bots",
      "Encrypt page content"
    ],
    correctAnswer: 1,
    explanation: "Schema markup helps search engines understand your content's context, enabling rich results in search.",
    category: "Technical SEO"
  },
  {
    id: 12,
    question: "Which keyword match type is broadest in Google Ads (but relevant to SEO keyword research)?",
    options: ["Exact match", "Phrase match", "Broad match", "Modified broad match"],
    correctAnswer: 2,
    explanation: "Broad match shows ads for related searches. In SEO, understanding match types helps with keyword expansion strategies.",
    category: "Content SEO"
  },
  {
    id: 13,
    question: "What is the recommended minimum tap target size for mobile?",
    options: ["24px × 24px", "32px × 32px", "44px × 44px", "64px × 64px"],
    correctAnswer: 2,
    explanation: "Apple and Google recommend minimum 44px × 44px tap targets for mobile usability.",
    category: "Mobile SEO"
  },
  {
    id: 14,
    question: "What does E-E-A-T stand for in Google's Search Quality Guidelines?",
    options: [
      "Efficiency, Engagement, Authority, Trust",
      "Experience, Expertise, Authoritativeness, Trustworthiness",
      "Ethics, Excellence, Accuracy, Transparency",
      "Engagement, Evidence, Analysis, Trust"
    ],
    correctAnswer: 1,
    explanation: "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness - key quality factors Google evaluates.",
    category: "Content SEO"
  },
  {
    id: 15,
    question: "Which robots.txt directive blocks all crawlers from the entire site?",
    options: [
      "User-agent: * Disallow: /",
      "User-agent: Googlebot Disallow: *",
      "Noindex: /",
      "Block: all"
    ],
    correctAnswer: 0,
    explanation: "User-agent: * (all bots) followed by Disallow: / (root directory) blocks all crawlers from the entire site.",
    category: "Technical SEO"
  },
  {
    id: 16,
    question: "What is keyword cannibalization?",
    options: [
      "Using too many keywords on one page",
      "Multiple pages competing for the same keyword",
      "Removing keywords from content",
      "Stealing competitor keywords"
    ],
    correctAnswer: 1,
    explanation: "Keyword cannibalization occurs when multiple pages on your site target the same keyword, competing against each other.",
    category: "Content SEO"
  },
  {
    id: 17,
    question: "What does CTR stand for in SEO analytics?",
    options: [
      "Click Through Rate",
      "Cost To Rank",
      "Content Trust Rating",
      "Crawl Time Ratio"
    ],
    correctAnswer: 0,
    explanation: "CTR (Click-Through Rate) measures the percentage of users who click your link after seeing it in search results.",
    category: "Analytics"
  },
  {
    id: 18,
    question: "Which HTML tag is most important for on-page SEO?",
    options: ["<div>", "<h1>", "<span>", "<section>"],
    correctAnswer: 1,
    explanation: "The <h1> tag is the most important heading tag for on-page SEO, defining the main topic of the page.",
    category: "On-Page SEO"
  },
  {
    id: 19,
    question: "What is the purpose of an XML sitemap?",
    options: [
      "Display site navigation to users",
      "Help search engines discover and crawl pages",
      "Store user session data",
      "Speed up page rendering"
    ],
    correctAnswer: 1,
    explanation: "XML sitemaps help search engines discover, crawl, and index your pages more efficiently.",
    category: "Technical SEO"
  },
  {
    id: 20,
    question: "What is 'link juice' in SEO?",
    options: [
      "A tool for finding broken links",
      "Link equity passed through hyperlinks",
      "Anchor text optimization",
      "Internal linking structure"
    ],
    correctAnswer: 1,
    explanation: "Link juice refers to the link equity (ranking power) passed from one page to another through hyperlinks.",
    category: "Off-Page SEO"
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(quizQuestions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [userName, setUserName] = useState('');
  const [showNamePrompt, setShowNamePrompt] = useState(true);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === quizQuestions[index].correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const finishQuiz = () => {
    setShowResults(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(Array(quizQuestions.length).fill(null));
    setShowResults(false);
    setShowNamePrompt(true);
    setUserName('');
  };

  const startQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim()) {
      setShowNamePrompt(false);
    }
  };

  const score = calculateScore();
  const percentage = Math.round((score / quizQuestions.length) * 100);
  const passed = percentage >= 70;

  if (showNamePrompt) {
    return (
      <div className="min-h-screen bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              SEO Certification Quiz
            </h1>
            <p className="text-xl text-gray-600">
              Test your SEO knowledge with 20 comprehensive questions
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-sm">
            <div className="flex justify-center mb-6">
              <Award className="w-20 h-20 text-orange-500" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Ready to Get Certified?
            </h2>

            <div className="space-y-4 mb-8 text-gray-600">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p>20 multiple-choice questions covering all SEO aspects</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p>Topics: Fundamentals, Technical SEO, Content, Analytics, and more</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p>Score 70% or higher to earn your SEO certification</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p>Receive a downloadable PDF certificate upon passing</p>
              </div>
            </div>

            <form onSubmit={startQuiz}>
              <label className="block mb-4">
                <span className="text-gray-700 font-medium mb-2 block">Enter Your Name:</span>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition"
                  required
                />
              </label>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition"
              >
                Start Quiz
              </button>
            </form>
          </div>

          <div className="mt-8 text-center">
            <Link href="/knowledge-base" className="text-orange-500 hover:text-orange-600 font-medium">
              ← Back to Knowledge Base
            </Link>
          </div>
        </div>

        <StructuredData data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'SEO Certification Quiz',
          description: 'Test your SEO knowledge with 20 questions across Technical, On-Page, Off-Page, Analytics, and Mobile. Score 70%+ to earn your certificate.',
          url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/quiz`
        }} />
        <StructuredData data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') },
            { '@type': 'ListItem', position: 2, name: 'Quiz', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/quiz` },
          ],
        }} />
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Quiz Results
            </h1>
            <p className="text-xl text-gray-600">
              {userName}, here's how you performed
            </p>
          </div>

          {/* Score Summary */}
          <div className={`${passed ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200'} border-2 rounded-xl p-8 mb-8`}>
            <div className="text-center">
              <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full ${passed ? 'bg-green-500' : 'bg-orange-500'} text-white text-5xl font-bold mb-4`}>
                {percentage}%
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {passed ? 'Congratulations! You Passed!' : 'Keep Learning!'}
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                You answered {score} out of {quizQuestions.length} questions correctly
              </p>
              {passed ? (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    You've demonstrated strong SEO knowledge! 🎉
                  </p>
                  <Link
                    href={`/certification?name=${encodeURIComponent(userName)}&score=${score}&total=${quizQuestions.length}`}
                    className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition"
                  >
                    <Award className="w-5 h-5" />
                    Get Your Certificate
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    You need 70% to pass. Review the questions below and try again!
                  </p>
                  <button
                    onClick={restartQuiz}
                    className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition"
                  >
                    Retake Quiz
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Question Review */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Review Your Answers</h3>
            {quizQuestions.map((q, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === q.correctAnswer;
              
              return (
                <div
                  key={q.id}
                  className={`border-2 rounded-lg p-6 ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}
                >
                  <div className="flex items-start gap-3 mb-4">
                    {isCorrect ? (
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">
                          Question {index + 1}: {q.question}
                        </h4>
                        <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full ml-4">
                          {q.category}
                        </span>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        {q.options.map((option, optIndex) => (
                          <div
                            key={optIndex}
                            className={`p-3 rounded-lg ${
                              optIndex === q.correctAnswer
                                ? 'bg-green-100 border-2 border-green-500'
                                : optIndex === userAnswer && !isCorrect
                                ? 'bg-red-100 border-2 border-red-500'
                                : 'bg-white border border-gray-200'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {optIndex === q.correctAnswer && (
                                <CheckCircle className="w-4 h-4 text-green-600" />
                              )}
                              {optIndex === userAnswer && !isCorrect && (
                                <XCircle className="w-4 h-4 text-red-600" />
                              )}
                              <span className={optIndex === q.correctAnswer || (optIndex === userAnswer && !isCorrect) ? 'font-medium' : ''}>
                                {option}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm font-medium text-blue-900 mb-1">Explanation:</p>
                        <p className="text-sm text-blue-800">{q.explanation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex gap-4 justify-center">
            <button
              onClick={restartQuiz}
              className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Retake Quiz
            </button>
            <Link
              href="/knowledge-base"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition inline-block"
            >
              Continue Learning
            </Link>
          </div>
        </div>

        <StructuredData data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'SEO Certification Quiz — Results',
          description: 'Your SEO quiz results and explanations for each question.',
          url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/quiz`
        }} />
        <StructuredData data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') },
            { '@type': 'ListItem', position: 2, name: 'Quiz', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/quiz` },
          ],
        }} />
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const selectedAnswer = selectedAnswers[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-3xl mx-auto px-6">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-sm">
          <div className="mb-6">
            <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              {question.category}
            </span>
            <h2 className="text-2xl font-bold text-gray-900">
              {question.question}
            </h2>
          </div>

          <div className="space-y-3 mb-8">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition ${
                  selectedAnswer === index
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === index
                        ? 'border-orange-500 bg-orange-500'
                        : 'border-gray-300'
                    }`}
                  >
                    {selectedAnswer === index && (
                      <div className="w-3 h-3 bg-white rounded-full" />
                    )}
                  </div>
                  <span className={selectedAnswer === index ? 'font-medium text-gray-900' : 'text-gray-700'}>
                    {option}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              className={`px-6 py-3 rounded-lg font-medium transition ${
                currentQuestion === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Previous
            </button>

            {currentQuestion === quizQuestions.length - 1 ? (
              <button
                onClick={finishQuiz}
                disabled={selectedAnswers.includes(null)}
                className={`px-8 py-3 rounded-lg font-semibold transition ${
                  selectedAnswers.includes(null)
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-orange-500 text-white hover:bg-orange-600'
                }`}
              >
                Finish Quiz
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                disabled={selectedAnswer === null}
                className={`px-8 py-3 rounded-lg font-semibold transition ${
                  selectedAnswer === null
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-orange-500 text-white hover:bg-orange-600'
                }`}
              >
                Next Question
              </button>
            )}
          </div>
        </div>

        {/* Answer Counter */}
        <div className="mt-6 text-center text-sm text-gray-600">
          {selectedAnswers.filter(a => a !== null).length} of {quizQuestions.length} questions answered
        </div>
      </div>

      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'SEO Certification Quiz',
        description: 'Answer 20 SEO questions covering fundamentals, technical SEO, on-page, off-page, analytics, and mobile.',
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/quiz`
      }} />
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') },
          { '@type': 'ListItem', position: 2, name: 'Quiz', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/quiz` },
        ],
      }} />
    </div>
  );
}
