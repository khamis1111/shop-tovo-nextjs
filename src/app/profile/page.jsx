/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Package, MapPin, CreditCard, Heart, Star, Settings, LogOut, User2 } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState("overview")

    useEffect(() => {
        if (localStorage.getItem('tabs')) {
            localStorage.setItem('tabs', "wishlist")
            setActiveTab(localStorage.getItem('tabs'))
        }
    }, [])

    const tabs = [
        {
            tab: 'overview',
            name: 'Account Overview',
            icon: <Settings className="mr-2 h-4 w-4" />
        }, {
            tab: 'orders',
            name: 'Orders',
            icon: <Package className="mr-2 h-4 w-4" />
        }, {
            tab: 'addresses',
            name: 'Addresses',
            icon: <MapPin className="mr-2 h-4 w-4" />
        }, {
            tab: 'payment',
            name: 'Payment Methods',
            icon: <CreditCard className="mr-2 h-4 w-4" />
        }, {
            tab: 'wishlist',
            name: 'Wishlist',
            icon: <Heart className="mr-2 h-4 w-4" />
        }, {
            tab: 'reviews',
            name: 'Reviews',
            icon: <Star className="mr-2 h-4 w-4" />
        }
    ]

    // const router = useRouter()
    // if (!localStorage.getItem('tabs')) return router.push('/')

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
                                            localStorage.getItem('tabs') ? localStorage.setItem('tabs', item.tab) : setActiveTab(item.tab)
                                            localStorage.getItem('tabs') && setActiveTab(localStorage.getItem('tabs'))
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
                        <TabsContent value="overview">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Account Overview</CardTitle>
                                    <CardDescription>View and manage your account details</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="name">Name</label>
                                                <Input id="name" defaultValue="John Doe" />
                                            </div>
                                            <div>
                                                <label htmlFor="email">Email</label>
                                                <Input id="email" defaultValue="john.doe@example.com" />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="phone">Phone</label>
                                            <Input id="phone" defaultValue="+1 (555) 123-4567" />
                                        </div>
                                        <div>
                                            <label htmlFor="current-password">Current Password</label>
                                            <Input id="current-password" type="password" />
                                        </div>
                                        <div>
                                            <label htmlFor="new-password">New Password</label>
                                            <Input id="new-password" type="password" />
                                        </div>
                                        <div>
                                            <label htmlFor="confirm-password">Confirm New Password</label>
                                            <Input id="confirm-password" type="password" />
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button>Save Changes</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                        <TabsContent value="orders">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Order History</CardTitle>
                                    <CardDescription>View your past orders and their status</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="mb-4 p-4 border rounded">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="font-semibold">Order #{1000 + i}</span>
                                                <Badge variant={i % 2 === 0 ? "default" : "secondary"}>
                                                    {i % 2 === 0 ? "Delivered" : "In Transit"}
                                                </Badge>
                                            </div>
                                            <p className="text-sm text-muted-foreground">Placed on: {new Date().toLocaleDateString()}</p>
                                            <p className="text-sm font-medium">Total: ${(50 + i * 10).toFixed(2)}</p>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="addresses">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Addresses</CardTitle>
                                    <CardDescription>Manage your shipping and billing addresses</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="p-4 border rounded">
                                            <h3 className="font-semibold mb-2">Shipping Address</h3>
                                            <p>John Doe</p>
                                            <p>123 Main St</p>
                                            <p>Anytown, ST 12345</p>
                                            <p>United States</p>
                                            <Button variant="outline" size="sm" className="mt-2">Edit</Button>
                                        </div>
                                        <div className="p-4 border rounded">
                                            <h3 className="font-semibold mb-2">Billing Address</h3>
                                            <p>John Doe</p>
                                            <p>456 Oak Ave</p>
                                            <p>Another City, ST 67890</p>
                                            <p>United States</p>
                                            <Sheet>
                                                <SheetTrigger asChild>
                                                    <Button variant="outline" size="sm" className="mt-2">Edit</Button>
                                                </SheetTrigger>
                                                <SheetContent>
                                                    <SheetHeader>
                                                        <SheetTitle>Edit Address</SheetTitle>
                                                        <SheetDescription>
                                                            Make changes to your address here.
                                                        </SheetDescription>
                                                    </SheetHeader>
                                                    <div className="flex flex-col gap-4 py-4">
                                                        <div className="grid grid-cols-4 items-center gap-4">
                                                            <label htmlFor="new-name" className="text-left">Name</label>
                                                            <Input id="new-name" className="col-span-3" />
                                                        </div>
                                                        <div className="grid grid-cols-4 items-center gap-4">
                                                            <label htmlFor="new-street" className="text-left">Street</label>
                                                            <Input id="new-street" className="col-span-3" />
                                                        </div>
                                                        <div className="grid grid-cols-4 items-center gap-4">
                                                            <label htmlFor="new-city" className="text-left">City</label>
                                                            <Input id="new-city" className="col-span-3" />
                                                        </div>
                                                        <div className="grid grid-cols-4 items-center gap-4">
                                                            <label htmlFor="new-state" className="text-left">State</label>
                                                            <Input id="new-state" className="col-span-3" />
                                                        </div>
                                                        <div className="grid grid-cols-4 items-center gap-4">
                                                            <label htmlFor="new-zip" className="text-left">ZIP Code</label>
                                                            <Input id="new-zip" className="col-span-3" />
                                                        </div>
                                                        <div className="grid grid-cols-4 items-center gap-4">
                                                            <label htmlFor="new-country" className="text-left">Country</label>
                                                            <Input id="new-country" className="col-span-3" />
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <Button className="mt-4">Save Address</Button>
                                                    </div>
                                                </SheetContent>
                                            </Sheet>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Sheet>
                                        <SheetTrigger asChild>
                                            <Button>Add New Address</Button>
                                        </SheetTrigger>
                                        <SheetContent>
                                            <SheetHeader>
                                                <SheetTitle>Add New Address</SheetTitle>
                                                <SheetDescription>
                                                    Enter the details for your new address.
                                                </SheetDescription>
                                            </SheetHeader>
                                            <div className="flex flex-col gap-4 py-4">
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <label htmlFor="new-name" className="text-left">Name</label>
                                                    <Input id="new-name" className="col-span-3" />
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <label htmlFor="new-street" className="text-left">Street</label>
                                                    <Input id="new-street" className="col-span-3" />
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <label htmlFor="new-city" className="text-left">City</label>
                                                    <Input id="new-city" className="col-span-3" />
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <label htmlFor="new-state" className="text-left">State</label>
                                                    <Input id="new-state" className="col-span-3" />
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <label htmlFor="new-zip" className="text-left">ZIP Code</label>
                                                    <Input id="new-zip" className="col-span-3" />
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <label htmlFor="new-country" className="text-left">Country</label>
                                                    <Input id="new-country" className="col-span-3" />
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <Button className="mt-4">Save Address</Button>
                                            </div>
                                        </SheetContent>
                                    </Sheet>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                        <TabsContent value="payment">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Payment Methods</CardTitle>
                                    <CardDescription>Manage your payment options</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="p-4 border rounded flex items-center justify-between">
                                            <div className="flex items-center">
                                                <CreditCard className="mr-2 h-5 w-5" />
                                                <span>Visa ending in 1234</span>
                                            </div>
                                            <Button variant="outline" size="sm">Remove</Button>
                                        </div>
                                        <div className="p-4 border rounded flex items-center justify-between">
                                            <div className="flex items-center">
                                                <CreditCard className="mr-2 h-5 w-5" />
                                                <span>Mastercard ending in 5678</span>
                                            </div>
                                            <Button variant="outline" size="sm">Remove</Button>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button>Add New Payment Method</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                        <TabsContent value="wishlist">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Wishlist</CardTitle>
                                    <CardDescription>Items you&apos;ve saved for later</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className="mb-4 p-4 border rounded flex items-center space-x-4">
                                            <img src={'/1.jpg'} alt={`Product ${i + 1}`} className="w-20 h-20 object-cover" />
                                            <div className="flex-1">
                                                <h3 className="font-semibold">Product {i + 1}</h3>
                                                <p className="text-sm text-muted-foreground">Category</p>
                                                <p className="font-medium">${(20 + i * 5).toFixed(2)}</p>
                                            </div>
                                            <Button>Add to Cart</Button>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="reviews">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Your Reviews</CardTitle>
                                    <CardDescription>Reviews you&apos;ve left on products</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className="mb-4 p-4 border rounded">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-semibold">Product {i + 1}</h3>
                                                <div className="flex">
                                                    {[...Array(5)].map((_, j) => (
                                                        <Star key={j} className={`h-4 w-4 ${j < 4 - i ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-sm text-muted-foreground">Reviewed on: {new Date().toLocaleDateString()}</p>
                                            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </main>
            </div>
        </div>
    )
}