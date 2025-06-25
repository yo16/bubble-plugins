import Link from "next/link";
import Image from "next/image";

import PageHeaderTitle from "@/components/PageHeaderTitle";
import { DescriptionSection } from "./DescriptionSection";
import { UsageSection } from "./UsageSection";

import "./pageSupabaseSelector.css";

const imageBasePath = process.env.NEXT_PUBLIC_BASE_PATH;

export default function SupabaseSelector() {
    return (
        <div>
            <Link href="/">back to Plugin Home</Link>
            <div
                className="page-container"
            >
                <PageHeaderTitle
                    title="Supabase Selector"
                    image={{
                        path: `${imageBasePath}/supabase-brand-assets/supabase-logo-icon.svg`,
                        alt: "Supabase",
                        width: 24,
                        height: 24,
                    }}
                    description={{
                        text: "Link to Plugin page",
                        link: "",
                    }}
                />
                <DescriptionSection
                    title="Service Description"
                    descriptions={[
                        "**Supabase Selector is a plugin for Bubble developers to get data from Supabase.**",
                        "For example, if you have a system outside Bubble that uses Supabase, **you can use this plugin to get data.**",
                        "**It only extracts data from the database.** If your app only needs this, **you don’t have to pay extra for other features.**",
                        "**One subscription allows you to use multiple tables.**",
                        "You can see a **demo app using this plugin** [here].",
                        "See **Bubble usage instructions** [here] (Bubble login required).",
                    ]}
                />
                <UsageSection
                    title="Plugin Configuration and Usage"
                />
                <DescriptionSection
                    title="Pricing"
                    descriptions={[
                        "**$30** once or **$4/month**",
                        "**Low-Cost Trial**: Subscribe to try. Cancel anytime and only pay for the days used. For example, $4/month equals **$0.13/day**."
                    ]}
                />
                <DescriptionSection
                    title="Support"
                    descriptions={[
                        ""
                    ]}
                />
                <div
                    className="description-section"
                >
                    <h2>利用規約</h2>
                </div>
                <div
                    className="description-section"
                >
                    <h2>プライバシーポリシー</h2>
                </div>
                <div
                    className="description-section"
                >
                    <h2>返金ポリシー</h2>
                </div>
                <div
                    className="description-section"
                >
                    <h2>日本の特定商取引法に基づく表示</h2>
                </div>

            </div>
        </div>
    );
};
