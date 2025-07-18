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
                {/* Supabase Selector */}
                <div
                    className="plugin-card"
                >
                    <h2>
                        <Link
                            href="/supabase-selector"
                        >
                            <Image
                                src={`${imageBasePath}/icon_sb.png`}
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

                {/* Supabase Inserter */}
                <div
                    className="plugin-card"
                >
                    <h2>
                        <Link
                            href="/supabase-inserter"
                        >
                            <Image
                                src={`${imageBasePath}/icon_sb.png`}
                                alt="Supabase"
                                width={24}
                                height={24}
                                className="plugin-icon"
                            />
                            Supabase Inserter
                            <span style={{fontWeight: "normal"}}> - Focus on Simple Data Retrieval</span>
                        </Link>
                    </h2>
                    <ul>
                        <li><strong>Insert only</strong>: No unnecessary functions.</li>
                        <li><strong>Streamlined simplicity</strong>: No unneeded features.</li>
                        <li><strong>No extra cost</strong>: Avoids unnecessary costs.</li>
                        <li><strong>Use case</strong>: Save logs to Superbase or simply submit.</li>
                    </ul>
                </div>

                {/* 3D-Scatter Chart */}
                <div
                    className="plugin-card"
                >
                    <h2>
                        <Link
                            href="/3d-scatter-chart"
                        >
                            <Image
                                src={`${imageBasePath}/icon_3d_scatter_chart.png`}
                                alt="Supabase"
                                width={24}
                                height={24}
                                className="plugin-icon"
                            />
                            3D-Scatter Chart
                            <span style={{fontWeight: "normal"}}> - Plot 3D data easily and interactively</span>
                        </Link>
                    </h2>
                    <ul>
                        <li><strong>Easy to use</strong>: Just a few steps to display a 3D scatter plot.</li>
                        <li><strong>3D-focused</strong>: Specialized for rendering 3D point cloud data.</li>
                        <li><strong>Interactive view</strong>: Zoom, pan, and rotate the plot freely.</li>
                        <li><strong>Direct from Bubble DB</strong>: Visualize data directly without code.</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
