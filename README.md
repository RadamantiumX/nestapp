# NEST PROJECT

**tsconfig.json** --> Main configuration
**tsconfig.build.json** --> Build / Production configuration

## VS CODE Config

F1 on VSCODE --> Workspace json --> Generate *vscode* folder with **settings.json**

Add this:

```json
{
    "material-icon-theme.activeIconPack": "nest"
}
```

## NEST Structure

Modules has the core of the project. The *main.ts* it's where we can start the project.

## NEST COMMANDS

```bash
nest generate --help
```

Execute this code for get some info about all options. To generate a new *Module* with the CLI, we need run this command:

```bash
next generate module <<module_name>>
```

Or

```bash
nest generate mo <<>module_name>
```
Or

```bash
nest g mo <<>module_name>
```

All this commands do the same thing.

Video: https://www.youtube.com/watch?v=wsqcg5ZtUMM
at the 26:53