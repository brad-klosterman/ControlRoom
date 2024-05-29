export const downloadLink = (download_link: string | null | undefined) => {
  if (download_link) {
    window.open(download_link, '_blank');
    // const anchor = document.createElement('a');
    // anchor.href = download_link;
    // anchor.setAttribute('target', '_blank');
    // document.body.appendChild(anchor);
    // anchor.click();
    // if (anchor.parentNode) anchor.parentNode.removeChild(anchor);

    return true;
  }

  return false;
};

export const downloadReport = (download_link: string | null | undefined) => {
  if (download_link) {
    const anchor = document.createElement('a');
    anchor.href = download_link;
    // anchor.setAttribute('target', '_blank');
    document.body.appendChild(anchor);
    anchor.click();
    if (anchor.parentNode) anchor.parentNode.removeChild(anchor);

    return true;
  }

  return false;
};
