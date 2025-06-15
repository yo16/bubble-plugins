import Link from "next/link";
import "./pageHome.css";

export default function Home() {
    return (
        <>
            <h1>Bubble plugins</h1>
            <div
                className="plugin-card"
            >
                <h2>
                    <Link
                        href="/supabase-selector"
                    >
                        Supabase Selector
                        <span style={{fontWeight: "normal"}}> - Focus on Simple Data Retrieval</span>
                    </Link>
                </h2>
                <ul>
                    <li><strong>Select only</strong>: No unnecessary functions.</li>
                    <li><strong>Streamlined simplicity</strong>: No unneeded features.</li>
                    <li><strong>No extra cost</strong>: Avoids unnecessary costs.</li>
                    <li><strong>Read Supabase data</strong> from other systems.</li>
                </ul>
            </div>
        </>
    );
}
