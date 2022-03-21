// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, "#");
}

function maskifyMINE(cc) {
  const trimmed = cc.trim();
  const mask = "*";
  return trimmed.length > 4
    ? `${mask.repeat(trimmed.length - 4)}${trimmed.slice(-4)}`
    : trimmed;
}
