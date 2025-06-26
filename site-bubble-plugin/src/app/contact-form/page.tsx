/*
contact-form
コンタクトフォーム

フォームメーラーを使用している
*/

import { Metadata } from "next";
import ContactFormClient from "./ContactFormClient";

export const metadata: Metadata = {
    title: "Contact Form - Bubble Plugins by Small Piece",
    description: "This page contains a contact form for Bubble Plugins by Small Piece.",
};

export default function ContactForm() {
    return (
        <>
            <ContactFormClient />
        </>
    );
}
