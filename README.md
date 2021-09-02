# react-grid-calendar

A simple calendar built with React, Typescript, and css-grid

![Calendar screenshot](/calendar.png)

## Disclaimer 

Since this library uses CSS-grid it may not work in old browsers. If it's critical for you try to find another library. Also, feel free to fork it if you need some specific functionality.

## Install

`npm i react-grid-calendar`

## Usage

```javascript
import Calendar from 'react-grid-calendar';

...

<Calendar />
```

### Props

Name|Type|Default|Description
-------|---------|------|------
**firstDayIsMonday**|`boolean`|`true`|If `true` the week starts with Monday, otherwise, it starts with Sunday.
**date**|`Date`|`null`|Used to set active year and month. When skipped calendar will use the current month and year as active.
**selectDay**|`boolean`|`false`|If true, selects the day passed with **date** property.
**markers**|`Date[]`|`[]`|An array of Date objects. It marks days that have events in the active month.
**locale**|`string`|`en-US`|Language code [identifier](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers#0x0400---0x04ff)
**classPrefix**|`string \| string[] \| null`|`null`|Adds the provided prefix to every class in calendar.
**onSelectDay**|`(day: DayObject): void`|`() => {}`|Returns the selected day as Date object.

## Customization

### Colors

By default, it has two colors, defined as CSS variables: `--calendar-text-color` and `--calendar-accent-color`. You can overwrite their values.

### Classes

Every class in this calendar has the default prefix `rgc`. You can pass a custom prefix with the property `classPrefix`. It will generate additional classes for every component of the calendar. This can increase the amount of code, so It might be a good idea to overwrite the default classes.
