# react-grid-calendar

A simple calendar built with React, Typescript, and css-grid

## Disclaimer
This calendar was built with CSS-grid, so it can look strange and may not work in old browsers.

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
