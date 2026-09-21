"use client";

import { useState } from "react";
import {
  Clock3,
  Globe2,
  Pencil,
  X,
  ShieldCheck,
  CheckCircle2,
  Package,
  Layers,
  Sparkles,
  Check,
  EyeOff,
  Eye,
  AlertCircle,
} from "lucide-react";
import BackButton from "@/components/common/BackButton";

interface ProductData {
  name: string;
  sku: string;
  category: string;
  origin: string;
  price: string;
  minOrder: string;
  available: string;
  leadTime: string;
  image?: string;
  images?: string[];
  description: string;
  specs: [string, string][];
  status: string;
}

const sampleProductData: Record<string, ProductData> = {
  "1": {
    name: "Premium Grade Saffron",
    sku: "SKU-SAF-001",
    category: "Spices & Herbs",
    origin: "Kashmir, India",
    price: "USD 1,650–1,850 / kg",
    minOrder: "25 kg",
    available: "500 kg",
    leadTime: "7–10 days",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=900&q=80",
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=900&q=80",
    ],
    description:
      "Grade A Kashmir mongra saffron threads known for deep red color, potent aroma, and high safranal content. Rigorously tested under ISO 3632 standard.",
    specs: [
      ["Grade", "Category I (Super Negin / Mongra)"],
      ["Moisture", "< 12%"],
      ["Coloring Strength", "> 240"],
      ["Packaging", "Airtight vacuum tins (100g, 500g, 1kg)"],
    ],
    status: "Published",
  },
  "2": {
    name: "Industrial Cotton Canvas",
    sku: "SKU-TEX-082",
    category: "Textiles & Fabrics",
    origin: "Surat, India",
    price: "USD 4.50–5.20 / meter",
    minOrder: "1,000 meters",
    available: "10,000 meters",
    leadTime: "15–20 days",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=900&q=80",
    ],
    description:
      "Heavy-duty duck canvas manufactured with 100% combed cotton. High tensile strength, water-repellent finishing available for industrial bags and tarpaulins.",
    specs: [
      ["Weight", "450 GSM (16 oz)"],
      ["Weave", "Plain / Duck 2x1"],
      ["Width", "150 cm (60 inches)"],
      ["Packaging", "Export rolls with moisture barrier"],
    ],
    status: "Draft",
  },
  "3": {
    name: "CNC Milling Axis Part",
    sku: "SKU-MAC-114",
    category: "Machinery Components",
    origin: "Rajkot, India",
    price: "USD 32.00–45.00 / unit",
    minOrder: "100 units",
    available: "1,500 units",
    leadTime: "20–25 days",
    // Test product with NO image to verify "image should show only which are present"
    description:
      "High precision 5-axis CNC machined components made from aerospace grade aluminum alloy 6061-T6 with anodized surface treatment.",
    specs: [
      ["Material", "Aluminum 6061-T6"],
      ["Tolerance", "±0.005 mm"],
      ["Surface Finish", "Ra 0.8 Hard Anodized"],
      ["Testing", "CMM inspection report included"],
    ],
    status: "Disabled",
  },
};

const defaultProduct: ProductData = {
  name: "Premium Basmati Rice (1121 Steam)",
  sku: "SKU-RIC-004",
  category: "Food & Agriculture",
  origin: "Punjab, India",
  price: "USD 850–920 / MT",
  minOrder: "500 MT",
  available: "2,500 MT",
  leadTime: "10–14 days",
  image:
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=900&q=80",
  images: [
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=900&q=80",
  ],
  description:
    "Long-grain 1121 steam basmati rice with average grain length of 8.35mm before cooking. Naturally aged for 18 months to enhance taste and elongation ratio.",
  specs: [
    ["Variety", "1121 Steam Basmati"],
    ["Grain Length", "8.35 mm average"],
    ["Moisture Content", "12.5% max"],
    ["Purity", "99% minimum"],
    ["Packaging", "25 kg / 50 kg PP & Non-Woven bags"],
  ],
  status: "Published",
};

export default function ProductDetailsPage({
  params,
}: {
  params?: { id: string };
} = {}) {
  const productKey = params?.id || "1";
  const initialProduct = sampleProductData[productKey] || defaultProduct;

  const [product, setProduct] = useState<ProductData>(initialProduct);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Edit form state
  const [editForm, setEditForm] = useState({
    name: initialProduct.name,
    sku: initialProduct.sku,
    category: initialProduct.category,
    origin: initialProduct.origin,
    price: initialProduct.price,
    minOrder: initialProduct.minOrder,
    available: initialProduct.available,
    leadTime: initialProduct.leadTime,
    description: initialProduct.description,
    status: initialProduct.status,
  });

  // Open edit modal and sync form
  const handleOpenEdit = () => {
    setEditForm({
      name: product.name,
      sku: product.sku,
      category: product.category,
      origin: product.origin,
      price: product.price,
      minOrder: product.minOrder,
      available: product.available,
      leadTime: product.leadTime,
      description: product.description,
      status: product.status,
    });
    setIsEditModalOpen(true);
  };

  // Save edit form
  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setProduct((prev) => ({
      ...prev,
      ...editForm,
    }));
    setIsEditModalOpen(false);
    showToast("Product details updated successfully!");
  };

  // Unlist / Relist product handler
  const handleToggleUnlist = () => {
    const isCurrentlyPublished = product.status === "Published";
    const nextStatus = isCurrentlyPublished ? "Unlisted" : "Published";

    setProduct((prev) => ({
      ...prev,
      status: nextStatus,
    }));

    showToast(
      isCurrentlyPublished
        ? "Product unlisted. It will no longer appear in buyer searches or match feeds."
        : "Product relisted successfully! Now visible to active trade buyers."
    );
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const hasImage = Boolean(product.image && product.image.trim() !== "");

  return (
    <div className="w-full space-y-6">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-2.5 rounded-xl bg-slate-900 px-4 py-3 text-xs font-semibold text-white shadow-xl animate-in fade-in slide-in-from-top-3 border border-slate-700">
          <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
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

      {/* Back Button */}
      <div>
        <BackButton label="Back to Products" fallbackHref="/supplier/products" />
      </div>

      {/* Main Grid: Left info & Right image (Only show image column if image is present) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Takes 8 cols if image exists, or full 12 cols if no image */}
        <div className={`${hasImage ? "lg:col-span-8" : "lg:col-span-12"} space-y-6`}>
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 text-xs font-semibold text-indigo-700">
                {product.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {product.sku}
              </span>
              <span
                className={`rounded-md px-2.5 py-0.5 text-xs font-bold ${
                  product.status === "Published"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : product.status === "Unlisted"
                    ? "bg-amber-50 text-amber-700 border border-amber-200"
                    : "bg-slate-100 text-slate-600 border border-slate-200"
                }`}
              >
                {product.status}
              </span>
            </div>

            <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {product.name}
            </h1>

            <p className="mt-2 flex items-center gap-2 text-xs font-medium text-slate-500">
              <Globe2 size={15} className="text-slate-400" />
              Origin: {product.origin}
            </p>
          </div>

          {/* Key Pricing & Capacity Grid */}
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Target Price
                </p>
                <p className="mt-1.5 text-base font-bold text-slate-900">
                  {product.price}
                </p>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Min. Order
                </p>
                <p className="mt-1.5 text-base font-bold text-slate-900">
                  {product.minOrder}
                </p>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Capacity
                </p>
                <p className="mt-1.5 text-base font-bold text-slate-900">
                  {product.available}
                </p>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Lead Time
                </p>
                <p className="mt-1.5 flex items-center gap-1.5 text-base font-bold text-slate-900">
                  <Clock3 size={15} className="text-slate-500" />
                  {product.leadTime}
                </p>
              </div>
            </div>
          </section>

          {/* About Product */}
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900">About this product</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              {product.description}
            </p>
          </section>

          {/* Key Specifications Table */}
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900">
              Technical Specifications
            </h3>
            <div className="mt-3 divide-y divide-slate-100">
              {product.specs.map(([label, val], i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2.5 text-xs"
                >
                  <span className="font-medium text-slate-500">{label}</span>
                  <span className="font-semibold text-slate-900 text-right">
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* WORKING ACTIONS: Edit Product & Unlist Product */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleOpenEdit}
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white hover:bg-slate-800 transition shadow-xs cursor-pointer"
            >
              <Pencil size={14} />
              <span>Edit Product</span>
            </button>

            <button
              type="button"
              onClick={handleToggleUnlist}
              className={`inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-xs font-semibold transition shadow-xs cursor-pointer ${
                product.status === "Published"
                  ? "border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100"
                  : "border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
              }`}
            >
              {product.status === "Published" ? (
                <>
                  <EyeOff size={14} />
                  <span>Unlist Product</span>
                </>
              ) : (
                <>
                  <Eye size={14} />
                  <span>Relist Product</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: ONLY SHOWN IF IMAGE IS PRESENT! */}
        {hasImage && (
          <div className="lg:col-span-4 space-y-4">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-xs">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-slate-100 max-h-[260px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <span className="absolute left-2.5 top-2.5 rounded-full bg-slate-900/80 backdrop-blur-xs px-2.5 py-0.5 text-[11px] font-semibold text-white">
                  {product.status}
                </span>
              </div>

              {/* Gallery Thumbnails: Only show valid images */}
              {product.images &&
                product.images.filter(Boolean).length > 1 && (
                  <div className="flex gap-2 pt-3">
                    {product.images.filter(Boolean).map((img, i) => (
                      <div
                        key={i}
                        onClick={() => setProduct((p) => ({ ...p, image: img }))}
                        className="h-14 w-14 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xs cursor-pointer hover:opacity-80 transition"
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${i}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
            </div>

            {/* Quick Certifications Box */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <ShieldCheck size={16} className="text-emerald-600" />
                <span>TradeMatchly Verified Listing</span>
              </div>
              <p className="mt-1 text-[11px] text-slate-500">
                Product specifications and supplier capacity verified by TradeMatchly inspection network.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* EDIT PRODUCT MODAL */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
            onClick={() => setIsEditModalOpen(false)}
          />

          <div className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 bg-slate-50/50">
              <div className="flex items-center gap-2">
                <Pencil size={18} className="text-indigo-600" />
                <h3 className="text-base font-bold text-slate-900">
                  Edit Product Details
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body Form */}
            <form onSubmit={handleSaveEdit} className="flex-1 overflow-y-auto p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  required
                  value={editForm.name}
                  onChange={(e) =>
                    setEditForm({ ...editForm, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-indigo-500 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    SKU Code
                  </label>
                  <input
                    type="text"
                    value={editForm.sku}
                    onChange={(e) =>
                      setEditForm({ ...editForm, sku: e.target.value })
                    }
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-indigo-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Category
                  </label>
                  <input
                    type="text"
                    value={editForm.category}
                    onChange={(e) =>
                      setEditForm({ ...editForm, category: e.target.value })
                    }
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-indigo-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Target Price
                  </label>
                  <input
                    type="text"
                    value={editForm.price}
                    onChange={(e) =>
                      setEditForm({ ...editForm, price: e.target.value })
                    }
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-indigo-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Min. Order Quantity
                  </label>
                  <input
                    type="text"
                    value={editForm.minOrder}
                    onChange={(e) =>
                      setEditForm({ ...editForm, minOrder: e.target.value })
                    }
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-indigo-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Monthly Capacity
                  </label>
                  <input
                    type="text"
                    value={editForm.available}
                    onChange={(e) =>
                      setEditForm({ ...editForm, available: e.target.value })
                    }
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-indigo-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Lead Time
                  </label>
                  <input
                    type="text"
                    value={editForm.leadTime}
                    onChange={(e) =>
                      setEditForm({ ...editForm, leadTime: e.target.value })
                    }
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-indigo-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Origin
                </label>
                <input
                  type="text"
                  value={editForm.origin}
                  onChange={(e) =>
                    setEditForm({ ...editForm, origin: e.target.value })
                  }
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-indigo-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={editForm.description}
                  onChange={(e) =>
                    setEditForm({ ...editForm, description: e.target.value })
                  }
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-indigo-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Status
                </label>
                <select
                  value={editForm.status}
                  onChange={(e) =>
                    setEditForm({ ...editForm, status: e.target.value })
                  }
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-indigo-500 focus:outline-hidden"
                >
                  <option value="Published">Published</option>
                  <option value="Unlisted">Unlisted</option>
                  <option value="Draft">Draft</option>
                  <option value="Disabled">Disabled</option>
                </select>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-indigo-600 px-5 py-2 text-xs font-semibold text-white hover:bg-indigo-500 transition shadow-xs"
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