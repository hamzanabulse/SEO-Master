'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Award, Download, Share2, CheckCircle } from 'lucide-react';
import StructuredData from '@/components/StructuredData'

function CertificationContent() {
  const searchParams = useSearchParams();
  const [certificateId, setCertificateId] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  
  const name = searchParams.get('name') || 'SEO Professional';
  const score = searchParams.get('score') || '0';
  const total = searchParams.get('total') || '20';
  const percentage = Math.round((parseInt(score) / parseInt(total)) * 100);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  // Helper: load an image (e.g., SVG) and convert to PNG data URL for jsPDF
  const loadImageAsPngDataUrl = (src: string): Promise<{ dataUrl: string; width: number; height: number }> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        // Use a small upscale for crisper output
        const scale = 2;
        canvas.width = img.naturalWidth * scale || img.width * scale || 512;
        canvas.height = img.naturalHeight * scale || img.height * scale || 512;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Canvas context not available'));
          return;
        }
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/png');
        resolve({ dataUrl, width: canvas.width, height: canvas.height });
      };
      img.onerror = (e) => reject(e);
      img.src = src;
    });
  };

  useEffect(() => {
    // Generate unique certificate ID
    const id = `SEO-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    setCertificateId(id);
    
    // Format current date
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    setCurrentDate(date);
  }, []);

  const downloadPDF = async () => {
    const [{ jsPDF }, QRCode] = await Promise.all([
      import('jspdf'),
      import('qrcode')
    ]);
    
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });

    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();

    // Brand logo (from public/logo.svg) — centered above the title
    try {
      const { dataUrl: logoDataUrl, width: logoPxW, height: logoPxH } = await loadImageAsPngDataUrl('/logo.svg');
      const targetWmm = 36; // desired logo width in mm
      const aspect = logoPxH && logoPxW ? logoPxH / logoPxW : 1;
      const targetHmm = targetWmm * aspect;
      const logoX = (width - targetWmm) / 2;
      const logoY = 14; // top padding
      doc.addImage(logoDataUrl, 'PNG', logoX, logoY, targetWmm, targetHmm);
    } catch (_) {
      // non-blocking if logo fails to load
    }

    // Background watermark
    doc.setGState(new (doc as any).GState({ opacity: 0.06 }));
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(80);
    doc.setTextColor(255, 122, 0);
    doc.text('SEO MASTER HUB', width / 2, height / 2, { align: 'center', angle: 345 });
    doc.setGState(new (doc as any).GState({ opacity: 1 }));

    // Elegant double border
    doc.setDrawColor(255, 122, 0); // Orange
    doc.setLineWidth(1.8);
    doc.roundedRect(10, 10, width - 20, height - 20, 4, 4);

    doc.setDrawColor(200, 200, 200); // Light gray inner border
    doc.setLineWidth(0.8);
    doc.roundedRect(16, 16, width - 32, height - 32, 3, 3);

    // Header title
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 122, 0);
    doc.setFontSize(42);
  doc.text('CERTIFICATE', width / 2, 40, { align: 'center' });

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(120, 120, 120);
    doc.setFontSize(18);
    doc.text('OF COMPLETION', width / 2, 50, { align: 'center' });

    // Decorative star
    doc.setDrawColor(255, 122, 0);
    doc.setFillColor(255, 240, 230);
    doc.circle(width / 2, 70, 13, 'FD');
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 122, 0);
    doc.setFontSize(26);
    doc.text('★', width / 2, 76, { align: 'center' });

    // Recipient
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(80, 80, 80);
    doc.setFontSize(14);
    doc.text('This is to certify that', width / 2, 98, { align: 'center' });

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(28);
    doc.text(name, width / 2, 114, { align: 'center' });

    // Underline
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.6);
    doc.line(width / 2 - 70, 118, width / 2 + 70, 118);

    // Achievement
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(80, 80, 80);
    doc.setFontSize(12);
    doc.text('has successfully completed the', width / 2, 132, { align: 'center' });

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(16);
    doc.text('SEO MASTER CERTIFICATION QUIZ', width / 2, 142, { align: 'center' });

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(80, 80, 80);
    doc.setFontSize(12);
    doc.text(`with a score of ${percentage}% (${score}/${total} questions correct)`, width / 2, 152, { align: 'center' });

    // QR Code for verification
    const verifyUrl = `${siteUrl}/verify?name=${encodeURIComponent(name)}&score=${score}&total=${total}&id=${encodeURIComponent(certificateId)}&date=${encodeURIComponent(currentDate)}`;
    const qrDataUrl = await (QRCode as any).toDataURL(verifyUrl, { margin: 1, width: 120, color: { dark: '#000000', light: '#0000' } });
    doc.addImage(qrDataUrl, 'PNG', width - 60, 22, 40, 40);
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.text('Scan to verify', width - 40, 66, { align: 'center' });

    // Details row
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(10);
    doc.text(`Date: ${currentDate}`, 28, height - 32);
    doc.text(`Certificate ID: ${certificateId}`, 28, height - 26);

    // Signature
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.6);
    doc.line(width - 95, height - 36, width - 35, height - 36);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.text('Hamza Nabulsi', width - 65, height - 30, { align: 'center' });
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(8);
    doc.text('SEO Master Hub — Lead Instructor', width - 65, height - 25, { align: 'center' });

    // Footer
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(140, 140, 140);
    doc.setFontSize(8);
    doc.text('This certificate validates comprehensive knowledge of SEO principles, technical implementation, and best practices.', width / 2, height - 14, { align: 'center' });

    doc.save(`SEO-Certificate-${name.replace(/\s+/g, '-')}.pdf`);
  };

  const shareOnLinkedIn = () => {
    const text = encodeURIComponent(
      `I'm excited to share that I've earned my SEO Certification from SEO Master Hub! 🎉 Score: ${percentage}% Certificate ID: ${certificateId}`
    );
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&summary=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-system-green rounded-full mb-4">
            <Award className="w-12 h-12 text-obsidian" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Congratulations!
          </h1>
          <p className="text-xl text-gray-600">
            You've earned your SEO Certification
          </p>
        </div>

        {/* Certificate Preview */}
        <div className="bg-white border-4 border-system-green rounded-2xl p-12 shadow-2xl mb-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-orange-100 rounded-full -translate-x-16 -translate-y-16 opacity-50" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-100 rounded-full translate-x-20 translate-y-20 opacity-50" />
          
          <div className="relative">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-5xl font-bold text-system-green mb-2">CERTIFICATE</h2>
              <p className="text-xl text-gray-600">of Completion</p>
            </div>

            {/* Award Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-5xl">★</span>
              </div>
            </div>

            {/* Recipient */}
            <div className="text-center mb-8">
              <p className="text-lg text-gray-600 mb-2">This is to certify that</p>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{name}</h3>
              <div className="w-48 h-px bg-gray-300 mx-auto mb-6" />
              <p className="text-gray-600 mb-2">has successfully completed the</p>
              <p className="text-2xl font-bold text-gray-900 mb-2">SEO MASTER CERTIFICATION QUIZ</p>
              <p className="text-lg text-gray-600">
                with a score of <span className="font-bold text-system-green">{percentage}%</span> ({score}/{total} questions correct)
              </p>
            </div>

            {/* Details */}
            <div className="flex justify-between items-end pt-8 border-t border-gray-200">
              <div className="text-left">
                <p className="text-sm text-gray-600">Date</p>
                <p className="font-medium text-gray-900">{currentDate}</p>
                <p className="text-sm text-gray-500 mt-2">Certificate ID</p>
                <p className="font-mono text-xs text-gray-700">{certificateId}</p>
              </div>
              <div className="text-right">
                <div className="border-t-2 border-gray-800 pt-2 w-48">
                  <p className="font-semibold text-gray-900">Hamza Nabulsi</p>
                  <p className="text-sm text-gray-600">SEO Master Hub</p>
                  <p className="text-xs text-gray-500">Lead Instructor</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">What's Next?</h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <button
              onClick={downloadPDF}
              className="flex items-center justify-center gap-3 bg-system-green text-obsidian px-6 py-4 rounded-lg font-semibold hover:opacity-90 transition"
            >
              <Download className="w-5 h-5" />
              Download PDF Certificate
            </button>
            
            <button
              onClick={shareOnLinkedIn}
              className="flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              <Share2 className="w-5 h-5" />
              Share on LinkedIn
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Add to Your Resume</p>
                <p className="text-sm text-gray-600">Include this certification in your professional profile</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Continue Learning</p>
                <p className="text-sm text-gray-600">Explore our knowledge base for advanced SEO techniques</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Stay Updated</p>
                <p className="text-sm text-gray-600">SEO evolves constantly - keep practicing and learning</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 justify-center">
          <Link
            href="/quiz"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition"
          >
            Retake Quiz
          </Link>
          <Link
            href="/knowledge-base"
            className="bg-system-green text-obsidian px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Continue Learning
          </Link>
        </div>

        {/* Verification Info */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-sm text-blue-900 mb-2">
            <span className="font-semibold">Certificate Verification:</span> This certificate is authentic and can be verified using the Certificate ID above.
          </p>
          <p className="text-xs text-blue-700">
            This certification validates comprehensive knowledge of SEO principles, technical implementation, and industry best practices.
          </p>
        </div>

        <StructuredData data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'SEO Certification — Download & Share',
          description: 'Download your SEO certification and share it with your network. Includes unique certificate ID and QR verification.',
          url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/certification`
        }} />
        <StructuredData data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') },
            { '@type': 'ListItem', position: 2, name: 'Certification', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/certification` },
          ],
        }} />
      </div>
    </div>
  );
}

export default function CertificationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-system-green border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-gray-600">Loading your certificate...</p>
        </div>
      </div>
    }>
      <CertificationContent />
    </Suspense>
  );
}
