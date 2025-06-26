/*
Top Page

*/

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { PageHeaderTitle } from "@/components/PageHeaderTitle";

import "./pageHome.css";

const imageBasePath = process.env.NEXT_PUBLIC_BASE_PATH;

export const metadata: Metadata = {
    title: "Bubble plugins by Small Piece",
    description: "A showcase and store for plugins built for Bubble by Small Piece.",
};

export default function Home() {
    return (
        <>
            <PageHeaderTitle
                title="Bubble plugins"
                descriptions={[
                    {
                        text: "A showcase and store for plugins built for Bubble.",
                    }
                ]}
            />

            <div
                className="plugin-container"
            >
                <div
                    className="plugin-card"
                >
                    <h2>
                        <Link
                            href="/supabase-selector"
                        >
                            <Image
                                src={`${imageBasePath}/supabase-brand-assets/supabase-logo-icon.svg`}
                                alt="Supabase"
                                width={24}
                                height={24}
                                className="plugin-icon"
                            />
                            Supabase Selector
                            <span style={{fontWeight: "normal"}}> - Focus on Simple Data Retrieval</span>
                        </Link>
                    </h2>
                    <ul>
                        <li><strong>Select only</strong>: No unnecessary functions.</li>
                        <li><strong>Streamlined simplicity</strong>: No unneeded features.</li>
                        <li><strong>No extra cost</strong>: Avoids unnecessary costs.</li>
                        <li><strong>Use case</strong>: Read Supabase data from other systems.</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
