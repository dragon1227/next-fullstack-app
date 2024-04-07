import { T_Workspace } from '@app/types';

export function getWorkspaces() {
  return [
    {name: 'web', version: '1.0'}, 
    {name: 'api', version: '1.0'},
    {name: 'utils', version: '1.0'}
  ] as Array<T_Workspace>
}