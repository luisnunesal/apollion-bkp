import React from 'react';

import { FileItem, FileItemProps, VariantProps } from './interface';
import {
  // Compact Variant
  CompactContainer,
  CompactFileItemContainer,
  FileItemContainer,
  FileItemName,
  FileItemPreviewContainer,
  FileItemProgress,
  Overlay,
  // isDragging Overlay
  OverlayContainer,
  UploadCardContainer,
  UploadCardFiles,
} from './style';
import { useObjectUrl } from './useObjectUrl';

import { CustomScroll, Flex } from '../../containers';
import { Icon, IconButton, Image, Typography } from '../../elements';
import { useMediaQuery } from '../../hooks';

export function UploadCardRegular(props: VariantProps) {
  const {
    disabled,
    acceptLabel,
    isDragging,
    events,
    files,
    removeFile,
    openFileDialogButton,
    readOnly,
    style,
    className,
  } = props;
  const { isMobile } = useMediaQuery();

  const fileList =
    isMobile && files.length === 0 ? null : (
      <UploadCardFiles flex="fluid" p="large">
        <CustomScroll>
          {files.map((file) => (
            <FileItemComponent key={file.id} removeFile={removeFile} readOnly={readOnly} {...file} />
          ))}
        </CustomScroll>
      </UploadCardFiles>
    );

  return (
    <UploadCardContainer
      {...events}
      style={style}
      className={className}
      active={isDragging}
      disabled={disabled}
      readOnly={readOnly}
      borderRadius="md"
      bgColor="neutral.5"
      overflow="hidden"
      deep={2}
    >
      <Flex gap="small" flex="fluid" p="large" bgColor="deepLight" justifyContent="center" alignItems="center">
        <Flex gap="xs" alignItems="center">
          <Icon name="upload" size={16} color={readOnly || disabled ? 'neutral.30' : 'secondary'} />

          {acceptLabel && (
            <Typography variant="meta" fontWeight="bold" color="neutral.180">
              {acceptLabel}
            </Typography>
          )}
        </Flex>

        {!readOnly && (
          <>
            <Typography variant="p" color="neutral.180">
              Arraste e solte aqui
            </Typography>

            <Typography variant="p" color="neutral.180" fontWeight="bold">
              ou
            </Typography>

            {openFileDialogButton}
          </>
        )}
      </Flex>

      {fileList}

      {isDragging && (
        <OverlayContainer absoluteFill>
          <Overlay absoluteFill bgColor="neutral.0" />
          <Flex gap="small" justifyContent="center" alignItems="center" p={8}>
            <Icon name="upload" color="information.dark" size={9} />
            <Typography variant="p" color="information.dark">
              Arraste e solte aqui
            </Typography>
          </Flex>
        </OverlayContainer>
      )}
    </UploadCardContainer>
  );
}

export function UploadCardCompact(props: VariantProps) {
  const { disabled, isDragging, events, files, removeFile, style, className, readOnly, openFileDialogButton } = props;

  return (
    <CompactContainer
      {...events}
      style={style}
      className={className}
      active={isDragging}
      disabled={disabled}
      readOnly={readOnly}
      borderRadius="md"
      bgColor="neutral.5"
      overflow="hidden"
      p="large"
      medias={{ xs: { gap: 'large' }, sm: { columns: 'max-content 1fr' } }}
    >
      <Flex flexDirection="row" justifyContent="start" alignItems="start">
        {openFileDialogButton}
      </Flex>

      <CompactFileItemContainer medias={{ xs: { gap: 'medium', columns: 'repeat(auto-fill, minmax(240px, 1fr))' } }}>
        {files.map((file) => (
          <FileItemComponent key={file.id} removeFile={removeFile} readOnly={readOnly} {...file} />
        ))}
      </CompactFileItemContainer>

      {isDragging && (
        <OverlayContainer>
          <Overlay />
          <Flex flexDirection="row" gap="small" justifyContent="center" alignItems="center">
            <Icon name="upload" color="information.dark" size={6} />
            <Typography variant="p">Arraste e solte aqui</Typography>
          </Flex>
        </OverlayContainer>
      )}
    </CompactContainer>
  );
}

function FileItemComponent({ removeFile, readOnly, ...props }: FileItemProps) {
  return (
    <FileItemContainer medias={{ xs: { gap: 'micro', columns: '2rem 1fr' } }}>
      <Preview {...props} />

      <Flex>
        <Flex flexDirection="row" justifyContent="between">
          <FileItemName variant="meta">
            <b>{props.fileName}</b>
          </FileItemName>

          {!readOnly && (
            <IconButton onClick={() => removeFile(props.id)} icon={<Icon name="times" />} variant="linked" />
          )}
        </Flex>

        {props.uploadPercentage && (
          <FileItemProgress
            style={{
              backgroundSize: props.uploadPercentage,
            }}
          />
        )}

        <Flex flexDirection="row" justifyContent="between">
          <Typography variant="meta">
            {`${props.uploadLoaded ? `${props.uploadLoaded} de` : ''} ${props.fileSize}`}
          </Typography>

          {props.uploadPercentage && <Typography variant="meta">{`Enviando ${props.uploadPercentage}`}</Typography>}
        </Flex>
      </Flex>
    </FileItemContainer>
  );
}

function Preview({ file }: FileItem) {
  const URL = useObjectUrl(file, (f) => f.type.startsWith('image'));

  if (URL) {
    return (
      <FileItemPreviewContainer>
        <Image src={URL} cover />
      </FileItemPreviewContainer>
    );
  }

  if (file.name.endsWith('.pdf')) {
    return (
      <FileItemPreviewContainer>
        <Icon name="filePdf" />
      </FileItemPreviewContainer>
    );
  }

  return (
    <FileItemPreviewContainer>
      <Icon name="file" />
    </FileItemPreviewContainer>
  );
}
