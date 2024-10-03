/* eslint-disable @next/next/no-img-element */
import { Edit2, ShoppingCart, Trash2 } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const CartDropdown = () => {
    const items = [
        {
            id: 1,
            name: "Fresh Meat laculis",
            price: 60.00,
            quantity: 1,
            image: "/1.jpg"
        },
        {
            id: 2,
            name: "Fresh Meat laculis",
            price: 60.00,
            quantity: 1,
            image: "/1.jpg"
        },
    ]

    const itemCount = items.length
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    return (
        <div className='text-sm'>
            <div className="p-4 border-b">
                <h2 className="text-base font-semibold">
                    There {itemCount === 1 ? 'is' : 'are'} <span className='text-mainColor'>{itemCount} item(s)</span> in your cart:
                </h2>
            </div>
            <div className="p-3 max-h-96 overflow-y-auto">
                {itemCount === 0 ? (
                    <div className="flex flex-col items-center justify-center py-8">
                        <ShoppingCart className="w-16 h-16 text-gray-400 mb-4" />
                        <p className="text-gray-500">Your cart is empty</p>
                    </div>
                ) : (
                    items.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4 mb-4">
                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                            <div className="flex-1">
                                <h3 className="font-semibold">{item.name}</h3>
                                <p className="text-sm text-gray-600">
                                    {item.quantity} x ${item.price.toFixed(2)}
                                </p>
                            </div>
                            <div className="flex space-x-2">
                                <button className="text-gray-500 hover:text-gray-700">
                                    <Edit2 size={18} />
                                </button>
                                <button className="text-gray-500 hover:text-gray-700">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="p-4 border-t">
                <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold">SUBTOTAL:</span>
                    <span className="font-semibold text-mainColor">${subtotal.toFixed(2)}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <Link href={'/cart'}>
                        <Button variant="outline" className="w-full text-sm" disabled={itemCount === 0}>
                            VIEW CART
                        </Button>
                    </Link>
                    <Button className="w-full text-sm" disabled={itemCount === 0}>
                        CHECK OUT
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CartDropdown
