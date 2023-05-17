'use client'

import React from 'react';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { CompulsoryData } from '@/data/compulsory';
import { tracks } from '@/data/tracks';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

function ChakraMenu({ screen, open, setOpen }: { screen: string, open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const pathname = usePathname()
    return (
        <Menu>
            <div className={`${screen === 'small' && 'py-5 border-b border-[#1468a5]'}`}>
                <MenuButton className='' as={Button} rightIcon={<ChevronDownIcon />}>
                    Courses
                </MenuButton>
            </div>
            <MenuList className={`bg-zinc-50 box_shadow h-[300px] sm:h-auto overflow-y-auto text-zinc-800 p-7 sm:p-4 ${screen === 'small' && 'w-[90vw]'}`}>
                <div className='pb-5 border-b border-zinc-300'>
                    <h1 className='sm:text-xl text-lg font-bold text-zinc-800 mb-2'>Core Courses</h1>
                    {
                        CompulsoryData.map((val, index) => {
                            let active = pathname.startsWith(`/compulsory/${val.id}`)
                            return (
                                <Link onClick={() => setOpen(false)} key={index} href={`/compulsory/${val.id}`}><MenuItem className={`text-zinc-600 sm:text-base text-sm ${active ? 'bg-zinc-200' : 'hover:text-main'} pl-2 py-[5px]`}>{val.text}</MenuItem></Link>
                            )
                        })
                    }
                </div>
                <div className='mt-5'>
                    <h1 className='sm:text-xl text-lg font-bold text-zinc-800 mb-2'>Advance Courses</h1>
                    {
                        tracks.map((val, index) => {
                            let active = pathname.startsWith(`/tracks/${val.id}`)
                            return (
                                <Link onClick={() => setOpen(false)} key={index} href={`/tracks/${val.id}/4`}><MenuItem className={`text-zinc-600 sm:text-base text-sm ${active ? 'bg-zinc-200' : 'hover:text-main'} pl-2 py-[5px]`}>{val.name}</MenuItem></Link>
                            )
                        })
                    }
                </div>
            </MenuList>
        </Menu>
    );
}

export default ChakraMenu;