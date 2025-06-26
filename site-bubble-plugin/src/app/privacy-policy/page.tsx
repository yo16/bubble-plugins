/*
Privacy Policy
*/

import Link from "next/link";
import { Metadata } from "next";

import { PageHeaderTitle } from "@/components/PageHeaderTitle";
import { DescriptionSection } from "@/components/DescriptionSection";

const imageBasePath = process.env.NEXT_PUBLIC_BASE_PATH;

export const metadata: Metadata = {
    title: "Privacy Policy - Bubble Plugins by Small Piece",
    description: "This Privacy Policy describes how Small Piece collects, uses, and discloses information in connection with your use of Bubble Plugins by Small Piece.",
};

export default function PrivacyPolicy() {
    const contactEmail = "yoichiro.ikeda2023@gmail.com";

    return (
        <div>
            <Link href="/">back to Plugin Home</Link>
            <div
                className="page-container"
            >
                <PageHeaderTitle
                    title="Privacy Policy for Bubble Plugins by Small Piece"
                    descriptions={[
                        {
                            text: "Effective Date: June 26, 2025",
                        },
                    ]}
                />
                <div>
                    {`This Privacy Policy describes how Small Piece ("we," "us," or "our") collects, uses, and discloses information in connection with your use of Bubble Plugins by Small Piece (the "Plugins").`}
                </div>
                <div>
                    Your privacy is critically important to us. We adhere to generally accepted industry standards and comply with applicable data protection laws, including the Act on the Protection of Personal Information (APPI) in Japan, when processing personal data.
                </div>

                <DescriptionSection
                    title="1. Information We Collect"
                    headerText={
                        "We primarily develop and provide a Bubble plugin that operates within the Bubble ecosystem. " +
                        "As such, direct collection of personal data by us is generally limited."
                    }
                    descriptions={[
                        "Information processed by the Plugin (Usage Data): " +
                        "When you use the Plugin within your Bubble application, " +
                        "the Plugin may process certain non-personally identifiable information or data " +
                        "that you explicitly pass to the Plugin for its functionality. This might include:\n" +
                        "- Parameters and values passed to the Plugin's actions or elements.\n" +
                        "- Aggregate usage statistics of the Plugin (e.g., how often a specific action is triggered).\n" +
                        "- Error logs related to the Plugin's operation within your Bubble application.\n" +
                        "- We do not directly collect or store sensitive personal information " +
                            "(e.g., names, email addresses, payment details) of your end-users through the Plugin " +
                            "unless explicitly required by the Plugin's core functionality and clearly consented to by you.",
                        "Information collected via Bubble Marketplace: " +
                        "When you purchase or install our Plugin through the Bubble Marketplace, " +
                        "Bubble (Bubble Group, Inc.) processes your account information, billing details, and transaction data. " +
                        "We do not directly collect or store this payment information. " +
                        "Please refer to Bubble's Privacy Policy for details on their data handling practices: " +
                        "[Bubble Privacy Policy](https://bubble.io/privacy)",
                        "Information collected through our website/contact form: " +
                        "If you visit our separate website (where this Privacy Policy is posted) or contact us directly " +
                        "via our contact form or email, we may collect information you provide, " +
                        "such as your name, email address, and the content of your message.",
                    ]}
                />

                <DescriptionSection
                    title="2. How We Use Your Information"
                    headerText={
                        "We use the information we collect for the following purposes:"
                    }
                    descriptions={[
                        "To provide, operate, and maintain the Plugin.",
                        "To understand and analyze how you use our Plugin, and to improve its functionality and performance.",
                        "To develop new features, products, and services.",
                        "To communicate with you, including to respond to your inquiries and provide customer support.",
                        "To monitor and analyze usage trends and activities in connection with the Plugin.",
                        "To detect, prevent, and address technical issues or security incidents.",
                        "To comply with legal obligations.",
                    ]}
                />

                <DescriptionSection
                    title="3. How We Share Your Information"
                    headerText={
                        "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. We may share information in the following circumstances:"
                    }
                    descriptions={[
                        "With your consent: We may share your information with your explicit consent.",
                        "For Plugin functionality: " +
                            "Information you explicitly pass to the Plugin may be processed by third-party services " +
                            "that the Plugin integrates with (e.g., Stripe, if your plugin directly interacts " +
                            "with Stripe APIs for a specific user-defined purpose within your app). " +
                            "In such cases, the data processed is strictly limited to what is necessary " +
                            "for the Plugin's functionality, and it is governed by the privacy policies of those third-party services.",
                        "Service Providers: We may share information with third-party vendors, " +
                            "consultants, and other service providers " +
                            "who perform services on our behalf and require access to such information to do so " +
                            "(e.g., hosting, analytics, customer support platforms). " +
                            "These service providers are bound by confidentiality obligations and are only permitted " +
                            "to use the information for the specific purposes for which it was provided.",
                        "Legal Compliance and Protection: We may disclose your information " +
                            "if required to do so by law or in response to valid requests by public authorities " +
                            "(e.g., a court order or government agency). " +
                            "We may also disclose your information to protect our rights, property, " +
                            "or safety, or the rights, property, or safety of others.",
                    ]}
                />

                <DescriptionSection
                    title="4. Data Retention"
                    headerText={
                        "We retain collected information for as long as necessary to fulfill the purposes " +
                        "for which it was collected, including for the purposes of satisfying any legal, " +
                        "accounting, or reporting requirements. " +
                        "When we no longer need to process your information, " +
                        "we will delete or anonymize it in accordance with applicable laws."
                    }
                />

                <DescriptionSection
                    title="5. Data Security"
                    headerText={
                        "We implement reasonable security measures designed to protect " +
                        "the information we collect from unauthorized access, alteration, " +
                        "disclosure, or destruction. " +
                        "However, please be aware that no method of transmission " +
                        "over the Internet or method of electronic storage is 100% secure."
                    }
                />

                <DescriptionSection
                    title="6. Your Data Protection Rights (Applicable Data Protection Laws)"
                    headerText={
                        "Depending on your location and applicable laws " +
                        "(e.g., Japan's APPI, GDPR for EU/EEA users), " +
                        "you may have the following rights regarding your personal data:"
                    }
                    descriptions={[
                        "Right of Access: The right to request copies of your personal data.",
                        "Right to Rectification: The right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.",
                        "Right to Erasure: The right to request that we erase your personal data under certain conditions.",
                        "Right to Restrict Processing: The right to request that we restrict the processing of your personal data under certain conditions.",
                        "Right to Object to Processing: The right to object to our processing of your personal data under certain conditions.",
                        "Right to Data Portability: The right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.",
                    ]}
                    footerText={
                        "To exercise any of these rights, please contact us using the details provided in the [Contact Form](${imageBasePath}/contact-form). " +
                        "We will respond to your request within the timeframe required by applicable law."
                    }
                />

                <DescriptionSection
                    title="7. Children's Privacy"
                    headerText={
                        "Our Plugin is not intended for use by individuals under the age of 13. " +
                        "We do not knowingly collect personally identifiable information from anyone under the age of 13. " +
                        "If you are a parent or guardian and you are aware that your child has provided us with personal data, " +
                        "please contact us. " +
                        "If we become aware that we have collected personal data " +
                        "from children without verification of parental consent, " +
                        "we take steps to remove that information from our servers."
                    }
                />

                <DescriptionSection
                    title="8. Links to Other Websites"
                    headerText={
                        "Our website or documentation may contain links to other websites that are not operated by us. " +
                        "If you click on a third-party link, you will be directed to that third party's site. " +
                        "We strongly advise you to review the Privacy Policy of every site you visit. " +
                        "We have no control over and assume no responsibility for the content, " +
                        "privacy policies, or practices of any third-party sites or services."
                    }
                />

                <DescriptionSection
                    title="9. Changes to This Privacy Policy"
                    headerText={
                        "We may update our Privacy Policy from time to time. " +
                        "We will notify you of any changes by posting the new Privacy Policy " +
                        "on this page and updating the \"Effective Date\" at the top of this Privacy Policy. " +
                        "You are advised to review this Privacy Policy periodically for any changes. " +
                        "Changes to this Privacy Policy are effective when they are posted on this page."
                    }
                />

                <DescriptionSection
                    title="10. Contact Us"
                    headerText={
                        "If you have any questions about this Privacy Policy, your data, or would " +
                        "like to exercise your data protection rights, please contact us:"
                    }
                    descriptions={[
                        `[Contact Form](${imageBasePath}/contact-form)`,
                        `Email: ${contactEmail}`,
                    ]}
                />

                <DescriptionSection
                    title=""
                    headerText={
                        ""
                    }
                    descriptions={[

                    ]}
                />
            </div>
        </div>
    );
}
