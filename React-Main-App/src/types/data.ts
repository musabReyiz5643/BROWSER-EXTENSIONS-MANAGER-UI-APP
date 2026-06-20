export type dataType = dataTypeAtomic[];

export interface dataTypeAtomic {
  id: number;
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}
