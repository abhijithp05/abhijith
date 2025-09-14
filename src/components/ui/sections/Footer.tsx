import { Button } from "@/components/ui/atoms/button";
import {
  emailId,
  footerLabel,
  getInTouchLabel,
  letsConnectLabel,
  location,
  navItems,
  phoneNumber,
  quickLinksLabel,
} from "@/constants/navigation.const";
import { Github, Linkedin, Mail } from "lucide-react";
import { SocialShare } from "../molecules/social-share";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {letsConnectLabel}
              </h3>
              <SocialShare />
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {quickLinksLabel}
              </h3>
              <div className="space-y-2">
                {navItems?.map((item) => (
                  <button
                    onClick={() =>
                      document
                        .getElementById(item.id)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="block text-muted-foreground hover:text-foreground transition-smooth"
                    aria-label={item.label}
                    title={item.label}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {getInTouchLabel}
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>{emailId}</p>
                <p>{phoneNumber}</p>
                <p>{location}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 text-center">
            <p className="text-sm text-muted-foreground mt-2">{footerLabel}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
