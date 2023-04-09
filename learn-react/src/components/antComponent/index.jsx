import React, { Component } from 'react'
import { Button} from 'antd';
import {
  StepBackwardOutlined
} from '@ant-design/icons';

export default class AntComponent extends Component {
  render() {
    return (
      <div>
         <Button type="primary">Primary Button</Button>
         <StepBackwardOutlined />
      </div>
    )
  }
}
