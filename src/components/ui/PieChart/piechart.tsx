import { ResponsivePie } from '@nivo/pie';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

interface IPieDataItem {
  color: string;
  id: string;
  label: string;
  value: number;
}

interface PieChartDataProps {
  data: IPieDataItem[];
}

const theme = {
  labels: {
    text: {
      fontSize: '20px',
    },
  },
};

const PieChart = ({ data /* see data tab */ }: PieChartDataProps) => (
  <ResponsivePie
    activeOuterRadiusOffset={8}
    arcLabelsTextColor="#000"
    borderColor={{
      from: 'color',
      modifiers: [['darker', 0.2]],
    }}
    borderWidth={1}
    colors={['#2353EB', '#6685E8', '#97AAE5', '#E1E1E1']}
    cornerRadius={3}
    data={data}
    defs={[
      {
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        id: 'dots',
        padding: 1,
        size: 4,
        stagger: true,
        type: 'patternDots',
      },
      {
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        id: 'lines',
        lineWidth: 6,
        rotation: -45,
        spacing: 10,
        type: 'patternLines',
      },
    ]}
    enableArcLinkLabels={false}
    innerRadius={0.4}
    margin={{ bottom: 40, left: 40, right: 40, top: 40 }}
    padAngle={0.7}
    theme={theme}
    tooltip={() => <></>}
  />
);

export default PieChart;
