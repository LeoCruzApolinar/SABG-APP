import React from 'react'
import LogSteps from './LogSteps'
import CodeViewer from "./CodeViewer";

const BodyViewLog = ({request, response, steps}) => {
    return (
    <div style={{ padding: "2%", display: "flex", gap: "2%", flexDirection: "column" }}>
    <CodeViewer
      title="Petición:"
      code={request}
      language="json"
      autoDetect={true}
    />

    <LogSteps stepslog = {steps}/>

    <CodeViewer
      title="Respuesta:"
      code={response}
      language="json"
      autoDetect={true}
    />
  </div>
  )
}

export default BodyViewLog
