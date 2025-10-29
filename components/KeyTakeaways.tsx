import { CheckCircle } from 'lucide-react'

interface KeyTakeawaysProps {
  items: string[]
}

export default function KeyTakeaways({ items }: KeyTakeawaysProps) {
  return (
    <section className="key-takeaways">
      <h3 className="text-xl font-semibold mb-4 text-system-green flex items-center gap-2">
        <CheckCircle className="w-6 h-6" />
        Key Takeaways
      </h3>
      
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="bg-system-green rounded-full w-5 h-5 flex items-center justify-center mt-0.5 flex-shrink-0">
              <CheckCircle className="w-3 h-3 text-obsidian" />
            </div>
            <span className="text-light-grey leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-6 p-4 bg-system-green bg-opacity-10 border border-system-green rounded-lg">
        <p className="text-sm text-center">
          <strong className="text-system-green">Remember:</strong> Implementing these fundamentals 
          consistently will build the foundation for long-term SEO success.
        </p>
      </div>
    </section>
  )
}