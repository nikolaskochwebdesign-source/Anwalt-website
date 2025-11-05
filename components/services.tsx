import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, FileText, Home, Scale } from "lucide-react"

const services = [
  {
    icon: Briefcase,
    title: "Arbeitsrecht",
    description: "Kündigung, Abfindung, Arbeitsvertrag",
  },
  {
    icon: FileText,
    title: "Vertragsrecht",
    description: "Erstellung, Prüfung und Verhandlung von Verträgen",
  },
  {
    icon: Home,
    title: "Mietrecht",
    description: "Unterstützung für Vermieter und Mieter",
  },
  {
    icon: Scale,
    title: "Zivilrecht",
    description: "Forderungsmanagement & rechtliche Beratung",
  },
]

export function Services() {
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 text-balance">
              Schwerpunkte meiner Kanzlei
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card"
              >
                <CardContent className="p-5 space-y-3">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-sm">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
