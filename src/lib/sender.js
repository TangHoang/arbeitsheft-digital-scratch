import { getStudentId } from "./identity";
import { readJSON } from "./storage";

const ENDPOINT = "https://script.google.com/macros/s/AKfycbykkBOg0xKSnr_kYvBPuXZCrXH0Yn9EQxUqqozaNT9vFyIxvGAzuA0MD4FvbwzG55dM/exec";
const API_KEY = "LSKDJFZ3asdfl!!??slkdjflsdf$%sdlfkjsdlf19lnsvh8hsdf131938!!!%!";

let lastSend = 0;
const MIN_INTERVAL_MS = 30_000;
let intervalId = null;
let dirty = true;
let pagehideBound = false;

function buildPayload() {
    const studentId = getStudentId();
    const now = Date.now();
    return {
        studentId,
        ts: now,
        focusLog: readJSON(`app:focusLog:${studentId}`, {}),
        hintUsage: readJSON(`app:hintUsage:${studentId}`, {}),
        answers: readJSON(`app:answers:${studentId}`, {}),
        ratings: readJSON(`app:ratings:${studentId}`, {}),
        key: API_KEY
    };
}

export function markDataDirty() {
    dirty = true;
}

export function startAutoSend(periodMs = 60_000) {
    if (intervalId) return;
    intervalId = setInterval(() => {
        if (!dirty) return;
        void sendStudentDataNow();
    }, periodMs);

    // 'pagehide' wird ausgelöst, wenn Nutzer Seite verlässt oder schließt
    if (!pagehideBound) {
        pagehideBound = true;
        window.addEventListener("pagehide", () => {
            const payload = buildPayload();
            try {
                const ok = navigator.sendBeacon(
                    ENDPOINT,
                    new Blob([JSON.stringify(payload)], { type: "text/plain" })
                );
                if (!ok) {
                    void fetch(ENDPOINT, {
                        method: "POST",
                        headers: { "Content-Type": "text/plain" },
                        body: JSON.stringify(payload),
                        mode: "cors",
                        keepalive: true
                    });
                }
            } catch {
            }
        });
    }
}

export async function sendStudentDataNow(force = false) {
    const now = Date.now();
    if (!force && now - lastSend < MIN_INTERVAL_MS) return;

    lastSend = now;
    const payload = buildPayload();

    try {
        const res = await fetch(ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify(payload),
            mode: "cors",
            keepalive: true
        });
        const text = await res.text();
        console.log("[AppsScript] status:", res.status, "body:", text);
        if (res.ok) {
            dirty = false;
        } else {
            console.warn("Send failed:", res.status, text);
            dirty = true;
        }
    } catch (e) {
        console.warn("Send error:", e);
        dirty = true;
    }
}