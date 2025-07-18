/*
SetSections
おきまりのセクションたち
*/
import { DescriptionSection } from "@/components/DescriptionSection";

interface SetSectionsProps {
    imageBasePath: string | undefined;
    demoAppEditorLink: string;
}

export const SetSections = (
    { imageBasePath, demoAppEditorLink }: SetSectionsProps
) => {
    const imageBasePathStr = imageBasePath || "";

    return (
        <>
            <DescriptionSection
                title="Support"
                headerText="Plugins are generally easy to use. However, if you encounter any issues or have questions, please use the following methods to contact us."
                descriptions={[
                    `**Contact Form:** For general inquiries, technical support, or bug reports, please use our dedicated [Contact Form](${imageBasePathStr}/contact-form).\n` +
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
                    `Terms of Service are available [here](${imageBasePathStr}/terms-of-service).`
                }
            />

            <DescriptionSection
                title="Privacy Policy"
                headerText={
                    `Privacy Policy are available [here](${imageBasePathStr}/privacy-policy).`
                }
            />

            <DescriptionSection
                title="Refund Policy"
                headerText={
                    `For our refund policy, please refer to the [Refunds section in our Terms of Service](${imageBasePathStr}/terms-of-service#refunds).`
                }
            />
        </>
    );
}