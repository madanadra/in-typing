# in-typing

> Typing Animation Component for React

[![NPM](https://img.shields.io/npm/v/in-typing.svg)](https://www.npmjs.com/package/in-typing) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save in-typing
```

## Intro

This is simple typing animation library for React. Only 1 tag component ``` <Typed /> ``` & 5 properties ``` type, backspace, delay, duration, cursor ```. Tag component doesn't need value/closing tag and will return h1 tag.

## Usage

| Property | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `type` | `string \| [string]` | String to animate (e.g., `'I want an apple'`). For backspace animation, use array (e.g., `['I want an ', 'apple', 'banana', 'avocado']`). |
| `backspace` | `number \| [number] \| undefined` | Pointing index of the **type** property array (e.g., `1`). For more than one backspace animation, use array (e.g., `[1, 2]`), execute from the smallest index. |
| `duration` | `number \| undefined` | Duration of typing animation per character in milliseconds (e.g., `1000`). Default 100. |
| `delay` | `number \| undefined` | Delay of backspace animation in milliseconds (e.g., `1000`). Default is the same as **duration** value. |
| `cursor` | `string \| undefined` | Color of the text cursor animation, accept all valid color values in CSS (e.g., `'red'`). If undefined, text cursor doesn't appear. |
