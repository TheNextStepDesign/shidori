import { cn } from "@/lib/utils";


export default function H3({ className, children }) {
  return (
    <h3 className={cn('text-h3 font-bold', className)}>{children}</h3>
  );
}
