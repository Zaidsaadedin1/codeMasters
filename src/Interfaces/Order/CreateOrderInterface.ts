export interface CreateOrder {
  firstName: string;
  lastName: string;
  university: string;
  major: string;
  phoneNumber: string;
  description: string;
  createAt?: Date;
  startAtDate?: Date | undefined;
  deadLineDate?: Date | undefined;
}

export interface getOrder {
  id: number;
  firstName: string;
  lastName: string;
  university: string;
  major: string;
  phoneNumber: string;
  description: string;
  startAtDate?: Date | undefined;
  deadLineDate?: Date | undefined;
}
