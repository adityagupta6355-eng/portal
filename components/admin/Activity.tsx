"use client";

import {
  AlertTriangle,
  ArrowRight,
  Building2,
  CheckCircle2,
  FileCheck,
  Globe2,
  MapPin,
  MessageSquare,
  Package,
  Plus,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

const sellers = [
  {
    initials: "IA",
    name: "Indus Agro Exports",
    location: "Mumbai, India",
    match: "96%",
    trust: "94/100",
    capacity: "12K MT",
    response: "98%",
    category: "Rice, spices & agricultural commodities",
    tags: ["Verified capacity", "Strong delivery record"],
  },
  {
    initials: "EH",
    name: "Eastern Harvest",
    location: "Ho Chi Minh City",
    match: "91%",
    trust: "91/100",
    capacity: "8K MT",
    response: "95%",
    category: "Rice, coffee & agricultural products",
    tags: ["Competitive pricing", "Verified supplier"],
  },
];

const opportunities = [
  {
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    title: "Premium Basmati Rice",
    requirement: "Req: 500 MT / Month",
    location: "Dubai, UAE",
    match: "93% Match",
  },
  {
    image:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80",
    title: "Organic Soybean",
    requirement: "Req: 250 MT / Month",
    location: "Rotterdam, NL",
    match: "91% Match",
  },
];

const stats = [
  {
    value: "12",
    label: "New matches",
    icon: Sparkles,
    color: "text-[#5146c7]",
  },
  {
    value: "8",
    label: "Active RFQs",
    icon: FileCheck,
    color: "text-[#d38a18]",
  },
  {
    value: "6",
    label: "Deals closed",
    icon: MessageSquare,
    color: "text-[#059669]",
  },
];

export default function BuyerPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#f7f8fa] text-[#111827]">
      <div className="flex min-h-screen w-full min-w-0">
        <aside className="fixed inset-y-0 left-0 z-40 hidden w-[250px] border-r border-[#e2e5e9] bg-white xl:flex xl:flex-col">
          <div className="flex h-[76px] items-center border-b border-[#e2e5e9] px-6">
            <h2 className="text-[21px] font-bold text-[#111b2c]">
              TradeMatchly
            </h2>
          </div>

          <nav className="flex-1 space-y-2 p-4">
            <button className="flex w-full items-center gap-3 rounded-md bg-[#eef0ff] px-4 py-3 text-left text-[14px] font-bold text-[#5146c7]">
              <Building2 size={19} />
              Dashboard
            </button>

            <button className="flex w-full items-center gap-3 rounded-md px-4 py-3 text-left text-[14px] font-semibold text-[#687384] hover:bg-[#f4f5f7]">
              <Package size={19} />
              Products
            </button>

            <button className="flex w-full items-center gap-3 rounded-md px-4 py-3 text-left text-[14px] font-semibold text-[#687384] hover:bg-[#f4f5f7]">
              <FileCheck size={19} />
              RFQs
            </button>

            <button className="flex w-full items-center gap-3 rounded-md px-4 py-3 text-left text-[14px] font-semibold text-[#687384] hover:bg-[#f4f5f7]">
              <Users size={19} />
              Sellers
            </button>
          </nav>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col xl:pl-[250px]">
          <header className="sticky top-0 z-30 flex min-h-[76px] items-center justify-between gap-4 border-b border-[#e2e5e9] bg-white px-4 sm:px-6 lg:px-8">
            <div className="min-w-0">
              <h1 className="truncate text-[20px] font-bold text-[#111b2c] sm:text-[23px]">
                Buyer Dashboard
              </h1>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <button className="hidden rounded-md border border-[#dfe4eb] px-3 py-2 text-[13px] font-semibold text-[#526071] sm:block">
                Help
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-md bg-[#111b2c] text-white">
                <Users size={19} />
              </button>
            </div>
          </header>

          <main className="mx-auto w-full max-w-[1600px] min-w-0 px-4 py-6 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
            <div className="mb-8 flex min-w-0 flex-wrap items-start justify-between gap-5">
              <div className="min-w-0">
                <h1 className="break-words text-[28px] font-bold leading-tight tracking-[-0.8px] text-[#111827] sm:text-[30px] lg:text-[32px]">
                  Good morning, Sarah
                </h1>

                <p className="mt-2 text-[14px] text-[#687384] lg:text-[15px]">
                  Here is what needs your attention today.
                </p>
              </div>

              <button className="flex shrink-0 items-center gap-2 rounded-md bg-[#fff0b8] px-4 py-2.5 text-[13px] font-bold text-[#b7791f]">
                <Sparkles size={16} />
                Mesh AI
              </button>
            </div>

            <section className="w-full overflow-hidden rounded-md border border-[#e2e5e9] bg-white">
              <div className="flex flex-wrap items-center gap-4 bg-[#fffbed] px-4 py-5 sm:px-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white text-[#d18a17]">
                  <AlertTriangle size={27} />
                </div>

                <div className="min-w-0">
                  <h2 className="text-[20px] font-bold text-[#172033] sm:text-[21px]">
                    Action center
                  </h2>

                  <p className="mt-1 text-[13px] text-[#687384]">
                    Complete these items to improve account visibility.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 border-t border-[#e7e7e7] px-4 py-5 sm:px-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-[#fff2bd] text-[#cf8613]">
                  <Building2 size={29} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-[16px] font-bold text-[#172033] sm:text-[17px]">
                    Complete your company profile
                  </h3>

                  <p className="mt-1 text-[13px] leading-5 text-[#687384]">
                    Add your business identity and operating details to unlock
                    marketplace features.
                  </p>

                  <button className="mt-2 text-[13px] font-bold text-[#bd7714] hover:underline">
                    Continue setup
                  </button>
                </div>

                <button className="shrink-0 text-[#c47d11]">
                  <ArrowRight size={21} />
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4 border-t border-[#e7e7e7] px-4 py-5 sm:px-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-[#fff2bd] text-[#cf8613]">
                  <Package size={29} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-[16px] font-bold text-[#172033] sm:text-[17px]">
                    1 product awaiting verification
                  </h3>

                  <p className="mt-1 text-[13px] leading-5 text-[#687384]">
                    Pending products remain hidden from buyers until the review
                    is complete.
                  </p>

                  <button className="mt-2 text-[13px] font-bold text-[#bd7714] hover:underline">
                    View products
                  </button>
                </div>

                <button className="shrink-0 text-[#c47d11]">
                  <ArrowRight size={21} />
                </button>
              </div>
            </section>

            <section className="mt-6 w-full rounded-md border border-[#e0e5eb] bg-white p-4 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-5">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#eef0ff] text-[#5146c7]">
                    <Users size={27} />
                  </div>

                  <div className="min-w-0">
                    <h2 className="text-[20px] font-bold text-[#172033] sm:text-[21px]">
                      Profile completion
                    </h2>

                    <p className="mt-1 text-[13px] text-[#9aa3af]">
                      Unlock more qualified matches
                    </p>
                  </div>
                </div>

                <div className="shrink-0 text-[26px] font-bold text-[#5146c7] sm:text-[28px]">
                  78%
                </div>
              </div>

              <div className="mt-6 h-2.5 w-full rounded-full bg-[#f0f2f3]">
                <div className="h-2.5 w-[78%] rounded-full bg-[#5146c7]" />
              </div>

              <div className="my-6 border-t border-[#e3e6eb]" />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:divide-x sm:divide-[#e3e6eb]">
                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="flex items-center justify-center gap-3 text-center"
                    >
                      <Icon size={25} className={stat.color} />

                      <div>
                        <p className="text-[25px] font-bold leading-none">
                          {stat.value}
                        </p>

                        <p className="mt-2 text-[12px] font-semibold text-[#657080]">
                          {stat.label}
                        </p>

                        {stat.label === "Deals closed" && (
                          <p className="mt-1 text-[11px] font-bold text-[#059669]">
                            +2 this week
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <button className="flex h-16 items-center justify-center gap-3 rounded-md bg-[#111b2c] text-[15px] font-bold text-white transition hover:bg-[#202d43]">
                <Plus size={24} />
                Add Product
              </button>

              <button className="flex h-16 items-center justify-center gap-3 rounded-md border border-[#dfe4eb] bg-white text-[15px] font-bold text-[#172033] transition hover:bg-[#f4f5f7]">
                <ShieldCheck size={24} />
                Verify Docs
              </button>
            </div>

            <section className="mt-10 w-full">
              <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
                <div className="min-w-0">
                  <h2 className="text-[23px] font-bold text-[#111827] sm:text-[24px]">
                    Matching Sellers
                  </h2>

                  <p className="mt-1 text-[13px] text-[#687384]">
                    Selected for your sourcing profile
                  </p>
                </div>

                <button className="shrink-0 text-[12px] font-bold uppercase tracking-wide text-[#5146c7]">
                  View All
                </button>
              </div>

              <div className="mb-5 flex items-start gap-3 rounded-md border border-[#dce3f5] bg-[#eef2ff] px-4 py-4 sm:px-5">
                <Sparkles size={25} className="mt-0.5 shrink-0 text-[#5146c7]" />

                <p className="text-[13px] leading-5 text-[#526071]">
                  Mesh AI found{" "}
                  <strong className="text-[#172033]">
                    3 high-confidence suppliers
                  </strong>{" "}
                  based on category, capacity, location, and trust.
                </p>
              </div>

              <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-2">
                {sellers.map((seller) => (
                  <div
                    key={seller.name}
                    className="min-w-0 overflow-hidden rounded-md border border-[#dfe4eb] bg-white p-4 sm:p-5"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex min-w-0 gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#111b2c] text-[16px] font-bold text-white">
                          {seller.initials}
                        </div>

                        <div className="min-w-0">
                          <h3 className="break-words text-[16px] font-bold text-[#172033]">
                            {seller.name}
                            <CheckCircle2
                              size={16}
                              className="ml-1 inline text-[#10b981]"
                            />
                          </h3>

                          <p className="mt-1 flex items-center gap-1.5 text-[12px] text-[#687384]">
                            <Globe2 size={14} />
                            {seller.location}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 rounded-md bg-[#e8faf1] px-4 py-2 text-center">
                        <div className="text-[21px] font-bold text-[#059669]">
                          {seller.match}
                        </div>

                        <div className="text-[10px] font-bold uppercase text-[#059669]">
                          Match
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex items-start gap-3 rounded-md bg-[#f1f3f6] px-3 py-3">
                      <Building2 size={19} className="mt-0.5 shrink-0 text-[#647080]" />

                      <span className="break-words text-[12px] font-semibold text-[#526071]">
                        {seller.category}
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-3 divide-x divide-[#e2e6eb]">
                      <div className="min-w-0 text-center">
                        <Star size={23} className="mx-auto mb-2 text-[#10b981]" />
                        <p className="break-words text-[15px] font-bold sm:text-[16px]">
                          {seller.trust}
                        </p>
                        <p className="mt-1 text-[10px] font-bold uppercase text-[#9aa3af]">
                          Trust
                        </p>
                      </div>

                      <div className="min-w-0 text-center">
                        <Package
                          size={23}
                          className="mx-auto mb-2 text-[#5146c7]"
                        />
                        <p className="break-words text-[15px] font-bold sm:text-[16px]">
                          {seller.capacity}
                        </p>
                        <p className="mt-1 text-[10px] font-bold uppercase text-[#9aa3af]">
                          Capacity
                        </p>
                      </div>

                      <div className="min-w-0 text-center">
                        <MessageSquare
                          size={23}
                          className="mx-auto mb-2 text-[#d38a18]"
                        />
                        <p className="break-words text-[15px] font-bold sm:text-[16px]">
                          {seller.response}
                        </p>
                        <p className="mt-1 text-[10px] font-bold uppercase text-[#9aa3af]">
                          Response
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {seller.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#e7fbf1] px-3 py-1.5 text-[10px] font-bold text-[#059669]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <button className="flex h-11 items-center justify-center gap-2 rounded-md border border-[#dce1e8] bg-white text-[12px] font-bold text-[#182033]">
                        View Profile
                        <ArrowRight size={15} />
                      </button>

                      <button className="flex h-11 items-center justify-center gap-2 rounded-md bg-[#111b2c] text-[12px] font-bold text-white">
                        <MessageSquare size={15} />
                        Contact
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10 w-full">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-[23px] font-bold text-[#111827] sm:text-[24px]">
                  New Opportunities
                </h2>

                <button className="shrink-0 text-[12px] font-bold uppercase tracking-wide text-[#5146c7]">
                  View All
                </button>
              </div>

              <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-2">
                {opportunities.map((item) => (
                  <div
                    key={item.title}
                    className="min-w-0 overflow-hidden rounded-md border border-[#dfe4eb] bg-white p-4 sm:p-5"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-20 w-24 shrink-0 rounded-md object-cover"
                      />

                      <span className="shrink-0 rounded-md border border-[#40b58d] px-3 py-2 text-[11px] font-bold text-[#059669]">
                        {item.match}
                      </span>
                    </div>

                    <h3 className="mt-5 break-words text-[18px] font-bold text-[#111b2c] sm:text-[19px]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[13px] text-[#687384]">
                      {item.requirement}
                    </p>

                    <div className="my-5 border-t border-[#e3e6eb]" />

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="flex min-w-0 items-center gap-2 text-[13px] text-[#687384]">
                        <MapPin size={18} className="shrink-0" />
                        <span>{item.location}</span>
                      </p>

                      <button className="shrink-0">
                        <ArrowRight size={21} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10 pb-8">
              <h2 className="mb-5 text-[23px] font-bold text-[#111827] sm:text-[24px]">
                Recent Activity
              </h2>

              <div className="rounded-md border border-[#dfe4eb] bg-white px-4 py-6 sm:px-6">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-3 w-3 shrink-0 rounded-full bg-[#5146c7]" />
                    <div className="h-16 w-px bg-[#dfe4eb]" />
                  </div>

                  <div className="min-w-0 pb-5">
                    <p className="break-words text-[14px] text-[#172033]">
                      Submitted quote for RFQ-2026-892
                    </p>

                    <p className="mt-2 text-[11px] font-bold text-[#687384]">
                      2 HOURS AGO
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-3 w-3 shrink-0 rounded-full bg-[#dce1e7]" />
                    <div className="h-16 w-px bg-[#dfe4eb]" />
                  </div>

                  <div className="min-w-0 pb-5">
                    <p className="break-words text-[14px] text-[#172033]">
                      Buyer AgriCorp Global viewed your profile
                    </p>

                    <p className="mt-2 text-[11px] font-bold text-[#687384]">
                      YESTERDAY, 14:30
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-3 w-3 shrink-0 rounded-full bg-[#10b981]" />

                  <div className="min-w-0">
                    <p className="break-words text-[14px] text-[#172033]">
                      Verification documents approved
                    </p>

                    <p className="mt-2 text-[11px] font-bold text-[#687384]">
                      SEP 03, 09:15
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}