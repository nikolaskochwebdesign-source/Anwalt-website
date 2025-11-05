export function About() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-balance">
                Kompetenz und Erfahrung – seit über 10 Jahren.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Als Fachanwalt für Arbeits- und Vertragsrecht vertrete ich Mandanten mit klarer Strategie und
                persönlichem Engagement. Ich lege großen Wert auf transparente Kommunikation und praxisnahe Lösungen –
                damit Sie Ihr Recht effektiv durchsetzen können.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-muted shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/professional-lawyer-portrait-in-suit.jpg"
                  alt="Dr. Max Berger"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
