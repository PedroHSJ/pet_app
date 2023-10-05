import {Gender} from '../enums/Gender';
import {Specie} from '../enums/Specie';
import {IBase} from './IBase';
import {IBreed} from './IBreed';

export interface IPet extends IBase {
    name: string;
    weight: number;
    breed: IBreed;
    clientId: string;
    specie: Specie;
    gender: Gender;
    dateOfBirth: Date;
}
