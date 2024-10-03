"use client"

import { useState } from "react"
import { Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ColorPicker() {
    const [colors, setColors] = useState([])
    const [currentColor, setCurrentColor] = useState("#000000")

    const addColor = () => {
        if (!colors.includes(currentColor)) {
            setColors([...colors, currentColor])
        }
    }

    const removeColor = (colorToRemove) => {
        setColors(colors.filter((color) => color !== colorToRemove))
    }

    return (
        <div>
            <div className="space-y-4">
                <div>
                    <div className="flex items-center gap-3 lg:w-1/2">
                        <Input
                            type="color"
                            id="color-input"
                            value={currentColor}
                            onChange={(e) => setCurrentColor(e.target.value)}
                            className="w-10 h-10 p-px rounded"
                        />
                        <Input
                            type="text"
                            value={currentColor}
                            onChange={(e) => setCurrentColor(e.target.value)}
                            className="flex-grow"
                            placeholder="#000000"
                        />
                        <div onClick={addColor} className="rounded-full p-2 bg-primary text-white flex items-center justify-center">
                            <Plus />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {colors.map((color) => (
                            <div
                                key={color}
                                className="flex items-center bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                            >
                                <div
                                    className="w-4 h-4 rounded-full mr-2"
                                    style={{ backgroundColor: color }}
                                />
                                <span>{color}</span>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="ml-2 h-auto p-0"
                                    onClick={() => removeColor(color)}
                                >
                                    <X className="h-4 w-4" />
                                    <span className="sr-only">Remove color {color}</span>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}