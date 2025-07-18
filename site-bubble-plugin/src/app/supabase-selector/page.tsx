/*
Supabase Selector
*/

import Link from "next/link";
import { Metadata } from "next";

import { PageHeaderTitle } from "@/components/PageHeaderTitle";
import { DescriptionSection } from "@/components/DescriptionSection";
import { CurrentUsageSection } from "./CurrentUsageSection";
import { SetSections } from "@/components/SetSections";

import "./pageSupabaseSelector.css";

export const metadata: Metadata = {
    title: "Supabase Selector - Bubble Plugins by Small Piece",
    description: "Supabase Selector is a plugin for Bubble developers to get data from Supabase.",
};

const imageBasePath = process.env.NEXT_PUBLIC_BASE_PATH;

export default function SupabaseSelector() {
    const pluginMarketplaceLink = "https://bubble.io/plugin/supabase-selector-1749956409055x929758356949958700";
    const demoAppLiveLink = "https://plugins-demo-small-piece.bubbleapps.io/supabase-selector";
    const demoAppEditorLink = "https://bubble.io/page?type=page&name=supabase-selector&id=plugins-demo-small-piece&tab=tabs-1";

    return (
        <div>
            <Link href="/">back to Plugin Home</Link>
            <div
                className="page-container"
            >
                <PageHeaderTitle
                    title="Supabase Selector"
                    image={{
                        path: `${imageBasePath}/icon_sb.png`,
                        alt: "Supabase",
                    }}
                    descriptions={
                        [
                            {
                                icon: "🔌",
                                text: "Plugin Marketplace Page",
                                link: pluginMarketplaceLink,
                            },
                            {
                                icon: "🧪",
                                text: "Demo App (Live)",
                                link: demoAppLiveLink,
                            },
                            {
                                icon: "🛠️",
                                text: "Demo App Editor",
                                link: demoAppEditorLink,
                            },
                        ]
                    }
                />

                <DescriptionSection
                    title="Service Description"
                    descriptions={[
                        "**Supabase Selector is a plugin for Bubble developers to get data from Supabase.**",
                        "For example, if you have a system outside Bubble that uses Supabase, **you can use this plugin to get data.**",
                        "**It only extracts data from the database.** If your app only needs this, **you don’t have to pay extra for other features.**",
                        "**One subscription allows you to use multiple tables.**",
                        `You can see a **demo app using this plugin** [here](${demoAppLiveLink}).`,
                        `See **Bubble usage instructions** [here](${demoAppEditorLink}).`,
                    ]}
                />

                <CurrentUsageSection />

                <DescriptionSection
                    title="Pricing"
                    descriptions={[
                        "**$30** once or **$4/month**",
                        "**Low-Cost Trial**: Subscribe to try. Cancel anytime and only pay for the days used. For example, $4/month equals **$0.13/day**."
                    ]}
                />

                <SetSections
                    imageBasePath={imageBasePath}
                    demoAppEditorLink={demoAppEditorLink}
                />
            </div>
        </div>
    );
};
