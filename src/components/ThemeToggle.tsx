import { Sun, Moon, Waves, TreePine, Sunset } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const themes = [
  { name: "light", label: "Light", icon: Sun },
  { name: "dark", label: "Dark", icon: Moon },
  { name: "ocean", label: "Ocean", icon: Waves },
  { name: "forest", label: "Forest", icon: TreePine },
  { name: "sunset", label: "Sunset", icon: Sunset },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = themes.find((t) => t.name === theme) || themes[0];
  const CurrentIcon = currentTheme.icon;

  const themeHandler = (themeName) => {
    const html = document.documentElement;

    // Remove the old theme class to avoid conflicts
    html.classList.remove(theme);
    setTheme(themeName);

    // Add the old theme class
    html.classList.add(themeName);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="glass"
          size="icon"
          className="fixed top-3 right-3 z-50"
        >
          <CurrentIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
          <span className="sr-only">Change theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        {themes.map((themeOption) => {
          const Icon = themeOption.icon;
          return (
            <DropdownMenuItem
              key={themeOption.name}
              onClick={() => themeHandler(themeOption.name)}
              className="cursor-pointer flex items-center gap-2"
            >
              <Icon className="h-4 w-4" />
              {themeOption.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
