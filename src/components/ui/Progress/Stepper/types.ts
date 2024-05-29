export type StepperProps = {
  title?: string;
  active_step: number;
  steps: Step[];
  show_step_overview?: boolean;
  show_each_step_title?: boolean;
};

export interface Step {
  title: string;
  subtitle?: string;
  timestamp?: string | number;
  error?: boolean;
}

export type StepperStatus = 'completed' | 'uncompleted' | 'error';
