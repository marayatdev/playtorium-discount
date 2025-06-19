import { DiscountResult } from "@/types/discountTypes";
import { FC } from "react";

interface Props {
    result: DiscountResult;
}

export const Summary: FC<Props> = ({ result }) => {
    return (
        <div className="bg-white shadow-md rounded p-4 space-y-4">
            <h2 className="text-xl font-semibold text-green-700">💰 Summary</h2>

            <div className="text-gray-700">
                <p>
                    <span className="font-medium">Total Before Discount:</span>{" "}
                    {result.totalBefore.toFixed(2)} THB
                </p>
                <p>
                    <span className="font-medium">Total After Discount:</span>{" "}
                    {result.totalAfter.toFixed(2)} THB
                </p>
            </div>

            <div>
                <h3 className="font-semibold text-sm mb-2">🧾 Applied Discounts</h3>
                {result.breakdown.length === 0 && (
                    <p className="text-gray-500 text-sm">No discounts applied.</p>
                )}
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {result.breakdown.map((b, idx) => (
                        <li key={idx}>
                            <span className="capitalize">{b.type.replace(/_/g, " ")}:</span>{" "}
                            -{b.amount.toFixed(2)} THB
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
