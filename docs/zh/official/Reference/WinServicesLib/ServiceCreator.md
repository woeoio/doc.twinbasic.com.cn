---
title: ServiceCreator
parent: WinServicesLib Package
permalink: /tB/Packages/WinServicesLib/ServiceCreator
---

# ServiceCreator(Of T) class
The generic factory the **WinServicesLib** dispatcher uses to instantiate the user's service class when the SCM launches a service. *T* is the user's [**ITbService**](/official/Reference/WinServicesLib/ITbService) implementation; **ServiceCreator(Of T)** wraps `New T` in a factory the dispatcher can hold by interface.

Syntax: **New ServiceCreator(Of** *T* **)**

*T*
: *required* A user class that implements [**ITbService**](/official/Reference/WinServicesLib/ITbService). The constraint is *practical* rather than syntactic --- there is no `Where T : ITbService` clause in the source, but the factory's `CreateInstance` returns `New T As ITbService`, which the compiler only accepts when *T* implements [**ITbService**](/official/Reference/WinServicesLib/ITbService).

The class is the value typically assigned to [**ServiceManager.InstanceCreator**](/official/Reference/WinServicesLib/ServiceManager#instancecreator):

```vb
With Services.ConfigureNew
    .Name             = "MyService"
    .InstanceCreator  = New ServiceCreator(Of MyService)    ' MyService Implements ITbService
End With
```

The package keeps the factory by reference; the dispatcher trampoline calls [**CreateInstance**](#createinstance) once per service start, immediately after the SCM has spawned the service thread. The returned instance is the object whose [**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint), [**StartupFailed**](/official/Reference/WinServicesLib/ITbService#startupfailed), and [**ChangeState**](/official/Reference/WinServicesLib/ITbService#changestate) methods the package will route to.

See the package [overview](/official/Reference/WinServicesLib/) for where **ServiceCreator** fits in the broader lifecycle.

## Methods

### CreateInstance

Returns a fresh `New T` cast as [**ITbService**](/official/Reference/WinServicesLib/ITbService).

Syntax: *creator*.**CreateInstance** **As** [**ITbService**](/official/Reference/WinServicesLib/ITbService)

User code rarely calls **CreateInstance** directly; the package's dispatcher trampoline invokes it once per service start. The returned instance is owned by the dispatcher for the lifetime of the service --- it is released when the service stops or the dispatcher exits.

The method has no parameters; if the user's service class needs configuration, it should read it from the [**ServiceManager**](/official/Reference/WinServicesLib/ServiceManager) passed to [**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint) rather than from constructor arguments.

## Why a factory rather than a class reference

`ServiceCreator(Of T)` exists because the SCM dispatch model needs *deferred* instantiation. The configuration phase runs in `Sub Main` before the SCM has decided which services to start; constructing the service class eagerly there would create an unnecessary instance for services the SCM may never launch (or launch only much later). The factory defers the `New T` call until the service actually starts.

The same indirection lets the dispatcher pair the [**ITbService**](/official/Reference/WinServicesLib/ITbService) instance with the [**ServiceManager**](/official/Reference/WinServicesLib/ServiceManager) one-to-one --- the trampoline can pass the service-specific [**ServiceManager**](/official/Reference/WinServicesLib/ServiceManager) into [**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint) without the service class having to know about the manager at construction time.

## See Also

- [WinServicesLib package](/official/Reference/WinServicesLib/) -- overview, lifecycle, two-thread split
- [ITbService interface](/official/Reference/WinServicesLib/ITbService) -- the contract *T* must implement
- [ServiceManager class](/official/Reference/WinServicesLib/ServiceManager) -- the per-service configuration; **ServiceCreator** instances are assigned to its [**InstanceCreator**](/official/Reference/WinServicesLib/ServiceManager#instancecreator) field
