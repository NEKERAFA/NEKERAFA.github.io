export type WorkDateItem = {
    month: string,
    year: number
};

export type WorkDate = {
    from: WorkDateItem,
    to?: WorkDateItem
};

export type WorkContract = {
    name?: string,
    contract: "indefinite" | "formative" | "intern",
    date: WorkDate,
    skills?: string[]
};

export type Work = {
    name: string,
    icon: string,
    color: string,
    contracts: WorkContract
};