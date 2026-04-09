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


## CONTROLLERS

We can generate CONTROLLERS files with this command into separate folder:

```bash
nest generate controller <<controller-name>>
```

If we want generate a new controller into particular folder, run this commando:

```bash
nest generate controller <<folder-name>>

```

*MUST BE A EXISTING FOLDER*

Or 

```bash
nest g co <<folder-name || controller-name>>
```

Without **"spec"** file:

```bash
nest g co <<folder-name || controller-name>> --no-spec
```

We need adding the flag *"--no-spec"*.



## SERVICES

Adding Services to current folder:

```bash
nest g services <<folder-name>>
```