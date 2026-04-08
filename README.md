# Daily Journal Opener

Daily Journal Opener adds a command and keyboard shortcut to open today's journal note in the current workspace. If the note or its parent folder does not exist, the extension creates them automatically.

## What it does

- Creates notes under `journal/YYYY-MM/YYYY-MM-DD.md`
- Opens the note for the current day in the editor
- Creates the month folder automatically when needed

## Usage

1. Open a folder in VS Code.
2. Run `Daily Journal: Open Today's Note` from the Command Palette.
3. Or use the default shortcut:
   - Windows/Linux: `Ctrl+F9`
   - macOS: `Cmd+F9`

## Example

If today's date is `2026-04-08`, the extension opens or creates:

```text
journal/2026-04/2026-04-08.md
```

## Requirements

This extension works on the first folder in the current workspace. If no folder is open, it shows an error message.

## Extension Settings

This extension does not currently add any custom settings.

## Release Notes

### 0.0.1

Initial release.
