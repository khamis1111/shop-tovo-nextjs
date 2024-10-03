"use client"

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const productImages = [
    {
        url: '/1.jpg'
    }, {
        url: 'https://images.pexels.com/photos/28486840/pexels-photo-28486840/free-photo-of-turkish-coffee-and-tea-on-traditional-tray.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    }, {
        url: 'https://images.pexels.com/photos/5847663/pexels-photo-5847663.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    }, {
        url: 'https://images.pexels.com/photos/26926252/pexels-photo-26926252/free-photo-of-face-of-gorilla.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
]

export default function ProductImageSilder() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isHovering, setIsHovering] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const imageRef = useRef(null)

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    const handleMouseMove = (e) => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect()
            setMousePosition({
                x: ((e.clientX - rect.left) / rect.width) * 100,
                y: ((e.clientY - rect.top) / rect.height) * 100
            })
        }
    }

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
        )
    }

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
        )
    }

    return (
        <div className="max-w-2xl mx-auto px-4">
            <div className="relative aspect-square overflow-hidden rounded-lg border shadow">
                <div
                    ref={imageRef}
                    className="relative w-full h-full cursor-zoom-in"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                >
                    <Image
                        src={productImages[currentImageIndex].url}
                        alt={`Product image ${currentImageIndex + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 ease-out"
                        style={{
                            transform: isHovering ? `scale(1.5)` : 'scale(1)',
                            transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
                        }}
                    />
                </div>
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={prevImage}
                >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Previous image</span>
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={nextImage}
                >
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Next image</span>
                </Button>
            </div>
            <div className="mt-4 flex justify-center gap-2">
                {productImages.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full border ${index === currentImageIndex ? 'bg-primary' : 'bg-muted'
                            }`}
                        onClick={() => setCurrentImageIndex(index)}
                    >
                        <span className="sr-only">Go to image {index + 1}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}