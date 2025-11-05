"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 text-balance">
              Kontaktieren Sie mich jetzt
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-lg border border-border shadow-lg">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-card-foreground">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Ihr Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-card-foreground">
                E-Mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="ihre.email@beispiel.de"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-card-foreground">
                Nachricht
              </Label>
              <Textarea
                id="message"
                placeholder="Beschreiben Sie Ihr Anliegen..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="bg-background resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Nachricht senden
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
