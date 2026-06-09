// 工具函数
const utils = {
  // 验证手机号（简单校验）
  isValidPhone(phone) {
    return /^1[3-9]\d{9}$/.test(phone);
  },

  // 验证邮箱
  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },

  // 格式化输出
  formatContact(contact) {
    return `[${contact.id}] ${contact.name} | ${contact.phone} | ${contact.email}`;
  },
};

module.exports = utils;
