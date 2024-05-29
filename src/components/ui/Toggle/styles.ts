/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

type toggleSize = 'small' | 'large' | 'regular';

interface LabelProps {
  error?: boolean;
  size?: toggleSize;
  emphasise_state: 'active' | 'inactive' | null;
}

export const Label = styled.label<LabelProps>(({ emphasise_state, theme }) => ({
  '& .active': {
    backgroundColor: theme.colors.base[400],
    border: `2px solid  ${
      !emphasise_state
        ? theme.colors.base[100]
        : emphasise_state === 'inactive'
        ? theme.colors.error[500]
        : theme.colors.primary[500]
    }`,
    color: theme.colors.text.primary,
    marginLeft: '-1px',
  },
  alignItems: 'center',
  background: `${theme.colors.base[800]}`,
  border: `1px solid ${theme.colors.base[400]}`,
  borderRadius: '3px',
  display: 'flex',
  height: '3rem',
  padding: 0,
  position: 'relative',
  span: {
    alignItems: 'center',
    background: 'transparent',
    borderRadius: '3px',
    color: '#c3c5c6',
    cursor: 'pointer',
    display: 'flex',
    fontSize: theme.typography.fontSize.regular,
    fontWeight: theme.typography.fontWeight.regular,
    height: '3rem',
    justifyContent: 'center',
    lineHeight: '1',
    textAlign: 'center',
    // transition: 'all 100ms ease-out',
    userSelect: 'none',
    width: '100%',
  },
  whiteSpace: 'nowrap',
  width: '100%',
}));
