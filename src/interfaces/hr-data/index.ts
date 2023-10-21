import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface HrDataInterface {
  id?: string;
  employee_id: string;
  performance_review: string;
  disciplinary_action?: string;
  training_completed: string;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  _count?: {};
}

export interface HrDataGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_id?: string;
  performance_review?: string;
  disciplinary_action?: string;
  training_completed?: string;
}
