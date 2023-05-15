const crypto = require('crypto');

function encrypt(plaintext, key, iv) {
    const keyBuffer = Buffer.from(key, 'utf-8');
    const ivBuffer = Buffer.from(iv, 'utf-8');

    const cipher = crypto.createCipheriv('aes-256-cbc', keyBuffer, ivBuffer);
    let encrypted = cipher.update(plaintext, 'utf-8', 'base64');
    encrypted += cipher.final('base64');

    return encrypted;
}

function decrypt(ciphertext, key, iv) {
    const keyBuffer = Buffer.from(key, 'utf-8');
    const ivBuffer = Buffer.from(iv, 'utf-8');

    const decipher = crypto.createDecipheriv('aes-256-cbc', keyBuffer, ivBuffer);
    let decrypted = decipher.update(ciphertext, 'base64', 'utf-8');
    decrypted += decipher.final('utf-8');

    return decrypted;
}

const plaintext = 'Hello World!';
const key = 'XzBqfR4cCifrgNZ6jV0A5LYUEMvb8lxK'; // 32 bytes key for AES-256
const iv = '3ad77bb40d7a3660'; // 16 bytes IV for AES-CBC

const ciphertext = encrypt(plaintext, key, iv);
console.log('Ciphertext: ',ciphertext);

const decryptedText = decrypt(ciphertext, key, iv);
console.log('Decrypted Text: ', decryptedText);