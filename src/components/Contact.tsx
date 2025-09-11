import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  contactLeftSectionHeading,
  contactLeftSectionSubheading,
  contactSubheading,
  emailId,
  emailLabel,
  getInTouchLabel,
  location,
  locationLabel,
  messageLabel,
  nameLabel,
  phoneLabel,
  phoneNumber,
  sendingText,
  sendMessageText,
  subjectLabel,
} from "@/constants/navigation.const";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {getInTouchLabel}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {contactSubheading}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {contactLeftSectionHeading}
              </h3>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                {contactLeftSectionSubheading}
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-skill-gradient rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {emailLabel}
                    </h4>
                    <p className="text-muted-foreground">{emailId}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-skill-gradient rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {phoneLabel}
                    </h4>
                    <p className="text-muted-foreground">{phoneNumber}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-skill-gradient rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {locationLabel}
                    </h4>
                    <p className="text-muted-foreground">{location}</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-card-gradient shadow-card border-border/50">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{nameLabel}</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        className="border-border/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{emailLabel}</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="border-border/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">{subjectLabel}</Label>
                    <Input
                      id="subject"
                      placeholder="Project inquiry, collaboration, etc."
                      required
                      className="border-border/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{messageLabel}</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or idea..."
                      required
                      rows={6}
                      className="border-border/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    variant="hero"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      sendingText
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        {sendMessageText}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
