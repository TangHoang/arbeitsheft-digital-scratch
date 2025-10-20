export function ensureStudentId() {
    let sid = localStorage.getItem("app:studentId");
    if (!sid) {
        sid = (globalThis.crypto?.randomUUID?.() ?? `student_${Math.random().toString(36).slice(2, 10)}`);
        localStorage.setItem("app:studentId", sid);
    }
    return sid;
}

export function getStudentId() {
    return localStorage.getItem("app:studentId") || ensureStudentId();
}
