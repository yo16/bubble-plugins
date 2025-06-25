/*
contact-form
コンタクトフォーム

フォームメーラーを使用している
*/

import Link from "next/link";

import PageHeaderTitle from "@/components/PageHeaderTitle";

const RequiredMark = () => {
    return (
        <span className="required-field">Required</span>
    );
};

export default function ContactForm() {
    return (
        <div>
            <Link href="/">back to Plugin Home</Link>
            <PageHeaderTitle
                title="Contact Form"
                description={{
                    text: "Feel free to contact us.",
                }}
            />

            <div className="page-container">
                <form
                    action="https://ssl.form-mailer.jp/fm/service/Forms/confirm"
                    method="post"
                    name="form1"
                    encType="multipart/form-data"
                    acceptCharset="UTF-8"
                >
                    <input type="hidden" name="key" value="9e0bcebc858507" />

                    {/* Inquiry type */}
                    <p>
                        Inquiry type<RequiredMark />
                    </p>
                    <p>
                        <input name="field_7511985" type="radio" value="0" />Features
                        <input name="field_7511985" type="radio" value="1" />Payment
                        <input name="field_7511985" type="radio" value="2" />Pricing
                        <input name="field_7511985" type="radio" value="3" />Security
                        <input name="field_7511985" type="radio" value="4" />Cancellation
                        <input name="field_7511985" type="radio" value="5" />Refund
                        <input name="field_7511985" type="radio" value="6" />Bug
                        <input name="field_7511985" type="radio" value="7" />Coupon
                        <input name="field_7511985" type="radio" value="8" />Cancellation
                        <input name="field_7511985" type="radio" value="9" />Media
                        <input name="field_7511985" type="radio" value="10" />Other
                    </p>

                    {/* Message */}
                    <p>
                        *Message - Let us now anything. We are customer-forcused.
                    </p>
                    <p>
                        <textarea name="field_7511994" cols={30} rows={5}></textarea>
                    </p>

                    {/* Company name */}
                    <p>
                        *Company name
                    </p>
                    <p>
                        <input name="field_7511995" type="text" size={30} />
                    </p>

                    {/* name */}
                    <p>
                        *Your name
                    </p>
                    <p>
                        <input name="field_7511978" type="text" size={30} placeholder="info@example.com" />
                    </p>

                    {/* Email */}
                    <p>
                        *Email
                    </p>
                    <p>
                        <input name="field_7511996" type="text" defaultValue="" size={30} />
                    </p>


                    <p>
                        <input name="submit" type="submit" value="確認画面へ" />
                    </p>

                    <p>
                        <a href="https://www.form-mailer.jp/?utm_source=https://ssl.form-mailer.jp/fms/9e0bcebc858507&utm_medium=ownedmedia&utm_campaign=powered-by-formmailer" target="_blank" id="powered">Powered by FormMailer.</a>
                    </p>

                    <input type="hidden" name="code" value="utf8" />
                </form>

            </div>
        </div>
    );
}
