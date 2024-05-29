/* eslint-disable sort-destructure-keys/sort-destructure-keys */
import { Flex } from 'components';

import {
  Container,
  Dot,
  StepElementContainer,
  StepInfo,
  Track,
} from './styles';
import { StepperProps, StepperStatus } from './types';
import Text from '../../Text';

const Stepper = ({
  active_step,
  steps,
  show_step_overview = false,
  show_each_step_title = true,
  title,
}: StepperProps) => {
  const current_step_item = steps[active_step - 1];

  const stepper_status: StepperStatus = current_step_item.error
    ? 'error'
    : active_step === steps.length
    ? 'completed'
    : 'uncompleted';

  return (
    <Container>
      {title && (
        <Flex fitWidth justifyContent="center">
          <Text size="displayLarge">{title}</Text>
        </Flex>
      )}
      {show_step_overview && (
        <Flex fitWidth justifyContent="center">
          <Text size="displayRegular">{current_step_item.title}</Text>
        </Flex>
      )}
      <Flex fitWidth justifyContent="center">
        {steps.map((step, index) => {
          const step_index = index + 1;
          return (
            <StepElementContainer key={step_index}>
              <Flex alignItems="center">
                <Track
                  complete={active_step >= step_index}
                  error={stepper_status === 'error'}
                  visible={step_index !== 1}
                />
                <Dot
                  complete={active_step >= step_index}
                  error={Boolean(stepper_status === 'error' || step.error)}
                />
                <Track
                  complete={active_step - 1 >= step_index}
                  error={stepper_status === 'error'}
                  visible={step_index !== steps.length}
                />
              </Flex>
              {show_each_step_title && (
                <StepInfo>
                  <Text size="displaySmall" style={{ opacity: '0.7' }}>
                    {step.title}
                  </Text>
                  {step.subtitle && <Text>{step.subtitle}</Text>}
                  <Text>{step.timestamp}</Text>
                </StepInfo>
              )}
            </StepElementContainer>
          );
        })}
      </Flex>
    </Container>
  );
};

export default Stepper;
