import { Resend } from "resend";
import { renderAsync } from "@react-email/render";
import EmailTemplate from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const dataForm = await req.json();

        const emailHtml = await renderAsync(
            <EmailTemplate
                firstName={dataForm.username}
                lastname={dataForm.apellido}
                message={dataForm.message}
                email={dataForm.email}
            />
        );

        const data = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: ["yuniorjhoelgarcia@gmail.com"],
            subject: "Portafolio Web",
            html: emailHtml,
            text: "Portafolio_Web",
        });

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: unknown) {
        const message =
            error instanceof Error ? error.message : "Internal error";

        return new Response(JSON.stringify({ error: message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}