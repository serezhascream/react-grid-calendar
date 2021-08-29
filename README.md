# react-grid-calendar

A simple calendar built with React, Typescript, and css-grid

## Disclaimer 

Since this library uses CSS-grid it may not work in old browsers. If it's critical for you try to find another library. Also, feel free to fork it if you need some specific functionality.

![Calendar screenshot](/calendar.png)

## Install

`npm i react-grid-calendar`

## Usage

```javascript
import Calendar from 'react-grid-calendar';

...

<Calendar />
```

Props
Name|Type|Default|Description
----|----|-------|-----------
firstDayIsMonday|`boolean`|`true`|If it's `true` the week starts with Monday, otherwise, it starts with Sunday
selected|`object`|`null`|Sets the initial selected day
markers|`number[]`|`[]`|An array of timestamps. Marks days that have events in the active month.
locale|`string`|`en-US`|Language code [identifier](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers#0x0400---0x04ff)
classPrefix|`string | string[] | null`|`null`|Adds the provided prefix to every class in calendar. Can be a string or an array of strings. When passed an array it will create a class for every passed string.
onSelectDay|`(day: DayObject): void`|`() => {}`|Returns an object with **dayObject** for the selected day

## Customization

### Colors

By default, it has two colors, defined as CSS variables: `--calendar-text-color` and `--calendar-accent-color`. You can overwrite their values.

### Classes

Every class in this calendar has the default prefix `rgc`. You can pass a custom prefix with the property `classPrefix`. It will generate additional classes for every component of the calendar. This can increase the amount of code, so It might be a good idea to overwrite the default classes.
