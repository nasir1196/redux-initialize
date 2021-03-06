import { DEPOSIT_MONEY, WITHDRAW_MONEY } from "../constant/moneyReducer";

export const depositMoney = ( amount ) =>
{
    return ( dispatch ) =>
    {
        dispatch( {
            type: DEPOSIT_MONEY,
            payload: amount
        } );
    };
};

export const withdrawMoney = ( amount ) =>
{
    return ( dispatch ) =>
    {
        dispatch( {
            type: WITHDRAW_MONEY,
            payload: amount
        } );
    };
};


export const actionCreator = { depositMoney, withdrawMoney };