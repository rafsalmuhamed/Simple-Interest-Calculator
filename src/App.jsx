
import './App.css'
import { TextField, Stack, Button } from '@mui/material'
import { useState } from 'react'

function App() {
  // reset all state
  const handleReset = () => {
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setPrincipleAmountValid(true)
    setRateAmountValid(true)
    setYearAmountValid(true)


  }

  const handleValidation = (tag) => {
    const { value, name } = tag
    console.log(value, name);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if (!!value.match(/^\d*\.?\d+$/)) {
      // valid
      if (name == 'principle') {
        setPrinciple(value)
        setPrincipleAmountValid(true)
      } else if (name == 'rate') {
        setRate(value)
        setRateAmountValid(true)
      } else {
        setYear(value)
        setYearAmountValid(true)
      }
    } else {
      // invalid
      if (name == 'principle') {
        setPrinciple(value)
        setPrincipleAmountValid(false)
      } else if (name == 'rate') {
        setRate(value)
        setRateAmountValid(false)
      } else {
        setYear(value)
        setYearAmountValid(false)
      }
    }

  }


  // create state to store data
  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [year, setYear] = useState(0)
  const [rate, setRate] = useState(0)

  const [principleAmountValid,setPrincipleAmountValid] = useState(true)
  const [rateAmountValid,setRateAmountValid] = useState(true)
  const [yearAmountValid,setYearAmountValid] = useState(true)

  // calculation

  const handleCalculate=()=>{
    if(principle && rate && year){
      setInterest(principle*rate*year/100)

    }else{
      alert('Please Fill the Form!')
    }

  }

  return (
    <div style={{ width: '100%', height: '100vh', }} className='d-flex justify-content-center align-items-center bg-dark'>
      <div className='bg-light p-5 rounded'>
        <h2 style={{ fontSize: '2rem' }}>Simple Interest App</h2>
        <p style={{ textAlign: 'center' }}>Calculate Simple Interest</p>
        <div style={{ background: '#BE3455', color: '#fefefe' }} className="d-flex justify-content-center align-items-center p-3 rounded shadow flex-column ">
          <h1>₹ {interest}</h1>
          <p>Total Simple Interest</p>
        </div>

        <form className='mt-3'>
          <div className="mb-3">
            <TextField id="standard-basic-principle" label="₹ Principle Amount " variant="standard" value={principle || ''} name='principle' onChange={e => handleValidation(e.target)} />
          </div>
          {/* alert for invalid */}

           {!principleAmountValid &&<div className="text-danger">*invalid user input</div>}
  

          <div className="mb-3">
            <TextField id="standard-basic-rate" label="Rate of Interest (p.a) % " variant="standard" value={rate || ''} name='rate' onChange={e => handleValidation(e.target)} />
          </div>
          {/* alert for invalid */}

          {!rateAmountValid &&<div className="text-danger">*invalid user input</div>}


          <div className="mb-3">
            <TextField id="standard-basic-time" label="Time Period (Yr) " variant="standard" value={year || ''} name='year' onChange={e => handleValidation(e.target)} />
          </div>

          {/* alert for invalid */}
          {!yearAmountValid &&<div className="text-danger">*invalid user input</div>}

{/* button using react meterial ui */}
          <Stack direction="row" spacing={2}>
            <Button onClick={handleCalculate} disabled={!principleAmountValid || !rateAmountValid || !yearAmountValid}  style={{ background: 'black', color: '#fefefe' }} variant="contained">Calculate</Button>
            <Button onClick={handleReset} style={{ background: 'none', color: '#000000' }} variant="contained">Reset</Button>


          </Stack>
        </form>
      </div>

    </div>
  )
}

export default App
