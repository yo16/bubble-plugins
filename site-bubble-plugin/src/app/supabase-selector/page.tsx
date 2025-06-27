/*
Supabase Selector
*/

import Link from "next/link";
import { Metadata } from "next";

import { PageHeaderTitle } from "@/components/PageHeaderTitle";
import { DescriptionSection } from "@/components/DescriptionSection";
import { UsageSection } from "./UsageSection";

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
                        path: `${imageBasePath}/supabase-brand-assets/supabase-logo-icon.svg`,
                        alt: "Supabase",
                        width: 24,
                        height: 24,
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
                    headerText="Plugins are generally easy to use. However, if you encounter any issues or have questions, please use the following methods to contact us."
                    descriptions={[
                        `**Contact Form:** For general inquiries, technical support, or bug reports, please use our dedicated [Contact Form](${imageBasePath}/contact-form).\n` +
                          "- We aim to respond to all inquiries within 24-48 business hours.\n"+
                          "- When reporting a bug, please include as much detail as possible, such as screenshots, error messages, and the steps to reproduce the issue.",
                        "**Documentation:** For comprehensive guidance on how to set up and use our plugin, please refer to the **\"Plugin Configuration and Usage\" section located above on this page.**\n" +
                          `- For a deeper dive into the exact configurations and workflows, you can also explore the **Editor view of our demo application** [here](${demoAppEditorLink}).\n` +
                          "- This documentation and the demo editor are regularly updated to reflect the latest plugin features and improvements.",
                    ]}
                    footerText="We are committed to providing reliable support to ensure a smooth experience with our plugin."
                />

                <DescriptionSection
                    title="Terms of Service"
                    headerText={
                        `Terms of Service are available [here](${imageBasePath}/terms-of-service).`
                    }
                />

                <DescriptionSection
                    title="Privacy Policy"
                    headerText={
                        `Privacy Policy are available [here](${imageBasePath}/privacy-policy).`
                    }
                />

                <DescriptionSection
                    title="Refund Policy"
                    headerText={
                        `For our refund policy, please refer to the [Refunds section in our Terms of Service](${imageBasePath}/terms-of-service#refunds).`
                    }
                />
            </div>
        </div>
    );
};
