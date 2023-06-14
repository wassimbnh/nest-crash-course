import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";

export enum Role {

    SUPERADMIN = 'super-admin',
    ADMIN = 'admin',
    CLIENT = 'client',

}

@Schema({
    timestamps: true
})

export class User {

    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    password: string

    @Prop()
    role: Role
}

export const UserSchema = SchemaFactory.createForClass(User);