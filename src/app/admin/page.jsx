/* eslint-disable @next/next/no-img-element */
'use client'

import ColorPicker from "@/components/Admin/Product/ColorPicker"
import MultiSelect from "@/components/Admin/Product/MultiSelect"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent } from "@/components/ui/tabs"
import MultipleImg from "@/components/UploadImg/MultipleImg"
import OneImg from "@/components/UploadImg/OneImg"
import { cn } from '@/lib/utils'
import { LayoutGrid, LogOut, Package, Pencil, Tags, Trash2, User2 } from 'lucide-react'
import { useState } from 'react'

export default function AdminPage() {
    const [activeTab, setActiveTab] = useState("category")
    const [image, setImage] = useState(null)
    const [images, setImages] = useState([])

    const tabs = [
        {
            tab: 'category',
            name: 'Categories',
            icon: <LayoutGrid className="mr-2 h-4 w-4" />
        }, {
            tab: 'brand',
            name: 'Brands',
            icon: <Tags className="mr-2 h-4 w-4" />
        }, {
            tab: 'product',
            name: 'Products',
            icon: <Package className="mr-2 h-4 w-4" />
        },
    ]

    const mockCategories = [
        { id: 1, name: "Electronics", subcategories: ["Phones", "Laptops"], productCount: 150 },
        { id: 2, name: "Clothing", subcategories: ["Men's", "Women's"], productCount: 300 },
        { id: 3, name: "Home & Garden", subcategories: ["Furniture", "Decor"], productCount: 200 },
    ]

    const mockBrands = [
        { id: 1, name: "Apple", logo: "/placeholder.svg" },
        { id: 2, name: "Samsung", logo: "/placeholder.svg" },
        { id: 3, name: "Nike", logo: "/placeholder.svg" },
    ]

    const mockProducts = [
        { id: 1, name: "iPhone 12", category: "Electronics", brand: "Apple", price: 799, stock: 50, image: "/1.jpg" },
        { id: 2, name: "Galaxy S21", category: "Electronics", brand: "Samsung", price: 699, stock: 30, image: "/1.jpg" },
        { id: 3, name: "Air Max 90", category: "Clothing", brand: "Nike", price: 120, stock: 100, image: "/1.jpg" },
    ]

    return (
        <div className="container mb-10">
            <div className="flex flex-col md:flex-row gap-6">
                <aside className="w-full md:w-1/3 xl:w-1/4 md:sticky top-10 self-start">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center space-x-4">
                                <div className="bg-bgColor w-20 h-20 rounded-full hidden lg:flex items-center justify-center">
                                    <User2 size={35} />
                                </div>
                                <div>
                                    <CardTitle>John Doe</CardTitle>
                                    <CardDescription>john.doe@example.com</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <nav className="flex flex-col space-y-1">
                                {
                                    tabs.map((item, index) => (
                                        <Button key={index} variant="ghost" className={cn(
                                            "justify-start",
                                            activeTab === item.tab && 'bg-accent text-accent-foreground'
                                        )} onClick={() => {
                                            setActiveTab(item.tab)
                                        }}>
                                            {item.icon}
                                            {item.name}
                                        </Button>
                                    ))
                                }
                            </nav>
                        </CardContent>
                        <CardFooter>
                            <Button variant="destructive" className="w-full">
                                <LogOut className="mr-2 h-4 w-4" />
                                Log out
                            </Button>
                        </CardFooter>
                    </Card>
                </aside>
                <main className="flex-1">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsContent value="category" className='flex flex-col gap-5'>
                            {/* Add Cat */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Categories</CardTitle>
                                    <CardDescription>Manage your product categories</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form className="space-y-4">
                                        <div>
                                            <label htmlFor="logo" className="mb-3">Category Logo</label>
                                            <OneImg setImage={setImage} image={image} />
                                        </div>
                                        <div>
                                            <label htmlFor="name">Category Name</label>
                                            <Input id="name" name="name" required />
                                        </div>
                                        <div>
                                            <label htmlFor="subcategories">Subcategories (comma-separated)</label>
                                            <Input id="subcategories" name="subcategories" />
                                        </div>
                                        <Button type="submit">Add Category</Button>
                                    </form>
                                </CardContent>
                            </Card>
                            {/* Cat Table */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Category List</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Image</TableHead>
                                                <TableHead>Name</TableHead>
                                                <TableHead>Subcategories</TableHead>
                                                <TableHead>Products</TableHead>
                                                <TableHead>Actions</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {mockCategories.map((category, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>
                                                        <img src='/1.jpg' alt='' className="w-12 h-12 object-cover rounded" />
                                                    </TableCell>
                                                    <TableCell>{category.name}</TableCell>
                                                    <TableCell>
                                                        <div className="flex flex-wrap gap-2">
                                                            {category.subcategories.map((sub, index) => (
                                                                <Badge key={index} variant="secondary">{sub}</Badge>
                                                            ))}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>12</TableCell>
                                                    <TableCell>
                                                        <Button variant="ghost" size="icon"><Pencil className="h-4 w-4" /></Button>
                                                        <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4" /></Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="brand" className='flex flex-col gap-5'>
                            {/* Add Brand */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Brands</CardTitle>
                                    <CardDescription>Manage your product brands</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form className="space-y-4">
                                        <div>
                                            <label htmlFor="logo" className="mb-3">Brand Logo</label>
                                            <OneImg setImage={setImage} image={image} />
                                        </div>
                                        <div>
                                            <label htmlFor="name">Brand Name</label>
                                            <Input id="name" name="name" required />
                                        </div>
                                        <Button type="submit">Add Brand</Button>
                                    </form>
                                </CardContent>
                            </Card>
                            {/* Brand Table */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Brand List</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Image</TableHead>
                                                <TableHead>Name</TableHead>
                                                <TableHead>Actions</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {Array(2).fill('').map((category, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>
                                                        <img src='/1.jpg' alt='' className="w-12 h-12 object-cover rounded" />
                                                    </TableCell>
                                                    <TableCell>Electronics</TableCell>
                                                    <TableCell>
                                                        <Button variant="ghost" size="icon"><Pencil className="h-4 w-4" /></Button>
                                                        <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4" /></Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="product" className='flex flex-col gap-5'>
                            {/* Add Product */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Products</CardTitle>
                                    <CardDescription>Manage your product inventory</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form className="space-y-4">
                                        <div>
                                            <label htmlFor="image" className="mb-3">Product Images</label>
                                            <MultipleImg setImages={setImages} images={images} />
                                        </div>
                                        <div>
                                            <label htmlFor="name">Product Name</label>
                                            <Input id="name" name="name" required />
                                        </div>
                                        <div>
                                            <label htmlFor="category">Category</label>
                                            <Select name="category">
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a category" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {mockCategories.map((cat) => (
                                                        <SelectItem key={cat.id} value={cat.name}>{cat.name}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div>
                                            <label htmlFor="SubCategory">Sub Category</label>
                                            <MultiSelect name={'Sub category'} />
                                        </div>
                                        <div>
                                            <label htmlFor="brand">Brand</label>
                                            <Select name="brand">
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a brand" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {mockBrands.map((brand) => (
                                                        <SelectItem key={brand.id} value={brand.name}>{brand.name}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <label htmlFor="price">Price</label>
                                                <Input id="price" name="price" type="number" step="0.01" required />
                                            </div>
                                            <div>
                                                <label htmlFor="stock">Stock</label>
                                                <Input id="stock" name="stock" type="number" required />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="Color">Color</label>
                                            <ColorPicker />
                                        </div>
                                        <Button type="submit">Add Product</Button>
                                    </form>
                                </CardContent>
                            </Card>
                            {/* Product Table */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Product List</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Image</TableHead>
                                                <TableHead>Name</TableHead>
                                                <TableHead>Category</TableHead>
                                                <TableHead>Brand</TableHead>
                                                <TableHead>Price</TableHead>
                                                <TableHead>Stock</TableHead>
                                                <TableHead>Actions</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {mockProducts.map((product) => (
                                                <TableRow key={product.id}>
                                                    <TableCell>
                                                        <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded" />
                                                    </TableCell>
                                                    <TableCell>{product.name}</TableCell>
                                                    <TableCell>{product.category}</TableCell>
                                                    <TableCell>{product.brand}</TableCell>
                                                    <TableCell>${product.price.toFixed(2)}</TableCell>
                                                    <TableCell>{product.stock}</TableCell>
                                                    <TableCell>
                                                        <Button variant="ghost" size="icon" onClick={() => setEditingItem(product)}><Pencil className="h-4 w-4" /></Button>
                                                        <Button variant="ghost" size="icon" onClick={() => handleDelete("product", product.id)}><Trash2 className="h-4 w-4" /></Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </main>
            </div>
        </div>
    )
}