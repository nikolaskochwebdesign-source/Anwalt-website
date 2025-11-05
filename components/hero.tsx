import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/professional-law-office-interior-with-books-and-sc.jpg"
          alt="Law office background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance">
            Ihr Recht in besten Händen.
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 text-balance">
            Rechtsanwalt Dr. Max Berger – Fachanwalt für Arbeits- und Vertragsrecht in Hamburg.
          </p>

          <div className="pt-4">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-background to-background/95 text-primary hover:from-background/95 hover:to-background/90 text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <a href="#contact">Kostenlose Erstberatung anfragen</a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm" id="contact">
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              <span>+49 40 1234 5678</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="h-5 w-5" />
              <span>kontakt@berger-recht.de</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Jungfernstieg 12, 20354 Hamburg</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
