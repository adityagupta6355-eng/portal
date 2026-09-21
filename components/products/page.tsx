"use client";

import { useState } from "react";
import Link from "next/link";
import { generateProductsPDF } from "@/utils/exportPdf";
import BackButton from "@/components/common/BackButton";

import {
  Search,
  Download,
  Plus,
  Package,
  CheckCircle2,
  Eye,
  Mail,
  X,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Building2,
  Pencil,
  EyeOff,
} from "lucide-react";

interface ProductItem {
  id: number;
  name: string;
  sku: string;
  category: string;
  capacity: string;
  verification: string;
  performance: string;
  messages: string;
  status: string;
  image?: string;
  buyerRequirement: {
    buyer: string;
    quantity: string;
    budget: string;
    delivery: string;
    location: string;
    description: string;
  };
  supplierRequirement: {
    supplier: string;
    quantity: string;
    minimumOrder: string;
    delivery: string;
    location: string;
    description: string;
  };
  matchScore: {
    overall: string;
    product: string;
    quantity: string;
    budget: string;
    delivery: string;
  };
}

const initialProducts: ProductItem[] = [
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
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80",
    buyerRequirement: {
      buyer: "Global Foods Pvt. Ltd.",
      quantity: "300 kg",
      budget: "USD 54,000",
      delivery: "30 Days",
      location: "Rotterdam, Netherlands",
      description:
        "Buyer requires premium quality Grade A saffron for food manufacturing and wholesale export.",
    },
    supplierRequirement: {
      supplier: "ABC Spices Pvt. Ltd.",
      quantity: "500 kg",
      minimumOrder: "100 kg",
      delivery: "20–25 Days",
      location: "Kashmir, India",
      description:
        "Supplier provides laboratory-certified ISO 3632 grade saffron with moisture < 12%.",
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
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80",
    buyerRequirement: {
      buyer: "Textile Manufacturing Ltd.",
      quantity: "5,000 meters",
      budget: "USD 24,000",
      delivery: "45 Days",
      location: "Dubai, UAE",
      description:
        "Buyer requires industrial grade cotton canvas for manufacturing heavy bags.",
    },
    supplierRequirement: {
      supplier: "ABC Spices Pvt. Ltd.",
      quantity: "10,000 meters",
      minimumOrder: "1,000 meters",
      delivery: "30–40 Days",
      location: "Surat, Gujarat",
      description:
        "Supplier provides high-quality industrial cotton canvas 450 GSM.",
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
    buyerRequirement: {
      buyer: "Precision Engineering Ltd.",
      quantity: "800 units",
      budget: "USD 32,000",
      delivery: "25 Days",
      location: "Hamburg, Germany",
      description:
        "Buyer requires precision CNC milling components for industrial machinery.",
    },
    supplierRequirement: {
      supplier: "ABC Spices Pvt. Ltd.",
      quantity: "1,500 units",
      minimumOrder: "200 units",
      delivery: "20–25 Days",
      location: "Rajkot, Gujarat",
      description:
        "Supplier manufactures precision CNC components according to buyer CAD models.",
    },
    matchScore: {
      overall: "76%",
      product: "85%",
      quantity: "78%",
      budget: "70%",
      delivery: "72%",
    },
  },
  {
    id: 4,
    name: "Premium Basmati Rice (1121 Steam)",
    sku: "SKU-RIC-004",
    category: "Food & Agriculture",
    capacity: "2,500 MT/mo",
    verification: "Verified",
    performance: "3,120",
    messages: "89",
    status: "Published",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80",
    buyerRequirement: {
      buyer: "Al-Khaleej Grain Imports",
      quantity: "1,000 MT",
      budget: "USD 900,000",
      delivery: "20 Days",
      location: "Riyadh, Saudi Arabia",
      description:
        "Buyer requires 1121 Steam Basmati Rice with minimum average grain length 8.35mm.",
    },
    supplierRequirement: {
      supplier: "ABC Spices Pvt. Ltd.",
      quantity: "2,500 MT",
      minimumOrder: "500 MT",
      delivery: "14–20 Days",
      location: "Punjab, India",
      description:
        "Naturally aged for 18 months. Export grade packaging with full phytosanitary certs.",
    },
    matchScore: {
      overall: "96%",
      product: "99%",
      quantity: "95%",
      budget: "94%",
      delivery: "96%",
    },
  },
];

export default function ProductsPage() {
  const [productsList, setProductsList] =
    useState<ProductItem[]>(initialProducts);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [status, setStatus] = useState("All Statuses");
  const [selectedProduct, setSelectedProduct] =
    useState<ProductItem | null>(null);
  const [editingProduct, setEditingProduct] =
    useState<ProductItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [editFormData, setEditFormData] = useState({
    name: "",
    sku: "",
    category: "",
    capacity: "",
    status: "Published",
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleToggleUnlist = (productId: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    setProductsList((prev) =>
      prev.map((item) => {
        if (item.id === productId) {
          const isPublished = item.status === "Published";
          const newStatus = isPublished ? "Unlisted" : "Published";

          showToast(
            isPublished
              ? `"${item.name}" has been unlisted from active discovery.`
              : `"${item.name}" has been relisted successfully!`
          );

          if (selectedProduct?.id === productId) {
            setSelectedProduct({ ...selectedProduct, status: newStatus });
          }

          return { ...item, status: newStatus };
        }

        return item;
      })
    );
  };

  const handleOpenEdit = (product: ProductItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    setEditingProduct(product);
    setEditFormData({
      name: product.name,
      sku: product.sku,
      category: product.category,
      capacity: product.capacity,
      status: product.status,
    });
  };

  const handleSaveProductEdit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!editingProduct) return;

    setProductsList((prev) =>
      prev.map((item) => {
        if (item.id === editingProduct.id) {
          const updated = {
            ...item,
            name: editFormData.name,
            sku: editFormData.sku,
            category: editFormData.category,
            capacity: editFormData.capacity,
            status: editFormData.status,
          };

          if (selectedProduct?.id === item.id) {
            setSelectedProduct(updated);
          }

          return updated;
        }

        return item;
      })
    );

    setEditingProduct(null);
    showToast("Product updated successfully!");
  };

  const filteredProducts = productsList.filter((product) => {
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
    <div className="w-full space-y-6">
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-2.5 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-xs font-semibold text-white shadow-xl animate-in fade-in slide-in-from-top-3">
          <CheckCircle2
            size={16}
            className="shrink-0 text-emerald-400"
          />
          <span>{toastMessage}</span>
          <button
            type="button"
            onClick={() => setToastMessage(null)}
            className="ml-2 text-slate-400 hover:text-white"
          >
            <X size={14} />
          </button>
        </div>
      )}

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="mb-2">
            <BackButton
              label="Back to Dashboard"
              fallbackHref="/supplier"
            />
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            My Products
          </h1>

          <p className="mt-1 text-xs text-slate-500">
            Manage your commodity catalog, specifications, and AI buyer
            matching
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => generateProductsPDF(filteredProducts)}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-xs transition hover:bg-slate-50"
            title="Download PDF Catalog"
          >
            <Download size={14} className="text-slate-500" />
            Export PDF
          </button>

          <Link
            href="/supplier/products/create"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3.5 py-2 text-xs font-semibold text-white shadow-xs transition hover:bg-indigo-500"
          >
            <Plus size={14} />
            Add Product
          </Link>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
        <div className="flex flex-col justify-between gap-3 border-b border-slate-100 bg-slate-50/50 p-4 sm:flex-row sm:items-center">
          <div className="relative flex-1 sm:max-w-xs">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search product or SKU..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white py-1.5 pl-9 pr-3 text-xs text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-hidden"
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 focus:border-indigo-500 focus:outline-hidden"
            >
              <option value="All Statuses">All Statuses</option>
              <option value="Published">Published</option>
              <option value="Unlisted">Unlisted</option>
              <option value="Draft">Draft</option>
              <option value="Disabled">Disabled</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="px-5 py-3">Product Name &amp; SKU</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Capacity</th>
                <th className="px-4 py-3">Verification</th>
                <th className="px-4 py-3">Views</th>
                <th className="px-4 py-3">Inquiries</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="group cursor-pointer transition-colors hover:bg-slate-50/80"
                >
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3.5">
                      {product.image ? (
                        <div className="group relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        </div>
                      ) : (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-indigo-50 text-indigo-600">
                          <Package size={20} />
                        </div>
                      )}

                      <div>
                        <p className="text-xs font-bold text-slate-900 group-hover:text-indigo-600">
                          {product.name}
                        </p>

                        <p className="mt-0.5 font-mono text-[10.5px] text-slate-400">
                          {product.sku}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-3.5 text-xs text-slate-600">
                    {product.category}
                  </td>

                  <td className="px-4 py-3.5 text-xs font-semibold text-slate-800">
                    {product.capacity}
                  </td>

                  <td className="px-4 py-3.5">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10.5px] font-semibold ${
                        product.verification === "Verified"
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                          : product.verification === "Pending"
                          ? "border-amber-200 bg-amber-50 text-amber-700"
                          : "border-rose-200 bg-rose-50 text-rose-700"
                      }`}
                    >
                      {product.verification === "Verified" && (
                        <CheckCircle2 size={11} />
                      )}

                      {product.verification}
                    </span>
                  </td>

                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-1.5 text-xs text-slate-600">
                      <Eye size={13} className="text-slate-400" />
                      <span>{product.performance}</span>
                    </div>
                  </td>

                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-1.5 text-xs text-slate-600">
                      <Mail size={13} className="text-slate-400" />
                      <span>{product.messages}</span>
                    </div>
                  </td>

                  <td className="px-4 py-3.5">
                    <span
                      className={`inline-flex rounded-md border px-2 py-0.5 text-[10.5px] font-bold ${
                        product.status === "Published"
                          ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                          : product.status === "Unlisted"
                          ? "border-amber-200 bg-amber-50 text-amber-700"
                          : product.status === "Draft"
                          ? "border-slate-200 bg-slate-100 text-slate-600"
                          : "border-rose-200 bg-rose-50 text-rose-600"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>

                  <td className="px-4 py-3.5 text-center">
                    <div className="flex items-center justify-center">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProduct(product);
                        }}
                        className="rounded-lg p-1.5 text-slate-500 transition hover:bg-indigo-50 hover:text-indigo-600"
                        title="View Product Details"
                      >
                        <Eye size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3 text-xs text-slate-500">
          <span>
            Showing {filteredProducts.length} of {productsList.length} products
          </span>

          <span className="text-[11px] text-slate-400">
            Click on any product row to preview details and buyer matching
          </span>
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
            onClick={() => setSelectedProduct(null)}
          />

          <div className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/50 px-6 py-4">
              <div className="flex items-center gap-2.5">
                <Package size={18} className="text-indigo-600" />

                <h3 className="text-base font-bold text-slate-900">
                  Product Details &amp; Buyer Match
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-200 hover:text-slate-700"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 space-y-6 overflow-y-auto p-6">
              <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-12">
                <div
                  className={`${
                    selectedProduct.image
                      ? "md:col-span-8"
                      : "md:col-span-12"
                  } space-y-2.5`}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-[10px] font-bold text-indigo-700">
                      {selectedProduct.category}
                    </span>

                    <span className="font-mono text-xs text-slate-400">
                      {selectedProduct.sku}
                    </span>

                    <span
                      className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${
                        selectedProduct.status === "Published"
                          ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                          : selectedProduct.status === "Unlisted"
                          ? "border border-amber-200 bg-amber-50 text-amber-700"
                          : "border border-slate-200 bg-slate-100 text-slate-600"
                      }`}
                    >
                      {selectedProduct.status}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900">
                    {selectedProduct.name}
                  </h2>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="rounded-lg border border-slate-100 bg-slate-50 p-2.5">
                      <p className="text-[10px] font-bold uppercase text-slate-400">
                        Monthly Capacity
                      </p>

                      <p className="text-xs font-bold text-slate-800">
                        {selectedProduct.capacity}
                      </p>
                    </div>

                    <div className="rounded-lg border border-slate-100 bg-slate-50 p-2.5">
                      <p className="text-[10px] font-bold uppercase text-slate-400">
                        Verification
                      </p>

                      <p className="text-xs font-bold text-emerald-700">
                        {selectedProduct.verification}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Eye size={13} className="text-slate-400" />
                      {selectedProduct.performance} Views
                    </span>

                    <span className="flex items-center gap-1">
                      <Mail size={13} className="text-slate-400" />
                      {selectedProduct.messages} Inquiries
                    </span>

                    <span className="flex items-center gap-1 font-semibold text-indigo-600">
                      <Sparkles size={13} />
                      {selectedProduct.matchScore.overall} AI Match
                    </span>
                  </div>
                </div>

                {selectedProduct.image && (
                  <div className="md:col-span-4">
                    <div className="relative aspect-4/3 max-h-[200px] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-xs">
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />

                      <span className="absolute left-2.5 top-2.5 rounded-full bg-slate-900/85 px-2.5 py-0.5 text-[10px] font-bold text-white backdrop-blur-xs">
                        {selectedProduct.status}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-indigo-100 bg-indigo-50/40 p-4">
                  <p className="mb-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-indigo-700">
                    <Building2 size={13} />
                    Active Buyer Demand
                  </p>

                  <p className="text-xs font-bold text-slate-900">
                    {selectedProduct.buyerRequirement.buyer}
                  </p>

                  <p className="mt-1 text-[11px] text-slate-600">
                    {selectedProduct.buyerRequirement.description}
                  </p>

                  <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <span className="text-slate-400">Required:</span>{" "}
                      <span className="font-semibold text-slate-800">
                        {selectedProduct.buyerRequirement.quantity}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400">Budget:</span>{" "}
                      <span className="font-semibold text-slate-800">
                        {selectedProduct.buyerRequirement.budget}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400">Delivery:</span>{" "}
                      <span className="font-semibold text-slate-800">
                        {selectedProduct.buyerRequirement.delivery}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400">Location:</span>{" "}
                      <span className="font-semibold text-slate-800">
                        {selectedProduct.buyerRequirement.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                  <p className="mb-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    <ShieldCheck size={13} className="text-emerald-600" />
                    Your Catalog Offering
                  </p>

                  <p className="text-xs font-bold text-slate-900">
                    {selectedProduct.supplierRequirement.supplier}
                  </p>

                  <p className="mt-1 text-[11px] text-slate-600">
                    {selectedProduct.supplierRequirement.description}
                  </p>

                  <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <span className="text-slate-400">Supply:</span>{" "}
                      <span className="font-semibold text-slate-800">
                        {selectedProduct.supplierRequirement.quantity}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400">Min. Order:</span>{" "}
                      <span className="font-semibold text-slate-800">
                        {selectedProduct.supplierRequirement.minimumOrder}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400">Lead Time:</span>{" "}
                      <span className="font-semibold text-slate-800">
                        {selectedProduct.supplierRequirement.delivery}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400">Dispatch:</span>{" "}
                      <span className="font-semibold text-slate-800">
                        {selectedProduct.supplierRequirement.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 bg-slate-50/50 px-6 py-3.5">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleOpenEdit(selectedProduct)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-xs transition hover:bg-slate-50"
                >
                  <Pencil size={13} />
                  <span>Edit Product</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleToggleUnlist(selectedProduct.id)}
                  className={`inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-xs font-semibold shadow-xs transition ${
                    selectedProduct.status === "Published"
                      ? "border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100"
                      : "border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
                  }`}
                >
                  {selectedProduct.status === "Published" ? (
                    <>
                      <EyeOff size={13} />
                      <span>Unlist</span>
                    </>
                  ) : (
                    <>
                      <Eye size={13} />
                      <span>Relist</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Close
                </button>

                <Link
                  href={`/supplier/products/${selectedProduct.id}`}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-xs transition hover:bg-indigo-500"
                >
                  <span>Open Full Page</span>
                  <ExternalLink size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {editingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
            onClick={() => setEditingProduct(null)}
          />

          <div className="relative z-10 flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/50 px-6 py-4">
              <div className="flex items-center gap-2">
                <Pencil size={18} className="text-indigo-600" />

                <h3 className="text-base font-bold text-slate-900">
                  Edit Product Catalog Listing
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setEditingProduct(null)}
                className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-200 hover:text-slate-700"
              >
                <X size={18} />
              </button>
            </div>

            <form
              onSubmit={handleSaveProductEdit}
              className="flex-1 space-y-4 overflow-y-auto p-6"
            >
              <div>
                <label className="mb-1 block text-xs font-bold text-slate-700">
                  Product Name
                </label>

                <input
                  type="text"
                  required
                  value={editFormData.name}
                  onChange={(e) =>
                    setEditFormData({
                      ...editFormData,
                      name: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-indigo-500 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-bold text-slate-700">
                    SKU
                  </label>

                  <input
                    type="text"
                    value={editFormData.sku}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        sku: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-indigo-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-bold text-slate-700">
                    Category
                  </label>

                  <input
                    type="text"
                    value={editFormData.category}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        category: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-indigo-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-bold text-slate-700">
                    Monthly Capacity
                  </label>

                  <input
                    type="text"
                    value={editFormData.capacity}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        capacity: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-indigo-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-bold text-slate-700">
                    Listing Status
                  </label>

                  <select
                    value={editFormData.status}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        status: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-indigo-500 focus:outline-hidden"
                  >
                    <option value="Published">Published</option>
                    <option value="Unlisted">Unlisted</option>
                    <option value="Draft">Draft</option>
                    <option value="Disabled">Disabled</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-4">
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-lg bg-indigo-600 px-5 py-2 text-xs font-semibold text-white shadow-xs transition hover:bg-indigo-500"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}