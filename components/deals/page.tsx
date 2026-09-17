"use client";

import { useState } from "react";

export default function DealsPage() {
  const [activeTab, setActiveTab] = useState("Overview & Terms");

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f7f9] px-3 py-3 text-[#1d1d1f] sm:px-4 sm:py-4">

      <div className="mb-3 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex flex-wrap items-center gap-2 text-[13px] text-[#777]">

          <span className="text-[#555]">
            Trade Execution
          </span>

          <span>›</span>

          <span>
            Deals
          </span>

          <span>›</span>

          <span className="font-semibold text-[#5540d9]">
            DEAL #TM-10482
          </span>

        </div>

        <div className="flex flex-wrap items-center gap-2 text-[13px]">

          <span className="rounded-full bg-[#e4f7ef] px-2.5 py-1 font-semibold text-[#29956a]">
            In Production
          </span>

          <span className="rounded-full bg-[#ece9ff] px-2.5 py-1 font-semibold text-[#6045df]">
            Verified Contract
          </span>

          <span className="text-[#777]">
            Created: Oct 12, 2024
          </span>

        </div>

      </div>

      <section className="mb-3 rounded-lg border border-[#dedee5] bg-white px-3 py-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] sm:px-4">

        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

          <div>

            <h1 className="max-w-[560px] text-[20px] font-bold leading-[23px] text-[#111] sm:text-[22px]">
              Deal #TM-10482: Organic Salem
              <br />
              Turmeric Powder (500 MT)
            </h1>

            <p className="mt-1.5 max-w-[600px] text-[13px] leading-[17px] text-[#777]">
              High-curcumin export contract under Incoterms® 2020 CIF
              Rotterdam with
              <br className="hidden sm:block" />
              Irrevocable Documentary L/C backing.
            </p>

          </div>

          <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:w-auto">

            <button
              type="button"
              className="flex min-h-[38px] items-center justify-center gap-1 rounded-md border border-[#dedee5] bg-white px-3 py-2 text-[13px] font-medium text-[#333] hover:bg-[#f8f8fa]"
            >
              ⊙ Download Dossier
            </button>

            <button
              type="button"
              className="flex min-h-[38px] items-center justify-center gap-1 rounded-md border border-[#dedee5] bg-white px-3 py-2 text-[13px] font-medium text-[#333] hover:bg-[#f8f8fa]"
            >
              ⇧ Upload Doc
            </button>

            <button
              type="button"
              className="flex min-h-[38px] items-center justify-center gap-1 rounded-md border border-[#dedee5] bg-white px-3 py-2 text-[13px] font-medium text-[#333] hover:bg-[#f8f8fa]"
            >
              ▤ Message
            </button>

            <button
              type="button"
              className="flex min-h-[38px] items-center justify-center gap-1 rounded-md bg-[#5d43e8] px-3 py-2 text-[13px] font-semibold text-white hover:bg-[#4e35d5]"
            >
              ▣ Request SGS Inspection
            </button>

          </div>

        </div>

      </section>

      <section className="mb-3 grid grid-cols-1 gap-3 md:grid-cols-3">


        <div className="relative overflow-hidden rounded-lg border border-[#dedee5] bg-white p-3">

          <div className="absolute right-[-25px] top-[-30px] h-[90px] w-[90px] rounded-full bg-[#f1efff]" />

          <div className="relative">

            <div className="mb-2 flex items-start justify-between gap-2">

              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wide text-[#777]">
                  Buyer /
                </p>

                <p className="text-[13px] font-semibold uppercase tracking-wide text-[#777]">
                  Consignee
                </p>
              </div>

              <div className="shrink-0 whitespace-nowrap text-right">

  <p className="text-[12px] font-bold text-[#26a274]">
    ◉ Trust Score 94/100
  </p>

</div>

            </div>

            <div className="flex items-center gap-2">

              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#10172d] text-[12px] font-bold text-white">
                AB
              </div>

              <div className="min-w-0">

                <p className="truncate text-[15px] font-bold text-[#333]">
                  ABC Imports B.V.
                </p>

                <p className="mt-0.5 text-[13px] text-[#777]">
                  ◉ Rotterdam, Netherlands
                </p>

              </div>

            </div>

            <p className="mt-2 text-[10px] text-[#999]">
              Reg: NL-8829103 • VAT: NL829100300B01
            </p>

            <div className="my-3 border-t border-[#eeeeef]" />

            <div className="flex items-center justify-between gap-2">

              <div className="flex min-w-0 items-center gap-2">

                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f0f0f2] text-[12px] text-[#555]">
                  JB
                </div>

                <div className="min-w-0">

                  <p className="truncate text-[13px] font-semibold">
                    Jan van der Berg
                  </p>

                  <p className="truncate text-[10px] text-[#777]">
                    Head of Global Procurement
                  </p>

                </div>

              </div>

              <span className="shrink-0 text-[14px] text-[#555]">
                ✉
              </span>

            </div>

          </div>

        </div>

        <div className="relative overflow-hidden rounded-lg border border-[#dedee5] bg-white p-3">

          <div className="absolute right-[-25px] top-[-30px] h-[90px] w-[90px] rounded-full bg-[#eef8f4]" />

          <div className="relative">

            <div className="mb-2 flex flex-wrap items-start justify-between gap-2">

              <p className="text-[13px] font-semibold uppercase tracking-wide text-[#777]">
                Supplier / Shipper
              </p>

              <p className="whitespace-nowrap text-[12px] font-bold text-[#26a274]">
  ◉ Trust Score 91/100
</p>

            </div>

            <div className="flex items-center gap-2">

              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#5944e5] text-[12px] font-bold text-white">
                AS
              </div>

              <div className="min-w-0">

                <p className="truncate text-[15px] font-bold text-[#333]">
                  ABC Spices Pvt. Ltd.
                </p>

                <p className="mt-0.5 text-[13px] text-[#777]">
                  ◉ Kochi, Kerala, India
                </p>

              </div>

            </div>

            <p className="mt-2 text-[10px] text-[#999]">
              IEC: IN-4019283
            </p>

            <div className="my-3 border-t border-[#eeeeef]" />

            <div className="flex items-center justify-between gap-2">

              <div className="flex min-w-0 items-center gap-2">

                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f0f0f2] text-[12px] text-[#555]">
                  RN
                </div>

                <div className="min-w-0">

                  <p className="truncate text-[13px] font-semibold">
                    Rajesh Nair
                  </p>

                  <p className="truncate text-[10px] text-[#777]">
                    Export Director
                  </p>

                </div>

              </div>

              <span className="shrink-0 text-[16px] text-[#555]">
                ♙
              </span>

            </div>

          </div>

        </div>

        <div className="rounded-lg border border-[#dedee5] bg-white p-3">

          <div className="flex items-center justify-between gap-2">

            <p className="text-[13px] font-semibold uppercase tracking-wide text-[#777]">
              Contract Value
            </p>

            <p className="text-[12px] font-semibold text-[#5140db]">
              $850.00 / MT
            </p>

          </div>

          <div className="mt-2">

            <span className="text-[24px] font-bold tracking-tight text-[#111]">
              $425,000.00
            </span>

            <div className="text-right text-[10px] text-[#777]">
              USD
            </div>

          </div>

          <div className="mt-3 border-t border-[#eeeeef] pt-2">

            <div className="flex flex-wrap justify-between gap-1 text-[12px]">

              <span className="text-[#777]">
                Target ETD - ETA:
              </span>

              <span className="font-semibold text-[#555]">
                Nov 12 → Nov 28, 2024
              </span>

            </div>

          </div>

        </div>

      </section>

      <section className="mb-3 rounded-lg border border-[#dedee5] bg-white">

        <div className="grid grid-cols-1 divide-y md:grid-cols-3 md:divide-x md:divide-y-0">

          <ShippingInfo
            icon="♜"
            title="PORT OF LOADING (POL)"
            value="JNPT Nhava Sheva"
            code="INNSA"
          />

          <div className="flex items-center gap-3 px-4 py-3">

            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f0efff] text-[#6045e9]">
              ⇄
            </div>

            <div>
              <span className="rounded-full bg-[#f5f5f8] px-2 py-1 text-[12px] text-[#777]">
                16 Days Transit • Maersk Line
              </span>
            </div>

          </div>

          <ShippingInfo
            icon="⚓"
            title="PORT OF DISCHARGE (POD)"
            value="Rotterdam Port"
            code="NLRTM"
          />

        </div>

      </section>

      <section className="mb-3 grid grid-cols-1 gap-3 md:grid-cols-3">

        <DetailCard
          title="INCOTERM RULE"
          value="CIF Rotterdam (2020)"
        />

        <DetailCard
          title="DOCUMENT STATUS"
          value="Verified Contract"
          green
        />

        <DetailCard
          title="PAYMENT STATUS"
          value="L/C Pending Activation"
          purple
        />

      </section>

      <section className="mt-3 rounded-lg border border-[#dedee5] bg-white p-3">

        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <h2 className="text-[16px] font-bold text-[#222]">
              Deal Execution Milestones
            </h2>

            <p className="mt-0.5 text-[13px] leading-[17px] text-[#777]">
              Stage 3 of 8 active. Production milestone nearing
              completion for SGS audit dispatch.
            </p>

          </div>

          <div className="w-fit rounded bg-[#efedff] px-2 py-1 text-[10px] font-semibold text-[#6045e9]">
            Overall Progress: 42%
          </div>

        </div>

        <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4 lg:grid-cols-8">

          <Milestone
            number="01"
            title="CONTRACT"
            name="Contract Signed"
            date="Oct 11 • 11:47"
            status="Completed"
            type="completed"
          />

          <Milestone
            number="02"
            title="ADVANCE"
            name="Advance & L/C Escrow"
            date="Oct 15 • 17:24"
            status="L/C Confirmed"
            type="completed"
          />

          <Milestone
            number="03"
            title="PRODUCTION"
            name="Production Milestone"
            date="Nov 02 • 16:00"
            status="62% Complete"
            type="active"
          />

          <Milestone
            number="04"
            title="INSPECTION"
            name="SGS Inspection"
            date="Nov 05 • 09:00"
            status="Confirmed"
            type="warning"
          />

          <Milestone
            number="05"
            title="DISPATCH"
            name="Port & Customs"
            date="Nov 08 • 16:00"
            status="Scheduled"
            type="pending"
          />

          <Milestone
            number="06"
            title="TRANSIT"
            name="Ocean Transit"
            date="Nov 12 • Maersk"
            status="L/C Pending"
            type="pending"
          />

          <Milestone
            number="07"
            title="CLEARANCE"
            name="Rotterdam Customs"
            date="Nov 28 • 09:00"
            status="EU Green Lane"
            type="pending"
          />

          <Milestone
            number="08"
            title="RELEASE"
            name="Final Payout"
            date="Dec 02 • Release"
            status="$297.5K"
            type="pending"
          />

        </div>

      </section>

      <section className="mt-3">

        <div className="mb-3 flex items-center gap-1 overflow-x-auto border-b border-[#dedee5]">

          {[
            "Overview & Terms",
            "Trade Documents",
            "Shipment & Containers",
            "Financial Escrow",
          ].map((tab) => {

            const active = activeTab === tab;

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap rounded-t-md px-3 py-2 text-[13px] font-semibold ${
                  active
                    ? "bg-[#5d43e8] text-white"
                    : "text-[#555] hover:bg-[#f2f1f5]"
                }`}
              >
                {tab}

                {tab === "Trade Documents" && (
                  <span className="ml-1 rounded-full bg-[#e5e5e9] px-1.5 py-0.5 text-[10px]">
                    8
                  </span>
                )}
              </button>
            );
          })}

        </div>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_250px]">

         

          <div className="rounded-lg border border-[#dedee5] bg-white p-3">

            <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

              <div className="flex items-start gap-2">

                <div className="mt-0.5 text-[14px] text-[#6045e9]">
                  ♧
                </div>

                <div>

                  <h2 className="text-[15px] font-bold text-[#333]">
                    Agreed Laboratory & Quality
                    <br />
                    Specifications
                  </h2>

                </div>

              </div>

              <div className="w-fit rounded bg-[#e5f6ef] px-2 py-1 text-[10px] font-semibold text-[#29966b]">
                Lab Certificate: COA-LAB-
                <br />
                7712
              </div>

            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">

              <QualityCard
                title="Curcumin Content"
                value="2.94%"
                limit="Min 2.8%"
                status="Within Threshold"
              />

              <QualityCard
                title="Moisture"
                value="8.60%"
                limit="Max 10%"
                status="Conforms"
              />

              <QualityCard
                title="Total Ash Content"
                value="5.80%"
                limit="Max 7.0%"
                status="Conforms"
              />

              <QualityCard
                title="Acid Insoluble Ash"
                value="0.82%"
                limit="Max 1.2%"
                status="Conforms"
              />

              <QualityCard
                title="Mesh Fineness"
                value="100/60"
                limit="Min 90/60"
                status="Ultra-fine Pass"
              />

              <QualityCard
                title="Salmonella"
                value="Absent"
                limit="per 25g"
                status="Microbiological Cleared"
              />

              <QualityCard
                title="Escherichia Coli"
                value="Absent"
                limit="per 1g"
                status="Negative Test"
              />

              <QualityCard
                title="Pesticide Residue"
                value="EU-Compliant"
                limit="0.01"
                status="Bio-Inspection"
              />

            </div>

            <div className="mt-3 rounded-lg border border-[#dedee5] bg-white p-3">

              <div className="mb-3 flex items-start justify-between gap-2">

                <div className="flex items-center gap-2">

                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#efedff] text-[16px] text-[#6045e9]">
                    ✦
                  </div>

                  <div>

                    <h2 className="text-[15px] font-bold text-[#333]">
                      Mesh AI Co-Pilot
                    </h2>

                    <p className="text-[11px] text-[#888]">
                      Real-time Trade Intelligence
                    </p>

                  </div>

                </div>

                <span className="rounded bg-[#efedff] px-1.5 py-1 text-[10px] font-bold text-[#6045e9]">
                  LIVE v2.4
                </span>

              </div>

              <div className="mb-2 rounded-md border-l-2 border-[#f19a25] bg-[#fff9ef] p-2.5">

                <div className="flex gap-2">

                  <span className="text-[16px] text-[#e68b18]">
                    ⚠
                  </span>

                  <div>

                    <p className="text-[13px] font-bold text-[#444]">
                      Action Recommendation
                      <br />

                      <span className="font-normal">
                        (in 3d)
                      </span>
                    </p>

                    <p className="mt-1 text-[12px] leading-[15px] text-[#777]">
                      SGS Pre-Shipment Inspection is set for Nov 05.
                      17 of 20 container batches are staged. Ensure
                      Batch Analysis and Fumigation Logs are printed
                      for the inspector.
                    </p>

                  </div>

                </div>

              </div>

              <div className="rounded-md bg-[#eaf8f2] p-2.5">

                <div className="flex gap-2">

                  <span className="text-[15px] text-[#20a06d]">
                    ◉
                  </span>

                  <div>

                    <p className="text-[13px] font-bold text-[#444]">
                      Document Alignment Check
                    </p>

                    <p className="mt-1 text-[12px] leading-[15px] text-[#777]">
                      Zero discrepancies detected between Proforma,
                      L/C conditions, and Packing List. Curcumin purity
                      exceeds contract baseline by +0.14%.
                    </p>

                  </div>

                </div>

              </div>

            </div>

            <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">

              <div className="rounded-lg border border-[#dedee5] bg-white p-3">

                <div className="mb-3 flex items-start gap-2">

                  <div className="mt-0.5 text-[13px] text-[#6045e9]">
                    ◇
                  </div>

                  <h2 className="text-[13px] font-bold leading-[18px] text-[#222]">
                    Packaging & Pallet
                    <br />
                    Configuration
                  </h2>

                </div>

                <div className="space-y-2.5">

                  <div className="flex gap-1.5">

                    <span className="mt-0.5 text-[13px] font-bold text-[#29966b]">
                      ✓
                    </span>

                    <p className="text-[12px] leading-[15px] text-[#555]">
                      <span className="font-bold text-[#333]">
                        Bag Type:
                      </span>{" "}
                      25 KG multi-wall Kraft paper bags with 80-micron
                      inner food-grade HDPE liner.
                    </p>

                  </div>

                  <div className="flex gap-1.5">

                    <span className="mt-0.5 text-[13px] font-bold text-[#29966b]">
                      ✓
                    </span>

                    <p className="text-[12px] leading-[15px] text-[#555]">
                      <span className="font-bold text-[#333]">
                        Total Units:
                      </span>{" "}
                      20,000 bags (1,000 bags per 20' FCL container,
                      25 MT gross per container).
                    </p>

                  </div>

                  <div className="flex gap-1.5">

                    <span className="mt-0.5 text-[13px] font-bold text-[#29966b]">
                      ✓
                    </span>

                    <p className="text-[12px] leading-[15px] text-[#555]">
                      <span className="font-bold text-[#333]">
                        Palletizing:
                      </span>{" "}
                      Heat-treated ISPM-15 certified European wooden
                      pallets with shrink-wrap bands.
                    </p>

                  </div>

                </div>

                <div className="mt-10 grid grid-cols-2 gap-3 border-t border-[#eeeeef] pt-2.5">

                  <div>

                    <p className="text-[12px] text-[#777]">
                      Fumigation
                    </p>

                    <p className="text-[12px] font-medium text-[#555]">
                      Standard:
                    </p>

                  </div>

                  <div>

                    <p className="text-[12px] text-[#777]">
                      Methyl Bromide
                    </p>

                    <p className="text-[12px] font-medium text-[#555]">
                      (NSPM-12)
                    </p>

                  </div>

                </div>

              </div>

              

              <div className="rounded-lg border border-[#dedee5] bg-white p-3">

                <div className="mb-3 flex items-start gap-2">

                  <div className="mt-0.5 text-[15px] text-[#6045e9]">
                    ▦
                  </div>

                  <h2 className="text-[13px] font-bold leading-[18px] text-[#222]">
                    Approved Shipping
                    <br />
                    Stencil
                  </h2>

                </div>

                <div className="space-y-1 font-serif">

                  <p className="text-[12px] text-[#222]">
                    ABC IMPORTS B.V.
                  </p>

                  <p className="text-[12px] leading-[14px] text-[#333]">
                    Port Of Discharge: Rotterdam,
                    
                    Netherlands
                  </p>
                  

                  <p className="text-[12px] leading-[14px] text-[#333]">
                    Commodity: Organic Salem
                    
                    Turmeric Powder
                  </p>

                  <p className="text-[12px] leading-[14px] text-[#333]">
                    Net Weight: 25.00 Kgs | Gross
                    
                    Weight: 25.25 Kgs
                  </p>

                  <p className="text-[12px] leading-[14px] text-[#333]">
                    Batch No: Tm-1024-Tp88 | Origin:
                    
                    India
                  </p>

                  <p className="text-[12px] leading-[14px] text-[#333]">
                    L/C REF: SCB-88392 / Rotterdam
                  </p>

                </div>

                <div className="mt-8 flex items-end justify-between">

                  <p className="max-w-[180px] text-[12px] leading-[13px] text-[#777]">
                    Barcode format: GS1-128 compliant
                    <br />
                    stenciled on 2 faces
                  </p>

                  <span className="text-[11px] text-[#29966b]">
                    ◉
                  </span>

                </div>

              </div>

              {/* FACILITY */}

              <div className="rounded-lg border border-[#dedee5] bg-white p-3 md:col-span-2">

                <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                  <div>

                    <h2 className="text-[15px] font-bold text-[#222]">
                      Milling & Packing Facility Status
                    </h2>

                    <p className="text-[13px] text-[#888]">
                      Erode Processing Plant #2 • Daily throughput tracking
                    </p>

                  </div>

                  <div className="flex items-center gap-1 text-[12px] font-semibold text-[#29966b]">

                    <span className="h-2.5 w-2.5 rounded-full bg-[#e5f8f0]" />

                    Live Updates

                  </div>

                </div>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">

                  <FacilityCard
                    title="Raw Rhizome Sorting"
                    value="500 / 500 MT"
                    percentage="100%"
                    progress="100%"
                    description="Salem Grade-A selection completed Oct 21"
                  />

                  <FacilityCard
                    title="Cryogenic Pulverization"
                    value="450 / 500 MT"
                    percentage="90%"
                    progress="90%"
                    description="Target completion tomorrow 14:00 IST"
                  />

                  <FacilityCard
                    title="Automated Liner Sealing"
                    value="17,000 / 20k Bags"
                    percentage="85%"
                    progress="85%"
                    description="17 Container batches palletized & tagged"
                  />

                </div>

              </div>

            </div>

          </div>

          <div className="space-y-3">

            {/* QUICK AI ACTIONS */}

            <div className="rounded-lg border border-[#dedee5] bg-white p-3">

              <p className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-[#888]">
                QUICK AI ACTIONS
              </p>

              <div className="space-y-1.5">

                <QuickAction text="Draft Notice of Readiness (NOR)" />

                <QuickAction text="Export Compliance Checklist" />

                <QuickAction text="Generate Shipping Advisory" />

              </div>

            </div>

            {/* ESCROW */}

            <div className="rounded-lg border border-[#dedee5] bg-white p-3">

              <div className="mb-3 flex items-center justify-between">

                <h2 className="text-[15px] font-bold text-[#333]">
                  Payment Escrow Status
                </h2>

                <span className="text-[14px] text-[#6045e9]">
                  ♙
                </span>

              </div>

              <div className="flex items-center justify-between gap-2">

                <span className="text-[13px] text-[#777]">
                  Contract Total:
                </span>

                <span className="text-[13px] font-bold text-[#333]">
                  $425,000.00 USD
                </span>

              </div>

              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#e8e8ee]">

                <div className="h-full w-[70%] rounded-full bg-[#20a06d]" />

              </div>

              <div className="mt-3 space-y-2">

                <EscrowStage
                  color="green"
                  title="Stage 1: Advance"
                  amount="$127,500"
                  percentage="(30%)"
                  status="PAID"
                />

                <EscrowStage
                  color="purple"
                  title="Stage 2: B/L & SGS"
                  amount="$170,000"
                  percentage="(40%)"
                  status="SECURED"
                />

                <EscrowStage
                  color="gray"
                  title="Stage 3: Port Arrival"
                  amount="$127,500"
                  percentage="(30%)"
                  status="PENDING"
                />

              </div>

            </div>

            {/* DEAL CHAT */}

            <div className="rounded-lg border border-[#dedee5] bg-white p-3">

              <div className="mb-2 flex items-center justify-between gap-2">

                <div className="flex min-w-0 items-center gap-2">

                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#10172d] text-[12px] font-bold text-white">
                    JB
                  </div>

                  <div className="min-w-0">

                    <p className="truncate text-[15px] font-semibold text-[#333]">
                      Jan van der Berg
                    </p>

                    <p className="truncate text-[13px] text-[#777]">
                      ● ABC Imports B.V. • Online
                    </p>

                  </div>

                </div>

                <span className="text-[10px] text-[#555]">
                  ▢
                </span>

              </div>

              <div className="rounded-md bg-[#f5f3f5] p-2.5">

                <p className="text-[12px] leading-[15px] text-[#555]">
                  "Packing looks pristine from the warehouse photo
                  stream. Looking forward to SGS clearance on Wednesday!"
                </p>

                <p className="mt-1 text-[10px] text-[#999]">
                  Today at 10:42 AM CET
                </p>

              </div>

              <button
                type="button"
                className="mt-2 flex w-full items-center justify-between rounded-md border border-[#e3e3e8] px-2 py-1.5 text-left"
              >

                <span className="text-[13px] text-[#aaa]">
                  Quick reply to Jan...
                </span>

                <span className="text-[13px] text-[#6045e9]">
                  ▷
                </span>

              </button>

              <div className="mt-2 flex items-center justify-between gap-2 text-[10px]">

                <span className="text-[#777]">
                  Encrypted Deal Chat
                </span>

                <button
                  type="button"
                  className="font-semibold text-[#6045e9]"
                >
                  Open Full Thread
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

function ShippingInfo({
  icon,
  title,
  value,
  code,
}: {
  icon: string;
  title: string;
  value: string;
  code: string;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3">

      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f0efff] text-[12px] text-[#6045e9]">
        {icon}
      </div>

      <div className="min-w-0">

        <p className="text-[10px] font-semibold uppercase tracking-wide text-[#888]">
          {title}
        </p>

        <div className="flex flex-wrap items-end gap-1">

          <p className="text-[13px] font-bold text-[#333]">
            {value}
          </p>

          <span className="text-[9px] text-[#999]">
            ({code})
          </span>

        </div>

      </div>

    </div>
  );
}

function DetailCard({
  title,
  value,
  green,
  purple,
}: {
  title: string;
  value: string;
  green?: boolean;
  purple?: boolean;
}) {
  return (
    <div className="rounded-lg border border-[#dedee5] bg-white p-3">

      <p className="text-[10px] font-semibold uppercase tracking-wide text-[#888]">
        {title}
      </p>

      <p
        className={`mt-1 text-[13px] font-bold ${
          green
            ? "text-[#26986b]"
            : purple
            ? "text-[#6045e9]"
            : "text-[#333]"
        }`}
      >
        {value}
      </p>

    </div>
  );
}

function Milestone({
  number,
  title,
  name,
  date,
  status,
  type,
}: {
  number: string;
  title: string;
  name: string;
  date: string;
  status: string;
  type: "completed" | "active" | "warning" | "pending";
}) {
  const styles = {
    completed: {
      box: "border-[#cfeee1] bg-[#f6fcf9]",
      number: "bg-[#e0f6ec] text-[#29966b]",
      status: "text-[#29966b]",
    },

    active: {
      box: "border-[#dcd5ff] bg-[#faf9ff]",
      number: "bg-[#ebe7ff] text-[#6045e9]",
      status: "text-[#6045e9]",
    },

    warning: {
      box: "border-[#f6dfbd] bg-[#fffaf3]",
      number: "bg-[#fff0d8] text-[#d88918]",
      status: "text-[#d88918]",
    },

    pending: {
      box: "border-[#e2e2e7] bg-white",
      number: "bg-[#f1f1f3] text-[#777]",
      status: "text-[#777]",
    },
  };

  const currentStyle = styles[type];

  return (
    <div
      className={`min-h-[125px] rounded-md border p-2 ${currentStyle.box}`}
    >

      <div className="flex items-center justify-between">

        <span
          className={`flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-bold ${currentStyle.number}`}
        >
          {number}
        </span>

        {type === "completed" && (
          <span className="text-[10px] text-[#29966b]">
            ✓
          </span>
        )}

        {type === "active" && (
          <span className="text-[10px] text-[#6045e9]">
            ●
          </span>
        )}

        {type === "warning" && (
          <span className="text-[10px] text-[#d88918]">
            ⚠
          </span>
        )}

      </div>

      <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-[#888]">
        {title}
      </p>

      <p className="mt-1 text-[11px] font-bold leading-[13px] text-[#333]">
        {name}
      </p>

      <p className="mt-2 text-[9px] text-[#999]">
        {date}
      </p>

      <p
        className={`mt-2 text-[9px] font-semibold ${currentStyle.status}`}
      >
        {status}
      </p>

    </div>
  );
}

function QualityCard({
  title,
  value,
  limit,
  status,
}: {
  title: string;
  value: string;
  limit: string;
  status: string;
}) {
  return (
    <div className="rounded-md border border-[#e4e4e8] bg-[#fcfcfd] p-2.5">

      <p className="min-h-[26px] text-[10px] font-semibold leading-[12px] text-[#777]">
        {title}
      </p>

      <p className="mt-1 text-[15px] font-bold text-[#222]">
        {value}
      </p>

      <p className="mt-0.5 text-[9px] text-[#999]">
        {limit}
      </p>

      <div className="mt-2 flex items-center gap-1">

        <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#e2f7ed] text-[8px] text-[#29966b]">
          ✓
        </span>

        <span className="text-[9px] font-semibold leading-[11px] text-[#29966b]">
          {status}
        </span>

      </div>

    </div>
  );
}

function FacilityCard({
  title,
  value,
  percentage,
  progress,
  description,
}: {
  title: string;
  value: string;
  percentage: string;
  progress: string;
  description: string;
}) {
  return (
    <div className="rounded-md bg-[#f7f5f7] p-2.5">

      <div className="flex items-center justify-between gap-2">

        <p className="text-[10px] font-semibold text-[#777]">
          {title}
        </p>

        <span className="text-[9px] font-bold text-[#6045e9]">
          {percentage}
        </span>

      </div>

      <p className="mt-2 text-[15px] font-bold leading-[17px] text-[#222]">
        {value}
      </p>

      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#dedee5]">

        <div
          className="h-full rounded-full bg-[#29966b]"
          style={{ width: progress }}
        />

      </div>

      <p className="mt-2 text-[9px] leading-[12px] text-[#777]">
        {description}
      </p>

    </div>
  );
}

function QuickAction({
  text,
}: {
  text: string;
}) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-between rounded-md border border-[#eeeeef] bg-[#fafafa] px-2 py-2 text-left hover:bg-[#f5f3ff]"
    >

      <div className="flex min-w-0 items-center gap-2">

        <span className="shrink-0 text-[13px] text-[#6045e9]">
          ◉
        </span>

        <span className="text-[10px] font-semibold text-[#555]">
          {text}
        </span>

      </div>

      <span className="shrink-0 text-[13px] text-[#999]">
        ›
      </span>

    </button>
  );
}

function EscrowStage({
  color,
  title,
  amount,
  percentage,
  status,
}: {
  color: "green" | "purple" | "gray";
  title: string;
  amount: string;
  percentage: string;
  status: string;
}) {
  const dotColor = {
    green: "bg-[#29966b]",
    purple: "bg-[#6045e9]",
    gray: "bg-[#bcbcc3]",
  };

  const statusColor = {
    green: "text-[#29966b]",
    purple: "text-[#6045e9]",
    gray: "text-[#999]",
  };

  return (
    <div className="flex items-start gap-2">

      <span
        className={`mt-1 h-2 w-2 shrink-0 rounded-full ${dotColor[color]}`}
      />

      <div className="min-w-0 flex-1">

        <div className="flex items-center justify-between gap-2">

          <p className="text-[10px] font-medium text-[#555]">
            {title}
          </p>

          <span
            className={`text-[9px] font-semibold ${statusColor[color]}`}
          >
            {status}
          </span>

        </div>

        <p className="text-[13px] text-[#777]">
          {percentage}
        </p>

      </div>

      <span className="shrink-0 text-[13px] font-semibold text-[#29966b]">
        {amount}
      </span>

    </div>
  );
}