'use client'

import { User } from 'lucide-react'

export default function AuthorBadge() {
  return (
    <div className="flex items-center gap-3 bg-dark-grey border border-system-green rounded-lg px-4 py-3 w-fit animate-[glow_1.5s_ease-in-out_infinite_alternate]">
      <User className="w-5 h-5 text-system-green" />
      <div>
        <div className="text-sm text-medium-grey">Author</div>
        <div className="text-light-grey font-semibold">Hamza Nabulsi</div>
      </div>
    </div>
  )
}
