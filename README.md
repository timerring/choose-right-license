# choose-right-license

Normally, there are many types of software licenses, each with different terms and conditions. Choosing the right license for your project can be a daunting task. In this article, we will discuss the different types of software licenses and how to choose the right one for your project. And in the end, I make a simple website https://license.timerring.com to help you choose exactly the license you need.

> LT:DR I think the image which is translated from [ruanyifeng's blog](https://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html) is very clear and concise, so I translate it here for you to have a quick look.

![The software license decision tree](https://cdn.jsdelivr.net/gh/timerring/scratchpad2023/2024/2025-05-24-20-38-53.png)

## Types of Software Licenses

Just as [the gnu organization listed](https://www.gnu.org/licenses/license-list.html), there are nearly 100 types of software licenses, but I think the most commonly used ones are:

- You can close source:
  - Apache
  - MIT
  - BSD
- You must keep open source:
  - GPL
  - LGPL
  - Mozilla

### Can close source

#### 1. MIT License[^MIT]

MIT License is the most popular and widely used license, which is really loose compared to other licenses.

- Type: Permissive
- Key Features:
  - Allows use, copy, modification, distribution, sublicensing, and selling.
  - Requires **only attribution (keeping the original copyright and license notice)**.
  - No copyleft: You can relicense or even make the code proprietary.
- Use Case: When you want maximum freedom for users and minimal restrictions.

[^MIT]: https://opensource.org/licenses/MIT

#### 2. Apache License[^Apache]

- Type: Permissive
- Key Features:
  - Allows use, copy, modification, distribution, sublicensing, and selling.
  - If you modify the code, you have to **retain the Apache License notice in the modified code**.
  - Does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file.
  - No copyleft: Code can be relicensed, including for proprietary use.
- Use Case: Like MIT/BSD, but with extra patent protection. **Eg, you have write your names at the beginning of the code, Apache License will grant your name cannot be changed or deleted.**

[^Apache]: https://www.apache.org/licenses/LICENSE-2.0

#### 3. BSD License[^BSD]

- Type: Permissive
- Key Features:
  - Allows use, copy, modification, distribution, sublicensing, and selling.
  - Requires attribution.
  - No copyleft: Code can be relicensed, including for proprietary use.
  - **Some variants (like the original BSD) had an “advertising clause,”** but modern BSD licenses (like 3-Clause) do not.
- Use Case: Similar to MIT; for maximum freedom and compatibility.

[^BSD]: https://en.wikipedia.org/wiki/BSD_licenses

### Must keep open source

#### 4. GPL License(GNU General Public License)[^GPL] 

- Type: Strong Copyleft
- Key Features:
  - Allows use, copy, modification, and distribution.
  - Copyleft: **Any derivative work must also be distributed under the GPL.**
  - Requires source code disclosure when distributing binaries.
  - Not compatible with many permissive licenses for mixing code.
- Use Case: When you want all modified versions to remain open source under the same license.

[^GPL]: https://www.gnu.org/licenses/gpl-3.0.html

#### 5. LGPL License(Lesser GPL)[^LGPL]

- Type: Weak Copyleft
- Key Features:
  - Allows linking with proprietary software.
  - Modifications to the LGPL-covered library itself must be open-sourced under LGPL.
  - Programs that use the library can remain under any license.
  - **In shorts, the modified code based on LGPL must be licensed as LGPL. Others code can without worrying about the license.**
- Use Case: For libraries you want to be usable in both open and closed source projects or applications, but want improvements to the library itself to remain open.(For developers, if you want to modify LGPL protocol code or derivative, all modified code, additional code and derivative code involved in modification must be licensed under LGPL. Therefore, the open source code of LGPL is **very suitable for being used as a third-party library** by commercial software, but it is **not suitable for** commercial software that hopes to **use LGPL code as a basis** for secondary development through modification and derivation.)

[^LGPL]: https://www.gnu.org/licenses/lgpl-3.0.html

#### 6. Mozilla License[^Mozilla]

- Type: **File-level Copyleft** (Weak Copyleft)
- Key Features:
  - Allows use, copy, modification, distribution, sublicensing, and selling.
  - Copyleft applies only to modified files: You can combine MPL code with proprietary code, but **changes to MPL files must be open**.
  - **Requires attribution and disclosure of source for modified files.**
- Use Case: When you want a balance between open source and allowing proprietary use.

[^Mozilla]: https://www.mozilla.org/en-US/MPL/

## How to Choose the Right License

In order to help you choose the right license easily, I made a simple website to help you choose exactly the license you need.

[license.timerring.com](https://license.timerring.com)

## Types of Creative Commons License

Creative Commons licenses give everyone from individual creators to large institutions a standardized way to grant the public permission to use their creative work under copyright law.

The common terms are:
- BY: credit must be given to the creator.
- SA: **Adaptations** must be **shared** under the same terms.
- NC: Only **noncommercial** uses of the work are permitted.
- ND: **No derivatives** or adaptations of the work are permitted.

And hereby you can combine them in some order. The concrete licenses are:

### CC BY[^CC BY]

[^CC BY]: https://creativecommons.org/licenses/by/4.0/

### CC BY-SA[^CC BY-SA]

[^CC BY-SA]: https://creativecommons.org/licenses/by-sa/4.0/

### CC BY-NC[^CC BY-NC]

[^CC BY-NC]: https://creativecommons.org/licenses/by-nc/4.0/

### CC BY-NC-SA[^CC BY-NC-SA]

[^CC BY-NC-SA]: https://creativecommons.org/licenses/by-nc-sa/4.0/

### CC BY-ND[^CC BY-ND]

[^CC BY-ND]: https://creativecommons.org/licenses/by-nd/4.0/

### CC BY-NC-ND[^CC BY-NC-ND]

[^CC BY-NC-ND]: https://creativecommons.org/licenses/by-nc-nd/4.0/

### CC0(zero)[^CC0]

[^CC0]: https://creativecommons.org/publicdomain/zero/1.0/

CC0 (aka CC Zero) is a public dedication tool, which enables creators to give up their copyright and put their works into the worldwide public domain. CC0 enables reusers to distribute, remix, adapt, and build upon the material in any medium or format, with no conditions.

## How to choose the right license

Also, you can choose the license by yourself on the official website: https://creativecommons.org/chooser/