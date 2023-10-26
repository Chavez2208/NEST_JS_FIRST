import { IsString, IsNumber } from "class-validator";

export class CreateCarDto {

    @IsString()
    readonly brand: string;
    @IsNumber()
    readonly year: number;
}