const crypto = require("crypto");

class TextServices {
  constructor() {
    this.key = Buffer.from("12345678901234567890123456789012"); // 256-bit
    this.iv = Buffer.from("1234567890123456"); // 128-bit
  }

  encrypt(text) {
    const cipher = crypto.createCipheriv("aes-256-cbc", this.key, this.iv);
    let encrypted = cipher.update(text, "utf8", "base64");
    encrypted += cipher.final("base64");

    return {encrypted};
  }
  decrypt(text_encrypted) {
    const decipher = crypto.createDecipheriv("aes-256-cbc", this.key, this.iv);
    let decrypted = decipher.update(text_encrypted, "base64", "utf8");
    decrypted += decipher.final("utf8");

    return {decrypted};
  }
}

module.exports = TextServices;
