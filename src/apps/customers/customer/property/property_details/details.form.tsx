import { ChangeEvent, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import PropertyStatus from 'apps/customers/customer/property/property_details/property_status';
import { UPDATE_PROPERTY_DETAILS_PARAMS } from 'codegen/graphql';
import { Flex, Form, Grid } from 'components';
import AddressMap from 'components/address-map/address.map';
import ControlledSelect from 'components/ui/Form/Field/Select/controlled';
import { Option } from 'components/ui/Form/Options/Option';
import { isRequired } from 'components/ui/Form/validation';
import {
  PredictionResults,
  usePlacesAutocomplete,
} from 'hooks/usePlacesAutocomplete';
import {
  getGeocode,
  getReverseGeocode,
} from 'utils/geospatial/getReverseGeocode';

import { PROPERTY_TYPE_OPTIONS } from './form.values';

const DetailsForm = ({ readonly }: { readonly: boolean }) => {
  const form = useFormContext<UPDATE_PROPERTY_DETAILS_PARAMS>();
  const { control } = form;

  const watch_address = form.watch('entire_address');
  const watch_coordinates = form.watch('coordinates');

  const lookupAddress = async () => {
    let address_result: string | null;

    address_result = await getReverseGeocode(
      watch_coordinates?.latitude,
      watch_coordinates?.longitude,
    );

    form.setValue('entire_address', address_result);
  };

  const setCoordinates = async (latitude: string, longitude: string) => {
    form.setValue('coordinates', { latitude, longitude });
  };

  const { predictions } = usePlacesAutocomplete(watch_address);

  const [predictions_open, setPredictionsOpen] = useState(false);

  const handlePredictionSelection = async (
    e: any,
    prediction: PredictionResults,
  ) => {
    e.preventDefault();
    const coordinates = await getGeocode(prediction.description);

    form.setValue('coordinates', coordinates);
    form.setValue('entire_address', prediction.description);
    setPredictionsOpen(false);
  };

  const onChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setPredictionsOpen(true);
    }
  };

  return (
    <>
      <Grid.Cell direction="column" x={[0, 12]} y={[0, 1]}>
        <PropertyStatus />
      </Grid.Cell>
      <Grid.Cell x={[0, 12]} y={[1, 2]}>
        <Form.Input
          {...{ control }}
          disabled={readonly}
          label="Property Name"
          name="name"
          rules={isRequired}
        />
      </Grid.Cell>
      <Grid.Cell x={[0, 12]} y={[2, 3]}>
        <ControlledSelect
          {...{ control }}
          disabled={readonly}
          label="Property Type"
          name="type"
          options={PROPERTY_TYPE_OPTIONS}
          rules={isRequired}
        />
      </Grid.Cell>
      <Grid.Cell direction="column" x={[0, 12]} y={[3, 4]}>
        <Form.Input
          {...{ control }}
          disabled={readonly}
          label="Property Address"
          name="entire_address"
          onChangeCB={onChangeAddress}
          rules={isRequired}
        />
        {predictions_open && (
          <Flex direction="column" fitWidth>
            {predictions?.map((prediction: PredictionResults) => (
              <Option
                active={false}
                key={prediction?.place_id}
                onClick={e => handlePredictionSelection(e, prediction)}
                //onKeyDown={e => handlePredictionSelection(e, prediction)}
                selected={false}
              >
                {prediction?.description || 'Not found'}
              </Option>
            ))}
          </Flex>
        )}
      </Grid.Cell>
      <Grid.Cell x={[0, 12]} y={[4, 5]}>
        <AddressMap
          coordinates={watch_coordinates}
          {...{
            onLookupAddress:
              !readonly && watch_coordinates ? lookupAddress : undefined,
          }}
          setCoordinates={setCoordinates}
          onLookupAddress={lookupAddress}
        />
      </Grid.Cell>
      <Grid.Cell x={[0, 6]} y={[5, 6]}>
        <Form.Input
          {...{ control }}
          disabled={readonly}
          label="Latitude"
          name="coordinates.latitude"
        />
      </Grid.Cell>
      <Grid.Cell x={[6, 12]} y={[5, 6]}>
        <Form.Input
          {...{ control }}
          disabled={readonly}
          label="Longitude"
          name="coordinates.longitude"
        />
      </Grid.Cell>
    </>
  );
};

export default DetailsForm;
