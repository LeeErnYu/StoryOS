# StoryOS Project Foundation

## Run the application

1. Install the project dependencies with `pnpm install`.
2. Start the desktop application with `pnpm start`.
3. Run `pnpm check` to syntax-check the foundation source files.

## Folder structure

```text
src/
├── main/       Electron application lifecycle and native menu
├── modules/    Independent system contracts
│   ├── ai/     Provider interface and KoboldCpp placeholder
│   ├── domain/ Placeholder data models
│   └── canon/, characters/, world/, timeline/, writer/, search/, export/, projects/, plugins/
│              Placeholder boundaries for future systems
└── renderer/   Application window interface
```

## Module responsibilities

- `main` creates the application window and owns desktop-shell concerns only.
- `renderer` owns presentation and placeholder navigation only.
- `modules/domain` declares placeholder records; it contains no persistence or business logic.
- Each other `modules` folder exports only a future-facing contract; no module implements product behavior or imports another feature module.
- `modules/ai` declares a provider boundary. The KoboldCpp implementation performs no network or inference work.

Future modules must depend on shared contracts rather than directly on one another. T0001 intentionally provides no story-writing, Canon, search, or project-saving behavior.
