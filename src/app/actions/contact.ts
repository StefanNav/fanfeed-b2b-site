"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  organization: z.string().min(2, "Organization is required."),
  email: z.string().email("Please enter a valid email address."),
  website: z.string().optional(),
  challenge: z.string().optional(),
});

export type ContactState = {
  success?: boolean;
  errors?: {
    name?: string[];
    organization?: string[];
    email?: string[];
    website?: string[];
    challenge?: string[];
  };
  message?: string;
};

export async function submitContactForm(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const data = Object.fromEntries(formData.entries());
  
  const validated = contactSchema.safeParse({
    name: data.name,
    organization: data.organization,
    email: data.email,
    website: data.website,
    challenge: data.challenge,
  });

  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors,
      message: "Please fix the errors in the form.",
    };
  }

  try {
    // Write to Google Doc/Sheet via a Webhook or Apps Script URL
    const webhookUrl = process.env.GOOGLE_DOCS_WEBHOOK_URL;
    
    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          ...validated.data
        }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to save to Google Docs.");
      }
    } else {
      console.warn("GOOGLE_DOCS_WEBHOOK_URL is not set. Simulating success.");
      await new Promise(resolve => setTimeout(resolve, 800));
    }

    return {
      success: true,
      message: "Successfully submitted!",
    };
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      message: "An error occurred while submitting the form. Please try again later.",
    };
  }
}
