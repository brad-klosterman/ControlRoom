import {
  Fragment,
  memo,
  MutableRefObject,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { cssModule, isEmptyNull } from 'auxiliary';
import {
  Maybe,
  PROPERTY_INSTRUCTION,
  PROPERTY_INSTRUCTIONS,
} from 'codegen/graphql';
import { Icon, Text } from 'components/ui';
import { ExpandMore } from 'components/ui/Expander/src/ExpandMore/ExpandMore';

import {
  ArrowWrap,
  FlexContent,
  Instructions,
  InstructionsWrap,
} from './styles';
import { useTheme } from 'styled-components';

const collapsed_height = 96;

const PropertyInstructions = ({
  instructions_expanded,
  property_instructions,
  toggleInstructionsExpanded,
}: {
  property_instructions: PROPERTY_INSTRUCTIONS;
  instructions_expanded: boolean;
  alarm_expanded: boolean;
  toggleInstructionsExpanded: () => void;
}) => {
  const theme = useTheme();
  const expander_ref = useRef<HTMLDivElement>();

  const [expandable, setExpandable] = useState(false);

  useLayoutEffect(() => {
    if (expander_ref.current) {
      setExpandable(expander_ref.current.scrollHeight > collapsed_height);
    }
  }, [expander_ref?.current?.clientHeight]);

  if (isEmptyNull(property_instructions)) {
    return (
      <InstructionsWrap>
        <Instructions>
          <Text
            colorKey="secondary"
            size="displaySmall"
            style={{ lineHeight: '2rem', textAlign: 'center' }}
          >
            THERE ARE NO AVAILABLE INSTRUCTIONS FOR THIS ALARM
          </Text>
        </Instructions>
      </InstructionsWrap>
    );
  }

  return (
    <InstructionsWrap>
      <Instructions>
        <ExpandMore
          collapsed_height={`${collapsed_height}px`}
          open={instructions_expanded}
          ref={expander_ref as MutableRefObject<HTMLDivElement>}
        >
          <FlexContent>
            {Object.entries(property_instructions).map(
              (
                [key, value]: [key: string, value: Maybe<PROPERTY_INSTRUCTION>],
                index,
              ) => (
                <Fragment key={key}>
                  <Text
                    colorKey="secondary"
                    size="displaySmall"
                    style={{
                      fontSize: theme.typography.fontSize.labelRegular,
                    }}
                  >
                    {key}
                  </Text>
                  <Text
                    size="displaySmall"
                    style={{
                      lineHeight: '1.5rem',
                      marginBottom: length - 1 === index ? 0 : '1.5rem',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {value?.note || ''}
                  </Text>
                </Fragment>
              ),
            )}
          </FlexContent>
        </ExpandMore>
        {expandable && (
          <ArrowWrap onClick={toggleInstructionsExpanded}>
            <Icon.ArrowDown
              className={cssModule(
                'expander-arrow',
                instructions_expanded ? 'up' : 'down',
              )}
            />
          </ArrowWrap>
        )}
      </Instructions>
    </InstructionsWrap>
  );
};

export default memo(PropertyInstructions);
