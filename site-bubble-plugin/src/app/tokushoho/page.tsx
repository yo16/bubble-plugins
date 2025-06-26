/*
特定商取引法に基づく表記
*/

import Link from "next/link";
import { Metadata } from "next";
import { PageHeaderTitle } from "@/components/PageHeaderTitle";
import "./pageTokushoho.css";

export const metadata: Metadata = {
    title: "特定商取引法に基づく表記 - Bubble Plugins by Small Piece",
    description: "This page contains information required under the Act on Specified Commercial Transactions in Japan.",
};

type InfoItem = {
    label: string;
    value: string | React.ReactNode;
};
const infoItems: InfoItem[] = [
    {
        label: "販売業者",
        value: "Small Piece",
    },
    {
        label: "運営責任者",
        value: "池田 容一郎",
    },
    {
        label: "所在地",
        value: "〒150-0043 東京都渋谷区道玄坂1丁目10番8号渋谷道玄坂東急ビル2F−C",
    },
    {
        label: "電話番号",
        value: (<>080-7484-9639<br />※お電話での対応は行っておりません。<Link href="/contact-form">Contact Form</Link>にてご連絡ください。</>),
    },
    {
        label: "メールアドレス",
        value: "yoichiro.ikeda2023@gmail.com",
    },
    {
        label: "商品の販売価格",
        value: "各プラグインの購入ページに記載",
    },
    {
        label: "商品以外の必要料金",
        value: "特になし（インターネット接続費等はお客様のご負担となります）",
    },
    {
        label: "お支払方法",
        value: "Bubble Marketplaceで提供される決済方法（クレジットカード等）",
    },
    {
        label: "商品の引き渡し時期",
        value: "購入完了後、即時ご利用可能です",
    },
    {
        label: "返品・キャンセルについて",
        value: (<><Link href={`/terms-of-service#refunds`}>Terms of ServiceのRefundsセクション</Link>をご参照ください。</>),
    },
    {
        label: "動作環境",
        value: "Bubble.io プラットフォーム上で動作。最新の対応状況は各プラグイン説明ページに記載します。",
    },
    {
        label: "サポート対応",
        value: (<><Link href="/contact-form">Contact Form</Link>にてご連絡ください。内容によっては対応までお時間をいただく場合があります。</>),
    },
];

export default function Tokushoho() {
    return (
        <div>
            <Link href="/">back to Plugin Home</Link>
            <div
                className="page-container"
            >
                <PageHeaderTitle
                    title="特定商取引法に基づく表記"
                    descriptions={[
                        {
                            text: "(Japanese Legal Notice)",
                        },
                    ]}
                />
                <div className="info-table">
                    {infoItems.map((item, index) => (
                        <div
                            className="info-row"
                            key={index}
                        >
                            <div className="info-label">{item.label}</div>
                            <div className="info-value">{item.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
