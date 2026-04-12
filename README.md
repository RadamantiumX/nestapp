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

At the same way, we can omit the *"spec"* folder with the flag *--no-spec*.


## PIPES VALIDATIONS

To generate "pipes validations" use the next nest cli:

```bash
nest g pipe <<route-to-folder>>
```

Can add the *--no-spec* flag to avoid the *spec* file.


## Guards on NEST JS

Protect the business logic with some layer of security. We can generated with the nest CLI.

```bash
nest g guard <<current-folder>>
```

Like the others, we can omit the *spec* file with the flag *--no-spec*.

This is useful for users roles, we can manage that's request with the GUARD logic.


## Middlewares

At the same, the middleware can be generated with the CLI:

```bash
nest g mi <<middlware-name>>
```


## Resources

We can combine all the resouces CLI's, with only one.

```bash
nest g resource <<resource-name>>
```

When run that command, we need complete the questions. For this example we choice the REST API option.