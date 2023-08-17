import { AppDataSource } from "../../data-source";
import { Car } from "../../entities/car.entitie";
import { Pagination, PaginationParams } from "../../interfaces/pagination.interface";

export const listCarFromUSerService = async({page, perPage, order, sort, prevPage, nextPage}:PaginationParams, userId:number): Promise<Pagination> => {

const carRepository = AppDataSource.getRepository(Car)
const [cars, count]: [Car[], number] = await carRepository.findAndCount({
    where: { user: { id: userId } },
    order:{ [sort]: order},
    skip: page,
    take: perPage,
    relations: ["carImages"]
});
 
return {
    prevPage: page <=1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage,
    count,
    data: cars
}
}