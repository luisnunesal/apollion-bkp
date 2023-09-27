import { Configuration } from 'webpack';

export type CustomConfigType = {
  port?: number;
  host?: string;
  head?: HeadConfigType;
  useFastRefresh?: boolean;
  relayArtifactDirectory?: string;
  configureWebpack?: (config: Configuration, env: 'development' | 'production' | 'test') => Configuration;
};

export type HeadConfigType = {
  title: string;
};

export const defaultDevConfig = {
  port: 3000,
  host: '0.0.0.0',
  head: {
    title: 'Apollion',
  },
  useFastRefresh: true,
};
