import { IDRCurrencyFormatter } from "@/utils";
import Image from "next/image";
import { ReactNode } from "react";

interface CategoryCardProps {
    icon: 'overview-category-icon-1' | 'overview-category-icon-2' | 'overview-category-icon-3' ;
    children: ReactNode;
    nominal: number;
}

function CategoryCard({icon, children, nominal}: CategoryCardProps) {
  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
        <div className="categories-card">
            <div className="d-flex align-items-center mb-24">
                <Image width={60} height={60} alt="icon" src={`/assets/icon/${icon}.svg`} />
                <p className="color-palette-1 mb-0 ms-12">{children}</p>
            </div>
            <div>
                <p className="text-sm color-palette-2 mb-1">Total Spent</p>
                <p className="text-2xl color-palette-1 fw-medium m-0">{IDRCurrencyFormatter(nominal)}</p>
            </div>
        </div>
    </div>
  )
}

export default CategoryCard