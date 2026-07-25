---
title: UPS Shipping Integration
summary: Connected ServiceNow directly to the UPS API so shipping labels and tracking numbers are generated and tracked without leaving the platform.
role: ServiceNow Developer
date: 2026-07-01
tags: [ServiceNow, REST Integration, UPS API, Shipping, Procurement]
featured: true
draft: false
---

![UPS-Shipping-Integration](src/assets/images/ups-shipping-integration.png)

Shipping hardware between locations — new equipment out, broken equipment back for repair — meant leaving ServiceNow entirely to generate a label on UPS's site, then coming back to paste a tracking number into a record by hand. It worked, but it was an extra system and an easy step to forget.

I integrated ServiceNow with the UPS API to generate shipping labels and retrieve tracking information directly from the relevant request or asset record, so the shipping workflow stays inside the platform end to end.

**What shipped**

- A Workspace to manage shipments in one place
- A REST integration to UPS for label generation, address validation, and rate lookup
- Tracking numbers written back to the originating record automatically, with status updates as the shipment moves
- A UI action to trigger label creation from the request form, instead of switching tools

**Result:** shipping and receiving no longer requires stepping outside ServiceNow, and tracking status is visible on the record itself instead of living in a separate inbox.