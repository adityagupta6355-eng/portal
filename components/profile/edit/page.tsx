"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  UserRound,
  BriefcaseBusiness,
  Mail,
  Phone,
  Building2,
  Camera,
  Check,
} from "lucide-react";

export default function EditProfilePage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("Sarah Jenkins");
  const [jobTitle, setJobTitle] = useState("Export Manager");
  const [email, setEmail] = useState("sarah@agricorpglobal.com");
  const [phone, setPhone] = useState("+91 98765 43210");

  const handleSave = () => {
    router.push("/supplier/profile");
  };

  const handleCancel = () => {
    router.push("/supplier/profile");
  };

  return (
    <div className="min-h-screen bg-[#faf9fc]">
      <div className="p-6">
        <div className="mx-auto max-w-[1100px]">

          <div className="flex h-14 items-center justify-between rounded-md border border-[#e5e3e9] bg-white px-4">
            <button
              type="button"
              onClick={handleCancel}
              className="flex h-9 w-9 items-center justify-center rounded-md text-[#222] transition hover:bg-[#f1f4f7]"
            >
              <ArrowLeft size={20} strokeWidth={2} />
            </button>

            <h1 className="text-[24px] font-bold text-[#1d1d1f]">
              Edit Profile
            </h1>

            <button
              type="button"
              onClick={handleSave}
              className="text-[13px] font-semibold text-[#5146e5]"
            >
              Save
            </button>
          </div>

          <div className="mt-6 flex flex-col items-center">
            <div className="relative">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#dce2e8] bg-[#f3f5f8]">
                <UserRound
                  size={52}
                  strokeWidth={1.7}
                  className="text-[#111827]"
                />
              </div>

              <button
                type="button"
                className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#171717] text-white"
              >
                <Camera size={16} />
              </button>
            </div>

            <h2 className="mt-4 text-[18px] font-bold text-[#222]">
              Profile photo
            </h2>

            <p className="mt-1 text-[12px] text-[#999]">
              JPG or PNG · Maximum 5 MB
            </p>

            <button
              type="button"
              className="mt-3 text-[13px] font-semibold text-[#5146e5]"
            >
              Change photo
            </button>
          </div>

          <div className="mt-7">
            <h2 className="text-[18px] font-bold text-[#222]">
              Personal information
            </h2>

            <div className="mt-4 rounded-md border border-[#e5e3e9] bg-white p-5">

              <div>
                <label className="mb-2 block text-[12px] font-semibold text-[#444]">
                  Full name
                </label>

                <div className="flex h-10 items-center gap-3 rounded-md border border-[#e2e0e6] bg-[#f8fafc] px-3">
                  <UserRound size={18} className="text-[#777]" />

                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-transparent text-[13px] text-[#222] outline-none"
                  />
                </div>
              </div>

              <div className="my-4 border-t border-[#e6e9ed]" />

              <div>
                <label className="mb-2 block text-[12px] font-semibold text-[#444]">
                  Job title
                </label>

                <div className="flex h-10 items-center gap-3 rounded-md border border-[#e2e0e6] bg-[#f8fafc] px-3">
                  <BriefcaseBusiness size={18} className="text-[#777]" />

                  <input
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    className="w-full bg-transparent text-[13px] text-[#222] outline-none"
                  />
                </div>
              </div>

              <div className="my-4 border-t border-[#e6e9ed]" />

              <div>
                <label className="mb-2 block text-[12px] font-semibold text-[#444]">
                  Business email
                </label>

                <div className="flex h-10 items-center gap-3 rounded-md border border-[#e2e0e6] bg-[#f8fafc] px-3">
                  <Mail size={18} className="text-[#777]" />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent text-[13px] text-[#222] outline-none"
                  />
                </div>
              </div>

              <div className="my-4 border-t border-[#e6e9ed]" />

              <div>
                <label className="mb-2 block text-[12px] font-semibold text-[#444]">
                  Phone number
                </label>

                <div className="flex h-10 items-center gap-3 rounded-md border border-[#e2e0e6] bg-[#f8fafc] px-3">
                  <Phone size={18} className="text-[#777]" />

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-transparent text-[13px] text-[#222] outline-none"
                  />
                </div>
              </div>

            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-[18px] font-bold text-[#222]">
              Company
            </h2>

            <div className="mt-4 flex items-center justify-between rounded-md border border-[#e5e3e9] bg-white px-5 py-4">

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3f5f8]">
                  <Building2 size={22} className="text-[#334155]" />
                </div>

                <div>
                  <h3 className="text-[15px] font-semibold text-[#222]">
                    AgriCorp Global
                  </h3>

                  <p className="mt-1 text-[12px] text-[#777]">
                    Company association is managed by your administrator.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 rounded-md bg-[#e9faf3] px-3 py-1.5 text-[12px] font-semibold text-[#059669]">
                <Check size={16} />
                Verified
              </div>

            </div>
          </div>

          <div className="mt-6">
            <button
              type="button"
              onClick={handleSave}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#171717] text-[13px] font-medium text-white transition hover:bg-[#292929]"
            >
              <Check size={18} />
              Save Changes
            </button>

            <button
              type="button"
              onClick={handleCancel}
              className="mt-3 h-11 w-full rounded-md border border-[#e5e3e9] bg-white text-[13px] font-semibold text-[#444] transition hover:bg-[#f8fafc]"
            >
              Cancel
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}