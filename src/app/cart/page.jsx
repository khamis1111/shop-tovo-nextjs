/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


export default function Component() {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Product 1", price: 19.99, quantity: 2, image: "/1.jpg" },
        { id: 2, name: "Product 2", price: 29.99, quantity: 1, image: "/1.jpg" },
        { id: 3, name: "Product 3", price: 39.99, quantity: 3, image: "/1.jpg" },
        { id: 3, name: "Product 3", price: 39.99, quantity: 3, image: "/1.jpg" },
        { id: 3, name: "Product 3", price: 39.99, quantity: 3, image: "/1.jpg" },
    ])
    const [couponCode, setCouponCode] = useState("")
    const [discount, setDiscount] = useState(0)

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity >= 1) {
            setCartItems(cartItems.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            ))
        }
    }

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id))
    }

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const total = subtotal - discount

    const applyCoupon = () => {
        // This is a mock coupon application. In a real app, you'd validate the coupon code server-side.
        if (couponCode.toLowerCase() === "discount10") {
            setDiscount(subtotal * 0.1)
        } else {
            setDiscount(0)
        }
    }

    return (
        <div className="container mb-10">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {cartItems.length === 0 ? (
                <div className="flex items-center gap-5 bg-bgColor p-2 border relative before:absolute before:top-0 before:left-0 before:w-full before:h-[2px] before:bg-mainColor">
                    <ShoppingCart />
                    <p className="font-semibold capitalize text-base">Your cart is currently empty.</p>
                </div>
            ) : (
                <div className="flex flex-col md:flex-row gap-8">
                    <Card className="flex-grow space-y-4">
                        <CardContent>
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex items-center justify-between flex-wrap space-x-4 border-b pb-4">
                                    <div className="flex items-center gap-2">
                                        <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
                                        <div className="flex-grow">
                                            <h2 className="font-semibold">{item.name}</h2>
                                            <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 justify-end w-full lg:w-auto">
                                        <div className="flex items-center space-x-2">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            >
                                                <Minus className="h-4 w-4" />
                                            </Button>
                                            <Input
                                                type="number"
                                                value={item.quantity}
                                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                                className="w-16 text-center"
                                            />
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            >
                                                <Plus className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <Button variant="destructive" size="icon" onClick={() => removeItem(item.id)}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                    <Card className="w-full h-max md:w-80 md:sticky top-10 ">
                        <CardHeader>
                            <CardTitle>Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Discount</span>
                                    <span>-${discount.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between font-bold">
                                    <span>Total</span>
                                    <span className='text-mainColor'>${total.toFixed(2)}</span>
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        type="text"
                                        placeholder="Enter coupon code"
                                        value={couponCode}
                                        onChange={(e) => setCouponCode(e.target.value)}
                                    />
                                    <Button onClick={applyCoupon} className="w-full">
                                        Apply Coupon
                                    </Button>
                                    <Button className="w-full mt-5">Proceed to Checkout</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    )
}