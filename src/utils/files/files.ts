namespace Files {
  export const downloadFromUrl = (args: { file_name: string; url: string }) => {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.download = args.file_name;
    link.href = args.url;
    link.click();
  };
}

export { Files };
