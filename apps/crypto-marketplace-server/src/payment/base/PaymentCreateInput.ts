/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  Min,
  Max,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { TransactionWhereUniqueInput } from "../../transaction/base/TransactionWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class PaymentCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currency?: string | null;

  @ApiProperty({
    required: false,
    type: () => TransactionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TransactionWhereUniqueInput)
  @IsOptional()
  @Field(() => TransactionWhereUniqueInput, {
    nullable: true,
  })
  transaction?: TransactionWhereUniqueInput | null;
}

export { PaymentCreateInput as PaymentCreateInput };
