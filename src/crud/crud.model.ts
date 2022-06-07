export interface Crud{
    id: string;
    title: string;
    description: string;
    status: Crudstatus;
  };
  
  export enum Crudstatus{
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
  }