import { ResponsiveBar } from '@nivo/bar';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

interface BarChartProps {
  colors: any;
  data: any;
}

const theme = {
  axis: {
    fontSize: '30px',
    tickColor: '#eee',
    ticks: {
      text: {
        fill: '#ffffff',
      },
    },
  },
  grid: {
    line: {
      stroke: '#555555',
    },
  },
  labels: {
    text: {
      fontSize: '13px',
    },
  },
};

const BarChart = ({ colors, data }: BarChartProps) => (
  <ResponsiveBar
    axisBottom={null}
    axisLeft={{
      legend: '',
      legendOffset: 0,
      tickPadding: 5,

      tickRotation: 0,
      tickSize: 5,
    }}
    axisRight={null}
    axisTop={null}
    borderColor={{
      from: 'color',
      modifiers: [['darker', 1.6]],
    }}
    borderRadius={4}
    colors={colors}
    data={data}
    indexBy="type"
    indexScale={{ round: true, type: 'band' }}
    keys={['burger']}
    label={data.type}
    labelSkipHeight={12}
    labelSkipWidth={12}
    labelTextColor="#FFFFFF"
    layout="horizontal"
    margin={{ bottom: 10, left: 100, right: 50, top: 10 }}
    padding={0.3}
    role="application"
    theme={theme}
    tooltip={({ data: d }) => (
      <div
        style={{
          background: 'white',
          border: '1px solid #ccc',
          color: '#000',
          padding: '5px 12px',
        }}
      >
        <b>{d.burger}</b> alarms created with type <b>{d.type}</b>
      </div>
    )}
    valueScale={{ type: 'linear' }}
  />
);

export default BarChart;
