"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type buttonParams = {
    name: string,
    path: string
}

const HeaderButton: React.FC<buttonParams> = ({ name, path }) => {
    const pathname = usePathname()
    const isActive = () => pathname === path;
    
    return (
        <Link className={`p-4 ${ isActive() ? 'text-white' : 'text-slate-400'}`} href={path}>
            <p className="h-full w-full flex items-center justify-center">{name}</p>
        </Link>
    )
}

export default HeaderButton