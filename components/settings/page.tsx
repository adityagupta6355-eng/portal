"use client";

import { useState } from "react";
import BackButton from "@/components/common/BackButton";
import {
  User,
  Mail,
  KeyRound,
  Smartphone,
  Bell,
  Globe2,
  ShieldCheck,
  FileLock2,
  CircleHelp,
  MessageSquare,
  LogOut,
  Trash2,
  ChevronRight,
} from "lucide-react";

export default function SettingsPage() {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [opportunityAlerts, setOpportunityAlerts] = useState(true);
  const [messageSounds, setMessageSounds] = useState(true);

  return (
    <div className="space-y-6">
      <div>
        <BackButton label="Back" fallbackHref="/supplier" />
      </div>

      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Settings
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage your system preferences, security, and team notifications.
        </p>
      </div>

        <section className="mb-6">
          <h2 className="mb-3 text-[18px] font-semibold text-[#101828]">
            Account
          </h2>

          <div className="rounded-md border border-[#e4e7ec] bg-white px-5">
            <SettingRow
              icon={<User size={20} className="text-[#475467]" />}
              title="Personal information"
              description="Name, role and contact details"
            />

            <SettingRow
              icon={<Mail size={20} className="text-[#475467]" />}
              title="Email address"
              description="sarah@abcspices.com"
            />

            <SettingRow
              icon={<KeyRound size={20} className="text-[#475467]" />}
              title="Change password"
              description="Last changed 3 months ago"
              last
            />
          </div>
        </section>

        <section className="mb-6">
          <h2 className="mb-3 text-[18px] font-semibold text-[#101828]">
            Notifications
          </h2>

          <div className="rounded-md border border-[#e4e7ec] bg-white px-5">
            <ToggleRow
              icon={<Smartphone size={20} className="text-[#5546e8]" />}
              title="Push notifications"
              description="Updates on your device"
              enabled={pushNotifications}
              onToggle={() => setPushNotifications(!pushNotifications)}
            />

            <ToggleRow
              icon={<Mail size={20} className="text-[#159966]" />}
              title="Email notifications"
              description="Important account and trade updates"
              enabled={emailNotifications}
              onToggle={() =>
                setEmailNotifications(!emailNotifications)
              }
            />

            <ToggleRow
              icon={<Bell size={20} className="text-[#d98b00]" />}
              title="Opportunity alerts"
              description="New AI-matched opportunities"
              enabled={opportunityAlerts}
              onToggle={() =>
                setOpportunityAlerts(!opportunityAlerts)
              }
            />

            <ToggleRow
              icon={<Smartphone size={20} className="text-[#475467]" />}
              title="Message sounds"
              description="Play a sound for new messages"
              enabled={messageSounds}
              onToggle={() => setMessageSounds(!messageSounds)}
              last
            />
          </div>
        </section>

        <section className="mb-6">
          <h2 className="mb-3 text-[18px] font-semibold text-[#101828]">
            App preferences
          </h2>

          <div className="rounded-md border border-[#e4e7ec] bg-white px-5">
            <SettingRow
              icon={
                <Globe2 size={20} className="text-[#475467]" />
              }
              title="Language"
              description="English"
              badge="EN"
            />

            <SettingRow
              icon={
                <Globe2 size={20} className="text-[#475467]" />
              }
              title="Region & currency"
              description="India · USD"
              last
            />
          </div>
        </section>

        <section className="mb-6">
          <h2 className="mb-3 text-[18px] font-semibold text-[#101828]">
            Privacy & security
          </h2>

          <div className="rounded-md border border-[#e4e7ec] bg-white px-5">
            <SettingRow
              icon={
                <ShieldCheck size={20} className="text-[#159966]" />
              }
              title="Security center"
              description="Login activity and trusted devices"
            />

            <SettingRow
              icon={
                <FileLock2 size={20} className="text-[#475467]" />
              }
              title="Privacy controls"
              description="Profile visibility and data sharing"
              last
            />
          </div>
        </section>

        <section className="mb-6">
          <h2 className="mb-3 text-[18px] font-semibold text-[#101828]">
            Support
          </h2>

          <div className="rounded-md border border-[#e4e7ec] bg-white px-5">
            <SettingRow
              icon={
                <CircleHelp size={20} className="text-[#475467]" />
              }
              title="Help center"
              description="FAQs and platform guidance"
            />

            <SettingRow
              icon={
                <MessageSquare
                  size={20}
                  className="text-[#475467]"
                />
              }
              title="Contact support"
              description="Chat with the TradeMatchly team"
              last
            />
          </div>
        </section>

        <section className="rounded-md border border-[#e4e7ec] bg-white px-5">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 py-5 text-[15px] font-semibold text-[#d92d20]"
          >
            <LogOut size={20} />
            Log out
          </button>

          <div className="border-t border-[#e4e7ec]" />

          <button
            type="button"
            className="flex w-full items-center justify-between py-5"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#fef3f2]">
                <Trash2 size={20} className="text-[#d92d20]" />
              </div>

              <div className="text-left">
                <p className="text-[15px] font-semibold text-[#d92d20]">
                  Delete account
                </p>

                <p className="mt-1 text-[12px] text-[#667085]">
                  Permanently remove your account and business data
                </p>
              </div>
            </div>

            <ChevronRight
              size={18}
              className="text-[#d92d20]"
            />
          </button>
        </section>
    </div>
  );
}

function SettingRow({
  icon,
  title,
  description,
  badge,
  last = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  last?: boolean;
}) {
  return (
    <button
      type="button"
      className={`flex w-full items-center justify-between py-4 text-left ${
        !last ? "border-b border-[#e4e7ec]" : ""
      }`}
    >
      <div className="flex min-w-0 items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#f2f4f7]">
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-[15px] font-semibold text-[#101828]">
            {title}
          </p>

          <p className="mt-1 text-[12px] text-[#667085]">
            {description}
          </p>
        </div>
      </div>

      <div className="ml-4 flex shrink-0 items-center gap-3">
        {badge && (
          <span className="rounded-md bg-[#eef2ff] px-2.5 py-1 text-[11px] font-semibold text-[#5546e8]">
            {badge}
          </span>
        )}

        <ChevronRight
          size={18}
          className="text-[#98a2b3]"
        />
      </div>
    </button>
  );
}

function ToggleRow({
  icon,
  title,
  description,
  enabled,
  onToggle,
  last = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
  last?: boolean;
}) {
  return (
    <div
      className={`flex w-full items-center justify-between py-4 ${
        !last ? "border-b border-[#e4e7ec]" : ""
      }`}
    >
      <div className="flex min-w-0 items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#f2f4f7]">
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-[15px] font-semibold text-[#101828]">
            {title}
          </p>

          <p className="mt-1 text-[12px] text-[#667085]">
            {description}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onToggle}
        className={`relative ml-4 h-7 w-12 shrink-0 rounded-full transition ${
          enabled ? "bg-[#5546e8]" : "bg-[#d0d5dd]"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition ${
            enabled ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}