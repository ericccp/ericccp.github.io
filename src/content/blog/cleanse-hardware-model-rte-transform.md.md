---
title: Automating Hardware Model Creation During Vendor Imports
summary: How I used ServiceNow's hardware model cleansing utility to create or match manufacturers and models during asset imports instead of maintaining them manually.
type: solution
date: 2026-06-01
tags: [ServiceNow, ITAM, Hardware Asset Management, Imports, JavaScript]
featured: true
draft: false
---

![Clenase-Hardware-Model](src/assets/images/cleanse-hardware-model.png)

Hardware asset imports usually depend on one important prerequisite: the corresponding hardware model must already exist in ServiceNow.

That sounds simple until vendor files start arriving with inconsistent manufacturer names, missing model names, or only a model number. Without some kind of normalization, the import either fails to establish the model reference or creates duplicate records that have to be cleaned up later.

I found ServiceNow's **Cleanse Hardware Model with Model Number** operation useful for solving this problem during vendor imports.

The operation accepts the manufacturer name, model name, model number, and an optional CI class. It then uses ServiceNow's model normalization logic to find or create the corresponding manufacturer and hardware model records.

**Why this was useful**

Instead of writing custom matching logic for every vendor, I could rely on the same platform APIs ServiceNow uses for hardware model cleansing.

The process can:

- Normalize the manufacturer name
- Find an existing hardware model when one already exists
- Create the manufacturer or model when no match is found
- Use the model number when the model name is missing or unreliable
- Return the resulting manufacturer and model names and `sys_id` values
- Optionally limit the lookup to a model class derived from `cmdb_model_category`

The underlying utility is available through the `CmdbIntegrationHardwareModelUtil` script include. This made it possible to call the cleansing logic from an import process rather than requiring someone to manually create every model before loading assets.

A typical implementation can use the utility in a transform script or preprocessing step:

```javascript
var result = new sn_cmdb_int_util.CmdbIntegrationHardwareModelUtil()
    .cleanseModelAndCompany(
        source.manufacturer,
        source.model_name,
        null,
        source.model_number
    );