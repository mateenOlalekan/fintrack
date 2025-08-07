import { Search, Menu, MoreHorizontal, ChevronDown } from 'lucide-react';
import { BiGridAlt } from "react-icons/bi";
import Image from "next/image";
import Icon from "../../../../public/Fin/logo.png";
import Profile from "../../../../public/Fin/profile.png";
export default function Header(){
    return(
        <>
      <header className="py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Menu className="w-6 h-6 text-gray-600" />
            <Image
              className='w-2/10 h-auto'
              src={Icon}
              alt="Picture of the author"
              blurDataURL="data:..."
              placeholder="blur"
            />
          </div>
          
          <div className="flex items-center space-x-2">
          <Search className="w-5 h-5 text-gray-400 " />
            <BiGridAlt className="w-5 h-5 font-normal text-[#1B2528]"/>
            <Image
              className='w-8 h-8'
              src={Profile}
              alt="Picture of the author"
              blurDataURL="data:..."
              placeholder="blur"
            />
          </div>
        </div>
      </header>
        </>
    )
}