import Link from "next/link";
import StatCard from "../../components/admin/StatCard";
import OpportunityCard from "../../components/admin/OpportunityCard";
import Activity from "../../components/admin/Activity";

export default function SupplierDashboard() {

  return (
    <div>

      <section className="mb-[22px] flex items-start justify-between max-[750px]:flex-col max-[750px]:gap-4">

        <div>

          <h1 className="mb-2 text-[25px] font-bold">
            Good morning, Sarah
          </h1>

          <div className="text-[11px] text-[#606470]">

            ABC Spices Pvt. Ltd.

            <span className="ml-2 inline-block rounded-full bg-[#e5f8ef] px-2 py-1 text-[8px] text-[#159966]">
              ✓ Verified
            </span>

          </div>

        </div>

        <div className="w-[265px] rounded-md border border-[#e2e2e7] bg-white p-3.5 max-[750px]:w-full">

          <div className="mb-2 flex justify-between text-[10px]">

            <span>
              Profile Completion
            </span>

            <strong className="text-[#5b50e8]">
              78%
            </strong>

          </div>

          <div className="mb-2.5 h-[5px] overflow-hidden rounded-full bg-[#e4e4eb]">

            <div className="h-full w-[78%] rounded-full bg-[#5b50e8]" />

          </div>

          <div className="mt-1.5 text-[8px] text-[#777b86]">

            <span className="mr-1 text-[#e9953e]">
              ＋
            </span>

            Add company description (+5%)

          </div>

          <div className="mt-1.5 text-[8px] text-[#777b86]">

            <span className="mr-1 text-[#e9953e]">
              ＋
            </span>

            Add 2 more products (+10%)

          </div>

        </div>

      </section>

      <section className="mb-[17px] grid grid-cols-5 gap-3 max-[1100px]:grid-cols-3 max-[750px]:grid-cols-2 max-[500px]:grid-cols-1">

        <StatCard
          title="NEW OPPORTUNITIES"
          value="12"
          change="+23%"
          borderColor="border-l-[3px] border-l-[#6257eb]"
        />

        <StatCard
          title="ACTIVE RFQs"
          value="8"
          change="+2 since last week"
          borderColor="border-l-[3px] border-l-[#4d8bea]"
        />

        <StatCard
          title="QUOTES SUBMITTED"
          value="24"
          change="+14%"
          borderColor="border-l-[3px] border-l-[#2ca86f]"
        />

        <StatCard
          title="NEGOTIATIONS"
          value="4"
          change="2 need action"
          borderColor="border-l-[3px] border-l-[#ed9b40]"
        />

        <StatCard
          title="DEALS WON"
          value="6"
          change="+20%"
          borderColor="border-l-[3px] border-l-[#25aaa4]"
        />

      </section>

      <section className="grid grid-cols-[minmax(0,1.55fr)_minmax(280px,0.8fr)] gap-4 max-[1100px]:grid-cols-1">

        <div className="flex flex-col gap-4">

          <div className="overflow-hidden rounded-md border border-[#e2e2e7] bg-white">

            <div className="flex items-start justify-between border-b border-[#eeeeef] p-[17px]">

              <div>

                <h2 className="mb-1 text-[13px] font-bold">
                  ✦ AI-Matched Buyer Opportunities
                </h2>

                <p className="text-[8px] text-[#898c97]">
                  Best matches based on your products and target markets
                </p>

              </div>

              <Link
                href="/supplier/buyer-opportunities"
                className="border-0 bg-transparent text-[9px] text-[#584de9]"
              >
                View All
              </Link>

            </div>

            <div className="px-3.5 pb-3.5">

              <OpportunityCard
                letter="T"
                product="Turmeric Powder"
                buyer="Alappay Fingers"
                quantity="500 MT"
                destination="Rotterdam, NL"
                match="98% MATCH"
              />

              <OpportunityCard
                letter="P"
                product="Black Pepper"
                buyer="Thecherry Garib"
                quantity="200 MT"
                destination="Dubai, UAE"
                match="96% MATCH"
              />

            </div>

          </div>

        </div>

        <Activity />

      </section>

    </div>
  );
}