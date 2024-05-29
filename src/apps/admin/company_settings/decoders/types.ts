import { CORE_DECODER_FRAGMENT } from 'codegen/graphql';
import type { IOptionNumber, IOptionString } from 'components/ui/Form/Options';

type DecodersContext = {
  loading: boolean;
  decoders: readonly CORE_DECODER_FRAGMENT[];
  decoders_select: IOptionNumber[];
  decoders_name_select: IOptionString[];
  refetch: () => void;
};

type DecodersFormParams = {
  id: number;
  name: string;
};

export type { DecodersContext, DecodersFormParams };
