import {IAddress} from './IAddress';
import {IBase} from './IBase';
import {IPet} from './IPet';
import {IRole} from './IRole';

export interface IClient extends IBase {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
    role: IRole;
    address: IAddress;
    pets?: IPet[];
}
