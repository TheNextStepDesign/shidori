import { cn } from "@/lib/utils";

export default function Paragraph({ className, children }) {
  return (
    <p className={cn('text-paragraph font-normal', className)}>{children}</p>
  );
}
