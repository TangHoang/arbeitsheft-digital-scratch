import { getStudentId } from "./identity";
import { readJSON } from "./storage";

const ENDPOINT = "https://script.google.com/macros/s/AKfycbzpSAcW7PNYQYVwolQ7qnELV3_VyF8MdgN4HnRtO8i-4ce53usVipra0yFMu35CpNJQ/exec";
const API_KEY = "LSKDJFZ3asdfl!!??slkdjflsdf$%sdlfkjsdlf19lnsvh8hsdf131938!!!%!";

let lastSend = 0;
const MIN_INTERVAL_MS = 60000;

export async function sendStudentDataOnNav() {
    const now = Date.now();
    if (now - lastSend < MIN_INTERVAL_MS) return;
    lastSend = now;

    const studentId = getStudentId();

    const payload = {
        studentId,
        ts: now,
        focusLog: readJSON(`app:focusLog:${studentId}`, {}),
        hintUsage: readJSON(`app:hintUsage:${studentId}`, {}),
        answers: readJSON(`app:answers:${studentId}`, {}),
        ratings: readJSON(`app:ratings:${studentId}`, {}),
        key: API_KEY
    };

    console.log("sender.js:")
    console.log(payload)

    try {
        const res = await fetch(ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify(payload),
            keepalive: true,
            mode: "cors"
        });
        const text = await res.text();
        console.log("[AppsScript] status:", res.status, "body:", text);
        if (!res.ok) console.warn("Send failed:", res.status, text);
    } catch { }
}
