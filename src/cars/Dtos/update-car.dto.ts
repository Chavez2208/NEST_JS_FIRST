import { IsString, IsNumber, IsUUID, IsOptional } from "class-validator";

export class UpdateCarDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString()
    @IsOptional()
    readonly brand?: string;

    @IsNumber()
    @IsOptional()
    readonly year?: number;
}