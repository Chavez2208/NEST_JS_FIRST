import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './Dtos';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'VMW',
        //     year: 2023
        // }
    ];

    findAll() {
        return this.cars;
    }

    finOneBydId(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with id '${id}' not Found`);
        return car;
    }

    create(createCarDto: CreateCarDto) {
        const car: Car = {
            id: uuid(),
            ...createCarDto
        }
        this.cars.push(car);
        return car;
    }

    update(id: string, updateCardDto: UpdateCarDto) {
        let carDB = this.finOneBydId(id);

        if (updateCardDto.id && updateCardDto.id !== id) throw new BadRequestException('Car ID is not valid')

        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDB = {
                    ...carDB,
                    ...updateCardDto,
                    id
                }
                return carDB;
            }
            return car
        })
        return carDB; //Carro actualizado
    }

    delete(id: string) {
        const car = this.finOneBydId(id);
        this.cars = this.cars.filter(car => car.id !== id);
    }

    fillCarsWithSeedData(cars: Car[]) {
        this.cars = cars
    }
}
