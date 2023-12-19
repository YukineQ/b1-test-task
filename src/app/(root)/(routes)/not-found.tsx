'use client'

import { Button } from "@/components/ui";

export default function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center h-full gap-4'>
            <h1 className='md:text-5xl text-3xl font-bold tracking-tight text-white'>
                404!
            </h1>
            <h3 className="text-white">Seem like page you requesting doesn't exists.</h3>
            <Button
                size='lg'
                className='w-fit'
                onClick={() => window.history.back()}
            >
                Go back
            </Button>
        </div>
    )
}