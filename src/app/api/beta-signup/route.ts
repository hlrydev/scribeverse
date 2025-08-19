import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const { data: existingUser, error: checkError } = await supabase
      .from("beta_signups")
      .select("email")
      .eq("email", email)
      .single();

    if (checkError && checkError.code !== "PGRST116") {
      // PGRST116 is "not found" error, which is expected for new emails
      console.error("Error checking existing email:", checkError);
      return NextResponse.json(
        { error: "Database error occurred" },
        { status: 500 }
      );
    }

    if (existingUser) {
      return NextResponse.json(
        { message: "Email already registered!" },
        { status: 200 }
      );
    }

    // Insert new email
    const { error: insertError } = await supabase
      .from("beta_signups")
      .insert([{ email }]);

    if (insertError) {
      console.error("Error inserting email:", insertError);
      return NextResponse.json(
        { error: "Failed to save email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Successfully added to beta list!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving email:", error);
    return NextResponse.json(
      { error: "Failed to save email" },
      { status: 500 }
    );
  }
}
