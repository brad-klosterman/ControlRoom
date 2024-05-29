import { AuthSessionStorage } from 'src/app.state/auth/auth.session.storage';

export const fetchReport = async ({
  callback,
  filename,
  link,
}: {
  callback?(): void;
  filename: string;
  link: string;
}) => {
  const session_auth = AuthSessionStorage.getAuthHeaders();

  fetch(link, {
    headers: {
      Accept: 'application/json',
      'access-token': session_auth?.token || '',
      client: session_auth?.client || '',
      expiry: session_auth?.expiry || '',
      uid: session_auth?.uid || '',
    },
    method: 'GET',
    mode: 'cors',
  })
    //  RETURN AS BLOB
    .then(result => {
      if (callback) callback();

      if (result.status != 200) {
        throw new Error('Bad server response');
      }

      return result.blob();
    })

    //  BLOB DATA
    .then(fetchedPDF => {
      // FILE DATA IS "READY FOR USE"
      // "FORCE DOWNLOAD"
      const url = window.URL.createObjectURL(fetchedPDF);
      const anchor = document.createElement('a');

      anchor.href = url;
      anchor.setAttribute('download', `${filename}.pdf`);

      document.body.appendChild(anchor);

      anchor.click();

      // CLEAN UP
      window.URL.revokeObjectURL(url);
      if (anchor.parentNode) anchor.parentNode.removeChild(anchor);
    })

    .catch(error => {
      console.error(error);
    });
};

export const fetchPDF = async ({
  filename,
  link,
}: {
  filename: string;
  link: string;
}) => {
  fetch(link, {
    headers: {
      Accept: 'application/pdf',
    },
    method: 'GET',
    mode: 'no-cors',
  })
    //  RETURN AS BLOB
    .then(result => {
      if (result.status != 200) {
        throw new Error('Bad server response');
      }

      return result.blob();
    })
    .then(fetchedPDF => {
      const url = window.URL.createObjectURL(fetchedPDF);
      const anchor = document.createElement('a');

      anchor.href = url;
      anchor.download = filename;

      document.body.appendChild(anchor);

      anchor.click();

      // CLEAN UP
      window.URL.revokeObjectURL(url);
      if (anchor.parentNode) anchor.parentNode.removeChild(anchor);
    })

    .catch(error => {
      console.error(error);
    });
};

export function download_file({
  filename,
  link,
}: {
  filename: string;
  link: string;
}) {
  const save = document.createElement('a');
  save.href = link;
  save.target = '_blank';
  const docname = link.substring(link.lastIndexOf('/') + 1);
  save.download = filename || docname;

  if (
    navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) &&
    navigator.userAgent.search('Chrome') < 0
  ) {
    document.location = save.href;
    // window event not working here
  } else {
    const evt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: false,
    });
    save.dispatchEvent(evt);
    (window.URL || window.webkitURL).revokeObjectURL(save.href);
  }
}
