import { google } from "googleapis";

export type SheetRequest = {
    token: {
        clientEmail: string;
        privateKey: string;
    }
    spreadSheetId: string;
    range: string;
}

export type SheetResponse = {
    error: boolean;
    message?: string;
    data?: any[][] | null;
}

export const fetchData = async (request: SheetRequest): Promise<SheetResponse> => {
    try {
        const client = new google.auth.JWT(request.token.clientEmail, "", request.token.privateKey, [
            "https://www.googleapis.com/auth/spreadsheets"
          ])
        await client.authorize();

        const gsqpi = google.sheets({version: "v4", auth: client})
        const options = {
            spreadsheetId: request.spreadSheetId,
            range: request.range
        }
        const data = await gsqpi.spreadsheets.values.get(options)
        return {
            error: false,
            data: data.data.values
        }
    } catch(e) {
        return {
            error: true,
            message: e.message
        }
    }
}
