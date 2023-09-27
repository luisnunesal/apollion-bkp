import React from 'react';
import { ProgressBar, useProgress, Paper, Typography } from '@captalys-platform/core';

export function TimeredProgressBar() {
  const progress = useProgress(0, 1, 25000);

  return <ProgressBar progress={progress} showProgressLabel={true} />;
}

export function ConditionalTimeredProgressBar() {
  const progress = useProgress(0, 1, 30000);

  return progress !== 100 ? (
    <ProgressBar progress={progress} showProgressLabel={true} />
  ) : (
    <Paper mb="large" alignItems="center" deepColor="information">
      <Typography variant="p" color="information">
        Ao final da operação renderizamos esse Paper. Caso não tenha visto a barra de progresso, carregue a página
        novamente.
      </Typography>
    </Paper>
  );
}
