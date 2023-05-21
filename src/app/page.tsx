// 'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Hero, Compulsory, Advance, Text } from '@/components'
import Counter from '../components/counter/page'


export default function Home() {
    return (
        <div>
            <Hero />
            <Text />
            <Compulsory />
            <Advance />
            <Counter/>
        </div>
    )
}
