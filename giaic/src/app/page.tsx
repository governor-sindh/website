import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Hero, Compulsory, Advance } from '@/components'


export default function Home() {
    return (
        <div>
            <Hero />
            <Compulsory />
            <Advance />
        </div>
    )
}
