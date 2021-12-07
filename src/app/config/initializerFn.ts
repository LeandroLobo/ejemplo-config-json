import { JsonAppConfigService } from './json-app-config.service';
export function initializerFn(jsonAppConfigService: JsonAppConfigService) {
  return () => {
    return jsonAppConfigService.load();
  };
}
