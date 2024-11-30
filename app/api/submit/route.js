import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, mobile, email, address, city, state, pinCode } = body;

    if (!name || !mobile || !email || !address || !city || !state || !pinCode) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"), //regex to convert \n in google's private keys to actual new lines
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const getRows = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A:G",
    });

    console.log(getRows);
    const dataRows = getRows.data.values || [];
    console.log(dataRows);

    if (dataRows.length > 1) {
      const rows = dataRows.slice(1);

      const mobileExists = rows.some((row) => row[1] === mobile);
      if (mobileExists) {
        return NextResponse.json({ uniqueMobile: false }, { status: 400 });
      }

      const emailExists = rows.some((row) => row[2] === email);
      if (emailExists) {
        return NextResponse.json({ uniqueEmail: false }, { status: 400 });
      }
    }

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:G1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, mobile, email, address, city, state, pinCode]],
      },
    });
    return NextResponse.json(
      {
        data: response.data,
        message: "Data appended successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
