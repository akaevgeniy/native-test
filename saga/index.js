import { infoWatcher } from './infoSaga';

export function* rootWatcher() {
  yield infoWatcher();
}
