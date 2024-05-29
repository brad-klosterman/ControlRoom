import { Button } from 'src/components';
import { PanelInformation } from './types';

interface VideofiedPanelInformation extends PanelInformation {
  type: 'videofied';
}

interface VideofiedInformationSectionProps {
  panel_information: VideofiedPanelInformation;
}

function isTypeVideofied(
  obj: PanelInformation,
): obj is VideofiedPanelInformation {
  return obj.type === 'videofied';
}

const VideofiedInformationSection = ({
  panel_information,
}: VideofiedInformationSectionProps) => {
  if (!panel_information.panel_id) {
    return null;
  }

  const openVideofied = () => {
    window.location.href = `seonvideofied://${panel_information.panel_id}`;
  };

  return (
    <Button
      variant="secondary"
      style={{ width: '100%' }}
      onClick={openVideofied}
    >
      VIDEO FEED
    </Button>
  );
};

export { VideofiedInformationSection, isTypeVideofied };
