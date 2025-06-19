import { DiscountInput } from "@/types/discountTypes";
import { FC } from "react";

interface Props {
    discounts: DiscountInput[];
    setDiscounts: (d: DiscountInput[]) => void;
}

export const DiscountSelector: FC<Props> = ({ discounts, setDiscounts }) => {
    const updateDiscount = (type: DiscountInput["type"], key: string, value: any) => {
        const updated = discounts.map((d) =>
            d.type === type ? { ...d, [key]: value } : d
        );
        setDiscounts(updated);
    };

    const addDiscountType = (type: DiscountInput["type"]) => {
        if (discounts.find((d) => d.type === type)) return;
        setDiscounts([...discounts, { type } as DiscountInput]);
    };

    const removeDiscount = (type: DiscountInput["type"]) => {
        setDiscounts(discounts.filter((d) => d.type !== type));
    };

    return (
        <div className="bg-white shadow-md rounded p-4 space-y-4">
            <h2 className="text-xl font-semibold">🎁 Discount Campaigns</h2>

            <div className="flex flex-wrap gap-2">
                {[
                    "fixed_amount",
                    "percentage",
                    "category_percentage",
                    "point",
                    "seasonal",
                ].map((t) => (
                    <button
                        key={t}
                        onClick={() => addDiscountType(t as any)}
                        className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-sm hover:bg-indigo-200"
                    >
                        + {t}
                    </button>
                ))}
            </div>

            {discounts.map((d) => (
                <div
                    key={d.type}
                    className="border p-3 rounded-md bg-gray-50 flex flex-col gap-2"
                >
                    <div className="flex justify-between items-center">
                        <p className="font-medium">{d.type}</p>
                        <button
                            onClick={() => removeDiscount(d.type)}
                            className="text-red-600 text-sm hover:underline"
                        >
                            Remove
                        </button>
                    </div>

                    {/* Dynamic input by type */}
                    {d.type === "fixed_amount" && (
                        <input
                            type="number"
                            placeholder="Amount"
                            onChange={(e) => updateDiscount(d.type, "amount", +e.target.value)}
                            className="border rounded p-2"
                        />
                    )}
                    {d.type === "percentage" && (
                        <input
                            type="number"
                            placeholder="Percentage (0-100)"
                            onChange={(e) =>
                                updateDiscount(d.type, "percentage", +e.target.value)
                            }
                            className="border rounded p-2"
                        />
                    )}
                    {d.type === "category_percentage" && (
                        <div className="flex gap-2">
                            <select
                                onChange={(e) =>
                                    updateDiscount(d.type, "category", e.target.value)
                                }
                                className="border rounded p-2"
                            >
                                <option value="">Select category</option>
                                <option value="Clothing">Clothing</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Electronics">Electronics</option>
                            </select>
                            <input
                                type="number"
                                placeholder="%"
                                onChange={(e) =>
                                    updateDiscount(d.type, "percentage", +e.target.value)
                                }
                                className="border rounded p-2"
                            />
                        </div>
                    )}
                    {d.type === "point" && (
                        <input
                            type="number"
                            placeholder="Customer points"
                            onChange={(e) => updateDiscount(d.type, "points", +e.target.value)}
                            className="border rounded p-2"
                        />
                    )}
                    {d.type === "seasonal" && (
                        <div className="flex gap-2">
                            <input
                                type="number"
                                placeholder="Every X THB"
                                onChange={(e) =>
                                    updateDiscount(d.type, "everyX", +e.target.value)
                                }
                                className="border rounded p-2"
                            />
                            <input
                                type="number"
                                placeholder="Discount Y THB"
                                onChange={(e) =>
                                    updateDiscount(d.type, "discountY", +e.target.value)
                                }
                                className="border rounded p-2"
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
