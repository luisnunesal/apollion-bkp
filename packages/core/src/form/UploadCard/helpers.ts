import { nanoid } from 'nanoid';

import { FileItem, UploadParameters } from './interface';

export function fileSize(size: number) {
  const i = Math.floor(Math.log(size) / Math.log(1000));
  return `${(size / 1000 ** i).toFixed(2)} ${['B', 'kB', 'MB', 'GB', 'TB'][i]}`;
}

export function filterFiles(fileInput: File | File[], maxSize: number): File[] {
  const maxFileSize = maxSize || 15 * 1024 * 1024; // 15 Mb
  const fileList = Array.isArray(fileInput) ? fileInput : [fileInput];
  return fileList.filter((f) => f.size <= maxFileSize);
}

export function convertFileToFileItem(fileList: File[]): Partial<FileItem[]> {
  return fileList.map((file) => ({
    id: nanoid(),
    file,
    fileName: file.name,
    fileSize: fileSize(file.size),
  }));
}

export function uploadFile(parameters: UploadParameters) {
  const { fieldName, file, requestConfig } = parameters;
  const {
    endpoint,
    timeout,
    auth,
    params,
    withCredentials,
    responseType,
    headers: requestHeaders,
    formDataParams,
  } = requestConfig;

  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();

    request.timeout = timeout;

    const formData = new FormData();
    formData.append(fieldName, file, file.name);

    if (formDataParams) {
      formDataParams.forEach((param) => {
        formData.append(param.key, param.value);
      });
    }

    const route = new URL(endpoint);

    if (params) {
      Object.keys(params).forEach((key) => {
        route.searchParams.append(key, params[key]);
      });
    }

    request.open('post', route.href);

    if ('setRequestHeader' in request) {
      const headers = { ...requestHeaders } as any;

      if (auth) {
        const userName = auth.username || '';
        const password = unescape(encodeURIComponent(auth.password)) || '';
        headers.Authorization = `Basic ${btoa(`${userName}:${password}`)}`;
      }

      Object.keys(headers).forEach((key) => {
        const value = headers[key];

        if (value !== undefined) {
          request.setRequestHeader(key, value);
        }
      });
    }

    if (withCredentials !== undefined) {
      request.withCredentials = !!withCredentials;
    }

    request.responseType = responseType || 'json';

    let progress = 0;

    request.upload.addEventListener('progress', (e) => {
      if (parameters.onProgress) {
        progress = e.loaded;
        parameters.onProgress(e.loaded);
      }
    });

    request.onreadystatechange = () => {
      if (!request || request.readyState !== 4) {
        return;
      }

      if (request.status === 0 && request?.responseURL?.indexOf('file:') !== 0) {
        return;
      }

      const response = {
        response: request.response,
        status: request.status,
        statusText: request.statusText,
      };

      if (parameters.onProgress) {
        parameters.onProgress(progress, true, response);
      }

      resolve(response);

      request = null;
    };

    request.onerror = () => {
      if (parameters.onProgress) {
        parameters.onProgress(progress, false);
      }

      reject();

      request = null;
    };

    request.send(formData);
  });
}
