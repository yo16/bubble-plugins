/*
Footer

- Terms of Serviceへのリンク
- お問い合わせフォームへのリンク
- プライバシーポリシーへのリンク
- Small Pieceのリンクとロゴ
*/

import Link from "next/link";
import Image from "next/image";

import "./Footer.css";

const imageBasePath = process.env.NEXT_PUBLIC_BASE_PATH;

export function Footer() {
    const smallPieceUrl = "https://small-pieces.vercel.app/";

    return (
        <footer>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "80px",
                    backgroundColor: "#ccd0cc",
                    marginTop: "50px",
                    gap: "20px",
                }}
            >
                <div
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: "20px",
                            marginRight: "20px",
                        }}
                    >
                        <Link
                            href={smallPieceUrl}
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "10px",
                                textDecoration: "none",
                            }}
                        >
                            <Image
                                src={`${imageBasePath}/favicon.svg`}
                                alt="Small Piece"
                                width={36}
                                height={36}
                            />
                            Small Piece
                        </Link>
                        <div
                            style={{
                                color: "#93a693",
                                fontSize: "0.9em",
                            }}
                        >
                            Making the world a little better with a Small Piece.
                        </div>
                    </div>
                </div>
                <div>
                    <ul
                        className="footer-link-list"
                    >
                        <li>
                            <Link href="/contact-form">Contact Form</Link>
                        </li>
                        <li>
                            <Link href="/terms-of-service">Terms of Service</Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="/tokushoho">特定商取引法に基づく表記</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
