// pages/contact.tsx
import type { SentMessageInfo } from "nodemailer/lib/smtp-transport";
import React, { FormEvent, useRef } from "react";
import styles from "../styles/Contact.module.css"; // Adjust the path as necessary

const Contact = () => {
    // Define the form reference
    const formRef = useRef<HTMLFormElement>(null);
    const [sending, setSending] = React.useState(false);

    // Define the submit handler
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSending(true);

        if (!formRef.current) {
            return;
        }

        const form = formRef.current;
        const formData = new FormData(form);
        const formDataObj = Object.fromEntries(formData.entries());

        // Send the data to the API
        const response: { success: boolean; message: string; } = await fetch("/api/mail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formDataObj),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Something went wrong");
                }
                return res.json();
            })
            .catch((error) => {
                return {
                    success: false,
                    message: "An unknown error occurred while sending your message.",
                };
            });

        if (response.success) {
            // Redirect to the thanks page
            window.location.href = "/thank-you";
        } else {
            // Show the user the error message
            alert(response.message);
        }

        setSending(false);
    };

    return (
        <div className={styles.body}>
            <div className={styles.contactContainer}>
                <h1 className={styles.h1}>
                    <i className="bi bi-dot"></i>Contact Us<i className="bi bi-dot"></i>
                </h1>
                <form ref={formRef} className={styles.contactForm} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>
                            Name
                        </label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone" className={styles.label}>
                            Phone
                        </label>
                        <input type="tel" id="phone" name="phone" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>
                            Email
                        </label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="services" className={styles.label}>
                            Service(s) Requested
                        </label>
                        <input type="text" id="services" name="services" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="comments" className={styles.label}>
                            Comments
                        </label>
                        <textarea id="comments" name="comments" rows={4} required></textarea>
                    </div>
                    <button disabled={sending} onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>) => handleSubmit(event as React.FormEvent<HTMLFormElement>)} type="submit" className={styles.submitButton}>
                        {sending ? "Sending..." : "Send Request"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;