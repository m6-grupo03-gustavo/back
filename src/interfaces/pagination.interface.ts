import { Car } from "../entities/car.entitie";
import { ICarListResponse } from "./car.interface";

export interface Pagination {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: Array<Car>;
}

export interface PaginationParams {
  page: number;
  perPage: number;
  order: string;
  sort: string;
  prevPage: string | null;
  nextPage: string | null;
}
