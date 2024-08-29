import { cn } from "@/lib/utils";


export default function Base({ className, children }) {
  return (
    <p className={cn('text-base font-light', className)}>{children}</p>
  );
}
