
import { useState } from "react";
import { Posts } from "./Posts";
import { MyPosts } from "./MyPosts";
import { translations } from "../il8n/translations";
import type { language } from "../types/language";

type Props = {
  language: language;
};

type ActiveTab = "posts" | "myPosts";

export default function FuturizePage({ language }: Props) {
  const [activeTab, setActiveTab] = useState<ActiveTab>("posts");

  const t = translations[language];

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Community Header */}
        <header className="mb-8 border-b border-zinc-800 pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-fy-accent" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-fy-accent">
              Future You Community
            </span>
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            FUTUR<span className="text-fy-accent">IZE.</span>
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
            {t.subtitleFuturize}
          </p>
        </header>

        {/* Navigation Tabs */}
        <nav
          aria-label="Futurize navigation"
          className="mb-6 flex gap-2 border-b border-zinc-800"
        >
          <button
            type="button"
            onClick={() => setActiveTab("posts")}
            aria-pressed={activeTab === "posts"}
            className={`border-b-2 px-5 py-3 text-sm font-semibold transition-colors ${
              activeTab === "posts"
                ? "border-fy-accent text-fy-accent"
                : "border-transparent text-zinc-400 hover:text-white"
            }`}
          >
            {t.communityFeed}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("myPosts")}
            aria-pressed={activeTab === "myPosts"}
            className={`border-b-2 px-5 py-3 text-sm font-semibold transition-colors ${
              activeTab === "myPosts"
                ? "border-fy-accent text-fy-accent"
                : "border-transparent text-zinc-400 hover:text-white"
            }`}
          >
            {t.myPosts}
          </button>
        </nav>

        {/* Active Content */}
        <section className="min-w-0">
          <div className="mb-5">
            <h2 className="text-xl font-bold tracking-tight">
              {activeTab === "posts" ? t.communityFeed : t.myPosts}
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              {activeTab === "posts"
                ? t.communityDescription
                : t.myPostsDescription}
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 shadow-xl shadow-black/10 sm:p-6">
            {activeTab === "posts" ? (
              <Posts language={language} username="" />
            ) : (
              <MyPosts />
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
