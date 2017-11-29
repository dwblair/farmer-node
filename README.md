# farmer-node

This is a simple example project that can run either with [altcloud](https://altcloud.io) or [Beaker Browser](https://beakerbrowser.com).

## Setup

If you have [node](https://nodejs.org/) installed, you can install altcloud with `npm i -g altcloud`.

(For the cron job to succeed–it just creates fake data periodically–you'll need node installed.)

Alternatively, you can download the appropriate altcloud build for your platform and save it in this directory or somewhere in your `PATH`.

- [Mac](altcloud.io/macos/altcloud)
- [Windows](altcloud.io/win/altcloud)
- [Linux x64](altcloud.io/linux-x64/altcloud)
- [Linux ARMv6](altcloud.io/linux-armv6/altcloud)
- [Linux ARMv7](altcloud.io/linux-armv7/altcloud)

## Run

    altcloud --dat

You'll see a `dat://` url in the output. You can load this in Beaker Browser, or sync it using other [dat](https://datproject.org) utilities.

You can open the regular https version at [http://localhost:3000](http://localhost:3000).
