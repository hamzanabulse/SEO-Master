import React from 'react'

type Props = {
  name: string
  title?: string
  imageUrl: string
  profileUrl: string
}

export default function LinkedInCard({ name, title, imageUrl, profileUrl }: Props) {
  return (
    <div className="bg-dark-grey border border-system-green rounded-xl p-6 flex items-center gap-4">
      <img
        src={imageUrl}
        alt={`${name} profile photo`}
        className="w-20 h-20 rounded-full object-cover border-2 border-system-green"
      />
      <div className="flex-1">
        <div className="text-lg font-semibold">{name}</div>
        {title ? <div className="text-sm text-medium-grey">{title}</div> : null}
        <a className="btn-secondary inline-block mt-3" href={profileUrl} target="_blank" rel="noopener noreferrer">
          View on LinkedIn
        </a>
      </div>
    </div>
  )
}
