---
title: Leveraging Important Actions in Hardware Asset Workspace
summary: How I extended Hardware Asset Workspace Important Actions to surface data quality issues and operational work that needs attention.
type: post
date: 2025-09-25
tags: [ServiceNow, Hardware Asset Workspace, Data Quality, JavaScript]
featured: true
draft: false
---

![HAW-Important-Actions](src/assets/images/haw-important-actions.png)

Data quality problems rarely show up all at once.

They slowly seep into the environment as devices stop reporting, assets remain unassigned, hardware models fall out of normalization, and small process gaps begin turning into larger operational issues.

ServiceNow includes several out-of-box checks for identifying records that need attention, but every organization has different processes, priorities, and definitions of what constitutes a problem.

For our environment, the question became: **How can we extend the existing Important Actions capability so it reflects the issues that matter to our business?**

Hardware Asset Workspace provides an **Important Actions** experience that can be configured through the `sn_itam_recomm_setup` table. These configurations allow teams to define conditions that identify records requiring attention and display them as actionable cards inside the workspace.

Instead of creating another dashboard or asking asset managers to run a collection of reports, I started using Important Actions as a centralized place to surface operational and data quality concerns.

**How Important Actions work**

Each Important Actions configuration can use two key script types:

- **Query result scripts** determine which records meet the criteria and calculate how many require attention
- **Card metadata scripts** control the information displayed on the card, such as the title, description, count, and supporting details

Together, these scripts allow the workspace to measure a specific condition and present it to the team in a way that is easy to understand and act on.

The query identifies the problem. The card explains why the problem matters.

**Use cases I explored**

One of the first use cases was identifying devices that had not been discovered within the last 30 days.

A device that stops reporting does not always mean something is wrong. It could be offline, stored in a stockroom, being repaired, or no longer in service. However, a large number of devices missing discovery data can also point to assignment issues, stale records, network visibility gaps, or devices that are no longer under active management.

Surfacing those records as an Important Action gives the asset team a clear starting point for investigation.

Other useful checks include:

- Devices that have not been assigned to a user within the last 30 days
- Hardware models whose normalization results need to be reviewed
- Devices in stock with no substatus indicating their purpose
- Records that repeatedly require manual cleanup after an integration or import

These are not necessarily system errors. They are conditions that indicate the asset management process may need attention.

**Why this is useful**

The biggest benefit is visibility.

Data quality work is often reactive. Someone notices a bad report, an integration fails, or a support team discovers that an asset record does not reflect what is actually happening.

Important Actions make those issues visible before they become larger problems.

They also create a useful feedback loop. When the same action continues appearing, it raises a bigger question:

**Should the team continue correcting these records manually, or is there an opportunity to automate the fix?**

For example, an Important Action might initially be used to find hardware assets with a missing assignment. After reviewing the results, the team may discover that the issue consistently comes from the same fulfillment step or integration.

At that point, the Important Action has done more than identify bad data. It has helped expose a process gap that can be permanently corrected.

**What I learned**

Not every operational issue needs its own dashboard.

Dashboards are useful for trends, executive reporting, and broader program measurements. Important Actions are better suited for conditions that require someone to investigate or complete work.

The most effective configurations are specific, explain why the records matter, and point the user toward a reasonable next step.

A card that simply says there are 200 incomplete records is not very helpful. A card that explains that 200 deployed devices have not reported discovery data in 30 days gives the team context and a reason to act.

**Result**

Extending Important Actions gave the asset management team better visibility into process and data quality issues directly within Hardware Asset Workspace.

It also made it easier to identify recurring problems, investigate their causes, and find opportunities for automation or permanent process improvements instead of repeatedly fixing the same records by hand.

**What comes next**

The next step is to continue evaluating the data quality issues that affect day-to-day asset operations and determine which ones belong in Important Actions.

Some issues may only need better visibility. Others may point toward business rules, scheduled jobs, integrations, or workflow changes that prevent the problem from occurring in the first place.