import { cn } from "@/lib/utils";

export function HStacks({className,children}) {
  return (
    <div className={cn('flex flex-row',className)} >
        {children}
    </div>
  )
}

export function VStacks({className,children}) {
    return (
      <div className={cn('flex flex-col gap-5',className)} >
        {children}
      </div>
    )
}

export function Stack({className,children}){
    return (
      <div className={cn('flex flex-col md:flex-row',className)} >
        {children}
      </div>
    )
}

export function Center({className,children}){
  return (
      <div className={cn('flex justify-center items-center',className)} >
        {children}
      </div>
    )
}
