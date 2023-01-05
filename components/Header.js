import Image from "next/image";
import HeaderIcon from './HeaderIcon'
import {HomeIcon, PhoneIcon, UserIcon, InformationCircleIcon} from '@heroicons/react/24/solid'
import { userAgent } from "next/server";

export default function Header() {
  return (
    <div className="flex items-center p-2">
        <div className="flex space-x-5">
            <HeaderIcon Icon={HomeIcon} title="Home" />
            <HeaderIcon Icon={UserIcon} title="Acount" />
            <HeaderIcon Icon={PhoneIcon} title="Contact" />
            <HeaderIcon Icon={InformationCircleIcon} title="About" />
        </div>
        <Image src={process.env.LOGO_URL} width={100} height={100} alt="movie db logo" className="ml-auto"></Image>
    </div>
  )
}
