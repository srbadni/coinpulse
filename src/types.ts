export type TrendPoint = { label: string; value: number; open?: number; close?: number; high?: number; low?: number };
export type Token = { name: string; persianName: string; symbol: string; price: number; change24h: number; marketCap: string; volume: string; supply: string; color: string; sparkline: TrendPoint[] };
export type Trade = { price: number; amount: number; time: string; type: 'buy' | 'sell' };
export type Order = { price: number; amount: number; total: number };
