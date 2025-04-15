import BodyViewLog from "./BodyViewLog.jsx";
import HeaderLog from "./HeaderLog.jsx";
import pako from "pako";
import StepReportView from "./StepReportView.jsx";

function decompressPayload(encodedCompressedPayload) {
  // Base64 decode
  const binaryString = atob(encodedCompressedPayload);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  // zlib decompress
  const decompressed = pako.inflate(bytes, { to: "string" });

  return decompressed;
}

export function CreateReports(iam_request_log) {

  let ListReports = [];
  let report = {
    key: null,
    label: null,
    children: null,
  };

  iam_request_log.forEach((element) => {


    report.key = element.id;

    let RequestData = decompressPayload(element.RequestData);
    let ResponseData = decompressPayload(element.Response);
    let StepsData = decompressPayload(element.Steps);


    report.label = (
      <HeaderLog
        usuario={element.User}
        terminal={element.ResourceID}
        ip={element.ClienteRequestIP}
        endpoint={element.EndPoint}
        fechaInicio={element.RequestTimeStart}
        fechaFin={element.RequestTimeEnd}
        duracion={element.Duration}
        estado={true}
        resposecode={200}
      />
    );

    report.children = (
      <BodyViewLog
        request={RequestData}
        steps={StepsData}
        response={ResponseData}
      />
    );

    ListReports.push(report);
  });

    return ListReports;
}

export function CreateSteps(stepslog) {
    let data = JSON.parse(stepslog);
    let steps = [];
  
    data.forEach((element) => {

      const step = { content: <StepReportView step={element} /> };

      steps.push(step);
    });
  
  
    return steps;
  }
  