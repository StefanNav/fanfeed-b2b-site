"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { submitContactForm, type ContactState } from "@/app/actions/contact";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

const initialState: ContactState = {
  success: false,
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  return (
    <AnimatePresence mode="wait">
      {state.success ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center justify-center py-16 text-center"
          role="status"
          aria-live="polite"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            Message received
          </h3>
          <p className="mt-3 text-base text-muted-foreground max-w-sm mx-auto">
            Thanks for reaching out! We'll review your note and follow up shortly.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
          transition={{ duration: 0.3 }}
          id="contact-form"
          className="space-y-6"
          action={formAction}
        >
          {state.message && !state.success && (
            <div className="flex items-center gap-2 rounded-lg border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <p>{state.message}</p>
            </div>
          )}

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground"
              >
                Name <span className="text-brand">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                disabled={isPending}
                className={`mt-1.5 block w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:outline-none ${
                  state.errors?.name
                    ? "border-destructive focus:border-destructive focus:ring-1 focus:ring-destructive"
                    : "border-border focus:border-brand focus:ring-2 focus:ring-brand/20"
                }`}
                placeholder="Your name"
              />
              {state.errors?.name && (
                <p className="mt-1.5 text-xs text-destructive">{state.errors.name[0]}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="organization"
                className="block text-sm font-medium text-foreground"
              >
                Organization <span className="text-brand">*</span>
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                required
                autoComplete="organization"
                disabled={isPending}
                className={`mt-1.5 block w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:outline-none ${
                  state.errors?.organization
                    ? "border-destructive focus:border-destructive focus:ring-1 focus:ring-destructive"
                    : "border-border focus:border-brand focus:ring-2 focus:ring-brand/20"
                }`}
                placeholder="Your organization"
              />
              {state.errors?.organization && (
                <p className="mt-1.5 text-xs text-destructive">{state.errors.organization[0]}</p>
              )}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground"
              >
                Email <span className="text-brand">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                disabled={isPending}
                className={`mt-1.5 block w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:outline-none ${
                  state.errors?.email
                    ? "border-destructive focus:border-destructive focus:ring-1 focus:ring-destructive"
                    : "border-border focus:border-brand focus:ring-2 focus:ring-brand/20"
                }`}
                placeholder="you@organization.com"
              />
              {state.errors?.email && (
                <p className="mt-1.5 text-xs text-destructive">{state.errors.email[0]}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="website"
                className="block text-sm font-medium text-foreground"
              >
                Website
              </label>
              <input
                type="text"
                id="website"
                name="website"
                autoComplete="url"
                disabled={isPending}
                className={`mt-1.5 block w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:outline-none ${
                  state.errors?.website
                    ? "border-destructive focus:border-destructive focus:ring-1 focus:ring-destructive"
                    : "border-border focus:border-brand focus:ring-2 focus:ring-brand/20"
                }`}
                placeholder="example.com"
              />
              {state.errors?.website && (
                <p className="mt-1.5 text-xs text-destructive">{state.errors.website[0]}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="challenge"
              className="block text-sm font-medium text-foreground"
            >
              What challenge are you trying to solve?
            </label>
            <textarea
              id="challenge"
              name="challenge"
              rows={4}
              disabled={isPending}
              className={`mt-1.5 block w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground resize-y focus:outline-none ${
                state.errors?.challenge
                  ? "border-destructive focus:border-destructive focus:ring-1 focus:ring-destructive"
                  : "border-border focus:border-brand focus:ring-2 focus:ring-brand/20"
              }`}
              placeholder="Tell us about the problem you're looking to solve..."
            />
            {state.errors?.challenge && (
              <p className="mt-1.5 text-xs text-destructive">{state.errors.challenge[0]}</p>
            )}
          </div>

          <div>
            <Button type="submit" disabled={isPending} className="w-full sm:w-auto relative">
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
