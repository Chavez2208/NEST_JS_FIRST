import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { CarsService } from './cars.service';
import { ParseIntPipe } from '@nestjs/common/pipes';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carService: CarsService
    ) { }


    @Get()
    getAllCars() {
        return this.carService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', ParseIntPipe) id: string) {
        return this.carService.finOneBydId(id);
    }

    @Post()
    createCard(@Body() body: any) {
        console.log(body)
        return {
            ok: true
        }
    }

    @Patch(':id')
    updateCard(@Body() body: any) {
        console.log(body)
        return {
            ok: true
        }
    }

    @Delete(':id')
    deleteCard(@Param('id', ParseIntPipe) id: number) {
        console.log(id)
        return {
            ok: true
        }
    }
}
