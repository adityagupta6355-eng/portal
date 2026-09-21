"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Trash2, Plus, ImagePlus, X, CheckCircle2 } from "lucide-react";
import BackButton from "@/components/common/BackButton";

interface SpecificationItem {
  id: string;
  key: string;
  value: string;
}

export default function ProductSpecificationsPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [specifications, setSpecifications] = useState<SpecificationItem[]>([
    { id: "1", key: "Grade", value: "Export Grade" },
    { id: "2", key: "Moisture Content", value: "12% Max" },
    { id: "3", key: "Broken Ratio", value: "1% Max" },
  ]);

  const [images, setImages] = useState<string[]>([
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80",
  ]);

  const [isPublishing, setIsPublishing] = useState(false);

  const handleAddSpec = () => {
    setSpecifications((prev) => [
      ...prev,
      { id: Date.now().toString(), key: "", value: "" },
    ]);
  };

  const handleRemoveSpec = (id: string) => {
    setSpecifications((prev) => prev.filter((s) => s.id !== id));
  };

  const handleSpecChange = (id: string, field: "key" | "value", val: string) => {
    setSpecifications((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [field]: val } : s))
    );
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setImages((prev) => [...prev, reader.result as string]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handlePreview = () => {
    setIsPublishing(true);
    setTimeout(() => {
      router.push("/supplier/products/1");
    }, 400);
  };

  return (
    <div className="space-y-4">
      <div>
        <BackButton label="Back to Pricing" fallbackHref="/supplier/products/pricing" />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
        {/* Progress Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold tracking-wider text-[#4f46e5]">
              STEP 3 OF 3
            </span>
            <span className="text-xs font-bold text-[#4f46e5]">
              100%
            </span>
          </div>

          <div className="h-1.5 overflow-hidden rounded-full bg-[#4f46e5]">
            <div className="h-full w-full bg-[#4f46e5]" />
          </div>
        </div>

        {/* Title & Subtitle */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Specifications & media
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Add the details buyers use to compare products.
          </p>
        </div>

        {/* Section 1: KEY SPECIFICATIONS */}
        <div className="space-y-3 pt-2">
          <label className="block text-xs font-bold tracking-wider text-slate-700 uppercase">
            KEY SPECIFICATIONS
          </label>

          <div className="space-y-3 w-full">
            {specifications.map((spec) => (
              <div key={spec.id} className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="e.g. Grade"
                  value={spec.key}
                  onChange={(e) => handleSpecChange(spec.id, "key", e.target.value)}
                  className="h-11 flex-1 rounded-lg border border-slate-200 bg-white px-3.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition"
                />

                <input
                  type="text"
                  placeholder="e.g. Export Grade"
                  value={spec.value}
                  onChange={(e) => handleSpecChange(spec.id, "value", e.target.value)}
                  className="h-11 flex-1 rounded-lg border border-slate-200 bg-white px-3.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition"
                />

                <button
                  type="button"
                  onClick={() => handleRemoveSpec(spec.id)}
                  className="p-2 text-red-500 hover:text-red-700 rounded-lg hover:bg-red-50 transition"
                  title="Remove specification"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}

            <div>
              <button
                type="button"
                onClick={handleAddSpec}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4f46e5] hover:text-[#4338ca] transition mt-1"
              >
                <Plus size={16} />
                Add specification
              </button>
            </div>
          </div>
        </div>

        {/* Section 2: PRODUCT IMAGES */}
        <div className="space-y-3 pt-4">
          <label className="block text-xs font-bold tracking-wider text-slate-700 uppercase">
            PRODUCT IMAGES
          </label>

          <div className="max-w-[900px]">
            {/* Upload Box */}
            <div className="rounded-2xl border-2 border-dashed border-slate-300 p-8 text-center bg-[#fafafc] flex flex-col items-center justify-center transition hover:bg-slate-50">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <ImagePlus size={24} />
              </div>

              <h3 className="text-base font-bold text-slate-900 mt-3">
                Add product images
              </h3>

              <p className="text-xs text-slate-500 max-w-sm mt-1">
                Upload clear images from multiple angles. The first image will be used as the cover.
              </p>

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2 text-xs font-semibold text-slate-700 shadow-xs hover:bg-slate-50 transition"
              >
                <Plus size={14} className="rounded-full border border-slate-700" />
                Select images
              </button>

              <input
                type="file"
                multiple
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>

            {/* Image Previews */}
            {images.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {images.map((src, idx) => (
                  <div
                    key={idx}
                    className="relative h-24 w-24 rounded-xl border border-slate-200 overflow-hidden group shadow-xs"
                  >
                    <img
                      src={src}
                      alt={`Product preview ${idx + 1}`}
                      className="h-full w-full object-cover"
                    />
                    {idx === 0 && (
                      <span className="absolute bottom-1.5 left-1.5 bg-[#0f172a]/80 backdrop-blur-xs text-white text-[9px] font-semibold px-1.5 py-0.5 rounded">
                        Cover
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(idx)}
                      className="absolute top-1.5 right-1.5 h-5 w-5 rounded-full bg-slate-900/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition hover:bg-red-600"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Action Footer */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-200">
          <button
            type="button"
            onClick={() => router.push("/supplier/products/pricing")}
            className="flex h-11 items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            <ArrowLeft size={16} />
            Back
          </button>

          <button
            type="button"
            onClick={handlePreview}
            disabled={isPublishing}
            className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#0f172a] px-8 text-sm font-semibold text-white hover:bg-slate-800 shadow-sm transition disabled:opacity-50"
          >
            {isPublishing ? "Saving..." : "Preview Product"}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

