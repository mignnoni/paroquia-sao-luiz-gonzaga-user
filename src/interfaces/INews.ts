import type { IBaseFileDTO } from './IBaseFileDTO';

export interface INews {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt?: string;
    type: number;
    files: IBaseFileDTO[];
}
