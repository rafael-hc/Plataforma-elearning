import { Popover } from "@headlessui/react";
import { List, X } from "phosphor-react";
import { Logo } from "./Logo";

interface HeaderProps {
    open: boolean;
}

export function Header(props: HeaderProps) {

    return (
        <header className="w-full p-5 flex items-center justify-between md:justify-center bg-gray-700 border-b border-gray-600">
            <div className="w-[167px] md:w-auto"><Logo/></div>
            <div className=" md:hidden flex gap-2 text-blue-500">
                <span className="text-sm text-gray-200">Aulas</span>
                <Popover.Button>{props.open ? <X/> : <List/> }</Popover.Button>
            </div>
        </header>
    )
}