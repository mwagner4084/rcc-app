// pages/contact.tsx
import React, { FormEvent } from "react";
import styles from "../styles/Contact.module.css"; // Adjust the path as necessary

const Contact = () => {
    // Define the submit handler
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        // Capture the form data
        const formData = new FormData(event.target as HTMLFormElement);
        const formDataObj = Object.fromEntries(formData.entries());

        // Send the data to the API
        try {
            const response = await fetch("/api/mail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formDataObj),
            });

            if (response.ok) {
                // Handle successful submission
                console.log("Message sent successfully!");
            } else {
                // Handle errors
                console.log("Message failed to send.");
            }
        } catch (error) {
            // Handle errors
            console.error("An unexpected error occurred:", error);
        }
    };

  return (
    <div className={styles.body}>
        <div className={styles.contactContainer}>
        <h1 className={styles.h1}>
            <i className="bi bi-dot"></i>Contact Us<i className="bi bi-dot"></i>
        </h1>
        <form className={styles.contactForm}>
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
                <label htmlFor="service" className={styles.label}>
                    Service(s) Requested
                </label>
                <input type="text" id="subject" name="subject" required />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="comment" className={styles.label}>
                    Comments
                </label>
                <textarea id="comment" name="comment" rows={4} required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
                Send Request
            </button>
        </form>
        </div>
    </div>
  );
}

export default Contact;