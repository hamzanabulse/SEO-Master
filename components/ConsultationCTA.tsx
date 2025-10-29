import { ArrowRight, MessageCircle, Linkedin } from 'lucide-react'

export default function ConsultationCTA() {
  return (
    <section className="mt-16 mb-8">
      <div className="bg-gradient-to-r from-obsidian via-dark-grey to-obsidian border-2 border-system-green rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Initiate Strategic Consultation
        </h2>
        
        <p className="text-lg text-medium-grey mb-6 max-w-2xl mx-auto leading-relaxed">
          You have the Blueprint. Now, secure the Architect. 
          <strong className="text-system-green"> Direct consultation with Hamza Nabulsii</strong> is 
          available for clients demanding Tier 1 global SEO execution.
        </p>

        {/* Contact Methods */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          {/* LinkedIn Profile */}
          <a
            href="https://www.linkedin.com/in/hamzanabulsii/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-dark-grey border border-alert-cyan text-alert-cyan px-4 py-3 rounded-lg hover:bg-alert-cyan hover:text-obsidian transition-all duration-300 tap-target"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn Profile</span>
          </a>

          {/* WhatsApp Consultation Button */}
          <a
            href="https://wa.me/96176578651"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            <MessageCircle className="w-6 h-6" />
            EXECUTE STRATEGIC CONSULTATION
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Professional Statement */}
        <div className="border-t border-system-green pt-6">
          <p className="text-system-green font-semibold text-lg">
            Engage the expert now. Your next move is critical.
          </p>
          <p className="text-sm text-medium-grey mt-2">
            Strategic SEO consultation available for serious businesses ready for search dominance.
          </p>
        </div>
      </div>
    </section>
  )
}