import React from "react";
import Styles from "./index.module.css";
import { DatePicker, Space, Input, Collapse } from "antd";
import { CreateReports } from "./index.jsx";
const { RangePicker } = DatePicker;
const LogsReportAzul = () => {

  let iam_request_log = [
    {
      id: "142",
      User: "000888",
      ResourceID: "232546903301184737771381_move2500",
      ClienteRequestIP: "10.255.68.197",
      RequestTimeStart: "2025-04-13 00:17:25",
      RequestTimeEnd: "2025-04-13 00:17:25",
      EndPoint: "get_dakota_transactions",
      Duration: "0.890848",
      RequestData: "eJzTz0ksLtEtKUrMK05MLsnMz9M3MjYFYjN9UyNLAJm6CRk=",
      Response:
        "eJx1kU+PwiAQxb9Kw3Gz3VBa1PZm1IOHXY11zwbpaEgsEJgejPG7L+CfGJPlxrzfm3kDF7IBb432QJrsQsQRtDznWvTxTlYHJZUW2dopLZUVJ/KZkQ48hiIqo3MhpRk0RvYjnnpS8cQYOfSgMddDvwcX9YKVFR9F0Vhwyb6TpktzeB3UZLTCoQb3TLD8mf+2281y2mbrVRsJBxKUxd2zc8npqAyCH/bohPZCpmh4tqkDLWkdfQiuD7FPMVLycVbH8otF9PdlJnX5xfmb2glMDRllPKdVXrCsGDdV0ZRj8oY+0s8XIfRyewv+CtzXjMx0vlovvv8BctUFhtXFm+zgAC58VZryePQXYOdR4OCjOjO9PQFCR66BaVN9dnt3Run1Dyl5oFo=",
      Steps:
        "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",
    },
  ];

  let reports = CreateReports(iam_request_log);

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className={Styles.logsReportContainer}>
       <label>Buscar por nombre de usuario</label>
      <Input placeholder="Buscar por nombre de usuario" />

      <label>Rango de fecha</label>
      <Space direction="vertical" size={12} style={{ marginBottom: "20px" }}>
        <RangePicker showTime />
      </Space>
      
      <Collapse key={1} onChange={onChange} items={reports} />
      
    </div>
  );
};

export default LogsReportAzul;
