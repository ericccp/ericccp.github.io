---
title: Employee Center My Assets Enhancement
summary: Gave employees self-service visibility into their assigned hardware and software licenses directly inside Employee Center, reducing manual lookups for IT.
role: ServiceNow Developer
date: 2026-05-01
tags: [ServiceNow, Employee Center, Service Portal, HAM, SAM, JavaScript]
featured: true
draft: false
---

Before this enhancement, an employee who wanted to know what technology was assigned to them — a laptop serial number, a monitor, a loaner phone, or a software license — often had to contact IT and wait for someone to look it up in the appropriate ServiceNow module.

Each request was small, but together they created unnecessary support work and left employees without a simple way to review the hardware and software tied to their profile.

I built a **My Assets** experience for Employee Center that surfaces each employee's assigned hardware and software licenses directly in the portal. Hardware records are pulled live from `alm_hardware`, while software license information is added through a custom experience because that visibility is not provided out of the box.

All results are scoped to the logged-in user so employees can review their own assigned technology without gaining access to anyone else's records.

**What shipped**

- A Service Portal widget showing assigned hardware details such as asset name, model, serial number, and assignment date
- A custom software license section showing licenses associated with the logged-in employee
- A single self-service view that brings hardware and software visibility together inside Employee Center

The software license portion was especially valuable because employees did not previously have an out-of-box Employee Center experience for reviewing the licenses assigned to them. Adding that information made the page more than a hardware inventory lookup and moved it closer to a complete view of the employee's technology relationship with IT.

**Result:** reduced the need for recurring "what is assigned to me" support requests and gave employees a direct, self-service view of both their hardware and software licenses.

**Future enhancement:** add a dedicated device detail page that provides a glimpse into the asset's overall lifecycle, including key assignment, support, warranty, refresh, and return information.