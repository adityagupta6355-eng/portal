import Link from "next/link";

const pipeline = [
  {
    label: "NEW",
    value: 12,
  },
  {
    label: "VIEWED",
    value: 8,
  },
  {
    label: "RESPONDED",
    value: 6,
  },
  {
    label: "NEGOTIATING",
    value: 4,
  },
  {
    label: "WON",
    value: 2,
  },
];

export default function Pipeline() {
  return (
    <div className="rounded-xl border border-[#e6e6eb] bg-white p-5">

      <div className="mb-5 flex items-center justify-between">

        <div>
          <h2 className="text-sm font-bold">
            RFQ Pipeline
          </h2>

          <p className="mt-1 text-[10px] text-gray-400">
            Track your opportunities
          </p>
      </div>

        <Link href="/supplier/rfqs" className="text-[11px] font-semibold text-[#6759dc] hover:underline">
          View RFQs
        </Link>

      </div>

       <div className="grid grid-cols-5">

         {pipeline.map((item, index) => (
           <div
             key={item.label}
             className={`border-y border-l border-[#e6e6eb] p-4 text-center ${
               index === pipeline.length - 1
                 ? "border-r"
                 : ""
             }`}
           >

             <p className="text-xl font-bold text-[#20202e]">
               {item.value}
             </p>

             <p className="mt-1 text-[8px] font-semibold tracking-wide text-gray-400">
              {item.label}
             </p>

           </div>
         ))}

       </div>

     </div>
   );
 }