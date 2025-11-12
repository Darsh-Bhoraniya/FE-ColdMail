// src/pages/LoginRegisterPage/CreateAcct.tsx
import Aurora from "@/shared/ui/effects/Aurora";
import { GridPattern } from "@/shared/ui/effects/GridPattern";
import {
  AlertTriangle,
  CheckCircle2,
  Eye,
  EyeOff,
  Lock,
  LogIn,
  Mail,
  Repeat,
  Send,
  Shield,
  User,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { z } from "zod";

/* ----------------------- Mock API (swap with real) ----------------------- */
async function mockRegister(input: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) {
  console.log("input", input);
  await new Promise((r) => setTimeout(r, 700));
  return { ok: true as const };
}
async function mockResend(email: string) {
  console.log("email", email);
  await new Promise((r) => setTimeout(r, 600));
  return { ok: true as const };
}
async function mockLogin(input: { email: string; password: string }) {
  await new Promise((r) => setTimeout(r, 600));
  return {
    token: "demo-token",
    user: { id: "u_1", email: input.email, name: "Demo User" },
  };
}

/* -------------------------------- Schemas -------------------------------- */
const RegisterSchema = z.object({
  firstName: z.string().min(2, "First name is too short"),
  lastName: z.string().min(2, "Last name is too short"),
  email: z.string().email("Enter a valid work email"),
  password: z
    .string()
    .min(8, "Use at least 8 characters")
    .regex(/[A-Za-z]/, "Include letters")
    .regex(/[0-9]/, "Include a number"),
});
const LoginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

type Phase = "form" | "sent";
type Mode = "register" | "login";

export default function CreateAcct() {
  const [mode, setMode] = useState<Mode>("register");
  const [phase, setPhase] = useState<Phase>("form");

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");

  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [cooldown, setCooldown] = useState(0);
  useEffect(() => {
    if (!cooldown) return;
    const id = setInterval(() => setCooldown((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [cooldown]);

  function mask(e: string) {
    return e.replace(/(^.).*(@.*$)/, (_, a, b) => a + "•••" + b);
  }

  async function onRegisterSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    const parsed = RegisterSchema.safeParse({
      firstName,
      lastName,
      email,
      password: pw,
    });
    if (!parsed.success) {
      setErr(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    try {
      setLoading(true);
      const res = await mockRegister(parsed.data);
      if (res.ok) {
        localStorage.setItem("pendingEmail", parsed.data.email);
        setPhase("sent");
        setCooldown(30);
      }
    } catch {
      setErr("Could not start registration. Try again.");
    } finally {
      setLoading(false);
    }
  }

  async function onLoginSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    const parsed = LoginSchema.safeParse({ email, password: pw });
    if (!parsed.success) {
      setErr(parsed.error.issues[0]?.message ?? "Please check your inputs");
      return;
    }
    try {
      setLoading(true);
      const res = await mockLogin(parsed.data);
      localStorage.setItem("token", res.token);
      // TODO: Navigate this afterwards
      // navigate({ to: "/app/dashboard" });
    } catch {
      setErr("Sign in failed. Check your credentials.");
    } finally {
      setLoading(false);
    }
  }

  async function onResend() {
    setErr(null);
    try {
      setLoading(true);
      const to = email || localStorage.getItem("pendingEmail") || "";
      if (!to) throw new Error("Missing email");
      await mockResend(to);
      setCooldown(30);
    } catch {
      setErr("Could not resend verification email.");
    } finally {
      setLoading(false);
    }
  }

  const pending = email || localStorage.getItem("pendingEmail") || "";

  // password strength
  const strength = useMemo(() => {
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
    if (/\d/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    return score; // 0..4
  }, [pw]);
  // const strengthLabel = ["Very weak", "Weak", "Okay", "Strong", "Excellent"][
  //   strength
  // ];

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
      <GridPattern />
      <Aurora />

      {/* Center the card both horizontally and vertically */}
      <div className="relative z-10 grid min-h-screen place-items-center px-4">
        <div className="w-full max-w-md">
          {/* Brand */}
          <div className="mb-4 flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-indigo-600 to-sky-600 text-white">
              <Shield className="h-4 w-4" />
            </div>
            <div className="text-lg font-semibold tracking-tight">
              coldmails.ai
            </div>
          </div>

          {/* Card */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-xl ring-1 ring-slate-900/5 backdrop-blur dark:border-slate-700 dark:bg-slate-900/60">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-tr from-indigo-500/15 via-sky-500/15 to-emerald-500/15 blur-2xl"
            />

            {/* Segmented control */}
            <div className="mb-5 grid grid-cols-2 rounded-xl border border-slate-200 bg-white/70 p-1 text-sm dark:border-slate-800 dark:bg-slate-950">
              {/* Create account */}
              <button
                onClick={() => {
                  setMode("register");
                  setPhase("form");
                  setErr(null);
                }}
                aria-pressed={mode === "register"}
                className={[
                  "rounded-lg px-3 py-2 font-medium transition focus:outline-none focus:ring-2 focus:ring-indigo-500/30",
                  mode === "register"
                    ? // ACTIVE: blue→green gradient
                      "text-white bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500 shadow-sm"
                    : // INACTIVE
                      "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/50",
                ].join(" ")}
              >
                Create account
              </button>

              {/* Sign in */}
              <button
                onClick={() => {
                  setMode("login");
                  setPhase("form");
                  setErr(null);
                }}
                aria-pressed={mode === "login"}
                className={[
                  "rounded-lg px-3 py-2 font-medium transition focus:outline-none focus:ring-2 focus:ring-indigo-500/30",
                  mode === "login"
                    ? "text-white bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500 shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/50",
                ].join(" ")}
              >
                Sign in
              </button>
            </div>

            {/* REGISTER */}
            {mode === "register" && (
              <>
                {phase === "form" ? (
                  <form onSubmit={onRegisterSubmit} className="mt-2 space-y-4">
                    <Field label="First name">
                      <InputWithIcon
                        icon={<User className="h-4 w-4" />}
                        value={firstName}
                        onChange={(e) => setFirst(e.target.value)}
                        placeholder="Jane"
                        autoComplete="given-name"
                      />
                    </Field>

                    <Field label="Last name">
                      <InputWithIcon
                        icon={<User className="h-4 w-4" />}
                        value={lastName}
                        onChange={(e) => setLast(e.target.value)}
                        placeholder="Doe"
                        autoComplete="family-name"
                      />
                    </Field>

                    <Field label="Work email">
                      <InputWithIcon
                        type="email"
                        icon={<Mail className="h-4 w-4" />}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        autoComplete="email"
                      />
                    </Field>

                    <Field label="Password">
                      <InputWithIcon
                        type={showPw ? "text" : "password"}
                        icon={<Lock className="h-4 w-4" />}
                        value={pw}
                        onChange={(e) => setPw(e.target.value)}
                        placeholder="At least 8 characters"
                        autoComplete="new-password"
                        rightAdornment={
                          <button
                            type="button"
                            onClick={() => setShowPw((s) => !s)}
                            className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                            aria-label={
                              showPw ? "Hide password" : "Show password"
                            }
                          >
                            {showPw ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </button>
                        }
                      />
                      <div className="mt-2">
                        <StrengthBar
                          score={strength}
                          label={
                            [
                              "Very weak",
                              "Weak",
                              "Okay",
                              "Strong",
                              "Excellent",
                            ][strength]
                          }
                        />
                      </div>
                    </Field>

                    {err && (
                      <Alert kind="warn">
                        <AlertTriangle className="h-4 w-4" />
                        {err}
                      </Alert>
                    )}

                    <PrimaryButton
                      loading={loading}
                      icon={<Send className="h-4 w-4" />}
                    >
                      {loading ? "Creating account…" : "Create account"}
                    </PrimaryButton>

                    <p className="pt-2 text-center text-xs text-slate-600 dark:text-slate-400">
                      Already have an account?{" "}
                      <button
                        type="button"
                        onClick={() => {
                          setMode("login");
                          setErr(null);
                        }}
                        className="underline decoration-slate-400 hover:decoration-slate-700 dark:decoration-slate-500 dark:hover:decoration-slate-300"
                      >
                        Sign in
                      </button>
                    </p>
                  </form>
                ) : (
                  <div className="mt-2 space-y-4">
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="h-5 w-5" />
                      <h2 className="text-base font-semibold">
                        Check your email
                      </h2>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      We sent a verification link to{" "}
                      <span className="font-medium">{mask(pending)}</span>.
                    </p>

                    <div className="space-y-3">
                      <a
                        href="https://mail.google.com"
                        target="_blank"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                      >
                        Open Gmail
                      </a>
                      <button
                        onClick={onResend}
                        disabled={loading || cooldown > 0}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                      >
                        <Repeat className="h-4 w-4" />
                        {cooldown > 0
                          ? `Resend in ${cooldown}s`
                          : "Resend verification email"}
                      </button>

                      {err && (
                        <Alert kind="warn">
                          <AlertTriangle className="h-4 w-4" />
                          {err}
                        </Alert>
                      )}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* LOGIN */}
            {mode === "login" && (
              <form onSubmit={onLoginSubmit} className="mt-2 space-y-4">
                <Field label="Email">
                  <InputWithIcon
                    type="email"
                    icon={<Mail className="h-4 w-4" />}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                </Field>

                <Field label="Password">
                  <InputWithIcon
                    type={showPw ? "text" : "password"}
                    icon={<Lock className="h-4 w-4" />}
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                    placeholder="Your password"
                    autoComplete="current-password"
                    rightAdornment={
                      <button
                        type="button"
                        onClick={() => setShowPw((s) => !s)}
                        className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                        aria-label={showPw ? "Hide password" : "Show password"}
                      >
                        {showPw ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    }
                  />
                </Field>

                {err && (
                  <Alert kind="warn">
                    <AlertTriangle className="h-4 w-4" />
                    {err}
                  </Alert>
                )}

                <PrimaryButton
                  loading={loading}
                  icon={<LogIn className="h-4 w-4" />}
                >
                  {loading ? "Signing in…" : "Sign in"}
                </PrimaryButton>

                <p className="pt-2 text-center text-xs text-slate-600 dark:text-slate-400">
                  New here?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setMode("register");
                      setPhase("form");
                      setErr(null);
                    }}
                    className="underline decoration-slate-400 hover:decoration-slate-700 dark:decoration-slate-500 dark:hover:decoration-slate-300"
                  >
                    Create an account
                  </button>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

/* ------------------------------- UI helpers ------------------------------- */
function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-1 text-xs font-medium text-slate-700 dark:text-slate-300">
        {label}
      </div>
      {children}
    </label>
  );
}

function InputWithIcon({
  icon,
  value,
  onChange,
  placeholder,
  type = "text",
  autoComplete,
  rightAdornment,
}: {
  icon: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
  rightAdornment?: React.ReactNode;
}) {
  return (
    <div className="relative group">
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-slate-700 dark:group-focus-within:text-slate-300">
        {icon}
      </span>
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-10 text-sm text-slate-900 outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:ring-slate-600"
        required
      />
      {rightAdornment && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2">
          {rightAdornment}
        </span>
      )}
    </div>
  );
}

function PrimaryButton({
  children,
  icon,
  loading,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  loading?: boolean;
}) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:brightness-110 disabled:opacity-60"
    >
      {icon}
      {children}
    </button>
  );
}

function Alert({
  children,
  kind = "info",
}: {
  children: React.ReactNode;
  kind?: "info" | "warn";
}) {
  const styles =
    kind === "warn"
      ? "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300"
      : "border-slate-300 bg-slate-200/50 text-slate-700 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-200";
  return (
    <div
      className={`flex items-center gap-2 rounded-lg border p-2 text-xs ${styles}`}
    >
      {children}
    </div>
  );
}

function StrengthBar({ score, label }: { score: number; label: string }) {
  const widths = ["w-1/12", "w-3/12", "w-6/12", "w-9/12", "w-full"][score];
  return (
    <div>
      <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800">
        <div
          className={`h-2 ${widths} rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 transition-all`}
        />
      </div>
      <div className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
        {label}
      </div>
    </div>
  );
}
