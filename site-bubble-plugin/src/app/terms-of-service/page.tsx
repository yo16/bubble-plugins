/*
Terms of Service
*/

import Link from "next/link";
import { Metadata } from "next";

import { PageHeaderTitle } from "@/components/PageHeaderTitle";
import { DescriptionSection } from "@/components/DescriptionSection";

const imageBasePath = process.env.NEXT_PUBLIC_BASE_PATH;

export const metadata: Metadata = {
    title: "Terms of Service - Bubble Plugins by Small Piece",
    description: "This page outlines the Terms of Service for Bubble plugins provided by Small Piece. Please review before use.",
};

export default function TermsOfService() {
    const contactEmail = "yoichiro.ikeda2023@gmail.com";

    return (
        <div>
            <Link href="/">back to Plugin Home</Link>
            <div
                className="page-container"
            >
                <PageHeaderTitle
                    title="Terms of Service for Bubble Plugins by Small Piece"
                    descriptions={[
                        {
                            text: "Effective Date: June 26, 2025",
                        },
                    ]}
                />
                <div>
                    {'Please read these Terms of Service ("Terms") carefully before using any Bubble plugin ("Plugin") provided by Small Piece ("we," "us," or "our"). By accessing or using our Plugins, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access or use the Plugin.'}
                </div>

                <DescriptionSection
                    title="1. Acceptance of Terms"
                    headerText={
                        "By installing, accessing, or using any Plugin provided by Small Piece, " +
                        `you signify your agreement to these Terms and all other operating rules, policies (including our [Privacy Policy](${imageBasePath}/privacy-policy)), and procedures ` +
                        "that may be published from time to time on our documentation pages or within each Plugin."
                    }
                />

                <DescriptionSection
                    title="2. Description of Service"
                    headerText={
                        "Small Piece provides a range of Plugins for use in Bubble applications. " +
                        "Each Plugin may offer unique functionality, such as data integration, UI components, or workflow enhancements. " +
                        "Details are provided in the documentation and plugin listing. " +
                        "We reserve the right to modify, suspend, or discontinue any Plugin at any time, with or without notice."
                    }
                />

                <DescriptionSection
                    title="3. License to Use the Plugin"
                    headerText={
                        "Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, " +
                        "revocable license to use the Plugin(s) within your Bubble applications for personal or business use. " +
                        "All intellectual property rights remain with Small Piece or our licensors."
                    }
                />

                <DescriptionSection
                    title="4. User Responsibilities"
                    headerText="You agree not to:"
                    descriptions={[
                        "Use our Plugins for unlawful purposes. ",
                        "Reverse-engineer, modify, or redistribute the Plugin. ",
                        "Impersonate our Plugin or imply endorsement without permission. ",
                        "Transmit malicious code or interfere with Plugin functionality.",
                    ]}
                />

                <DescriptionSection
                    title="5. Payments and Subscriptions"
                    headerText={
                        "All purchases are processed through the Bubble Marketplace. " +
                        "Pricing and billing details are available on each plugin's listing page. " +
                        "We do not collect payment information directly. " +
                        "All fees exclude applicable taxes. " +
                        "Pricing is subject to change with prior notice."
                    }
                />

                <DescriptionSection
                    title="6. Refunds"
                    titleId="refunds"
                    headerText={
                        "As a general rule, we do not offer refunds for the Plugin. " +
                        "However, if the Plugin has a serious defect that cannot be resolved through our support, " +
                        "we will accept refund requests only within 8 days from the date of purchase."
                    }
                />

                <DescriptionSection
                    title="7. Termination"
                    headerText={
                        "We may suspend or terminate your access to any Plugin if you breach these Terms. " +
                        "Upon termination, your right to use the Plugin will cease immediately."
                    }
                />

                <DescriptionSection
                    title="8. Disclaimer of Warranties"
                    headerText={
                        "Plugins are provided \"as is\" and \"as available.\" " +
                        "We disclaim all warranties, express or implied, including fitness for a particular purpose and merchantability."
                    }
                />

                <DescriptionSection
                    title="9. Limitation of Liability"
                    headerText={
                        "In no event shall Small Piece be liable for any indirect, incidental, or consequential damages " +
                        "arising from use of our Plugins, including data loss, business interruption, or loss of profits."
                    }
                />

                <DescriptionSection
                    title="10. Governing Law"
                    headerText={
                        "These Terms shall be governed by the laws of Japan. " +
                        "Users outside of Japan are responsible for compliance with their local laws."
                    }
                />

                <DescriptionSection
                    title="11. Changes to Terms"
                    headerText={
                        "We may revise these Terms at any time. If changes are material, " +
                        "we will announce them at least 30 days in advance. " +
                        "Continued use after changes means you accept the revised Terms."
                    }
                />

                <DescriptionSection
                    title="12. Contact"
                    headerText={
                        "If you have any questions or concerns:"
                    }
                    descriptions={[
                        `[Contact Form](${imageBasePath}/contact-form)`,
                        `Email: ${contactEmail}`,
                    ]}
                />
            </div>
        </div>
    );
}
