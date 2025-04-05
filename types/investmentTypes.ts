export type UserPosition = {
    plan: InvestmentPlan;
    amount: number;
    startDate: string;
    paymentsReceived: number;
  };
  
  export type InvestmentPlan = {
    id: number;
    name: string;
    duration: number;
    return: number;
    minDeposit: number;
  };
  
  export type UserData = {
    balance: number;
    positions: UserPosition[];
    isAdmin: boolean;
  };