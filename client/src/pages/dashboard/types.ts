export type Goal = {
  achieved: boolean;
  date: Date;
  goalTarget: number;
  goalTitle: string;
  savingCommitment: number;
  savingFrequency: string;
  totalSaved: number;
  user: string;
};

export type Profile = {
  loading: boolean;
  profile: {
    user: {
      name: string;
    };
    currentBankBalance: number;
  };
};

export type Expense = {
  expenses: any;
  loading: boolean;
  monthFocus: number | null;
};

// @TODO: Import type from store
export type RootState = {
  profile: Profile;
  goal: {
    loading: boolean;
    goals: Goal[];
    goalFocus: number;
  };
  expense: Expense;
};
