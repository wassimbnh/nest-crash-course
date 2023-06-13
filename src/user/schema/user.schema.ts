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

    @Prop({ required: true})
    name: string;

    @Prop({ required:true, unique: true})
    email: string;

    @Prop({required: true})
    password: string

    @Prop({required: true})
    role: Role
}

export const UserSchema = SchemaFactory.createForClass(User);