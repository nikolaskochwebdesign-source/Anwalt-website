import { CheckCircle2 } from "lucide-react"

const reasons = [
  "Persönliche Betreuung statt Massenabfertigung",
  "Schnelle Terminvergabe & digitale Beratung",
  "Klare Sprache statt Paragrafen-Dschungel",
]

export function WhyChooseUs() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8 text-balance">
            Warum Sie mich wählen sollten
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <p className="text-lg font-semibold text-foreground leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
