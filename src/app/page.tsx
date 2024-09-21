"use client"

import { useState, useEffect, useCallback } from 'react'
import { Button } from "./components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { SunIcon, MoonIcon, AlertCircle, XIcon } from 'lucide-react'
import { useTheme } from "next-themes"
import { Alert, AlertDescription, AlertTitle } from "@/app/components/ui/alert"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/app/components/ui/tooltip"
import Image from 'next/image'
import ButtonBrewLogo from './components/ui/ButtonBrewLogo'

interface CustomFont {
  name: string;
  url: string;
}

export default function Home() {
  const [generatedCSS, setGeneratedCSS] = useState('')
  const [generatedButtonStyle, setGeneratedButtonStyle] = useState<React.CSSProperties>({})
  const { theme, setTheme } = useTheme()
  const [customFont, setCustomFont] = useState<CustomFont | null>(null)
  const [fontError, setFontError] = useState<string | null>(null)
  const [buttonText, setButtonText] = useState("Button")

  const generateButtonStyle = useCallback(() => {
    const colors = [
      { light: { bg: '#007AFF', text: '#FFFFFF' }, dark: { bg: '#0A84FF', text: '#FFFFFF' } },
      { light: { bg: '#34C759', text: '#FFFFFF' }, dark: { bg: '#30D158', text: '#FFFFFF' } },
      { light: { bg: '#FF9500', text: '#000000' }, dark: { bg: '#FF9F0A', text: '#000000' } },
      { light: { bg: '#FF3B30', text: '#FFFFFF' }, dark: { bg: '#FF453A', text: '#FFFFFF' } },
      { light: { bg: '#5856D6', text: '#FFFFFF' }, dark: { bg: '#5E5CE6', text: '#FFFFFF' } },
      { light: { bg: '#FFFFFF', text: '#000000' }, dark: { bg: '#1C1C1E', text: '#FFFFFF' } },
      { light: { bg: '#FF2D55', text: '#FFFFFF' }, dark: { bg: '#FF375F', text: '#FFFFFF' } },
      { light: { bg: '#5AC8FA', text: '#000000' }, dark: { bg: '#64D2FF', text: '#000000' } },
      { light: { bg: '#FFCC00', text: '#000000' }, dark: { bg: '#FFD60A', text: '#000000' } },
      { light: { bg: '#4CD964', text: '#000000' }, dark: { bg: '#32D74B', text: '#000000' } },
    ]

    const fonts = [
      'var(--font-geist-sans)',
      'var(--font-geist-mono)',
      'var(--font-inter)',
      'var(--font-roboto-mono)',
      'var(--font-playfair)',
      'var(--font-oswald)',
      'var(--font-lato)',
    ]

    const selectedColor = colors[Math.floor(Math.random() * colors.length)]
    const selectedFont = customFont ? 'CustomFont, ' + fonts[0] : fonts[Math.floor(Math.random() * fonts.length)]
    const paddingV = `${Math.floor(Math.random() * 12) + 8}px`
    const paddingH = `${Math.floor(Math.random() * 24) + 16}px`
    const borderRadius = `${Math.floor(Math.random() * 25) + 4}px`
    const fontSize = `${Math.floor(Math.random() * 8) + 14}px`
    const fontWeight = Math.floor(Math.random() * 5) * 100 + 300 // 300, 400, 500, 600, or 700

    const backgroundStyles = [
      { type: 'solid', style: (color: string) => color },
      { type: 'gradient', style: (color: string) => {
        const angle = Math.floor(Math.random() * 360);
        return `linear-gradient(${angle}deg, ${color}, ${adjustColor(color, 40)})`;
      }},
    ]

    const borderStyles = [
      { type: 'none', style: () => 'none' },
      { type: 'solid', style: (color: string) => `2px solid ${color}` },
      { type: 'dashed', style: (color: string) => `2px dashed ${color}` },
      { type: 'double', style: (color: string) => `4px double ${color}` },
      { type: 'inset', style: (color: string) => `4px inset ${color}` },
      { type: 'outset', style: (color: string) => `4px outset ${color}` },
      { type: 'gradient', style: (color: string) => {
        const angle = Math.floor(Math.random() * 360);
        return `linear-gradient(${angle}deg, ${color}, ${adjustColor(color, 40)})`;
      }},
    ]

    const selectedBackground = backgroundStyles[Math.floor(Math.random() * backgroundStyles.length)]
    const selectedBorder = borderStyles[Math.floor(Math.random() * borderStyles.length)]
    const bgColor = theme === 'dark' ? selectedColor.dark.bg : selectedColor.light.bg
    const textColor = theme === 'dark' ? selectedColor.dark.text : selectedColor.light.text

    const style: React.CSSProperties = {
      background: selectedBackground.style(bgColor),
      color: textColor,
      padding: `${paddingV} ${paddingH}`,
      borderRadius,
      fontSize,
      fontFamily: selectedFont,
      fontWeight,
      border: selectedBorder.style(adjustColor(bgColor, -30)),
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      boxShadow: `0 ${Math.floor(Math.random() * 4) + 2}px ${Math.floor(Math.random() * 8) + 4}px rgba(0,0,0,${Math.random() * 0.2 + 0.1})`,
      textTransform: Math.random() > 0.5 ? 'uppercase' : 'none',
      letterSpacing: Math.random() > 0.5 ? `${Math.random() * 2}px` : 'normal',
      position: 'relative',
      zIndex: 10,
      backgroundColor: bgColor, // Ensure an opaque background
    }

    // For gradient border
    if (selectedBorder.type === 'gradient') {
      style.backgroundImage = `linear-gradient(${bgColor}, ${bgColor}), linear-gradient(${Math.floor(Math.random() * 360)}deg, ${adjustColor(bgColor, -30)}, ${adjustColor(bgColor, 30)})`;
      style.backgroundOrigin = 'border-box';
      style.backgroundClip = 'content-box, border-box';
    }

    setGeneratedButtonStyle(style)

    const css = `
${customFont ? `@font-face {
  font-family: 'CustomFont';
  src: url('${customFont.url}') format('opentype');
  font-display: swap;
}` : ''}

.button {
  background: ${style.background};
  color: ${style.color};
  padding: ${style.padding};
  border-radius: ${style.borderRadius};
  font-size: ${style.fontSize};
  font-family: ${style.fontFamily};
  font-weight: ${style.fontWeight};
  border: ${style.border};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: ${style.boxShadow};
  text-transform: ${style.textTransform};
  letter-spacing: ${style.letterSpacing};
  position: relative;
  z-index: 10;
  background-color: ${style.backgroundColor};
  ${selectedBorder.type === 'gradient' ? `
  background-image: ${style.backgroundImage};
  background-origin: border-box;
  background-clip: content-box, border-box;
  ` : ''}
}

.button:hover {
  opacity: 0.9;
  transform: translateY(-2px);
  box-shadow: ${style.boxShadow ? `0 ${parseInt(style.boxShadow.split('px')[1] || '0') + 2}px ${parseInt(style.boxShadow.split('px')[2] || '0') + 2}px rgba(0,0,0,${parseFloat(style.boxShadow.split('rgba(0,0,0,')[1] || '0') + 0.05})` : 'none'};
}

.button:active {
  transform: translateY(1px);
  box-shadow: ${style.boxShadow ? `0 ${Math.max(parseInt(style.boxShadow.split('px')[1] || '0') - 1, 1)}px ${Math.max(parseInt(style.boxShadow.split('px')[2] || '0') - 2, 2)}px rgba(0,0,0,${Math.max(parseFloat(style.boxShadow.split('rgba(0,0,0,')[1] || '0') - 0.05, 0.05)})` : 'none'};
}

.button:focus {
  outline: none;
  box-shadow: 0 0 0 3px ${adjustColor(bgColor, theme === 'dark' ? 60 : -60)};
}
`
    setGeneratedCSS(css)
  }, [theme, customFont])

  useEffect(() => {
    generateButtonStyle()
  }, [generateButtonStyle])

  // Helper function to adjust color brightness
  function adjustColor(color: string, amount: number): string {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
  }

  const copyCSS = () => {
    navigator.clipboard.writeText(generatedCSS)
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
                className="bg-muted rounded p-4 font-mono text-sm overflow-auto h-48"
                tabIndex={0}
                aria-label="Generated CSS code"
              >
                <pre className="text-muted-foreground">
                  {generatedCSS}
                </pre>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-4">
              <Button 
                variant="outline" 
                onClick={copyCSS}
                aria-label="Copy CSS code to clipboard"
              >
                Copy CSS
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