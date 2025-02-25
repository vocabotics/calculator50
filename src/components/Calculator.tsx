import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useCalculatorStore } from '@/store/calculatorStore'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

export function Calculator() {
  const { display, setDisplay, clearDisplay, calculate, isLoading, error } = useCalculatorStore()

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ]

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      calculate()
    } else {
      setDisplay(display + value)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-[300px]">
        <CardContent className="p-4">
          {isLoading ? (
            <div className="flex justify-center items-center h-[40px] mb-4">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          ) : error ? (
            <div className="text-destructive mb-4 text-sm">{error}</div>
          ) : (
            <Input
              value={display}
              readOnly
              className="text-right mb-4 text-lg"
            />
          )}
          <div className="grid grid-cols-4 gap-2">
            <Button
              variant="destructive"
              className="col-span-4"
              onClick={() => clearDisplay()}
              disabled={isLoading}
            >
              Clear
            </Button>
            {buttons.map((btn) => (
              <Button
                key={btn}
                variant="secondary"
                onClick={() => handleButtonClick(btn)}
                disabled={isLoading}
              >
                {btn}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}