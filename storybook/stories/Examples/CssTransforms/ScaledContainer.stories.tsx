import React from 'react';
import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart } from '../../../../src';
import { pageData } from '../../data';
// import './style.css';

export default {
  component: AreaChart,
};

export const ScaledContainer = {
  render: (_args: Record<string, any>) => {
    return (
      <div style={{ height: '80%', width: '80%' }}>
        <div style={{ height: '33%', width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={pageData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div style={{ height: '33%', width: '100%', transform: 'scale(0.5)' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={pageData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div style={{ height: '33%', width: '100%', transform: 'scale(1.5)' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={pageData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  },
  args: {},
};
