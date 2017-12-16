var private_party1 = `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQDEup3EwF0eDpkGRlZ+dc4rVNyrIxCgEwjSQHNxN3oOynmGHAb6
f+bBQ+GzqWTOFVeps3hhI7pZfITaPeCVuNKthvAJXxszpY3OXW2Dlwpig1A93tFE
4sClMrOXi8ABaHPRyTCfnQfHBy5UOhCpuyFowTXkIfD93pShgfcKHOHs7QIDAQAB
AoGACtYkvqPB/VfcggX52blvg9+G0D58OfUSdVJriX7+0DXC/+onUEEfWuH8WsMn
9FoknApwxRkMuMUtJEBoUJb/s8p2WYKLHcUYYzjFvt/vns0GarFzqFf45YQMsCoU
DlgVp64co3+Bd80k69RGyVZbkAT9yWh/pSBv1MyjC3pmr0ECQQD3ItJQLZpJZThx
mio5R5D1yDGQ/JwrqQzDX1PSlJcdxbEqjwf5OHTz+CL1YM8q6pk98rYfQ7+dbUe7
lcJ1cMoJAkEAy8j2UkCL3w4KkEcbIFBz5oNjQQqRe0tmKRwV28KS/Ihq9EXbbG2m
a2CsAbNI92a4x+vJAi0y5wZb3oB5VU/UxQJBALfUWhaz5TlFJrgyEchruKNql5we
m1hKtii5xxMz3jiSLhfXLvouCajUYcSej1uACB8xZFFbRrQmbp5VZsGO9WkCQGvp
+s7p0WgIVn26udmt4QJT126s+wdwkSP59HVQn2fNkd3TVHQhyLwaEFxCJcSlh/qO
mP5nEwqWKnY0UIxl3wUCQEOagiqTNGZpBZylf+fSBm4M8Ei/MRyniRMDEnOHJk4L
s1Tp9k7eH/SlLYY2lwcYD6H3VOktEhlp7ZlcB9F+Qy4=
-----END RSA PRIVATE KEY-----`;

var public_party1 = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDEup3EwF0eDpkGRlZ+dc4rVNyr
IxCgEwjSQHNxN3oOynmGHAb6f+bBQ+GzqWTOFVeps3hhI7pZfITaPeCVuNKthvAJ
XxszpY3OXW2Dlwpig1A93tFE4sClMrOXi8ABaHPRyTCfnQfHBy5UOhCpuyFowTXk
IfD93pShgfcKHOHs7QIDAQAB
-----END PUBLIC KEY-----`;

var private_party2 = `-----BEGIN RSA PRIVATE KEY-----
MIICXgIBAAKBgQDVecSFVlab6Gd013UUsYQhW4VAiP3ItfjYm7YEVwdY2PRu/fEG
GnGuWTirxncL+1Qeg3AneakbzUokrI8SeHm8LbkBd3hlor2vbwVKr1jqr646NllX
QRlh5RyPpL/UGGNzr8STbxbVd++wpCaffZnWnJwsC8f9yThpoURlU7ovmwIDAQAB
AoGBAIA6YmdNUzzXPr2aZgOGFb4LwWDgaMDVPaKu9Yhp1knyF/FLrClkXQDDKx1T
W1LhJsglX4r2szO1/mFFHbOUllnvrM4Y+lTvGGjvPHC4IPsoV+tgBXIXeyMNy2Gy
vOgVoOipa64IqXym37M30vkftJotLYJ78gWHwaKTK7OzelMRAkEA6hhBOamsKWnF
sAJA40+hcsOwtTWjCIP9fqfZ5pJnEgQYF47lmbblP9BWGu72qTmMMv6K2Oz//RIK
w0+IGN1NNQJBAOlzlQKqcBwn8GhXzLQUtcqpxLIg14bVZFeWSDejTumEtaWhOvyr
YOOehvSA/rfAWtc7zLUvztIZYBJD8uqgs48CQQDKuABb3/wPzOH9vqXUcxP7n006
T12EtVBjSxXenu+U4Wi/leZsi77Q2SiHoGKIPyaSzm0M14gC7onVgtz3s0T1AkA/
pBy5L1GEu3aUW2sYpJSyfPl8PevDfCTwo61oTYLTsjP6xStZejbdlnff69KEsVGS
X2D8+9179SL1l8R/JfQNAkEA41FSfAkh6NeiPtIF2C5YNjbgwM7Gb1SXUbvz+4VZ
l9sh6FQjNlJbAtVME1i8RcIS4QIPCKOO8mBi1ETiC1fI/A==
-----END RSA PRIVATE KEY-----`;

var public_party2 = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDVecSFVlab6Gd013UUsYQhW4VA
iP3ItfjYm7YEVwdY2PRu/fEGGnGuWTirxncL+1Qeg3AneakbzUokrI8SeHm8LbkB
d3hlor2vbwVKr1jqr646NllXQRlh5RyPpL/UGGNzr8STbxbVd++wpCaffZnWnJws
C8f9yThpoURlU7ovmwIDAQAB
-----END PUBLIC KEY-----`;

const crypto = require('crypto');
const signer = crypto.createSign('SHA256');
const verifier = crypto.createVerify('SHA256');

//secure message
var msg = new Buffer('sample text');
console.log("Secure Message:",msg.toString());

console.log("\nParty 1\n");
console.log('Encrypt with Public Key of Party 2; Sign with Private Key of Party 1');
//encrypt
var enc = crypto.publicEncrypt(public_party2, msg);
console.log("Encrypted msg:", enc.toString());
//sign the message
signer.update(msg.toString());
var sig = signer.sign(private_party1, 'hex');
console.log("Signature to verify:", sig);

console.log("\nParty 2\n");
console.log('Decrypt with Private Key of Party 2; Verify with Public Key of Party 1');
//decrypt
var clr = crypto.privateDecrypt(private_party2, enc);
console.log("Decrypted msg:",clr.toString());
//verify the message
verifier.update(clr.toString());
console.log("Verify status: ",verifier.verify(public_party1, sig.toString(), 'hex'));


