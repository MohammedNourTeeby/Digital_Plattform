export type OrderType = 'buy' | 'sell';

export type UserPosition = {
  type: OrderType;
  amount: number;
  price?: number;
  startDate: string;
  timestamp?: string;
  paymentsReceived?: number;
  plan?: InvestmentPlan;
  executed?: boolean;
};

export type UserState = {
  balance: number;
  positions: UserPosition[];
  isAdmin: boolean;
};

export type InvestmentPlan = {
  id: number;
  name: string;
  duration: number;
  return: number;
  minDeposit: number;
};