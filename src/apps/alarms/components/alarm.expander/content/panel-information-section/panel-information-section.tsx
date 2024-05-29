import { PanelInformation } from './types';
import {
  VideofiedInformationSection,
  isTypeVideofied,
} from './videofied-information-section';

interface PanelInformationSectionProps {
  panel_information: PanelInformation;
}

const PanelInformationSection = ({
  panel_information,
}: PanelInformationSectionProps) => {
  if (isTypeVideofied(panel_information)) {
    return (
      <VideofiedInformationSection panel_information={panel_information} />
    );
  }

  return null;
};

export { PanelInformationSection };
