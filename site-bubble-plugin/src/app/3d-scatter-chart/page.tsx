/*
3d-scatter-chart
プラグイン名: 3D-Scatter Chart
*/

import Link from "next/link";
import { Metadata } from "next";

import { PageHeaderTitle } from "@/components/PageHeaderTitle";
import { DescriptionSection } from "@/components/DescriptionSection";
import { SetSections } from "@/components/SetSections";

import { CurrentUsageSection } from "./CurrentUsageSection";

import "./page.css";

export const metadata: Metadata = {
    title: "Scatter 3D - Bubble Plugins by Small Piece",
    description: "3D-Scatter Chart is a Bubble plugin that allows you to render 3D scatter plots from point cloud data using Plotly.js.",
};

const imageBasePath = process.env.NEXT_PUBLIC_BASE_PATH;

export default function Scatter3D() {
    const pluginMarketplaceLink = "";
    const demoAppLiveLink = "https://plugins-demo-small-piece.bubbleapps.io/3d-scatter-chart";
    const demoAppEditorLink = "https://bubble.io/page?type=page&name=3d-scatter-chart&id=plugins-demo-small-piece&tab=tabs-1";

    return (
        <div>
            <Link href="/">back to Plugin Home</Link>
            <div
                className="page-container"
            >
                <PageHeaderTitle
                    title="3D-Scatter Chart"
                    image={{
                        path: `${imageBasePath}/icon_3d_scatter_chart.png`,
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
                        "**3D-Scatter Chart is a plugin for Bubble developers to visualize 3D scatter plots.**",
                        "For example, if you have data with X, Y, and Z coordinates, **you can use this plugin to render them as interactive 3D charts.**",
                        "**It focuses solely on 3D scatter plots.** If your app only needs this, **you don’t have to pay extra for other chart types.**",
                        "**One subscription allows you to use it across multiple pages and data sources.**",
                        `You can see a **demo app using this plugin** [here](${demoAppLiveLink}).`,
                        `See **Bubble usage instructions** [here](${demoAppEditorLink}).`,
                    ]}
                />

                <CurrentUsageSection />

                <DescriptionSection
                    title="Pricing"
                    descriptions={[
                        "**$19** once or **$3/month**",
                        "**Low-Cost Trial**: Subscribe to try. Cancel anytime and only pay for the days used. For example, $3/month equals **$0.10/day**."
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
