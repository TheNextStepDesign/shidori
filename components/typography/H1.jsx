import { cn } from "@/lib/utils";


export default function H1({ className, children }) {
  return (
    <h1 className={cn('text-h1 font-semibold', className)}>{children}</h1>
  );
}
