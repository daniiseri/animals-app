'use client'

import { useState } from "react"
import { Input } from "./ui/input"
import { useRouter } from 'next/navigation';
import { Button } from "./ui/button";
import { Search as MagnificGlass } from 'lucide-react'

export function Search() {
  const [text, setText] = useState<string | null>(null)
  const textToLowerCase = text?.toLowerCase();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1 relative min-w-[200px]">
      <Input
        type="text" value={text ?? ''}
        onChange={e => setText(e.target.value)}
        onKeyPress={e => e.key === 'Enter' && router.push(`/${textToLowerCase}`)}
      />
      <Button
        variant='outline'
        onClick={() => router.push(`/${textToLowerCase}`)}
        className="absolute right-0"
      >
        <MagnificGlass />
      </Button>
    </div>
  )
}