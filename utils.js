"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.palindrome = void 0;
function palindrome(value) {
    return value.toString() === value.toString().split('').reverse().join('');
}
exports.palindrome = palindrome;
