import { ApiModelProperty } from '@nestjs/swagger';

export class UserRegistrtion {
    @ApiModelProperty({type: String, required: true})
    firstName: string;
    @ApiModelProperty({type: String, required: true})
    lastName: string;
    @ApiModelProperty({type: String, required: true})
    password: string;
    @ApiModelProperty({type: String, required: true})
    email: string;
    token: string;
}