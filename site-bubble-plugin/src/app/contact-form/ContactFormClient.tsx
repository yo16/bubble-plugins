"use client";

/*
contact-form
コンタクトフォーム

フォームメーラーを使用している
*/

import { useState, useRef } from 'react';
import {
    Box,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    TextField,
    Button,
} from "@mui/material";
import Link from "next/link";

import { PageHeaderTitle } from "@/components/PageHeaderTitle";

import "./ContactFormClient.css";

const RequiredMark = () => {
    return (
        <span className="required-field">Required</span>
    );
};

export default function ContactFormClient() {
    const [inquiryType, setInquiryType] = useState<string>("0");
    const formRef = useRef<HTMLFormElement>(null);

    // inquiryTypeの値
    const inquiryOptions = [
        { value: "0", label: "Features" },
        { value: "1", label: "Payment" },
        { value: "2", label: "Pricing" },
        { value: "3", label: "Security" },
        { value: "4", label: "Cancellation" },
        { value: "5", label: "Refund" },
        { value: "6", label: "Bug" },
        { value: "7", label: "Coupon" },
        { value: "8", label: "Media" },
        { value: "9", label: "Other" },
    ];

    // 必須チェックを行う、フォームのnameと項目名のマップ
    const formItemMap = {
        "field_7511994": "Message",
        "field_7511995": "Company name",
        "field_7511996": "Your name",
        "field_7511978": "Email",
    };


    const handleInquiryTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInquiryType(event.target.value);
    };

    const handleSubmit = () => {
        const form = formRef.current;
        if (!form) return;

        // 必須チェックを行う
        for (const [name, label] of Object.entries(formItemMap)) {
            const input = form.querySelector(`input[name="${name}"], textarea[name="${name}"]`) as HTMLInputElement | HTMLTextAreaElement;
            if (!input) {
                console.error(`Input element with name "${name}" not found`);
                alert(`Form field "${label}" not found`);
                return;
            }
            if (!input.value) {
                input.focus();
                alert(`${label} is required`);
                return;
            }
        }

        form.submit();
    };

    return (
        <div>
            <Link href="/">back to Plugin Home</Link>
            <PageHeaderTitle
                title="Contact Form"
                descriptions={[{
                    text: "Feel free to contact us.",
                }]}
            />

            <div className="page-container">
                <form
                    action="https://ssl.form-mailer.jp/fm/service/Forms/confirm"
                    method="post"
                    name="form1"
                    encType="multipart/form-data"
                    acceptCharset="UTF-8"
                    ref={formRef}
                >
                    <input type="hidden" name="key" value="9e0bcebc858507" />
                    <input type="hidden" name="code" value="utf8" />

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        {/* Inquiry type */}
                        <FormControl
                            component="fieldset"
                            sx={{ marginBottom: 4 }}
                        >
                            <FormLabel
                                id="radio-buttons-inquiry-type"
                                sx={{
                                    marginTop: 3,
                                    marginBottom: 2,
                                }}
                            >
                                Inquiry type
                                <RequiredMark />
                            </FormLabel>
                            <RadioGroup
                                aria-labelledby="radio-buttons-inquiry-type"
                                defaultValue="0"
                                name="field_7511985"
                                value={inquiryType}
                                onChange={handleInquiryTypeChange}
                                row
                            >
                                {inquiryOptions.map((option) => (
                                    <FormControlLabel
                                        key={option.value}
                                        value={option.value}
                                        control={<Radio />}
                                        label={option.label}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>

                        {/* Message */}
                        <FormControl
                            sx={{ marginBottom: 4, width: "80%" }}
                        >
                            <FormLabel
                                sx={{
                                    marginBottom: 2,
                                }}
                            >
                                Message
                                <RequiredMark />
                            </FormLabel>
                            <TextField
                                name="field_7511994"
                                multiline
                                rows={5}
                                placeholder="Let us now anything. We are customer-forcused."

                            />
                        </FormControl>

                        {/* Company name */}
                        <FormControl
                            sx={{ marginBottom: 4, width: "300px" }}
                        >
                            <FormLabel
                                sx={{
                                    marginBottom: 2,
                                }}
                            >
                                Company name
                                <RequiredMark />
                            </FormLabel>
                            <TextField
                                name="field_7511995"
                                placeholder="Company name"
                            />
                        </FormControl>

                        {/* name */}
                        <FormControl
                            sx={{ marginBottom: 4, width: "300px" }}
                        >
                            <FormLabel
                                sx={{
                                    marginBottom: 2,
                                }}
                            >
                                Your name
                                <RequiredMark />
                            </FormLabel>
                            <TextField
                                name="field_7511996"
                                placeholder="Your name"
                            />
                        </FormControl>

                        {/* Email */}
                        <FormControl
                            sx={{ marginBottom: 4, width: "300px" }}
                        >
                            <FormLabel
                                sx={{
                                    marginBottom: 2,
                                }}
                            >
                                Email
                                <RequiredMark />
                            </FormLabel>
                            <TextField
                                name="field_7511978"
                                placeholder="info@example.com"
                            />
                        </FormControl>

                        <Button
                            name="submit"
                            type="button"
                            value="Review and Submit"
                            variant="contained"
                            sx={{ marginBottom: 4, width: "200px"}}
                            onClick={handleSubmit}
                        >
                            Review
                        </Button>

                        <Box
                            sx={{
                                textAlign: "right",
                                color: "gray",
                                fontSize: "0.6rem",
                            }}
                        >
                            <a href="https://www.form-mailer.jp/?utm_source=https://ssl.form-mailer.jp/fms/9e0bcebc858507&utm_medium=ownedmedia&utm_campaign=powered-by-formmailer" target="_blank" id="powered">Powered by FormMailer.</a>
                        </Box>
                    </Box>
                </form>
            </div>
        </div>
    );
}
