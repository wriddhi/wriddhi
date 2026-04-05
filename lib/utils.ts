import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function repeatArray<T>(array: T[], times: number): T[] {
  return Array.from<T[]>({ length: times }).fill(array).flat();
}
