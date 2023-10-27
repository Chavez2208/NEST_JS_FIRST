import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRAND_SEED: Brand[] = [
    {
        id: uuid(),
        name: 'TOYOTA',
        createAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'HONDA',
        createAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'JEEP',
        createAt: new Date().getTime()
    },
]