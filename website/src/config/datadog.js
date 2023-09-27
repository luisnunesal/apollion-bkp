import { datadogRum } from '@datadog/browser-rum';
import { version, name as service } from '../../package.json';

export default class DatadogClass {
  constructor() {
    this.allowedEnvs = ['local', 'development', 'staging', 'sandbox', 'production'];

    if (this.allowedEnvs.includes(process.env.NODE_ENV)) {
      this.environment = process.env.NODE_ENV;

      const params = {
        applicationId: '9dc60953-ad98-4cdc-bec7-37af4031648f',
        clientToken: 'pub27524ac277c9a7e8addc0476f77d6668',
        service,
        version,
        env: this.environment,
        sampleRate: 100,
        trackInteractions: true,
      };

      datadogRum.init(params);
    }
  }
}
