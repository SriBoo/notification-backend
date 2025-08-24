const notifications = [];

export const Notification = {
  // Create a new notification
  create: async (data) => {
    if (!data.userId || !data.type || !data.message) {
      throw new Error("Missing required fields: userId, type, message");
    }

    const newNotif = {
      id: Date.now().toString(),
      userId: data.userId,
      type: data.type,
      message: data.message,
      status: "PENDING",
      timestamp: new Date(),
    };

    notifications.push(newNotif);
    return newNotif;
  },

  // Find notification by ID
  findById: async (id) => {
    if (!id) throw new Error("Notification ID is required");
    return notifications.find((n) => n.id === id);
  },

  // Find notifications by userId
  find: async (query) => {
    if (!query.userId) throw new Error("userId is required in query");
    return notifications.filter((n) => n.userId === query.userId);
  },
};