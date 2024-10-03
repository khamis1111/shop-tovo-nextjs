"use client"

/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import { Star, Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Product from "@/components/Product/Product"

// Mock data for products
const products = [
    { id: 1, name: "Classic T-Shirt", price: 19.99, image: "/placeholder.svg?height=200&width=200", category: "Clothing", color: "White", size: "M", rating: 4 },
    { id: 2, name: "Leather Wallet", price: 39.99, image: "/placeholder.svg?height=200&width=200", category: "Accessories", color: "Brown", size: "One Size", rating: 5 },
    { id: 3, name: "Running Shoes", price: 79.99, image: "/placeholder.svg?height=200&width=200", category: "Footwear", color: "Black", size: "10", rating: 4 },
    { id: 4, name: "Denim Jeans", price: 59.99, image: "/placeholder.svg?height=200&width=200", category: "Clothing", color: "Blue", size: "32", rating: 3 },
    { id: 5, name: "Smartwatch", price: 199.99, image: "/placeholder.svg?height=200&width=200", category: "Electronics", color: "Silver", size: "One Size", rating: 5 },
    { id: 6, name: "Sunglasses", price: 29.99, image: "/placeholder.svg?height=200&width=200", category: "Accessories", color: "Black", size: "One Size", rating: 4 },
]

export default function ShopPage() {
    const [priceRange, setPriceRange] = useState([0, 200])
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [selectedColors, setSelectedColors] = useState([])
    const [selectedSizes, setSelectedSizes] = useState([])
    const [selectedRating, setSelectedRating] = useState(0)
    const [sortBy, setSortBy] = useState("featured")
    const [searchQuery, setSearchQuery] = useState("")

    const filteredProducts = products.filter((product) => {
        return (
            (selectedCategory === "All" || product.category === selectedCategory) &&
            product.price >= priceRange[0] &&
            product.price <= priceRange[1] &&
            (selectedColors.length === 0 || selectedColors.includes(product.color)) &&
            (selectedSizes.length === 0 || selectedSizes.includes(product.size)) &&
            product.rating >= selectedRating &&
            (searchQuery === "" || product.name.toLowerCase().includes(searchQuery.toLowerCase()))
        )
    })

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price
        if (sortBy === "price-desc") return b.price - a.price
        if (sortBy === "rating") return b.rating - a.rating
        return 0 // Default to featured (original order)
    })

    return (
        <div className="container mb-10">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar with filters */}
                <Card className="w-full md:w-1/4  md:sticky top-5 self-start">
                    <CardContent className='p-6 flex flex-col gap-5'>
                        <div>
                            <h2 className="text-lg font-semibold mb-2">Category</h2>
                            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="All">All Categories</SelectItem>
                                    <SelectItem value="Clothing">Clothing</SelectItem>
                                    <SelectItem value="Accessories">Accessories</SelectItem>
                                    <SelectItem value="Footwear">Footwear</SelectItem>
                                    <SelectItem value="Electronics">Electronics</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold mb-2">Brand</h2>
                            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="All">All Brands</SelectItem>
                                    <SelectItem value="Clothing">Clothing</SelectItem>
                                    <SelectItem value="Accessories">Accessories</SelectItem>
                                    <SelectItem value="Footwear">Footwear</SelectItem>
                                    <SelectItem value="Electronics">Electronics</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold mb-2">Rating</h2>
                            <Select value={selectedRating.toString()} onValueChange={(value) => setSelectedRating(Number(value))}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="0">All Ratings</SelectItem>
                                    <SelectItem value="4">4 Stars & Above</SelectItem>
                                    <SelectItem value="3">3 Stars & Above</SelectItem>
                                    <SelectItem value="2">2 Stars & Above</SelectItem>
                                    <SelectItem value="1">1 Star & Above</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold mb-2">Price Range</h2>
                            <div className="flex justify-between gap-3">
                                <Input
                                    type="number"
                                    placeholder="Min Price"
                                    // value={0}
                                    onChange={() => { }}
                                />
                                <Input
                                    type="number"
                                    placeholder="Max Price"
                                    // value={0}
                                    onChange={() => { }}
                                />
                            </div>
                        </div>

                        {/* <div>
                            <h2 className="text-lg font-semibold mb-2">Color</h2>
                            <div className="space-y-2">
                                {["White", "Black", "Blue", "Brown", "Silver"].map((color) => (
                                    <label key={color} className="flex items-center space-x-2">
                                        <checkbox
                                            checked={selectedColors.includes(color)}
                                            onCheckedChange={(checked) => {
                                                setSelectedColors(
                                                    checked
                                                        ? [...selectedColors, color]
                                                        : selectedColors.filter((c) => c !== color)
                                                )
                                            }}
                                        />
                                        <span>{color}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold mb-2">Size</h2>
                            <div className="space-y-2">
                                {["S", "M", "L", "XL", "One Size"].map((size) => (
                                    <label key={size} className="flex items-center space-x-2">
                                        <checkbox
                                            checked={selectedSizes.includes(size)}
                                            onCheckedChange={(checked) => {
                                                setSelectedSizes(
                                                    checked
                                                        ? [...selectedSizes, size]
                                                        : selectedSizes.filter((s) => s !== size)
                                                )
                                            }}
                                        />
                                        <span>{size}</span>
                                    </label>
                                ))}
                            </div>
                        </div> */}


                    </CardContent>
                </Card>

                {/* Main content area */}
                <Card className="w-full md:w-3/4">
                    <CardContent className='p-6 flex flex-col gap-5'>
                        {/* Search and sort */}
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                            <div className="relative w-full sm:w-64">
                                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-8"
                                />
                            </div>
                            <Select value={sortBy} onValueChange={setSortBy}>
                                <SelectTrigger className="w-full sm:w-[180px]">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="featured">Featured</SelectItem>
                                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                                    <SelectItem value="rating">Highest Rated</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Product grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sortedProducts.map((product, index) => (
                                <Product key={index} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-8 flex justify-center">
                            <Button variant="outline" className="mr-2">
                                Previous
                            </Button>
                            <Button variant="outline">Next</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}