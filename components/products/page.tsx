"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  Search,
  Download,
  Plus,
  Package,
  CheckCircle2,
  Clock3,
  Eye,
  Mail,
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Premium Grade Saffron",
    sku: "SKU-SAF-001",
    category: "Spices & Herbs",
    capacity: "500 kg/mo",
    verification: "Verified",
    performance: "1,240",
    messages: "45",
    status: "Published",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&q=80",

    buyerRequirement: {
      buyer: "Global Foods Pvt. Ltd.",
      quantity: "300 kg",
      budget: "₹18,00,000",
      delivery: "30 Days",
      location: "Ahmedabad, Gujarat",
      description:
        "Buyer requires premium quality saffron for food manufacturing and export.",
    },

    supplierRequirement: {
      supplier: "Premium Spice Suppliers",
      quantity: "500 kg",
      minimumOrder: "100 kg",
      delivery: "20–25 Days",
      location: "Kashmir, India",
      description:
        "Supplier can provide premium grade saffron with required quality certification.",
    },

    matchScore: {
      overall: "94%",
      product: "98%",
      quantity: "95%",
      budget: "92%",
      delivery: "91%",
    },
  },

  {
    id: 2,
    name: "Industrial Cotton Canvas",
    sku: "SKU-TEX-082",
    category: "Textiles",
    capacity: "10,000 m/mo",
    verification: "Pending",
    performance: "85",
    messages: "2",
    status: "Draft",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&q=80",

    buyerRequirement: {
      buyer: "Textile Manufacturing Ltd.",
      quantity: "5,000 meters",
      budget: "₹12,00,000",
      delivery: "45 Days",
      location: "Surat, Gujarat",
      description:
        "Buyer requires industrial grade cotton canvas for manufacturing.",
    },

    supplierRequirement: {
      supplier: "Gujarat Textile Suppliers",
      quantity: "10,000 meters",
      minimumOrder: "1,000 meters",
      delivery: "30–40 Days",
      location: "Surat, Gujarat",
      description:
        "Supplier provides high-quality industrial cotton canvas.",
    },

    matchScore: {
      overall: "88%",
      product: "94%",
      quantity: "90%",
      budget: "85%",
      delivery: "83%",
    },
  },

  {
    id: 3,
    name: "CNC Milling Axis Part",
    sku: "SKU-MAC-114",
    category: "Machinery Components",
    capacity: "1,500 units/mo",
    verification: "Action Required",
    performance: "-",
    messages: "-",
    status: "Disabled",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&q=80",

    buyerRequirement: {
      buyer: "Precision Engineering Ltd.",
      quantity: "800 units",
      budget: "₹9,00,000",
      delivery: "25 Days",
      location: "Vadodara, Gujarat",
      description:
        "Buyer requires precision CNC milling components for industrial machinery.",
    },

    supplierRequirement: {
      supplier: "Advanced Machine Parts",
      quantity: "1,500 units",
      minimumOrder: "200 units",
      delivery: "20–25 Days",
      location: "Rajkot, Gujarat",
      description:
        "Supplier manufactures precision CNC components according to buyer specifications.",
    },

    matchScore: {
      overall: "82%",
      product: "88%",
      quantity: "91%",
      budget: "76%",
      delivery: "85%",
    },
  },

  {
    id: 4,
    name: "Organic Turmeric Powder",
    sku: "SKU-SPC-204",
    category: "Spices & Herbs",
    capacity: "2,000 kg/mo",
    verification: "Verified",
    performance: "980",
    messages: "31",
    status: "Published",
    image:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=500&q=80",

    buyerRequirement: {
      buyer: "Healthy Foods India",
      quantity: "1,000 kg",
      budget: "₹6,00,000",
      delivery: "20 Days",
      location: "Ahmedabad, Gujarat",
      description:
        "Buyer requires organic turmeric powder with quality and purity certification.",
    },

    supplierRequirement: {
      supplier: "Organic Spice Traders",
      quantity: "2,000 kg",
      minimumOrder: "500 kg",
      delivery: "15–20 Days",
      location: "Unjha, Gujarat",
      description:
        "Supplier provides certified organic turmeric powder for food processing.",
    },

    matchScore: {
      overall: "96%",
      product: "99%",
      quantity: "96%",
      budget: "94%",
      delivery: "95%",
    },
  },

  {
    id: 5,
    name: "Premium Black Pepper",
    sku: "SKU-SPC-205",
    category: "Spices & Herbs",
    capacity: "1,200 kg/mo",
    verification: "Verified",
    performance: "760",
    messages: "22",
    status: "Published",
    image:
      "https://images.unsplash.com/photo-1599909533730-f9d5b5f9c2b8?w=500&q=80",

    buyerRequirement: {
      buyer: "Global Spice Imports",
      quantity: "600 kg",
      budget: "₹4,50,000",
      delivery: "25 Days",
      location: "Mumbai, Maharashtra",
      description:
        "Buyer requires premium black pepper for food processing and export.",
    },

    supplierRequirement: {
      supplier: "Indian Spice Suppliers",
      quantity: "1,200 kg",
      minimumOrder: "250 kg",
      delivery: "20–25 Days",
      location: "Kerala, India",
      description:
        "Supplier provides premium quality black pepper with required certifications.",
    },

    matchScore: {
      overall: "93%",
      product: "97%",
      quantity: "94%",
      budget: "90%",
      delivery: "91%",
    },
  },
];

export default function ProductsPage() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [status, setStatus] = useState("All Statuses");

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.sku.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All Categories" || product.category === category;

    const matchesStatus =
      status === "All Statuses" || product.status === status;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-[#faf9fc]">
      <div className="p-6">

        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-[28px] font-bold text-[#1d1d1f]">
              Products
            </h1>

            <p className="mt-1 text-[13px] text-[#777]">
              Manage your products and track their performance.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 rounded-md border border-[#dedde3] bg-white px-4 py-2 text-[13px] font-medium text-[#444] hover:bg-[#f7f7f8]">
              <Download size={16} />
              Export
            </button>

            <button
  onClick={() => router.push("/supplier/products/create")}
  className="flex items-center gap-2 rounded-md bg-[#171717] px-4 py-2 text-[13px] font-medium text-white hover:bg-[#292929]"
>
  <Plus size={16} />
  Add Product
</button>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-4 gap-4">

          <StatCard
            title="Total Products"
            value="5"
            icon={<Package size={18} />}
          />

          <StatCard
            title="Published"
            value="3"
            icon={<CheckCircle2 size={18} />}
          />

          <StatCard
            title="Pending Verification"
            value="1"
            icon={<Clock3 size={18} />}
          />

          <StatCard
            title="Total Views"
            value="3,065"
            icon={<Eye size={18} />}
          />

        </div>

        {/* Filters */}
        <div className="mb-4 rounded-md border border-[#e5e3e9] bg-white p-4">

          <div className="flex items-center gap-3">

            {/* Search */}
            <div className="relative flex-1">
              <Search
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]"
              />

              <input
                type="text"
                placeholder="Search products or SKU..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-10 w-full rounded-md border border-[#e2e0e6] bg-white pl-9 pr-3 text-[13px] outline-none focus:border-[#999]"
              />
            </div>

            {/* Category */}
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="h-10 appearance-none rounded-md border border-[#e2e0e6] bg-white px-4 pr-9 text-[13px] outline-none"
              >
                <option>All Categories</option>
                <option>Spices & Herbs</option>
                <option>Textiles</option>
                <option>Machinery Components</option>
              </select>

              <ChevronDown
                size={15}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#888]"
              />
            </div>

            {/* Status */}
            <div className="relative">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="h-10 appearance-none rounded-md border border-[#e2e0e6] bg-white px-4 pr-9 text-[13px] outline-none"
              >
                <option>All Statuses</option>
                <option>Published</option>
                <option>Draft</option>
                <option>Disabled</option>
              </select>

              <ChevronDown
                size={15}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#888]"
              />
            </div>

            <button className="flex h-10 items-center gap-2 rounded-md border border-[#e2e0e6] px-4 text-[13px] text-[#555]">
              <Filter size={15} />
              Filters
            </button>

          </div>
        </div>

        <div className="overflow-hidden rounded-md border border-[#e5e3e9] bg-white">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[1000px]">

              <thead>
                <tr className="border-b border-[#e8e6eb] bg-[#fafafa]">

                  <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-[#777]">
                    Product
                  </th>

                  <th className="px-3 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-[#777]">
                    Category
                  </th>

                  <th className="px-3 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-[#777]">
                    Capacity
                  </th>

                  <th className="px-3 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-[#777]">
                    Verification
                  </th>

                  <th className="px-3 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-[#777]">
                    Performance
                  </th>

                  <th className="px-3 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-[#777]">
                    Messages
                  </th>

                  <th className="px-3 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-[#777]">
                    Status
                  </th>

                  <th className="px-3 py-3 text-center text-[11px] font-semibold uppercase tracking-wide text-[#777]">
                    Action
                  </th>

                </tr>
              </thead>

              <tbody>

                {filteredProducts.map((product) => (

                  <tr
                    key={product.id}
                    className="border-b border-[#eee] last:border-0 hover:bg-[#fafafa]"
                  >

                    
                    <td className="px-4 py-3">

                      <div className="flex items-center gap-3">

                        <div className="h-11 w-11 overflow-hidden rounded-md border border-[#e5e3e9] bg-[#f7f7f7]">

                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover"
                          />

                        </div>

                        <div>
                          <p className="text-[13px] font-semibold text-[#222]">
                            {product.name}
                          </p>

                          <p className="mt-0.5 text-[11px] text-[#999]">
                            {product.sku}
                          </p>
                        </div>

                      </div>

                    </td>

                    {/* Category */}
                    <td className="px-3 py-3 text-[13px] text-[#555]">
                      {product.category}
                    </td>

                    {/* Capacity */}
                    <td className="px-3 py-3 text-[13px] text-[#555]">
                      {product.capacity}
                    </td>

                    {/* Verification */}
                    <td className="px-3 py-3">
                      <VerificationBadge
                        verification={product.verification}
                      />
                    </td>

                    {/* Performance */}
                    <td className="px-3 py-3">

                      <div className="flex items-center gap-1.5">

                        <Eye size={14} className="text-[#999]" />

                        <span className="text-[13px] text-[#555]">
                          {product.performance}
                        </span>

                      </div>

                    </td>

                    {/* Messages */}
                    <td className="px-3 py-3">

                      <div className="flex items-center gap-1.5">

                        <Mail size={14} className="text-[#999]" />

                        <span className="text-[13px] text-[#555]">
                          {product.messages}
                        </span>

                      </div>

                    </td>

                    <td className="px-3 py-3">
                      <StatusBadge status={product.status} />
                    </td>

                    <td className="px-3 py-3 text-center">

                      <button
                        onClick={() =>
                          router.push(`/supplier/products/${product.id}`)
                        }
                        className="rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                        title="View Product Details"
                      >
                        <MoreHorizontal size={16} />
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          <div className="flex items-center justify-between border-t border-[#e8e6eb] px-4 py-3">

            <p className="text-[12px] text-[#888]">
              Showing {filteredProducts.length} of {products.length} products
            </p>

            <div className="flex items-center gap-1">

              <PageButton>
                <ChevronLeft size={15} />
              </PageButton>

              <PageButton active>1</PageButton>

              <PageButton>
                <ChevronRight size={15} />
              </PageButton>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-md border border-[#e5e3e9] bg-white p-4">

      <div className="mb-3 flex items-center justify-between">

        <p className="text-[12px] text-[#777]">
          {title}
        </p>

        <div className="text-[#888]">
          {icon}
        </div>

      </div>

      <p className="text-[24px] font-bold text-[#222]">
        {value}
      </p>

    </div>
  );
}


function VerificationBadge({
  verification,
}: {
  verification: string;
}) {
  const styles = {
    Verified: "bg-[#eef8f0] text-[#348447]",
    Pending: "bg-[#fff8e8] text-[#a77918]",
    "Action Required": "bg-[#fff0f0] text-[#c44848]",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-medium ${
        styles[verification as keyof typeof styles] ||
        "bg-gray-100 text-gray-600"
      }`}
    >
      {verification}
    </span>
  );
}


function StatusBadge({
  status,
}: {
  status: string;
}) {
  const styles = {
    Published: "bg-[#eef8f0] text-[#348447]",
    Draft: "bg-[#f1f1f3] text-[#666]",
    Disabled: "bg-[#fff0f0] text-[#c44848]",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-medium ${
        styles[status as keyof typeof styles] ||
        "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}


function PageButton({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      className={`flex h-7 min-w-7 items-center justify-center rounded-md border px-2 text-[11px] ${
        active
          ? "border-[#222] bg-[#222] text-white"
          : "border-[#e1dfe5] bg-white text-[#777] hover:bg-[#f7f7f7]"
      }`}
    >
      {children}
    </button>
  );
}