import * as vscode from 'vscode';
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('daily-journal-opener.openToday', async () => {
		const folder = vscode.workspace.workspaceFolders?.[0];
		if (!folder) {
			await vscode.window.showErrorMessage('Open a folder first');
			return;
		}
		const now = new Date();
		const yyyy = String(now.getFullYear());
		const mm = String(now.getMonth() + 1).padStart(2, '0');
		const dd = String(now.getDate()).padStart(2, '0');
		const dir = join(folder.uri.fsPath, 'journal', `${yyyy}-${mm}`);
		const file = join(dir, `${yyyy}-${mm}-${dd}.md`);
		await mkdir(dir, { recursive: true });
		await writeFile(file, '', { flag: 'a' });
		const doc = await vscode.workspace.openTextDocument(file);
		await vscode.window.showTextDocument(doc);
	}));
}

export function deactivate() {}
