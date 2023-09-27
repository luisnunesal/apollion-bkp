import { DragEvents } from '../../hooks/useDrag/interface';

export interface UploadFileRequestConfig {
  endpoint: string;
  timeout?: number;
  responseType?: XMLHttpRequestResponseType;
  withCredentials?: boolean;
  headers?: { [key: string]: any };
  params?: { [key: string]: any };

  formDataFileKey?: string;
  formDataParams?: {
    key: string;
    value: string | Blob;
    fileName?: string;
  }[];

  auth?: {
    username: string;
    password: string;
  };
}

export interface UploadParameters {
  file: File;
  fieldName: string;
  requestConfig: UploadFileRequestConfig;
  onProgress?: (progress: number, success?: boolean, response?: any) => void;
  onFail?: () => void;
}

export type FileItem = {
  file: File;
  fileName: string;
  fileSize: string;
  id: string;

  uploadLoaded?: string;
  uploadPercentage?: string;
  uploadCompleted?: boolean;
  uploadError?: boolean;
  uploadResponse?: any;
};

export type FileItemProps = {
  removeFile(id: string): void;
  disabled?: boolean;
  readOnly?: boolean;
} & FileItem;

export type UploadCardRef = {
  submit(config?: UploadFileRequestConfig): Promise<any>;
  removeFile(id: string): void;
  removeAll(): void;
  addFiles(file: File | File[]): void;
  files: FileItem[];
};

type CustomButtonProps = {
  isDragging?: boolean;
  openFileDialog: () => void;
  files: FileItem[];
  isSubmitting?: boolean;
};

export type FileActionType = 'ADD_INITIAL_FILES' | 'ADD' | 'REMOVE' | 'REPLACE' | 'UPDATE' | 'RESET';

export type UploadCardOnChangeValue = {
  files: FileItem[];
  type: FileActionType;
  payload?: FileItem | FileItem[];
};

export type UploadCardProps = {
  name?: string;
  compact?: boolean;
  accept: string[];
  maxSize?: number;
  disabled?: boolean;
  readOnly?: boolean;
  singleFile?: boolean;
  acceptLabel?: string;
  buttonText?: string;
  initialFiles?: File | File[];

  uploadConfig?: UploadFileRequestConfig;

  onChange?: (value: UploadCardOnChangeValue) => void;
  onUnsupportedFile?: (f: File) => void;

  customButton?: (p: CustomButtonProps) => React.ReactNode;

  className?: string;
  style?: React.CSSProperties;
};

export type VariantProps = {
  removeFile: (id: string) => void;
  openFileDialogButton: React.ReactNode;
  events?: DragEvents;
} & UploadCardProps &
  CustomButtonProps;

export type VariantPropsStyle = {
  active?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
};

export interface useFileStateOptions {
  single?: UploadCardProps['singleFile'];
  maxSize?: UploadCardProps['maxSize'];
  onChange?: UploadCardProps['onChange'];
}
