import {
  createContext,
  MouseEvent,
  ReactNode,
  useState,
  useReducer,
  useEffect,
} from 'react'
import {
  addNewCycleAction,
  handleInterrupCycletAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/actions'
import { Cycle, cyclesReducer } from '../reducers/cycles/reducer'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CycleContextData {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  secondsAmountPast: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (param: number) => void
  handleCreateNewCycle: (data: CreateCycleData) => void
  handleInterruptCycle: (e: MouseEvent<HTMLButtonElement>) => void
}

export const CyclesContext = createContext({} as CycleContextData)

interface CyclesContextProviderProps {
  children: ReactNode
}

export const CycleContextProvider = ({
  children,
}: CyclesContextProviderProps) => {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const storageStateAsJSON = localStorage.getItem(
        '@ignite-timer:cycles-state-1.0.0',
      )

      if (storageStateAsJSON) {
        return JSON.parse(storageStateAsJSON)
      }

      return initialState
    },
  )

  const { activeCycleId, cycles } = cyclesState
  const [secondsAmountPast, setSecondsAmountPast] = useState(0)

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
  }, [cyclesState])

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const markCurrentCycleAsFinished = () => {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  const setSecondsPassed = (seconds: number) => {
    setSecondsAmountPast(seconds)
  }

  const handleCreateNewCycle = (data: CreateCycleData) => {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))

    setSecondsAmountPast(0)
  }

  const handleInterruptCycle = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    dispatch(handleInterrupCycletAction())
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        secondsAmountPast,
        setSecondsPassed,
        handleCreateNewCycle,
        handleInterruptCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
