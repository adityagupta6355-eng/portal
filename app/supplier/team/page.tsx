"use client";

import { useState } from "react";
import BackButton from "@/components/common/BackButton";
import {
  Users,
  UserPlus,
  Mail,
  Shield,
  MoreVertical,
  CheckCircle2,
  Lock,
} from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Pending";
  avatar: string;
  access: string;
}

const initialMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Patel",
    email: "sarah@abcspices.com",
    role: "Export Director",
    status: "Active",
    avatar: "SP",
    access: "Owner / Full Access",
  },
  {
    id: "2",
    name: "Rajesh Sharma",
    email: "rajesh@abcspices.com",
    role: "Operations Manager",
    status: "Active",
    avatar: "RS",
    access: "RFQs & Negotiations",
  },
  {
    id: "3",
    name: "Priya Nair",
    email: "priya@abcspices.com",
    role: "Quality & Compliance Lead",
    status: "Active",
    avatar: "PN",
    access: "Catalog & Documents",
  },
  {
    id: "4",
    name: "Anand Verma",
    email: "anand@abcspices.com",
    role: "Logistics Coordinator",
    status: "Pending",
    avatar: "AV",
    access: "Shipments & Tracking",
  },
];

export default function TeamManagementPage() {
  const [members] = useState<TeamMember[]>(initialMembers);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("Sales Representative");
  const [invitedSuccess, setInvitedSuccess] = useState(false);

  const handleSendInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteEmail) return;
    setInvitedSuccess(true);
    setTimeout(() => {
      setShowInviteModal(false);
      setInvitedSuccess(false);
      setInviteEmail("");
    }, 1500);
  };

  return (
    <div className="w-full space-y-6">
      {/* Back Button */}
      <div>
        <BackButton label="Back to Dashboard" fallbackHref="/supplier" />
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Team Management
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage organization members, assign roles, and control trade portal access.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowInviteModal(true)}
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-slate-800 transition"
        >
          <UserPlus size={15} />
          Invite Member
        </button>
      </div>

      {/* Team Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">Total Seats</span>
            <Users size={16} className="text-slate-400" />
          </div>
          <p className="mt-2 text-2xl font-bold text-slate-900">4 / 10</p>
          <p className="mt-1 text-[11px] text-emerald-600 font-medium">
            6 seats remaining on Business Plan
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">Active Members</span>
            <CheckCircle2 size={16} className="text-emerald-500" />
          </div>
          <p className="mt-2 text-2xl font-bold text-slate-900">3</p>
          <p className="mt-1 text-[11px] text-slate-400">All 2FA enabled</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">Pending Invites</span>
            <Mail size={16} className="text-amber-500" />
          </div>
          <p className="mt-2 text-2xl font-bold text-slate-900">1</p>
          <p className="mt-1 text-[11px] text-amber-600">Awaiting confirmation</p>
        </div>
      </div>

      {/* Members Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
        <div className="border-b border-slate-200 px-6 py-4">
          <h2 className="text-sm font-bold text-slate-900">Team Members</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-[11px] font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="px-6 py-3.5">Member</th>
                <th className="px-6 py-3.5">Role</th>
                <th className="px-6 py-3.5">Access Level</th>
                <th className="px-6 py-3.5">Status</th>
                <th className="px-6 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {members.map((m) => (
                <tr key={m.id} className="hover:bg-slate-50/70 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-50 border border-indigo-100 text-xs font-bold text-indigo-700">
                        {m.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{m.name}</p>
                        <p className="text-[11px] text-slate-400">{m.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    {m.role}
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600">
                      <Lock size={12} className="text-slate-400" />
                      {m.access}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                        m.status === "Active"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}
                    >
                      {m.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
                    >
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Invite Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-slate-900">
              Invite Team Member
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              An invitation email will be sent with secure onboarding credentials.
            </p>

            {invitedSuccess ? (
              <div className="mt-6 rounded-lg bg-emerald-50 p-4 text-center text-xs font-semibold text-emerald-700 border border-emerald-200">
                ✓ Invitation sent successfully!
              </div>
            ) : (
              <form onSubmit={handleSendInvite} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="colleague@abcspices.com"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-900 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Role
                  </label>
                  <select
                    value={inviteRole}
                    onChange={(e) => setInviteRole(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-900 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    <option value="Sales Representative">
                      Sales Representative (RFQs & Catalog)
                    </option>
                    <option value="Logistics Manager">
                      Logistics Manager (Deals & Shipping)
                    </option>
                    <option value="Compliance Officer">
                      Compliance Officer (Documents & Verification)
                    </option>
                    <option value="Admin">Admin (Full Management)</option>
                  </select>
                </div>

                <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setShowInviteModal(false)}
                    className="rounded-lg border border-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition"
                  >
                    Send Invitation
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

