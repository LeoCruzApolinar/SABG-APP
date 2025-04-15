import React, { useState } from 'react';
import { Button, Steps, theme } from 'antd';
import styles from './index.module.css';
import { CreateSteps } from './index.jsx';


const LogSteps = ({stepslog}) => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const steps =  CreateSteps(stepslog);


  const items = steps.map(item => ({ key: item.title, title: item.title }));

  const contentStyle = {

    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  

  return (
    <div className={styles.logStepsContainer}>
    <h3>Pasos:</h3>
    <Steps style={{flex: "wrap"}} className={styles.noOverflow} current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};
export default LogSteps;