---
title: Asset Management Scorecard
summary: Built a consolidated IT asset management scorecard that turns metrics into a measurable program health indicator.
role: ServiceNow Developer
date: 2026-02-01
tags: [ServiceNow, ITAM, Hardware Asset Management, Performance Analytics, Reporting]
featured: true
draft: false
---

Asset management programs generate a large amount of operational data, but individual reports do not always answer the most important question: **Is the program becoming healthier over time?**

Asset managers could review assignment, location, discovery, warranty, procurement, and model data separately, but there was no single view connecting those metrics into an overall measure of ITAM maturity. That made it difficult to identify the weakest areas, communicate progress to leadership, and prioritize remediation work.

I built an **Asset Management Scorecard** in ServiceNow that consolidates the most important hardware asset management indicators into one program-level score. The dashboard organizes the metrics into four weighted domains and provides current scores, changes over time, and trend visualizations for each indicator.

**What shipped**

- An overall **ITAM Program Score** that summarizes the health of the asset management program in a single percentage
- Four weighted scoring domains:
  - **Data Integrity — 30%:** measures whether the organization knows what assets exist and whether the inventory records are complete
  - **Operational Control — 30%:** measures how effectively deployed devices are assigned, discovered, and actively monitored
  - **Financial Control — 20%:** measures alignment between asset records, purchasing data, finance systems, and lifecycle information
  - **Compliance & Risk — 20%:** measures warranty coverage, model certification, and exposure to security, legal, and audit risks
- Domain-level scorecards showing the latest result, percentage change, and historical trend for every indicator
- A consolidated overview page that allows leadership to move from the overall program score into the underlying metrics driving it
- Supporting indicators for asset ownership, location, cost center, discovery coverage, discovery compliance, procurement tracking, finance synchronization, refresh lifecycle, warranty coverage, and certified hardware models

Rather than treating each metric as an isolated report, the scorecard combines them into an operating model. A low domain score immediately shows where the program requires attention, while the underlying indicators explain the specific data or process gaps causing the result.

**Result:** gave the ITAM program a repeatable way to measure maturity, expose accountability gaps, and prioritize improvements. Leadership can now see both the overall health of the program and the operational metrics influencing the score without reviewing multiple disconnected reports.