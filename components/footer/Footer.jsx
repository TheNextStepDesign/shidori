import { Stack } from "../layout/Stacks";
import { LogoFooter } from "../navbar/Logo";
import { FooterItemsWeb } from "../navbar/Navitems";
import { SocialFooter } from "../navbar/Social";
import { Base } from "../typography/Typography";



export default function Footer() {
  return (
    <div className="bg-white" >
        <Stack className={'md:justify-between justify-start md:items-center p-5 gap-5 md:gap-0 border-b border-black'} >
            <LogoFooter/>
            <FooterItemsWeb/>
        </Stack>
        <Stack className={'md:justify-between justify-start p-5 gap-5 md:gap-0 '} >
            <Base>
            copyright 2025, KP Foods. All rights reserved
            </Base>
            <SocialFooter/>
        </Stack>

    </div>
  )
}
