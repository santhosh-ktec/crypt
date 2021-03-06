# Sample with concept explained on how to secure data when transfering from one party to another party and validate the sender (portion of End-to-End Encryption)

##### The sample code provided is based on nodejs and uses the in-built libraries (without any use of third party libraries)

## The Concept
The basic idea is to encrypt the message from party 1 and sent to party 2 and the party 2 decrypts the messsage and verify they received message from the right party (ie. no man in middle attack is done)

For this we are going to choose RSA Key pairs ([asymmetric Key Cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography)) to be generated by both parties for their identity.
Refer [OpenSSL](https://www.openssl.org/docs/manmaster/man1/rsa.html) for how to get RSA key pairs.

#### Each Party will own their Pubic and Private Key pairs. 
As the name suggests Public key is the key indented to be shared for communication and the private key is to be kept secret with themselves.

#### Both parties shares their public keys to each other
Party two share their public key to Party one and Party one will share their public key to Party two (for this sample we are not going to consider how they communicate it securely, we can consider this for now as done offline)

#### Party 1 encrypts the secured message with Public key of Party 2
```
var msg = new Buffer('sample text');
var enc = crypto.publicEncrypt(public_party2, msg);
```
#### Party 1 signs the secured message with their Private key and get a signature
```
var signer = crypto.createSign('SHA256');
signer.update(msg.toString());
var sig = signer.sign(private_party1, 'hex');
```

#### Party 1 can transfer the encrypted message and signature
We don't care how we do it for now. Lets consider Party 2 receives it

#### Party 2 decrypts the message using their Private key
```
var clr = crypto.privateDecrypt(private_party2, enc);
```
Party 2 will get the clear text on decrypt. But still we aren't safe since we are not aware whether the Party 1 is sending the message. Since some man in middle who has Party 2's public key can still encrypt and send message by acting as Party 1.

#### Party 2 verifies the message using the Public key of Party 1 and the signature
```
 var verifier = crypto.createVerify('SHA256');
 verifier.update(clr.toString());
 var result = verifier.verify(public_party1, sig.toString(), 'hex');
```
Here the result will be true if Party 1 is the sender, since Party 1 alone owns their private key and the signature will be valid only for Party 1's public key pair.

##### Note
All the security concept expained above are considered secure until they don't share their private key. In any case the private key is stolen or predicted, the security can be compromised. So never ever share private keys and keep it more secured. 

The sample code is for demonstration purpose only feel free to use it at your own risk.
