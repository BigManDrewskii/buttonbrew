"use client"

import { useState, useEffect, useCallback } from 'react'
import { Button } from "./components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { SunIcon, MoonIcon, AlertCircle, XIcon, CopyIcon, CheckIcon } from 'lucide-react'
import { useTheme } from "next-themes"
import { Alert, AlertDescription, AlertTitle } from "@/app/components/ui/alert"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/app/components/ui/tooltip"
import Image from 'next/image'
import ButtonBrewLogo from './components/ui/ButtonBrewLogo'
import dynamic from 'next/dynamic'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

const SyntaxHighlighter = dynamic(
  () => import('react-syntax-highlighter').then((mod) => mod.Prism),
  { ssr: false }
)

interface CustomFont {
  name: string;
  url: string;
}

// Define a simpler set of fonts
const fonts = [
  'Arial, sans-serif',
  'Helvetica, sans-serif',
  'Georgia, serif',
  'Times New Roman, serif',
  'Courier New, monospace',
  'Verdana, sans-serif',
  'Trebuchet MS, sans-serif',
  'Arial Black, sans-serif',
  'Impact, sans-serif'
];

export default function Home() {
  const [generatedCSS, setGeneratedCSS] = useState('')
  const [generatedButtonStyle, setGeneratedButtonStyle] = useState<React.CSSProperties>({})
  const { theme, setTheme } = useTheme()
  const [customFont, setCustomFont] = useState<CustomFont | null>(null)
  const [fontError, setFontError] = useState<string | null>(null)
  const [buttonText, setButtonText] = useState("Button")
  const [isCopied, setIsCopied] = useState(false);

  const generateButtonStyle = useCallback(() => {
    // Accessibility-friendly color combinations
    const colors = [
      { bg: '#0056b3', text: '#ffffff' }, // Dark blue & white
      { bg: '#28a745', text: '#ffffff' }, // Green & white
      { bg: '#6c757d', text: '#ffffff' }, // Gray & white
      { bg: '#ffc107', text: '#000000' }, // Yellow & black
      { bg: '#17a2b8', text: '#ffffff' }, // Teal & white
      { bg: '#dc3545', text: '#ffffff' }, // Red & white
      { bg: '#f8f9fa', text: '#000000' }, // Light gray & black
      { bg: '#343a40', text: '#ffffff' }, // Dark gray & white
    ];

    const selectedColor = colors[Math.floor(Math.random() * colors.length)];
    const bgColor = selectedColor.bg;
    const textColor = selectedColor.text;
    const selectedFont = customFont ? 'CustomFont' : fonts[Math.floor(Math.random() * fonts.length)];
    
    // Adjust padding for larger (lg) buttons
    const paddingV = `${Math.floor(Math.random() * 4) + 12}px`;
    const paddingH = `${Math.floor(Math.random() * 8) + 24}px`;
    const borderRadius = `${Math.floor(Math.random() * 12) + 6}px`;
    
    // Increase font size for larger buttons
    const fontSize = `${Math.floor(Math.random() * 4) + 18}px`;
    const fontWeight = Math.random() > 0.5 ? 400 : 700;

    // Gradient and stroke options
    const useGradient = Math.random() > 0.7;
    const useStroke = Math.random() > 0.7;

    let gradient = '';
    if (useGradient) {
      const gradientColor = adjustColor(bgColor, Math.random() > 0.5 ? 30 : -30);
      gradient = `linear-gradient(45deg, ${bgColor}, ${gradientColor})`;
    }

    let stroke = '';
    if (useStroke) {
      const strokeColor = adjustColor(textColor, -30);
      stroke = `1px solid ${strokeColor}`;
    }

    const style: React.CSSProperties = {
      backgroundColor: useGradient ? 'transparent' : bgColor,
      backgroundImage: gradient,
      color: textColor,
      padding: `${paddingV} ${paddingH}`,
      borderRadius,
      fontSize,
      fontFamily: selectedFont,
      fontWeight,
      border: stroke || 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      boxShadow: `0 2px 4px rgba(0,0,0,0.1)`,
      textTransform: 'none',
      letterSpacing: 'normal',
      position: 'relative',
      zIndex: 10,
      outline: 'none',
    };

    setGeneratedButtonStyle(style);

    const css = `
${customFont ? `@font-face {
  font-family: 'CustomFont';
  src: url('${customFont.url}') format('opentype');
  font-display: swap;
}` : ''}

.button {
  background-color: ${useGradient ? 'transparent' : style.backgroundColor};
  background-image: ${gradient || 'none'};
  color: ${style.color};
  padding: ${style.padding};
  border-radius: ${style.borderRadius};
  font-size: ${style.fontSize};
  font-family: ${style.fontFamily};
  font-weight: ${style.fontWeight};
  border: ${stroke || 'none'};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: ${style.boxShadow};
  position: relative;
  z-index: 10;
  outline: none;
}

.button:hover {
  opacity: 0.9;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0,0,0,0.15);
}

.button:active {
  transform: translateY(1px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.button:focus {
  outline: none;
  box-shadow: 0 0 0 3px ${adjustColor(bgColor, -20)};
}

/* High contrast outline for Windows High Contrast Mode */
@media screen and (-ms-high-contrast: active) {
  .button:focus {
    outline: 2px solid currentColor;
  }
}
`;

    setGeneratedCSS(css);
  }, [customFont]);

  useEffect(() => {
    generateButtonStyle();
  }, [generateButtonStyle]);

  // Helper function to adjust color brightness
  function adjustColor(color: string, amount: number): string {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
  }

  const copyCSS = () => {
    navigator.clipboard.writeText(generatedCSS);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }

  const downloadCSS = () => {
    const element = document.createElement("a")
    const file = new Blob([generatedCSS], {type: 'text/css'})
    element.href = URL.createObjectURL(file)
    element.download = "generated-button.css"
    document.body.appendChild(element)
    element.click()
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const removeCustomFont = () => {
    setCustomFont(null)
    setFontError(null)
    generateButtonStyle() // Regenerate button style without custom font
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-pink-100 dark:from-blue-900 dark:to-purple-900 animate-gradient-x"></div>
      
      {/* Main content */}
      <div className="relative min-h-screen bg-background/80 backdrop-blur-sm text-foreground flex flex-col items-center justify-center p-4 transition-colors duration-200">
        <main className="w-full max-w-3xl space-y-8" role="main">
          <Card className="bg-card text-card-foreground shadow-sm">
            <CardHeader>
              <div className="flex justify-between items-center">
                <ButtonBrewLogo className="h-8" />
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                      >
                        {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Toggle theme</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <CardDescription>
                Create unique, professional buttons inspired by famous design standards.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col space-y-2 font-size-md">
                <Label htmlFor="buttonText">Button Text</Label>
                <Input
                  id="buttonText"
                  value={buttonText}
                  onChange={(e) => setButtonText(e.target.value)}
                  placeholder="Enter button text"
                />
              </div>
              
              {/* New Card for the generated button */}
              <Card className="bg-background p-12 flex justify-center items-center overflow-hidden">
                <div className="relative bg-transparent">
                  <button
                    style={generatedButtonStyle}
                    className="transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {buttonText}
                  </button>
                </div>
              </Card>

              <div className="flex justify-center items-center space-x-12 align-middle">
                <Button 
                  onClick={generateButtonStyle}
                  size="lg"
                >
                  Randomise
                </Button>
              </div>
              {customFont && (
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Custom Font</AlertTitle>
                  <AlertDescription className="flex items-center justify-between">
                    {fontError 
                      ? fontError 
                      : `"${customFont.name}" loaded successfully.`
                    }
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={removeCustomFont}
                      aria-label="Remove custom font"
                    >
                      <XIcon className="w-4 h-4" />
                    </Button>
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* CSS Code Card */}
          <Card className="bg-card text-card-foreground shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">CSS Code</CardTitle>
            </CardHeader>
            <CardContent>
              <div 
                className="rounded overflow-hidden"
                tabIndex={0}
                aria-label="Generated CSS code"
              >
                {SyntaxHighlighter && (
                  <SyntaxHighlighter 
                    language="css" 
                    style={tomorrow}
                    customStyle={{
                      margin: 0,
                      padding: '1rem',
                      fontSize: '0.875rem',
                      lineHeight: '1.5',
                      maxHeight: '200px',
                      overflowY: 'auto'
                    }}
                  >
                    {generatedCSS}
                  </SyntaxHighlighter>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-4">
              <Button 
                variant="outline" 
                onClick={copyCSS}
                aria-label="Copy CSS code to clipboard"
              >
                {isCopied ? "Copied!" : "Copy CSS"}
              </Button>
              <Button 
                variant="outline" 
                onClick={downloadCSS}
                aria-label="Download CSS code as file"
              >
                Download CSS
              </Button>
            </CardFooter>
          </Card>

          {/* Footer */}
          <Card className="bg-card text-card-foreground shadow-sm">
            <CardContent className="py-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-muted border-2 border-muted overflow-hidden flex-shrink-0">
                    <Image 
                      src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3I5aGp2ZzY1OGE1cTYxOHg0d2hncHBsbHRkeTR1dHhtdHpsMXNuMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohzdZO0nAL1H2LdMA/giphy.webp"
                      alt="Color Wheel Animation" 
                      width={48} 
                      height={48} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-foreground text-base">Created by Drewskii</span>
                </div>
                <a href="https://x.com/drewskii_xyz" target="_blank" rel="noopener noreferrer" className="mt-3 sm:mt-0">
                  <Button>
                    Follow @drewskii_xyz
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}