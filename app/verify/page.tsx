'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, XCircle, Award, ArrowLeft, Download } from 'lucide-react';

function HelpBox() {
  const [open, setOpen] = React.useState(false as boolean)
  return (
    <div className="mt-10">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between bg-orange-50 border-2 border-orange-200 rounded-lg p-4 font-semibold">
        Verification Help
        <span className="text-sm text-orange-600">{open ? 'Hide' : 'Show'}</span>
      </button>
      {open && (
        <div className="border border-orange-200 border-t-0 rounded-b-lg p-4 text-sm text-gray-700">
          <p className="mb-2">You can confirm a certificate using the Certificate ID and details embedded in the URL parameters:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><code className="px-1 py-0.5 bg-gray-100 border rounded">id</code> — Unique certificate identifier (e.g., <span className="font-mono">SEO-1730217643000-ABCD123EF</span>)</li>
            <li><code className="px-1 py-0.5 bg-gray-100 border rounded">name</code> — Recipient full name</li>
            <li><code className="px-1 py-0.5 bg-gray-100 border rounded">score</code> and <code className="px-1 py-0.5 bg-gray-100 border rounded">total</code> — Correct answers and total questions</li>
            <li><code className="px-1 py-0.5 bg-gray-100 border rounded">date</code> — Issue date</li>
          </ul>
          <p className="mt-3">Example link:</p>
          <p className="break-all text-xs text-gray-600">/verify?name=John%20Doe&score=18&total=20&id=SEO-1730217643000-ABCD123EF&date=October%2029,%202025</p>
          <p className="mt-3">For formal verification, the issuer can cross‑check the <span className="font-mono">Certificate ID</span> against their records.</p>
        </div>
      )}
    </div>
  )
}

function VerifyContent() {
  const params = useSearchParams();
  const name = params.get('name') || '';
  const score = params.get('score');
  const total = params.get('total');
  const id = params.get('id');
  const date = params.get('date');

  const percent = score && total ? Math.round((parseInt(score) / parseInt(total)) * 100) : null;

  const isValid = Boolean(id && name && score && total);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-12">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${isValid ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
            {isValid ? <CheckCircle2 className="w-12 h-12" /> : <XCircle className="w-12 h-12" />}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {isValid ? 'Certificate Verified' : 'Unable to Verify Certificate'}
          </h1>
          <p className="text-medium-grey">
            {isValid ? 'This certificate appears authentic based on the provided details.' : 'Missing or invalid details in the verification link.'}
          </p>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm">
          {isValid ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-orange-500" />
                <p className="text-gray-800"><span className="font-semibold">Name:</span> {name}</p>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-orange-500" />
                <p className="text-gray-800"><span className="font-semibold">Score:</span> {score}/{total}{percent !== null && <> ({percent}%)</>}</p>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-orange-500" />
                <p className="text-gray-800"><span className="font-semibold">Certificate ID:</span> <span className="font-mono text-sm">{id}</span></p>
              </div>
              {date && (
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-orange-500" />
                  <p className="text-gray-800"><span className="font-semibold">Date Issued:</span> {date}</p>
                </div>
              )}
              <p className="text-xs text-gray-500 pt-2">Note: This is a front-end verification only. For formal verification, confirm the Certificate ID with the issuer.</p>
            </div>
          ) : (
            <div className="text-gray-700">
              <p>Ensure your link includes: <code className="px-2 py-1 bg-gray-100 border rounded">?name=&amp;score=&amp;total=&amp;id=&amp;date</code></p>
              <p className="mt-2">Example: <span className="break-all text-sm text-gray-600">/verify?name=John%20Doe&amp;score=18&amp;total=20&amp;id=SEO-1730217643000-ABCD123EF&amp;date=October%2029,%202025</span></p>
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link href="/quiz" className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
            Take the Quiz
          </Link>
          <Link href={`/certification?name=${encodeURIComponent(name)}&score=${score || ''}&total=${total || ''}`} className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
            <Download className="w-5 h-5" />
            View Certificate
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            <ArrowLeft className="w-5 h-5" />
            Home
          </Link>
        </div>

        <HelpBox />
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center"><div className="animate-spin w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full" /></div>}>
      <VerifyContent />
    </Suspense>
  );
}
