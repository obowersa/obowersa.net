---
title: "C# CDEvent Library"
description: "Bringing the awesomness of CDEvents to C# and Dotnet"
status: "now"
pubDate: "Mar 01 2024"
heroImage: "/project-cdevents.svg"
tags: ["c-sharp", "cdevents", "cd"]
---

This is something I've been working on for longer than I'd hoped for. Mainly due to a mix of work time pressure and
some unexpected challenges with generating code from json schema.

At a high level, the [CDEvents](https://cdevents.dev/) spec defines a common set of events for interporability between different CD Systems.

As [IGS](https://www.intelligentgrowthsolutions.com/) is primarily a C# shop, we created an internal implementation of the CDEvents spec in order to power
our dora metrics and to enable us to chain together easy automation off the back of 'things' happening.

The next step is turning this into an open source project.

As mentioned at the start my biggest challenge on this has been effectively generating C# code from a JSON Schema, while also being able to use System.Text.Json. I've
got some ideas around this and am hoping to wrap up the project soon.

Eventually the SDK will live [here](https://github.com/cdevents/sdk-dotnet)
