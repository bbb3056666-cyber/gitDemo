const ContactManager = require("./contacts");
const utils = require("./utils");

const manager = new ContactManager();

// 添加示例联系人
manager.add("张三", "13800138000", "zhangsan@example.com");
manager.add("李四", "13900139000", "lisi@example.com");

// 打印所有联系人
console.log("=== 联系人列表 ===");
manager.listAll().forEach((c) => {
  console.log(utils.formatContact(c));
});
