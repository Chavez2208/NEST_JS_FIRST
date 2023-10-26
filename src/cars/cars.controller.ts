import { Controller, Get, Param, Post, Body, Patch, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { ParseIntPipe, ParseUUIDPipe } from '@nestjs/common/pipes';
import { CreateCarDto } from './Dtos/create-car.dto';
import { UpdateCarDto } from './Dtos/update-car.dto';

@Controller('cars')
@UsePipes(ValidationPipe)
export class CarsController {

    constructor(
        private readonly carService: CarsService
    ) { }


    @Get()
    getAllCars() {
        return this.carService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', ParseUUIDPipe) id: string) {
        return this.carService.finOneBydId(id);
    }

    @Post()
    createCard(@Body() createCardDto: CreateCarDto) {
        return this.carService.create(createCardDto);
    }

    @Patch(':id')
    updateCard(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateCardDto: UpdateCarDto) {
        return this.carService.update(id, updateCardDto);
    }

    @Delete(':id')
    deleteCard(@Param('id', ParseUUIDPipe) id: string) {
        return this.carService.delete(id);
    }
}
