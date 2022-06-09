import { BigNumber } from 'ethers';
import { Type } from 'class-transformer';
import { IsInt, IsPositive } from 'class-validator';
import { IsAddress, IsBigNumberish }  from './validators';



export class GetExchangeCrossChainQuoteDto  {

  @IsAddress()
  fromTokenAddress: string;

  @IsAddress()
  toTokenAddress: string;

  @IsPositive()
  @IsInt()
  @Type(() => Number)
  fromChainId: number | null;

  @IsPositive()
  @IsInt()
  @Type(() => Number)
  toChainId: number;

  @IsBigNumberish()
  fromAmount: BigNumber;
}
