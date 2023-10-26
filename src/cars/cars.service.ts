import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: 1,
            brand: 'VMW',
            year: 2023
        }, {
            id: 2,
            brand: 'Crevrolet',
            year: 2024
        }, {
            id: 3,
            brand: 'GOLF',
            year: 2019
        }
    ];

    findAll() {
        return this.cars;
    }

    finOneBydId(id: number) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with id '${id}' not Found`);
        return car;
    }
}
