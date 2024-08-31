import Link from "next/link"

const items = [
    {
        name:"products",
        href:"/"
    },
    {
        name:"about",
        href:"/about"
    },
    {
        name:"contact us",
        href:"/contact"
    }
]

export const NavItemsWeb = () => {
    
  return (
    <div className="md:flex gap-8 h-full hidden" >
        {
            items.map((item,index) => {
                return (
                    <div key={index} className="flex items-center gap-5" >
                        <Link href={item.href} className="text-base font-light" >{item.name}</Link >
                    </div>
                )
            })
        }
    </div>
  )
}

export const FooterItemsWeb = () => {
    
    return (
      <div className="flex flex-col md:flex-row gap-5" >
          {
              items.map((item,index) => {
                  return (
                      <div key={index} className="flex items-center gap-5" >
                          <Link href={item.href} className="text-base font-light" >{item.name}</Link>
                      </div>
                  )
              })
          }
      </div>
    )
  }

export const NavItemsMob = ()=>{


    return (
        <div className="flex flex-col items-center gap-5 py-5  md:hidden " >
            {
                items.map((item,index) => <Link href={item.href} key={index} className="text-base font-light" >{item.name}</Link>)
            }
        </div>
    )

}
