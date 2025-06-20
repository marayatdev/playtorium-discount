import { FC } from "react";
import { productList } from "@/data/products";
import { PlusCircle, Trash2 } from "lucide-react";
import { CartItem } from "@/types/discountTypes";

interface Props {
    cart: CartItem[];
    setCart: (items: CartItem[]) => void;
}

export const Cart: FC<Props> = ({ cart, setCart }) => {
    const addToCart = (item: CartItem) => {
        setCart([...cart, item]);
    };

    const removeItem = (index: number) => {
        const updated = [...cart];
        updated.splice(index, 1);
        setCart(updated);
    };

    return (
        <div className="bg-white shadow-md rounded p-4 space-y-6">
            <h2 className="text-xl font-semibold">🛒 Cart</h2>

            {/* รายการสินค้าให้เลือก */}
            <div>
                <h3 className="font-medium mb-2">Product List</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {productList.map((item, index) => (
                        <div
                            key={index}
                            className="border rounded p-3 flex justify-between items-center"
                        >
                            <div>
                                <p className="font-medium">{item.name}</p>
                                <p className="text-sm text-gray-500">
                                    {item.category} - {item.price} THB
                                </p>
                            </div>
                            <button
                                onClick={() => addToCart(item)}
                                className="text-green-600 hover:text-green-800"
                            >
                                <PlusCircle size={20} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* แสดงตะกร้า */}
            <div>
                <h3 className="font-medium mb-2">Items in Cart</h3>
                {cart.length === 0 ? (
                    <p className="text-gray-500">No items in cart.</p>
                ) : (
                    <ul className="divide-y text-sm">
                        {cart.map((item, index) => (
                            <li key={index} className="py-2 flex justify-between items-center">
                                <div>
                                    <p>{item.name} ({item.category})</p>
                                    <p className="text-gray-500">{item.price} THB</p>
                                </div>
                                <button
                                    onClick={() => removeItem(index)}
                                    className="text-red-600 hover:text-red-800"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
