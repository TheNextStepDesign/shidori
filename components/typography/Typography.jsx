import { cn } from "@/lib/utils";


export function Base({ className, children }) {
  return (
    <p className={cn('text-base font-light', className)}>{children}</p>
  );
}

export function H1({ className, children }) {
    return (
      <h1 className={cn('text-h1 font-semibold', className)}>{children}</h1>
    );
}

export function H2({ className, children }) {
    return (
      <h2 className={cn('text-h2 font-semibold', className)}>{children}</h2>
    );
}

export function H3({ className, children }) {
    return (
      <h3 className={cn('text-h3 font-bold', className)}>{children}</h3>
    );
}

export function Paragraph({ className, children }) {
    return (
      <p className={cn('text-paragraph md:text-base font-normal', className)}>{children}</p>
    );
}
  
  