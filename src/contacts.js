// 联系人管理器
class ContactManager {
  constructor() {
    this.contacts = [];
  }

  // 添加联系人
  add(name, phone, email) {
    const contact = {
      id: Date.now(),
      name,
      phone,
      email,
    };
    this.contacts.push(contact);
    return contact;
  }

  // 查看所有联系人
  listAll() {
    return this.contacts;
  }

  // 删除联系人
  remove(id) {
    const index = this.contacts.findIndex((c) => c.id === id);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = ContactManager;
