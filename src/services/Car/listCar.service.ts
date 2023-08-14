import { Repository } from "typeorm"
import { Car } from "../../entities/car.entitie"
import { AppDataSource } from "../../data-source"
import { Pagination, PaginationParams } from "../../interfaces/pagination.interface"

export const listCarService = async({page, perPage, order, sort, prevPage, nextPage}:PaginationParams): Promise<Pagination> => {
    const carRepository: Repository<Car> = AppDataSource.getRepository(Car)
    const [car, count]: [Car[], number] = await carRepository.findAndCount({
        order:{ [sort]: order},
        skip: page,
        take: perPage,
        relations: ["carImages"]
    })

    return {
        prevPage: page <=1 ? null : prevPage,
        nextPage: count - page <= perPage ? null : nextPage,
        count,
        data: car
    }
}