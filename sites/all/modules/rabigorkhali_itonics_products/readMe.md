
# RabiGorkhali Itonics Products

## Overview

This module provides product management functionalities for the Itonics project.

## Requirements

- Drupal 7.x
- PHP >= 7.4
- MySQL

## Installation

1. Clone the repository into your Drupal modules directory:

   ```bash
   git clone https://github.com/rabigorkhali/itonics-module.git sites/all/modules/rabigorkhali_itonics_products
   ```

2. Enable the module:
   - Navigate to **Admin > Modules** (`/admin/modules`) in your Drupal site.
   - Enable **RabiGorkhali Itonics Products** module from the list and click on "Save configuration".

3. Dependencies Libraries:
   - Activate and configure these libraries:
     - tinymce
     - wysiwyg
     - date_tool

4. Configure permissions:
   - Navigate to **Admin > People > Permissions** (`/admin/people/permissions`) in your Drupal site.
   - Configure permissions for **RabiGorkhali Itonics Products** module as needed.

5. Configure module settings:
   - Navigate to **Admin > Configuration > RabiGorkhali Itonics Products Settings** (`/admin/config/rabigorkhali_itonics_products/settings`) to configure any necessary settings.

6. Clear Drupal cache:
   - Navigate to **Admin > Configuration > Performance** (`/admin/config/development/performance`) and click "Clear all caches".

