export type Status = 'DONE' | 'UNDONE';

export type FilterStatus = Status | 'ALL';

export interface ITodoItem {
  title: string;
  status: Status;
  id: string;
}
