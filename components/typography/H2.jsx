import { cn } from "@/lib/utils";


export default function H2({ className, children }) {
  return (
    <h2 className={cn('text-h2 font-semibold', className)}>{children}</h2>
  );
}
