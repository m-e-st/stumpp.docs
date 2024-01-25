---
title: Verzeichnis /proc
description: Linux-Verzeichnis /proc
permalink: posts/{{ page.fileSlug | slug }}.html
date: '2021-12-19'
tags:
  - linux
---
Übersicht über die (Pseudo)-Dateien im Linux-Standardverzeichnis **/proc**  

  - `/proc/cmdline` – Kernel command line information.
  - `/proc/consoles` – Information about current consoles including tty.
  - `/proc/devices` – Device drivers currently configured for the running kernel.
  - `/proc/dma` – Info about current DMA channels.
  - `/proc/fb` – Framebuffer devices.
  - `/proc/filesystems` – Current filesystems supported by the kernel.
  - `/proc/iomem` – Current system memory map for devices.
  - `/proc/ioports` – Registered port regions for input output communication with device.
  - `/proc/loadavg` – System load average.
  - `/proc/locks` – Files currently locked by kernel.
  - `/proc/meminfo` – Info about system memory (see above example).
  - `/proc/misc` – Miscellaneous drivers registered for miscellaneous major device.
  - `/proc/modules` – Currently loaded kernel modules.
  - `/proc/mounts` – List of all mounts in use by system.
  - `/proc/partitions` – Detailed info about partitions available to the system.
  - `/proc/pci` – Information about every PCI device.
  - `/proc/stat` – Record or various statistics kept from last reboot.
  - `/proc/swap` – Information about swap space.
  - `/proc/uptime` – Uptime information (in seconds).
  - `/proc/version` – Kernel version, gcc version, and Linux distribution installed.

Quelle: <https://www.tecmint.com/exploring-proc-file-system-in-linux/>
