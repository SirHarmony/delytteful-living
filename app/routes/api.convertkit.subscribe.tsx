import type { ActionFunctionArgs } from "react-router";

type ActionData = {
  ok: boolean;
  message: string;
  fieldErrors?: {
    email?: string;
  };
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitizeEmail(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}

async function subscribeToForm(
  email: string,
  formId: string,
  apiSecret: string,
) {
  const response = await fetch(
    `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_secret: apiSecret,
        email,
      }),
    },
  );

  const payload = await response.json().catch(() => null);

  if (!response.ok) {
    const message =
      payload && typeof payload === "object" && "message" in payload
        ? String(payload.message)
        : "";
    throw new Error(message || `ConvertKit responded with ${response.status}`);
  }

  return payload;
}

export async function action({ request, context }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = sanitizeEmail(formData.get("email"));

  if (!email || !EMAIL_REGEX.test(email)) {
    return Response.json(
      {
        ok: false,
        message: "Please enter a valid email address.",
        fieldErrors: { email: "Enter a valid email." },
      } satisfies ActionData,
      { status: 400 },
    );
  }

  const formId = context.cloudflare.env.CONVERTKIT_FORM_ID;
  const apiSecret = context.cloudflare.env.CONVERTKIT_API_SECRET;

  if (!formId || !apiSecret) {
    console.error("ConvertKit env vars missing.");
    return Response.json(
      {
        ok: false,
        message: "The form is temporarily unavailable. Please try again later.",
      } satisfies ActionData,
      { status: 500 },
    );
  }

  try {
    await subscribeToForm(email, formId, apiSecret);

    return Response.json({
      ok: true,
      message:
        "Success! Check your inbox for the Intentional Week checklist email.",
    } satisfies ActionData);
  } catch (error) {
    console.error("ConvertKit subscribe failed", error);
    return Response.json(
      {
        ok: false,
        message:
          "We could not submit your email right now. Please try again in a moment.",
      } satisfies ActionData,
      { status: 502 },
    );
  }
}
