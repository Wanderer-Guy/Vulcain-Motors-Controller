# Vulcain Motors Controller

## Setup of the raspberry pi

This project is made for Raspberry (Raspbian os). It work with I2C communication and [Adafruit motorHat shield](https://learn.adafruit.com/adafruit-dc-and-stepper-motor-hat-for-raspberry-pi/).

### Node and NPM installation

To install the latest version of nodeJS and npm, you should update and upgrade your apt package to prevent any compatibility issues :

```
sudo apt update -y
sudo apt upgrade -y
```

After that you should determine your version of Node. This is linked with architecture of the boards. For example, for this project we work on RaspberryPi 3, that mean we use ARMv7 architecture.
To know yours you can type this command into your terminal :

```
uname -m
```

Or refer to this table :
| Board Name | Architecture Version |
|--------------------------|:--------------------:|
| Raspberry Pi 4B | ARMv8 |
| Raspberry Pi 3 / 3B+ | ARMv7 |
| Raspberry Pi 2B v1.2 | ARMv7 |
| Raspberry Pi 2B | ARMv6 |
| Raspberry Pi Zero /Zero W| ARMv6 |

Now, you should download the version that corresponding to your architecture.
For that, find the good version on the [nodejs website](https://nodejs.org/en/download/).

On this website, you have all latest versions for all different achitectures, choose the good one and download it on the raspberry.
For that, type something like this : 
```
wget link
```

For example, for the raspberry pi 3, we type this :
```
wget https://nodejs.org/dist/v16.14.0/node-v16.14.0-linux-armv7l.tar.xz
```

Great ! Node archive is downloaded. You should uncompress it. For that, use the commande `tar -xf archive.tar.gz`.

And the last command is to copy the archive content into Raspbian. That you should just type this : 
```
cd archive
sudo cp -R * /usr/local/
```

Now, if you type `node -v` and `npm -v`, you have the latest version of node and npm.

**NOTICE :** This part of tutorial is based on [this existing tutorial](https://www.makersupplies.sg/blogs/tutorials/how-to-install-node-js-and-npm-on-the-raspberry-pi) who are very understandable.



### Enable I2C and increase baudrate

## Wiring the shield
