export function acceptableFile(file: Partial<File>, accept: string | string[]) {
  const fileName = file.name || '';
  const mimeType = file.type || '';
  const baseMimeType = mimeType.replace(/\/.*$/, '');

  const acceptFiles = Array.isArray(accept) ? accept : [accept];
  return acceptFiles.some((type) => {
    const validType = type.trim();

    if (validType.charAt(0) === '.') {
      return fileName.toLowerCase().endsWith(validType.toLowerCase());
    }

    if (validType.endsWith('/*')) {
      return baseMimeType === validType.replace(/\/.*$/, '');
    }

    return mimeType === validType;
  });
}
