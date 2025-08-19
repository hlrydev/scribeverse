// app/api/beta-signup/route.ts
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

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

    // Path to your CSV file
    const filePath = path.join(process.cwd(), "data", "beta-signups.csv");

    // Create data directory if it doesn't exist
    const dataDir = path.dirname(filePath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Check if file exists, if not create header
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "Email,Timestamp,ID\n");
    }

    // Read existing file to check for duplicates
    const existingContent = fs.readFileSync(filePath, "utf-8");
    if (existingContent.includes(email)) {
      return NextResponse.json(
        { message: "Email already registered!" },
        { status: 200 }
      );
    }

    // Append new email
    const timestamp = new Date().toISOString();
    const id = existingContent.split("\n").length - 1; // Count lines for ID
    const newRow = `${email},${timestamp},${id}\n`;

    fs.appendFileSync(filePath, newRow);

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
