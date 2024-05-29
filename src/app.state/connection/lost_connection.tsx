import { memo } from 'react';
import { SimpleConfirmationModal, DEFAULT_MODAL_Z_INDEX } from 'components/ui';

const LostConnectionModal = (props: { visible: boolean }) => {
  const refreshPage = () => {
    location.reload();
  };

  if (!props.visible) return null;

  return (
    <SimpleConfirmationModal
      title="LOST CONNECTION"
      subtitle=" Attempting to Reconnect"
      confirm_button={{
        title: 'REFRESH',
      }}
      is_open={props.visible}
      onConfirm={refreshPage}
      z_index={DEFAULT_MODAL_Z_INDEX + 10}
    />
  );
};

export default memo(LostConnectionModal);
