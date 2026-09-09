const isOnline = true;
const isFriend = true;
const isDnd = false;
const canOpenChat = isOnline && isFriend && !isDnd;
const shouldNotify = !isOnline || isDnd;
console.log(canOpenChat);
console.log(shouldNotify);
