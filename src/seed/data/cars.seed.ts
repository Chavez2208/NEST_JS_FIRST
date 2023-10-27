import { v4 as uuid } from 'uuid';
import { Car } from 'src/cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'TOYOTA',
        year: 2024
    },
    {
        id: uuid(),
        brand: 'GOLF',
        year: 2024
    },
    {
        id: uuid(),
        brand: 'VMW',
        year: 2024
    }
]