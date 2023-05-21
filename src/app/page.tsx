// 'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Hero, Compulsory, Advance, Text } from '@/components'
export default function Home() {
    return (
        <div>
            <Hero />
            <Text />
            <Compulsory />
            <Advance />
        </div>
    )
}
