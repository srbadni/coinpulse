export const formatUsd = (value: number) => new Intl.NumberFormat('fa-IR', { style: 'currency', currency: 'USD', maximumFractionDigits: value > 100 ? 0 : 2 }).format(value);
export const formatNumber = (value: number) => new Intl.NumberFormat('fa-IR').format(value);
