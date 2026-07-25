---
title: HP & Dell Warranty Integration
summary: Automated warranty lookups against the HP and Dell APIs so hardware asset records stay accurate without anyone manually checking a serial number.
role: ServiceNow Developer
date: 2026-02-15
tags: [ServiceNow, REST Integration, Hardware Asset Management, HP, Dell]
featured: true
draft: false
---

Warranty status on hardware assets was going stale. Nobody was manually re-checking coverage dates against the manufacturer once an asset was provisioned, which meant the org sometimes found out a device was out of warranty only when it broke.

I built a scheduled integration that queries the HP and Dell warranty APIs by serial number for every active record in Hardware Asset Management, and writes the returned coverage start/end dates and warranty type back onto the asset.

**What shipped**

- REST Message configurations for both the HP and Dell warranty endpoints, with vendor-specific request/response handling normalized into one internal format
- A scheduled job batching lookups by serial number to stay inside each vendor's API rate limits
- Error handling that flags records the API couldn't match (retired serials, transposed digits) for manual review instead of failing silently

**Result:** warranty data across HP and Dell hardware now refreshes automatically instead of relying on someone remembering to check, so procurement and support can trust the coverage dates on an asset record.