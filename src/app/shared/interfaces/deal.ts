export interface Deal {
  id: number;
  name: string;
  purchasePrice: number;
  address: string;
  NOI: number;
  capRate?: number;
}

export function Deal(id: number, name: string, purchasePrice: number, address: string, NOI: number): Deal {
  const deal: Deal = {
    id,
    name,
    purchasePrice,
    address,
    NOI,
    capRate: NOI/purchasePrice
  }
  return deal;
}
