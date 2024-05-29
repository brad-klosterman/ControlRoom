import { useState } from 'react';

import PropertyInstructions from 'apps/alarms/components/alarm.information/property.instructions';
import { CORE_ALARM_FRAGMENT, PROPERTY_INSTRUCTIONS } from 'codegen/graphql';

import AlarmData from './alarm.data';

export const AlarmInformation = ({
  alarm,
  alarm_expanded,
  instructions_expanded,
  toggleInstructionsExpanded,
  visible
}: {
  alarm: CORE_ALARM_FRAGMENT;
  visible: boolean;
  alarm_expanded: boolean;
  instructions_expanded: boolean;
  toggleInstructionsExpanded: () => unknown;
}) => {
  const [instructions] = useState<PROPERTY_INSTRUCTIONS>(
    Object.entries(alarm?.property.instructions ?? {}).reduce(
      (acc, [key, value]) => {
        if (value && value.id) {
          acc[key] = value;
        }

        return acc;
      },
      {}
    )
  );

  if (!visible) return null;

  return (
    <>
      <AlarmData alarm={alarm} />
      <PropertyInstructions
        alarm_expanded={alarm_expanded}
        instructions_expanded={instructions_expanded}
        property_instructions={instructions}
        toggleInstructionsExpanded={toggleInstructionsExpanded}
      />
    </>
  );
};
