import { CORE_AREA_FRAGMENT } from 'codegen/graphql';
import { IOptionNumber } from 'components/ui/Form/Options';

type AreasContext = {
  loading: boolean;
  areas: readonly CORE_AREA_FRAGMENT[];
  areas_select: IOptionNumber[];
  refetch: () => void;
};

type AreaFormParams = {
  id: number;
  name: string;
};

export type { AreasContext, AreaFormParams };
