import { ThemeProvider } from './components/theme-provider'
import { Calculator } from './components/Calculator'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <Calculator />
      </div>
    </ThemeProvider>
  )
}