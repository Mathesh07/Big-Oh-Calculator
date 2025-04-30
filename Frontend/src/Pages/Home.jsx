import React from 'react'
import { useState } from 'react'
import CalculateButton from '../Components/CalculateButton'
import CodeEditor from '../Components/CodeEditor'

const Home = () => {
  const [code, setCode] = useState('// Write your code here');

  return (
    <div className="editor-container">
      <CodeEditor code={code} setCode={setCode}/>
      <CalculateButton code={code}/>
    </div>
  )
}

export default Home
