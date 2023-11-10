'use client'

import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import React from 'react'
import { useRouter } from 'next/navigation'

const CloseModel = ({ }) => {
    const router = useRouter()
    return (
        <Button aria-label='close model' variant={'secondary'} className="h-6 w-6 p-0 rounded-md" onClick={() => {router.back()}}>
            <X className='h-4 w-4'/>
        </Button>
    )
}

export default CloseModel