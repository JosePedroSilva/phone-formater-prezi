import { useReducer } from "react"

function App() {
  const [state, dispatch] = useReducer((prev, next) => {
    const nextEvent = { ...prev, ...next }

    const numbers = nextEvent.phone.replace(/\D/g, '')

    const match = numbers.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/)

    if (match) {
      nextEvent.phone = match[1] ? `(${match[1]}` : ''
      nextEvent.phone += match[2] ? `) ${match[2]}` : ''
      nextEvent.phone += match[3] ? `-${match[3]}` : ''
    }

    return nextEvent;
  }, { phone: '' })

  const handleChange = (e) => {
    dispatch({ phone: e.target.value })
  }

  return (
    <>
      <input type="text" value={state.phone} onChange={handleChange} maxLength='14' />
    </>
  )
}

export default App
