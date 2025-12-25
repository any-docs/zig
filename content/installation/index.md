---
title: Installation
source: zig
---

# {{ $frontmatter.title }}

In general, tagged releases are more practical for projects that have dependencies and benefit from stability, while development builds are for people who want to help participate in the development of the Zig project.

Zig installations are self-contained archives that can be placed anywhere in your system. Multiple versions of Zig coexist without issue.

## Direct download
This is the most straight-forward way of obtaining Zig: grab a Zig bundle for your platform from the [Downloads](https://ziglang.org/download/) page, extract it in a directory and add it to your PATH to be able to call zig from any location.

### Setting up PATH on Windows
To setup your path on Windows run **one** of the following snippets of code in a Powershell instance. Choose if you want to apply this change on a system-wide level (requires running Powershell with admin privileges) or just for your user, and **make sure to change the snippet to point at the location where your copy of Zig lies.** The ; before C: is not a typo.

System wide (**admin** Powershell):

```powershell
[Environment]::SetEnvironmentVariable(
"Path",
[Environment]::GetEnvironmentVariable("Path", "Machine") + ";C:\your-path\zig-windows-x86_64-your-version",
"Machine"
)
```

User level (Powershell):

```powershell
[Environment]::SetEnvironmentVariable(
"Path",
[Environment]::GetEnvironmentVariable("Path", "User") + ";C:\your-path\zig-windows-x86_64-your-version",
"User"
)
```
After you’re done, restart your Powershell instance.

### Setting up PATH on Linux, macOS, BSD
Add the location of your zig binary to your PATH environment variable.

This is generally done by adding an export line to your shell startup script (.profile, .zshrc, …)

```bash
export PATH=$PATH:~/path/to/zig
```

After you’re done, either source your startup file or restart your shell.

## Package managers

### Windows
#### WinGet
Zig is available on [WinGet](https://github.com/microsoft/winget-pkgs/tree/master/manifests/z/zig/zig).

```bash
winget install -e --id zig.zig
```

#### Chocolatey
Zig is available on [Chocolatey](https://chocolatey.org/packages/zig).

```bash
choco install zig
```

#### Scoop
Zig is available on [Scoop](https://scoop.sh/#/apps?q=zig&id=7e124d6047c32d426e4143ab395d863fc9d6d491).

```bash
scoop install zig
```
Latest [dev build](https://scoop.sh/#/apps?q=zig&id=921df07e75042de645204262e784a17c2421944c):
```bash
scoop bucket add versions
scoop install versions/zig-dev
```

### macOS
#### Homebrew
Latest tagged release:

```bash
brew install zig
```

#### MacPorts

```bash
sudo port install zig
```

### Linux
Zig is also present in many package managers for Linux.

## Building from source
Ensure you have the required dependencies:

- CMake >= 3.15
- System C/C++ Toolchain
- LLVM, Clang, LLD development libraries, version 21.x, compiled with the same system C/C++ toolchain.
  - If the system package manager lacks these libraries, or has them misconfigured, see below for how to build them from source.
Then it is the standard CMake build process:

```bash
mkdir build
cd build
cmake ..
make install
```

Use `CMAKE_PREFIX_PATH` if needed to help CMake find LLVM.

This produces `stage3/bin/zig` which is the Zig compiler built by itself.

## Building from Source without LLVM
In this case, the only system dependency is a C compiler.

```bash
cc -o bootstrap bootstrap.c
./bootstrap
```

This produces a zig2 executable in the current working directory. This is a "stage2" build of the compiler, without LLVM extensions, and is therefore lacking these features

## Syntax Highlighters and LSP
All major text editors have syntax highlight support for Zig. Some bundle it, some others require installing a plugin.

If you’re interested in a deeper integration between Zig and your editor, checkout [zigtools/zls](https://github.com/zigtools/zls).

If you’re interested in what else is available, checkout the [Tools](https://ziglang.org/learn/tools/) section.

## Run Hello World
If you completed the installation process correctly, you should now be able to invoke the Zig compiler from your shell.

Let’s test this by creating your first Zig program!

Navigate to your projects directory and run:

```bash
mkdir hello-world
cd hello-world
zig init
```

This should output:

```bash
info: created build.zig
info: created build.zig.zon
info: created src/main.zig
info: created src/root.zig
info: see `zig build --help` for a menu of options
```

Running zig build run should then compile the executable and run it, ultimately resulting in:

```bash
All your codebase are belong to us.
Run `zig build test` to run the tests.
```
Congratulations, you have a working Zig installation!