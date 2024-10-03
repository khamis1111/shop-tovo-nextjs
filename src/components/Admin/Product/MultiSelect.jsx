"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Check, ChevronDown, X } from "lucide-react"
import { useState } from "react"

const cities = [
    "Amsterdam",
    "Barcelona",
    "Bucharest",
    "Budapest",
    "Gothenburg",
    "Hamburg",
    "London",
    "Madrid",
    "Paris",
    "Rome",
    "Vienna",
]

export default function MultiSelect({ name }) {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const toggleCity = (city) => {
        setSelected((prev) =>
            prev.includes(city)
                ? prev.filter((c) => c !== city)
                : [...prev, city]
        )
    }

    const filtered = cities.filter((city) =>
        city.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="w-full">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between text-left font-normal"
                    >
                        {selected.length > 0
                            ? `${selected.length} ${name} selected`
                            : `Select ${name}`}
                        <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                    <div className="p-2">
                        <Input
                            placeholder={`Search ${name} ...`}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="mb-2"
                        />
                        <div className="max-h-60 overflow-auto scroll-hidden">
                            {filtered.length === 0 ? (
                                <div className="py-6 text-center text-sm text-muted-foreground">
                                    No {name} found.
                                </div>
                            ) : (
                                filtered.map((item) => (
                                    <div
                                        key={item}
                                        className={cn(
                                            "flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm outline-none",
                                            selected.includes(item)
                                                ? "bg-accent text-accent-foreground"
                                                : "hover:bg-accent hover:text-accent-foreground"
                                        )}
                                        onClick={() => toggleCity(item)}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                selected.includes(item) ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {item}
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
            {
                selected.length !== 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                        {selected.map((item) => (
                            <Badge key={item} variant="secondary" className="text-sm">
                                {item}
                                <button
                                    className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                    onClick={() => toggleCity(item)}
                                >
                                    <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                                </button>
                            </Badge>
                        ))}
                    </div>
                )
            }
        </div>
    )
}