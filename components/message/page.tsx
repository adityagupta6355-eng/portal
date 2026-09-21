"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Search,
  Sparkles,
  ChevronRight,
  ArrowLeft,
  Bell,
  Building2,
  Paperclip,
  Send,
  Check,
  X,
} from "lucide-react";
import BackButton from "@/components/common/BackButton";

interface ConversationData {
  id: string;
  partnerId: string;
  initials: string;
  buyer: string;
  product: string;
  time: string;
  unread: boolean;
  reference: string;
  status: string;
  statusType: string;
  currentTerms: {
    price: string;
    unit: string;
    volume: string;
    terms: string;
  };
  buyerOffer: {
    price: string;
    unit: string;
    volume: string;
    terms: string;
  };
  trajectory: string[];
  messages: Array<{
    id: string;
    sender: "buyer" | "supplier";
    text: string;
    time: string;
  }>;
  aiStrategy: {
    text: string;
    discountSuggestion: string;
    counterOfferMessage: string;
  };
}

const conversationsData: Record<string, ConversationData> = {
  "dutch-spice-imports": {
    id: "1",
    partnerId: "dutch-spice-imports",
    initials: "DU",
    buyer: "Dutch Spice Imports",
    product: "Turmeric Powder - 500kg",
    time: "10:24 AM",
    unread: true,
    reference: "RFQ #TM-8992",
    status: "Counter Pending",
    statusType: "action",
    currentTerms: {
      price: "$12.50",
      unit: "/kg",
      volume: "5 MT",
      terms: "30% advance",
    },
    buyerOffer: {
      price: "$11.80",
      unit: "/kg",
      volume: "5 MT",
      terms: "100% LC",
    },
    trajectory: ["$13.00", "$12.50", "$11.80"],
    messages: [
      {
        id: "m1",
        sender: "buyer",
        text: "We appreciate the counter, but at $12.50 we are stretched too thin on the 5 MT volume. We can offer $11.80/kg if we move to 100% LC at sight to secure the deal today.",
        time: "Today, 10:24 AM",
      },
    ],
    aiStrategy: {
      text: "Consider a 2% discount ($12.25/kg) if payment terms change to 100% LC. This bridges the gap while reducing working-capital risk.",
      discountSuggestion: "$12.25/kg with 100% LC",
      counterOfferMessage:
        "We can agree to a revised offer of $12.25/kg provided payment terms are confirmed via 100% Irrevocable LC at sight. This allows us to lock in dispatch within 14 days.",
    },
  },
  "indus-agro-exports": {
    id: "2",
    partnerId: "indus-agro-exports",
    initials: "IA",
    buyer: "Indus Agro Exports",
    product: "Premium Basmati Rice",
    time: "Yesterday",
    unread: false,
    reference: "RFQ #TM-10482",
    status: "Terms Review",
    statusType: "action",
    currentTerms: {
      price: "$920",
      unit: "/MT",
      volume: "500 MT",
      terms: "CIF Jebel Ali",
    },
    buyerOffer: {
      price: "$870",
      unit: "/MT",
      volume: "500 MT",
      terms: "LC 60 Days",
    },
    trajectory: ["$950", "$920", "$870"],
    messages: [
      {
        id: "m1",
        sender: "buyer",
        text: "Our buyer in Dubai requires CIF Jebel Ali delivery by mid-next month. If you can meet $870/MT, we can open the letter of credit tomorrow.",
        time: "Yesterday, 3:15 PM",
      },
    ],
    aiStrategy: {
      text: "Buyer has a 98% fulfillment trust score. Counter at $895/MT with partial air/sea dispatch to protect margin.",
      discountSuggestion: "$895/MT CIF",
      counterOfferMessage:
        "We can meet at $895/MT CIF Jebel Ali with guaranteed delivery schedule and inspection certificates included.",
    },
  },
  "eastern-harvest-co": {
    id: "3",
    partnerId: "eastern-harvest-co",
    initials: "EH",
    buyer: "Eastern Harvest Co.",
    product: "Industrial Grade Rice & Coffee",
    time: "Yesterday",
    unread: false,
    reference: "RFQ #TM-10445",
    status: "Negotiating",
    statusType: "transit",
    currentTerms: {
      price: "$650",
      unit: "/MT",
      volume: "200 MT",
      terms: "FOB Ho Chi Minh",
    },
    buyerOffer: {
      price: "$610",
      unit: "/MT",
      volume: "200 MT",
      terms: "100% LC",
    },
    trajectory: ["$680", "$650", "$610"],
    messages: [
      {
        id: "m1",
        sender: "buyer",
        text: "We have reviewed your samples and specs. Can we settle at $610/MT FOB Ho Chi Minh for an initial 200 MT container contract?",
        time: "Yesterday, 11:30 AM",
      },
    ],
    aiStrategy: {
      text: "Port freight indices indicate softening shipping rates. Counter at $635/MT with priority loading.",
      discountSuggestion: "$635/MT FOB",
      counterOfferMessage:
        "Thank you for reviewing our samples. We can confirm $635/MT FOB with priority container booking.",
    },
  },
  "kerala-spices-direct": {
    id: "4",
    partnerId: "kerala-spices-direct",
    initials: "KS",
    buyer: "Kerala Spices Direct",
    product: "Organic Cardamom Pods",
    time: "Mon",
    unread: false,
    reference: "Deal #DL-1042",
    status: "Counter Pending",
    statusType: "action",
    currentTerms: {
      price: "$28.50",
      unit: "/kg",
      volume: "2 MT",
      terms: "20% Advance",
    },
    buyerOffer: {
      price: "$26.00",
      unit: "/kg",
      volume: "2 MT",
      terms: "100% LC at sight",
    },
    trajectory: ["$30.00", "$28.50", "$26.00"],
    messages: [
      {
        id: "m1",
        sender: "buyer",
        text: "Market prices for 8mm green cardamom have adjusted slightly. We can place a firm PO for 2 MT at $26.00/kg with 100% LC at sight.",
        time: "Mon, 09:40 AM",
      },
    ],
    aiStrategy: {
      text: "Organic cardamom stocks are tightening ahead of the festive season. Propose $27.40/kg to secure allocation.",
      discountSuggestion: "$27.40/kg with 100% LC",
      counterOfferMessage:
        "Due to limited export batches of organic 8mm pods, the closest we can accommodate is $27.40/kg with 100% LC at sight.",
    },
  },
};

export default function MessagesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryChat = searchParams?.get("chat") || null;

  const [selectedPartnerId, setSelectedPartnerId] = useState<string | null>(
    queryChat || null
  );
  const [search, setSearch] = useState("");
  const [inputText, setInputText] = useState("");
  const [showAiBox, setShowAiBox] = useState(true);
  const [conversations, setConversations] = useState(conversationsData);

  useEffect(() => {
    if (queryChat && conversationsData[queryChat]) {
      setSelectedPartnerId(queryChat);
    }
  }, [queryChat]);

  const activeChat: ConversationData | undefined = selectedPartnerId
    ? conversations[selectedPartnerId] || conversations["dutch-spice-imports"]
    : undefined;

  const handleSendMessage = () => {
    if (!inputText.trim() || !activeChat) return;

    const newMessage = {
      id: Date.now().toString(),
      sender: "supplier" as const,
      text: inputText.trim(),
      time: "Just now",
    };

    setConversations((prev) => ({
      ...prev,
      [activeChat.partnerId]: {
        ...activeChat,
        messages: [...activeChat.messages, newMessage],
      },
    }));

    setInputText("");
  };

  const handleUseAiSuggestion = () => {
    if (!activeChat) return;
    setInputText(activeChat.aiStrategy.counterOfferMessage);
  };

  // If a chat is active, render the exact negotiation/chat screen matching WhatsApp Image 2026-09-17 at 16.15.14.jpeg
  if (activeChat) {
    return (
      <div className="w-full rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden flex flex-col min-h-[85vh]">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3.5 bg-white">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setSelectedPartnerId(null);
                router.push("/supplier/message");
              }}
              className="p-1.5 -ml-1 text-slate-700 hover:bg-slate-100 rounded-lg transition"
              title="Back to inbox"
            >
              <ArrowLeft size={20} />
            </button>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eeeaff] text-xs font-bold text-[#6355d9]">
              {activeChat.initials}
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 leading-tight">
                {activeChat.buyer}
              </h2>
              <p className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                Active now
              </p>
            </div>
          </div>

          <button
            type="button"
            className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition"
            title="Notifications"
          >
            <Bell size={19} />
          </button>
        </div>

        {/* Main Chat & Negotiation Content */}
        <div className="flex-1 p-5 space-y-5 overflow-y-auto bg-white">
          {/* Title & RFQ Status Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                {activeChat.product}
              </h1>
              <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                <Building2 size={14} className="text-slate-400" />
                {activeChat.reference}
              </p>
            </div>

            <span className="rounded-md border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800 shrink-0">
              {activeChat.status}
            </span>
          </div>

          {/* Current Terms vs Buyer Offer Cards */}
          <div className="grid grid-cols-2 gap-3.5">
            {/* Current Terms */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                CURRENT TERMS
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900">
                {activeChat.currentTerms.price}
                <span className="text-sm font-normal text-slate-500">
                  {activeChat.currentTerms.unit}
                </span>
              </p>
              <div className="mt-2.5 space-y-0.5 text-xs text-slate-600">
                <p>Volume: {activeChat.currentTerms.volume}</p>
                <p>Terms: {activeChat.currentTerms.terms}</p>
              </div>
            </div>

            {/* Buyer Offer */}
            <div className="rounded-xl border border-indigo-200 bg-[#f6f8ff] p-4 shadow-2xs relative">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#4338ca] flex items-center gap-1">
                <span>BUYER OFFER</span>
                <span className="text-indigo-600 font-extrabold">↓</span>
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900">
                {activeChat.buyerOffer.price}
                <span className="text-sm font-normal text-slate-500">
                  {activeChat.buyerOffer.unit}
                </span>
              </p>
              <div className="mt-2.5 space-y-0.5 text-xs text-slate-600">
                <p>Volume: {activeChat.buyerOffer.volume}</p>
                <p>Terms: {activeChat.buyerOffer.terms}</p>
              </div>
            </div>
          </div>

          {/* Negotiation Trajectory Trail */}
          <div className="flex items-center justify-center gap-2 py-1 text-xs font-semibold">
            {activeChat.trajectory.map((val, idx) => (
              <span key={idx} className="flex items-center gap-2">
                {idx > 0 && <span className="text-slate-400">→</span>}
                <span
                  className={
                    idx === activeChat.trajectory.length - 1
                      ? "font-bold text-slate-900"
                      : "text-slate-400"
                  }
                >
                  {val}
                </span>
              </span>
            ))}
          </div>

          {/* Date Separator */}
          <div className="text-center">
            <span className="text-[11px] font-semibold text-slate-400">
              Today, 10:24 AM
            </span>
          </div>

          {/* Chat Messages */}
          <div className="space-y-3">
            {activeChat.messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "supplier" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.sender === "supplier"
                      ? "bg-[#0f172a] text-white"
                      : "border border-slate-200 bg-white text-slate-800 shadow-2xs"
                  }`}
                >
                  <p>{msg.text}</p>
                  <p
                    className={`mt-1 text-[10px] text-right ${
                      msg.sender === "supplier"
                        ? "text-slate-400"
                        : "text-slate-400"
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* MESH AI STRATEGY Card */}
          {showAiBox && (
            <div className="rounded-2xl border border-indigo-200 bg-[#f4f6ff] p-4.5 space-y-3 relative">
              <button
                type="button"
                onClick={() => setShowAiBox(false)}
                className="absolute top-3.5 right-3.5 text-slate-400 hover:text-slate-700 p-1"
                title="Dismiss recommendation"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5546e8] text-white">
                  <Sparkles size={16} />
                </div>
                <h3 className="text-xs font-bold tracking-wider uppercase text-[#4338ca]">
                  MESH AI STRATEGY
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pr-6">
                {activeChat.aiStrategy.text}
              </p>

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleUseAiSuggestion}
                  className="flex items-center gap-1.5 rounded-lg bg-[#5546e8] px-4 py-2 text-xs font-semibold text-white shadow-2xs hover:bg-[#4338ca] transition"
                >
                  <Check size={14} />
                  Use suggestion
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setInputText(
                      `Counter Offer: ${activeChat.aiStrategy.discountSuggestion}`
                    )
                  }
                  className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  Edit
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Input Area */}
        <div className="border-t border-slate-200 p-3 bg-white">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <button
              type="button"
              className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition"
              title="Attach document or quote sheet"
            >
              <Paperclip size={18} />
            </button>

            <input
              type="text"
              placeholder="Type a message or counter-offer..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
            />

            <button
              type="submit"
              disabled={!inputText.trim()}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0f172a] text-white disabled:opacity-40 hover:bg-slate-800 transition shrink-0"
              title="Send"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Otherwise, render full inbox list
  const filteredConversations = Object.values(conversations).filter(
    (conv) =>
      conv.buyer.toLowerCase().includes(search.toLowerCase()) ||
      conv.product.toLowerCase().includes(search.toLowerCase()) ||
      conv.reference.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full space-y-5">
      <div>
        <BackButton label="Back to Dashboard" fallbackHref="/supplier" />
      </div>

      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Messages & Inbox
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Stay connected with verified international buyers and partner negotiations.
        </p>
      </div>

      {/* Search */}
      <div className="rounded-lg border border-[#e4e7ec] bg-white px-4 py-3 shadow-xs">
        <div className="flex items-center gap-3">
          <Search className="h-5 w-5 shrink-0 text-[#344054]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search conversations, buyers or RFQs..."
            className="w-full bg-transparent text-sm text-[#101828] outline-none placeholder:text-[#98a2b3]"
          />
        </div>
      </div>

      {/* Conversation Cards List */}
      <div className="space-y-3">
        {filteredConversations.map((conv) => (
          <div
            key={conv.id}
            onClick={() => setSelectedPartnerId(conv.partnerId)}
            className={`cursor-pointer rounded-2xl border bg-white p-5 shadow-xs hover:shadow-md transition space-y-3 ${
              conv.unread ? "border-indigo-300 ring-1 ring-indigo-200" : "border-slate-200"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f0f2ff] text-sm font-bold text-[#5546e8]">
                  {conv.initials}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h2 className="text-base font-bold text-slate-900 truncate">
                      {conv.buyer}
                    </h2>
                    {conv.unread && (
                      <span className="h-2 w-2 rounded-full bg-red-500" />
                    )}
                  </div>
                  <p className="text-xs font-semibold text-slate-600 mt-0.5">
                    {conv.product}
                  </p>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="text-xs font-medium text-slate-400">
                  {conv.time}
                </span>
                <span className="mt-1 block rounded-md bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-700">
                  {conv.status}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 line-clamp-2">
              {conv.messages[conv.messages.length - 1]?.text}
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-semibold text-[#5546e8]">
              <span>{conv.reference}</span>
              <span className="flex items-center gap-1">
                Open negotiation <ChevronRight size={15} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}