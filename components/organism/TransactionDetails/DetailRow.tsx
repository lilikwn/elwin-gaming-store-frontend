import { IDRCurrencyFormatter } from "@/utils";

interface DetailRowProps {
    label: string;
    value: string|number;
    additionalClass?: string;
}

function DetailRow({label, value, additionalClass}: DetailRowProps) {
    const valueFormatter = typeof(value) === "number" ? IDRCurrencyFormatter(value) : value
  return (
    <p className="text-lg color-palette-1 mb-20">{label} <span
        className={`purchase-details ${additionalClass}`}>{valueFormatter}</span></p>
  )
}

export default DetailRow