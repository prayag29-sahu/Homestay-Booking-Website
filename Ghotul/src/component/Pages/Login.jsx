// src/components/Pages/Login.jsx
import { useState } from "react";
import { doSignInWithGoogle, auth } from "../../firebase/auth";
import { setPersistence, browserLocalPersistence } from "firebase/auth";
import emailjs from "@emailjs/browser";

function friendlyError(err) {
    if (!err || !err.code) return err?.message || "An error occurred";
    switch (err.code) {
        case "auth/popup-closed-by-user":
            return "Google sign-in popup closed.";
        case "auth/cancelled-popup-request":
            return "Popup request was cancelled.";
        default:
            return err.message || err.code;
    }
}

function Login({ setIsLoggedIn, onClose }) {
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const sendConfirmationEmails = async (user) => {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateUser = import.meta.env.VITE_EMAILJS_TEMPLATE_USER;
        const templateAdmin = import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        const templateParamsUser = {
            to_email: user.email,
            user_name: user.displayName || "Guest",
            user_email: user.email,
            login_time: new Date().toLocaleString(),
            app_name: "Ghotul HomeStays",
        };

        const templateParamsAdmin = {
            to_email: "sahuprayag145@gmail.com",
            user_name: user.displayName || "Guest",
            user_email: user.email,
            login_time: new Date().toLocaleString(),
            app_name: "Ghotul HomeStays",
        };

        try {
            await emailjs.send(serviceId, templateUser, templateParamsUser, publicKey);
            await emailjs.send(serviceId, templateAdmin, templateParamsAdmin, publicKey);
            console.log("✅ Emails sent successfully");
        } catch (err) {
            console.error("❌ Failed to send email:", err);
        }
    };

    const onGoogleSignIn = async () => {
        if (isSigningIn) return;
        setIsSigningIn(true);
        setErrorMessage("");

        try {
            // Set Firebase persistence to local (survive refresh)
            await setPersistence(auth, browserLocalPersistence);

            const userCredential = await doSignInWithGoogle();
            console.log(userCredential.user);

            setIsLoggedIn(true); // App.jsx state updates
            onClose();

            await sendConfirmationEmails(userCredential.user);
        } catch (err) {
            setErrorMessage(friendlyError(err));
        } finally {
            setIsSigningIn(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgba(0,0,0,0.6)]">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden relative p-8">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 rounded-full text-xl bg-gray-200 hover:bg-red-500 hover:text-white w-8 h-8 flex items-center justify-center"
                >
                    ×
                </button>

                <h2 className="p-4 text-2xl font-bold text-center text-sky-600 mb-6">
                    Welcome to Ghotul HomeStays
                </h2>

                {errorMessage && (
                    <div className="mb-4 text-red-600 font-medium text-center">{errorMessage}</div>
                )}

                <button
                    onClick={onGoogleSignIn}
                    disabled={isSigningIn}
                    className="w-full py-3 bg-red-500 text-white rounded-lg uppercase font-semibold tracking-wider hover:bg-red-600 transition"
                >
                    {isSigningIn ? "Signing in..." : "Sign in with Google"}
                </button>
            </div>
        </div>
    );
}

export default Login;
