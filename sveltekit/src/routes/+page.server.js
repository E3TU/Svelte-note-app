import { redirect } from "@sveltejs/kit";

export async function load({ locals }) {
    if (!locals.user) {
        redirect(301, "/register");
    }

    redirect(301, "/app")
}