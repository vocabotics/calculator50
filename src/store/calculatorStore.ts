import { create } from 'zustand'

interface CalculatorState {
  display: string
  isLoading: boolean
  error: string | null
  setDisplay: (value: string) => void
  clearDisplay: () => void
  calculate: () => void
}

export const useCalculatorStore = create<CalculatorState>((set) => ({
  display: '',
  isLoading: false,
  error: null,
  setDisplay: (value) => set({ display: value, error: null }),
  clearDisplay: () => set({ display: '', error: null }),
  calculate: async () => {
    set({ isLoading: true, error: null })
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      set((state) => {
        try {
          const result = eval(state.display)
          return { display: String(result), isLoading: false, error: null }
        } catch (error) {
          return { display: '', isLoading: false, error: 'Invalid calculation' }
        }
      })
    } catch (error) {
      set({ isLoading: false, error: 'Calculation failed' })
    }
  }
}))