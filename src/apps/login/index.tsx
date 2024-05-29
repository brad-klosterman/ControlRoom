import { memo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, Form, FormValidation, Grid, Logo, Text } from 'components';
import { useAuthContext } from 'src/app.state/auth/provider';
import { useEventListener } from 'utils';

import { Container, LogoContainer, FormContainer, TextLink } from './styles';
import { LoginForm } from './types';

const LoginRoute = () => {
  const { actions } = useAuthContext();

  const [loading, setLoading] = useState(false);

  const form = useForm<LoginForm>({
    defaultValues: { email: '', password: '' },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const { isRequired } = FormValidation;

  const onSubmit: SubmitHandler<LoginForm> = async ({ email, password }) => {
    setLoading(true);
    await actions.login({ email, password });
    setLoading(false);
  };

  useEventListener('keyup', (event: Event | KeyboardEvent) => {
    if ('key' in event && event.key === 'Enter') {
      form.handleSubmit(onSubmit)();
    }
  });

  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <FormContainer>
        <Form onSubmit={form.handleSubmit(onSubmit)} style={{ width: '34rem' }}>
          <Grid spacing="large">
            <Grid.Cell x={[0, 12]} y={[1, 2]}>
              <Text style={{ width: '20rem' }}>LOGIN</Text>
            </Grid.Cell>
            <Grid.Cell x={[0, 12]} y={[2, 3]}>
              <Form.Input
                control={form.control}
                name="email"
                placeholder="Email"
                rules={isRequired}
              />
            </Grid.Cell>
            <Grid.Cell x={[0, 12]} y={[3, 4]}>
              <Form.Input
                control={form.control}
                name="password"
                placeholder="Password"
                rules={isRequired}
                type="password"
                auto_complete={true}
              />
            </Grid.Cell>
            <Grid.Cell x={[0, 12]} y={[5, 6]}>
              <Button
                fullWidth
                isLoading={loading}
                onClick={form.handleSubmit(onSubmit)}
              >
                LOGIN
              </Button>
            </Grid.Cell>
            <Grid.Cell justifyContent="flex-end" x={[8, 12]} y={[8, 9]}>
              <TextLink to="/offline">Offline mode &gt;</TextLink>
            </Grid.Cell>
          </Grid>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default memo(LoginRoute);
