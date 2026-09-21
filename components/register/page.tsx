"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  ChevronDown,
  Search,
  Globe2,
  Plus,
  History,
  FileText,
  FileBadge,
  Archive,
  UploadCloud,
  Save,
  X,
  CheckCircle2,
  Fingerprint,
  CalendarDays,
  Factory,
  Shapes,
  Info,
  ShieldCheck,
  Check,
} from "lucide-react";

type Step = 1 | 2 | 3;

interface UploadedDoc {
  file: File | null;
  name: string;
  size: string;
}

export default function SupplierRegistrationPage() {
  const router = useRouter();

  // Active step in the 3-step registration flow
  const [step, setStep] = useState<Step>(1);

  // Modal / Bottom sheet states matching the mobile designs
  const [businessTypeModalOpen, setBusinessTypeModalOpen] = useState(false);
  const [countryModalOpen, setCountryModalOpen] = useState(false);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [exportMarketModalOpen, setExportMarketModalOpen] = useState(false);
  const [unitDropdownOpen, setUnitDropdownOpen] = useState(false);

  // Search filter for Country modal
  const [countrySearch, setCountrySearch] = useState("");

  // Sub-category search input
  const [subCategoryInput, setSubCategoryInput] = useState("");

  // Toast message state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Hidden file input refs for Step 3 uploads
  const regCertInputRef = useRef<HTMLInputElement>(null);
  const taxDocInputRef = useRef<HTMLInputElement>(null);
  const tradeLicenseInputRef = useRef<HTMLInputElement>(null);
  const companyProfileInputRef = useRef<HTMLInputElement>(null);

  // Form State
  const [form, setForm] = useState({
    // Step 1: Business Identity
    companyName: "Harshil Textile",
    businessType: "Importer / Exporter",
    yearEstablished: "2005",
    country: "India",
    registrationNumber: "12345678",

    // Step 2: Business Details
    category: "Electronics",
    subCategories: ["Electronic"] as string[],
    productionCapacity: "10000",
    capacityUnit: "Units",
    exportMarkets: ["USA", "Germany"] as string[],
    exportExperience: "0",

    // Step 3: Verification Documents
    docs: {
      businessRegistration: {
        file: null,
        name: "Screenshot_20260918_174031.jpg",
        size: "0.37 MB",
      } as UploadedDoc | null,
      taxDocument: {
        file: null,
        name: "Screenshot_20260918_174025.jpg",
        size: "0.43 MB",
      } as UploadedDoc | null,
      tradeLicense: {
        file: null,
        name: "Screenshot_20260918_172628.jpg",
        size: "0.27 MB",
      } as UploadedDoc | null,
      companyProfile: {
        file: null,
        name: "Screenshot_20260918_172635.jpg",
        size: "0.27 MB",
      } as UploadedDoc | null,
    },
  });

  // Options exactly as shown in screenshots
  const businessTypes = [
    "Manufacturer",
    "Distributor",
    "Wholesaler",
    "Retailer",
    "Service Provider",
    "Importer / Exporter",
  ];

  const countries = [
    "India",
    "United States",
    "United Kingdom",
    "United Arab Emirates",
    "Singapore",
  ];

  const categories = [
    "Electronics",
    "Textiles & Apparel",
    "Industrial Equipment",
    "Food & Agriculture",
    "Chemicals",
    "Automotive",
  ];

  const exportMarketOptions = [
    "USA",
    "Germany",
    "United Kingdom",
    "UAE",
    "Singapore",
    "Japan",
  ];

  const units = ["Units", "MT", "Kg", "Pieces", "Meters"];

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Step Progress Calculation
  const progress = step === 1 ? 33 : step === 2 ? 66 : 100;

  // Next step handler
  const nextStep = () => {
    if (step < 3) {
      setStep((prev) => (prev + 1) as Step);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Completed Step 3 -> Mark registered and navigate to Dashboard
      if (typeof window !== "undefined") {
        localStorage.setItem("tradematchly_supplier_registered", "true");
        localStorage.setItem(
          "tradematchly_supplier_profile",
          JSON.stringify(form)
        );
      }
      showToast("Company Registration Completed!");
      setTimeout(() => {
        router.push("/supplier");
      }, 500);
    }
  };

  // Back step handler
  const previousStep = () => {
    if (step > 1) {
      setStep((prev) => (prev - 1) as Step);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/supplier");
    }
  };

  // Skip handler (navigates straight to dashboard)
  const handleSkip = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("tradematchly_supplier_registered", "true");
    }
    router.push("/supplier");
  };

  // Save as Draft handler
  const saveDraft = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("tradematchly_supplier_draft", JSON.stringify(form));
    }
    showToast("Registration progress saved as draft!");
  };

  // Add / Remove Sub-category chips
  const addSubCategory = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    if (!form.subCategories.includes(trimmed)) {
      setForm((prev) => ({
        ...prev,
        subCategories: [...prev.subCategories, trimmed],
      }));
    }
    setSubCategoryInput("");
  };

  const removeSubCategory = (item: string) => {
    setForm((prev) => ({
      ...prev,
      subCategories: prev.subCategories.filter((c) => c !== item),
    }));
  };

  // Toggle export market chips
  const toggleExportMarket = (market: string) => {
    setForm((prev) => {
      const exists = prev.exportMarkets.includes(market);
      return {
        ...prev,
        exportMarkets: exists
          ? prev.exportMarkets.filter((m) => m !== market)
          : [...prev.exportMarkets, market],
      };
    });
  };

  // Handle actual file upload
  const handleFileUpload = (
    docKey: keyof typeof form.docs,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const sizeInMb = (file.size / (1024 * 1024)).toFixed(2) + " MB";
    setForm((prev) => ({
      ...prev,
      docs: {
        ...prev.docs,
        [docKey]: {
          file,
          name: file.name,
          size: sizeInMb,
        },
      },
    }));
    showToast(`Uploaded ${file.name}`);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 antialiased flex flex-col justify-between">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-xs font-semibold text-white shadow-xl animate-in fade-in slide-in-from-top-3 border border-slate-700">
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

      {/* TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-30 flex h-14 w-full items-center justify-between border-b border-slate-200/80 bg-white/95 backdrop-blur-md px-4 sm:px-8">
        <button
          type="button"
          onClick={previousStep}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 transition"
          aria-label="Back"
        >
          <ArrowLeft size={20} />
        </button>

        <h1 className="text-base sm:text-lg font-bold text-slate-900">
          Company Registration
        </h1>

        <button
          type="button"
          onClick={handleSkip}
          className="text-xs sm:text-sm font-semibold text-[#5547E8] hover:text-indigo-800 transition px-2 py-1"
        >
          Skip
        </button>
      </header>

      {/* MAIN CONTAINER */}
      <main className="mx-auto w-full max-w-lg flex-1 px-4 py-6 sm:py-8 space-y-6">
        {/* STEP PROGRESS BAR */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="uppercase tracking-wider text-slate-500">
              STEP {step} OF 3
            </span>
            <span className="text-[#5547E8] font-extrabold">{progress}%</span>
          </div>

          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-[#5547E8] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* STEP 1: BUSINESS IDENTITY */}
        {step === 1 && (
          <section className="space-y-5 animate-in fade-in duration-200">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Business Identity
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-500">
                Tell us about your company to start matching with global partners.
              </p>
            </div>

            {/* Form Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs space-y-3.5">
              {/* Company Legal Name */}
              <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 transition focus-within:border-indigo-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-100">
                <Building2 size={18} className="text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Company Legal Name"
                  value={form.companyName}
                  onChange={(e) =>
                    setForm({ ...form, companyName: e.target.value })
                  }
                  className="w-full bg-transparent text-xs sm:text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>

              {/* Business Type (Modal Trigger) */}
              <button
                type="button"
                onClick={() => setBusinessTypeModalOpen(true)}
                className="flex h-12 w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 text-left transition hover:bg-slate-100/70"
              >
                <div className="flex items-center gap-3">
                  <Shapes size={18} className="text-slate-400 shrink-0" />
                  <span
                    className={`text-xs sm:text-sm font-medium ${
                      form.businessType ? "text-slate-900" : "text-slate-400"
                    }`}
                  >
                    {form.businessType || "Business Type"}
                  </span>
                </div>
                <ChevronDown size={18} className="text-slate-400 shrink-0" />
              </button>

              {/* Year Established */}
              <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 transition focus-within:border-indigo-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-100">
                <CalendarDays size={18} className="text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Year Established"
                  value={form.yearEstablished}
                  onChange={(e) =>
                    setForm({ ...form, yearEstablished: e.target.value })
                  }
                  className="w-full bg-transparent text-xs sm:text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>

              {/* Country of Registration (Modal Trigger) */}
              <button
                type="button"
                onClick={() => setCountryModalOpen(true)}
                className="flex h-12 w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 text-left transition hover:bg-slate-100/70"
              >
                <div className="flex items-center gap-3">
                  <Globe2 size={18} className="text-slate-400 shrink-0" />
                  <span
                    className={`text-xs sm:text-sm font-medium ${
                      form.country ? "text-slate-900" : "text-slate-400"
                    }`}
                  >
                    {form.country || "Country of Registration"}
                  </span>
                </div>
                <Search size={18} className="text-slate-400 shrink-0" />
              </button>

              {/* Business Registration Number (With Info Icon) */}
              <div className="flex h-12 items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 transition focus-within:border-indigo-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-100">
                <div className="flex flex-1 items-center gap-3 min-w-0">
                  <Fingerprint size={18} className="text-slate-400 shrink-0" />
                  <input
                    type="text"
                    placeholder="Business Registration Number"
                    value={form.registrationNumber}
                    onChange={(e) =>
                      setForm({ ...form, registrationNumber: e.target.value })
                    }
                    className="w-full bg-transparent text-xs sm:text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setInfoModalOpen(true)}
                  className="rounded-full p-1 text-slate-400 hover:text-slate-700 transition shrink-0"
                  aria-label="Info about Registration Number"
                >
                  <Info size={17} />
                </button>
              </div>
            </div>
          </section>
        )}

        {/* STEP 2: BUSINESS DETAILS */}
        {step === 2 && (
          <section className="space-y-5 animate-in fade-in duration-200">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Business Details
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-500">
                Tell us about your products and operational capacity.
              </p>
            </div>

            {/* Form Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs space-y-4">
              {/* Primary Product Category */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Primary Product Category
                </label>
                <button
                  type="button"
                  onClick={() => setCategoryModalOpen(true)}
                  className="flex h-12 w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 text-left transition hover:bg-slate-100/70"
                >
                  <div className="flex items-center gap-3">
                    <Shapes size={18} className="text-slate-400 shrink-0" />
                    <span
                      className={`text-xs sm:text-sm font-medium ${
                        form.category ? "text-slate-900" : "text-slate-400"
                      }`}
                    >
                      {form.category || "Select a category"}
                    </span>
                  </div>
                  <ChevronDown size={18} className="text-slate-400 shrink-0" />
                </button>
              </div>

              {/* Sub-categories */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Sub-categories
                </label>
                <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 transition focus-within:border-indigo-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-100">
                  <Search size={18} className="text-slate-400 shrink-0" />
                  <input
                    type="text"
                    placeholder="Type to search and add..."
                    value={subCategoryInput}
                    onChange={(e) => setSubCategoryInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addSubCategory(subCategoryInput);
                      }
                    }}
                    className="w-full bg-transparent text-xs sm:text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
                  />
                  {subCategoryInput && (
                    <button
                      type="button"
                      onClick={() => addSubCategory(subCategoryInput)}
                      className="rounded-lg bg-indigo-600 px-2.5 py-1 text-[11px] font-bold text-white shadow-xs"
                    >
                      Add
                    </button>
                  )}
                </div>

                {/* Subcategory Chips */}
                {form.subCategories.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {form.subCategories.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-50 border border-indigo-200 px-2.5 py-1 text-xs font-semibold text-indigo-700"
                      >
                        {item}
                        <button
                          type="button"
                          onClick={() => removeSubCategory(item)}
                          className="hover:text-indigo-900"
                        >
                          <X size={13} />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Annual Production Capacity */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Annual Production Capacity
                </label>
                <div className="flex gap-2">
                  <div className="flex h-12 flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 transition focus-within:border-indigo-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-100">
                    <Factory size={18} className="text-slate-400 shrink-0" />
                    <input
                      type="number"
                      placeholder="e.g. 10000"
                      value={form.productionCapacity}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          productionCapacity: e.target.value,
                        })
                      }
                      className="w-full bg-transparent text-xs sm:text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
                    />
                  </div>

                  <div className="relative w-28 shrink-0">
                    <button
                      type="button"
                      onClick={() => setUnitDropdownOpen(!unitDropdownOpen)}
                      className="flex h-12 w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50/70 px-3 text-xs sm:text-sm font-semibold text-slate-800"
                    >
                      <span>{form.capacityUnit}</span>
                      <ChevronDown size={16} className="text-slate-400" />
                    </button>

                    {unitDropdownOpen && (
                      <div className="absolute right-0 top-13 z-20 w-32 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl">
                        {units.map((u) => (
                          <button
                            key={u}
                            type="button"
                            onClick={() => {
                              setForm({ ...form, capacityUnit: u });
                              setUnitDropdownOpen(false);
                            }}
                            className="block w-full rounded-lg px-3 py-2 text-left text-xs font-semibold text-slate-700 hover:bg-slate-100"
                          >
                            {u}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Main Export Markets */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Main Export Markets
                </label>
                <div
                  onClick={() => setExportMarketModalOpen(true)}
                  className="flex min-h-12 cursor-pointer items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50/70 p-2.5 transition hover:bg-slate-100/70"
                >
                  <div className="flex flex-1 flex-wrap items-center gap-1.5">
                    <Globe2 size={18} className="text-slate-400 shrink-0 ml-1" />
                    {form.exportMarkets.length === 0 ? (
                      <span className="text-xs sm:text-sm text-slate-400 ml-1">
                        Select export markets...
                      </span>
                    ) : (
                      form.exportMarkets.map((m) => (
                        <span
                          key={m}
                          className="inline-flex items-center gap-1 rounded-md bg-white border border-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-800 shadow-2xs"
                        >
                          {m}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleExportMarket(m);
                            }}
                            className="text-slate-400 hover:text-slate-700"
                          >
                            <X size={12} />
                          </button>
                        </span>
                      ))
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExportMarketModalOpen(true);
                    }}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition shrink-0"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Years of Export Experience */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Years of Export Experience
                </label>
                <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 transition focus-within:border-indigo-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-100">
                  <History size={18} className="text-slate-400 shrink-0" />
                  <input
                    type="number"
                    min="0"
                    placeholder="0"
                    value={form.exportExperience}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        exportExperience: e.target.value,
                      })
                    }
                    className="w-full bg-transparent text-xs sm:text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* STEP 3: VERIFICATION DOCUMENTS */}
        {step === 3 && (
          <section className="space-y-4 animate-in fade-in duration-200">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Verification Documents
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-500">
                Upload official documents to earn your verified badge and increase trust.
              </p>
            </div>

            {/* Earn Verified Badge Banner */}
            <div className="flex items-start gap-3 rounded-2xl border border-emerald-300 bg-emerald-50/60 p-4 shadow-2xs">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-xs">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-emerald-950">
                  Earn the Verified Badge
                </h3>
                <p className="mt-0.5 text-xs text-emerald-800/90 leading-relaxed">
                  Profiles with verified documents receive priority placement and higher trust ratings from partners.
                </p>
              </div>
            </div>

            {/* Document Upload Cards */}
            <div className="space-y-3.5 pt-1">
              {/* Doc 1: Business Registration Certificate */}
              <DocumentUploadCard
                title="Business Registration Certificate"
                icon={<FileText size={18} className="text-slate-700" />}
                doc={form.docs.businessRegistration}
                maxSize="10MB"
                inputRef={regCertInputRef}
                onFileSelect={(e) =>
                  handleFileUpload("businessRegistration", e)
                }
              />

              {/* Doc 2: Tax Identification Document */}
              <DocumentUploadCard
                title="Tax Identification Document"
                icon={<FileBadge size={18} className="text-slate-700" />}
                doc={form.docs.taxDocument}
                maxSize="10MB"
                inputRef={taxDocInputRef}
                onFileSelect={(e) => handleFileUpload("taxDocument", e)}
              />

              {/* Doc 3: Trade License / Export Permit */}
              <DocumentUploadCard
                title="Trade License / Export Permit"
                icon={<Archive size={18} className="text-slate-700" />}
                doc={form.docs.tradeLicense}
                maxSize="10MB"
                inputRef={tradeLicenseInputRef}
                onFileSelect={(e) => handleFileUpload("tradeLicense", e)}
              />

              {/* Doc 4: Company Profile / Presentation (OPTIONAL) */}
              <DocumentUploadCard
                title="Company Profile / Presentation"
                badge="OPTIONAL"
                icon={<Building2 size={18} className="text-slate-700" />}
                doc={form.docs.companyProfile}
                maxSize="25MB"
                inputRef={companyProfileInputRef}
                onFileSelect={(e) => handleFileUpload("companyProfile", e)}
              />
            </div>
          </section>
        )}

        {/* BOTTOM ACTION BUTTONS */}
        <div className="pt-2 space-y-3">
          <div className="flex items-center gap-3">
            {/* Back Button */}
            <button
              type="button"
              onClick={previousStep}
              className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-xs sm:text-sm font-bold text-slate-800 shadow-xs hover:bg-slate-50 transition"
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>

            {/* Next / Complete Button */}
            <button
              type="button"
              onClick={nextStep}
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#0D1B33] px-5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-slate-800 transition cursor-pointer"
            >
              <span>
                {step === 1
                  ? "Next: Business Details"
                  : step === 2
                  ? "Next: Verification"
                  : "Complete Registration"}
              </span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Save as Draft Link */}
          <div className="text-center pt-1">
            <button
              type="button"
              onClick={saveDraft}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#5547E8] hover:text-indigo-800 transition"
            >
              <Save size={15} />
              <span>Save as Draft</span>
            </button>
          </div>
        </div>
      </main>

      {/* ========================================================
          BOTTOM SHEETS & MODALS (Matching the exact mobile designs)
          ======================================================== */}

      {/* 1. Select Business Type Bottom Sheet Modal */}
      {businessTypeModalOpen && (
        <ModalSheet
          title="Select Business Type"
          onClose={() => setBusinessTypeModalOpen(false)}
        >
          <div className="divide-y divide-slate-100">
            {businessTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => {
                  setForm({ ...form, businessType: type });
                  setBusinessTypeModalOpen(false);
                }}
                className="flex w-full items-center justify-between py-3.5 px-2 text-left text-sm font-bold text-slate-900 hover:bg-slate-50 transition"
              >
                <span>{type}</span>
                {form.businessType === type && (
                  <Check size={18} className="text-indigo-600" />
                )}
              </button>
            ))}
          </div>
        </ModalSheet>
      )}

      {/* 2. Select Country Bottom Sheet Modal */}
      {countryModalOpen && (
        <ModalSheet
          title="Select Country"
          onClose={() => setCountryModalOpen(false)}
        >
          <div className="divide-y divide-slate-100">
            {countries.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setForm({ ...form, country: c });
                  setCountryModalOpen(false);
                }}
                className="flex w-full items-center justify-between py-3.5 px-2 text-left text-sm font-bold text-slate-900 hover:bg-slate-50 transition"
              >
                <span>{c}</span>
                {form.country === c && (
                  <Check size={18} className="text-indigo-600" />
                )}
              </button>
            ))}
          </div>
        </ModalSheet>
      )}

      {/* 3. Registration Number Info Modal Dialog */}
      {infoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl space-y-3">
            <h3 className="text-base font-bold text-slate-900">
              Registration number
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Enter the official number issued by your company registration authority.
            </p>
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setInfoModalOpen(false)}
                className="rounded-lg px-4 py-1.5 text-xs font-bold text-emerald-700 hover:bg-emerald-50 transition"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Select Product Category Bottom Sheet Modal */}
      {categoryModalOpen && (
        <ModalSheet
          title="Select Product Category"
          onClose={() => setCategoryModalOpen(false)}
        >
          <div className="divide-y divide-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setForm({ ...form, category: cat });
                  setCategoryModalOpen(false);
                }}
                className="flex w-full items-center justify-between py-3.5 px-2 text-left text-sm font-bold text-slate-900 hover:bg-slate-50 transition"
              >
                <span>{cat}</span>
                {form.category === cat && (
                  <Check size={18} className="text-indigo-600" />
                )}
              </button>
            ))}
          </div>
        </ModalSheet>
      )}

      {/* 5. Add Export Market Bottom Sheet Modal */}
      {exportMarketModalOpen && (
        <ModalSheet
          title="Add Export Market"
          onClose={() => setExportMarketModalOpen(false)}
        >
          <div className="divide-y divide-slate-100">
            {exportMarketOptions.map((m) => {
              const isSelected = form.exportMarkets.includes(m);
              return (
                <button
                  key={m}
                  type="button"
                  onClick={() => toggleExportMarket(m)}
                  className="flex w-full items-center justify-between py-3.5 px-2 text-left text-sm font-bold text-slate-900 hover:bg-slate-50 transition"
                >
                  <span>{m}</span>
                  {isSelected && (
                    <Check size={18} className="text-indigo-600" />
                  )}
                </button>
              );
            })}
          </div>
        </ModalSheet>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// Document Upload Card Component
// -------------------------------------------------------------
interface DocumentUploadCardProps {
  title: string;
  badge?: string;
  icon: React.ReactNode;
  doc: UploadedDoc | null;
  maxSize: string;
  inputRef: any;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function DocumentUploadCard({
  title,
  badge,
  icon,
  doc,
  maxSize,
  inputRef,
  onFileSelect,
}: DocumentUploadCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs space-y-3">
      {/* Title & Badge */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100">
            {icon}
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900">
              {title}
            </h4>
            {badge && (
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                {badge}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Hidden File Input */}
      <input
        type="file"
        ref={inputRef}
        onChange={onFileSelect}
        accept="application/pdf,image/*"
        className="hidden"
      />

      {/* Unuploaded state: Dashed Dropzone */}
      {!doc ? (
        <div
          onClick={() => inputRef.current?.click()}
          className="cursor-pointer rounded-xl border border-dashed border-slate-300 bg-slate-50/50 p-5 text-center transition hover:border-indigo-400 hover:bg-indigo-50/20"
        >
          <UploadCloud size={24} className="mx-auto text-slate-400" />
          <p className="mt-1.5 text-xs font-semibold text-slate-800">
            Select PDF or Image
          </p>
          <p className="text-[10px] text-slate-400 mt-0.5">
            Max file size {maxSize}
          </p>
          <button
            type="button"
            className="mt-3 inline-block rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-700 shadow-2xs hover:bg-slate-50"
          >
            SELECT FILE
          </button>
        </div>
      ) : (
        /* Uploaded state: As shown in image 4.24.02 PM (1) */
        <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/60 p-3 sm:p-3.5">
          <div className="min-w-0 flex-1 mr-3">
            <p className="truncate text-xs font-bold text-slate-900">
              {doc.name}
            </p>
            <p className="text-[10.5px] font-medium text-slate-400 mt-0.5">
              {doc.size}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition cursor-pointer"
            >
              Change
            </button>

            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="flex items-center gap-1.5 rounded-xl bg-[#0D1B33] px-3.5 py-2 text-xs font-bold text-white shadow-xs hover:bg-slate-800 transition cursor-pointer"
            >
              <UploadCloud size={14} />
              <span>Upload</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// Bottom Sheet Modal Container
// -------------------------------------------------------------
interface ModalSheetProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

function ModalSheet({ title, onClose, children }: ModalSheetProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl bg-white p-5 shadow-2xl animate-in slide-in-from-bottom duration-200 max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-2">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}