import {Role} from '../enums/Role';
import {IBase} from './IBase';

export interface IRole extends IBase {
  name: Role;
}
