import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

export interface LoginUser {
    type: string;
    username: string;
    pass: string;
}

export function readLoginData(): LoginUser[] {
    const filePath = path.resolve(__filename, "../../test-data/loginCsv.csv");
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    return parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true
    }) as LoginUser[];
}