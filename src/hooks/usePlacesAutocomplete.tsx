import { Key, useEffect, useState } from 'react';

// Async google places autocomplete function
export const googleAutocomplete = async (text: string) =>
  new Promise((resolve, reject) => {
    if (!text) {
      return reject('Need valid text input');
    }

    // for use in things like GatsbyJS where the html is generated first
    if (typeof window === 'undefined') {
      return reject('Need valid window object');
    }

    try {
      new window.google.maps.places.AutocompleteService().getPlacePredictions(
        {
          componentRestrictions: { country: ['za', 'zw', 'zm', 'ke', 'na'] },
          input: text,
        },
        resolve,
      );
    } catch (e) {
      reject(e);
    }
  });

export interface PredictionResults {
  description: string;
  place_id: Key;
  structured_formatting: { main_text: any };
}

export function usePlacesAutocomplete(
  text: string | null = '',
  debounceTimeout = 400,
) {
  const [predictions, setPredictions] = useState([]);

  const clearPredictions = () => {
    setPredictions([]);
  };

  useEffect(() => {
    const handleDebounce = setTimeout(async () => {
      try {
        if (!text) {
          return;
        }

        const nextPredictions = await googleAutocomplete(text);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setPredictions(nextPredictions);
      } catch (e) {
        console.error(e);
      }
    }, debounceTimeout);

    return () => {
      clearTimeout(handleDebounce);
    };
  }, [text, debounceTimeout]);

  return { clearPredictions, predictions };
}
