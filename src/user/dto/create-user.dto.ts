import { Role } from "../schema/user.schema";
import { IsEmail, IsEnum, IsNotEmpty, IsString, Length, Matches, Validate } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty({ message: "Required" })
    @IsString()
    @Length(8, 24)
    @Matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
        { message: "Password must have at least 1 uppercase , 1 lowercase" }
    )
    readonly password: string;

    @IsNotEmpty()
    @IsString()
    @Transform(({ value }) => value.trim())
    @Validate((value, { object }) => value === object.password, { message: 'Passwords do not match' })
    readonly confirmPassword: string;

    @IsNotEmpty()
    @IsEnum(Role, { message: "Please enter the role" })
    readonly role: Role;
}
