

### Description 

SpyDetector is a forked and enhanced version of [TinyCheck](https://github.com/KasperskyLab/TinyCheck), developed by the same author when he was working at Kaspersky. SpyDetector main objective is to detect signs of compromise by monitoring network flows transmitted by a device. 

As it uses WiFi, SpyGuard can be used against a wide range of devices, such as smartphones, laptops, IOTs or workstations. To do its job, the analysis engine of SpyGuard is using Indicators of Compromise (IOCs), anomaly detection and is supported by [Suricata](https://suricata.io).


### Installation

You need a debian-like operating system to install it easly by using the provided bash script. Once you've cloned the repository, just launch `install.sh` as root. Here are the command lines to do that:

```
cd /tmp/ && git clone https://github.com/oraziolac/Spydetector
cd Spydetector && sudo bash install.sh
```

Once installed, you can go to the backend interface located at `https://localhost:8443` to manage the device and setup the right network interfaces to get it working. Please look at the [dedicated wiki page](https://github.com/SpyGuard/spyguard/wiki/Installing-SpyGuard) to get some tips regarding it.

> [!WARNING]
> Please check prior the installation that your Linux distribution is using `nmcli` to manage networks. If you want to install it on a Raspberry Pi
> you need to activate it via the `raspi-config` interface prior Spyguard installation ([See here](https://github.com/SpyGuard/spyguard/wiki/Installing-SpyGuard#common-issues)).

The frontend is available at the URL `https://localhost:8000`.

### Smartphone analysis best practices 

* Do the interception in a public place (library, restaurant, train station...) or common place (office, home...); 
* Intercept the network communications of the device for at least 15 minutes; 
* Interact with the analysed device during the interception (reboot it, take a photo, send an SMS...);

### SpyGuard and Stalkerware threat

The indicators of compromise (IOCs) linked to stalkerware are now fully managed by [ECHAP](https://echap.eu.org), a French association working against cyberviolence. Even though stalkerware still remains a threat, **remember that most of digital violence and surveillance is done by using simple means**, such as hacking cloud & mail accounts. Therefore, we encourage you to consult the [ECHAP guides](https://echap.eu.org/ressources/) and apply their advice to your digital life alongside of device checks.

> [!IMPORTANT]
> It is worth mentioning that the IOCs are distributed under the **Creative Common BY-NC-SA** licence.
> This imply a **non commercial use** of them. Please respect this licence and ask ECHAP for any question related to that.


##

To work, Spydetector is using a lot of awesome opensource projects, libraries, and fonts, kudos to them:

[Dumpcap](https://tshark.dev/capture/dumpcap/), 
[Dig](https://github.com/tigeli/bind-utils), 
[Suricata](https://suricata.io/), 
[NetworkManager](https://github.com/NetworkManager/NetworkManager),
[Python](https://www.python.org),
[VueJS](https://vuejs.org),
[Pip](https://github.com/pypa/pip), 
[pydig](https://pypi.org/project/pydig/), 
[pymisp](https://pypi.org/project/pymisp), 
[netaddr](https://pypi.org/project/netaddr), 
[pyyaml](https://pypi.org/project/pyyaml), 
[flask](https://pypi.org/project/flask), 
[flask_httpauth](https://pypi.org/project/flask_httpauth), 
[pyjwt](https://pypi.org/project/pyjwt), 
[sqlalchemy](https://pypi.org/project/sqlalchemy), 
[psutil](https://pypi.org/project/psutil), 
[pyudev](https://pypi.org/project/pyudev), 
[qrcode](https://pypi.org/project/qrcode), 
[netifaces](https://pypi.org/project/netifaces), 
[weasyprint](https://pypi.org/project/weasyprint), 
[python-whois](https://pypi.org/project/python-whois), 
[publicsuffix2](https://pypi.org/project/publicsuffix2), 
[six](https://pypi.org/project/six), 
[Exo2 font](https://github.com/NDISCOVER/Exo-2.0),
[Virtual Keyboard](https://virtual-keyboard.js.org/vuejs/),
[OpenSSL](https://www.openssl.org),
[Spectre CSS](https://picturepan2.github.io/spectre/).

Icons and design created via [Figma](https://www.figma.com), list of active TOR nodes taken from [Dan.me.uk](https://www.dan.me.uk/tornodes)
