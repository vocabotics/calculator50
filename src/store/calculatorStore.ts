import { create } from 'zustand'

interface CalculatorState {
  display: string
  setDisplay: (value: string) => void
  clearDisplay: () => void
  calculate: () => void
}

export const useCalculatorStore = create<CalculatorState>((set) => ({
  display: '',
  setDisplay: (value) => set({ display: value }),
  clearDisplay: () => set({ display: '' }),
  calculate: () => {
    set((state) => {
      try {
        const result = eval(state.display)
        return { display: String(result) }
      } catch (error) {
        return { display: 'Error' }
      }
    })
  }
}))